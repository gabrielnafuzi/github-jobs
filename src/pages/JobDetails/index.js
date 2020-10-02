import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import getCreatedDate from '../../utils/getCreatedDate';

import {
  Container,
  Main,
  LeftSide,
  ArrowBack,
  RightSide,
  HowToApplyBlock,
  JobHeader,
  JobTitleBlock,
  CreatedAt,
  ClockIcon,
  JobInfo,
  CompanyLogoBlock,
  InfoBlock,
  LocationBlock,
  PlanetIcon,
  JobDescription,
} from './styles';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function fetchData() {
      setLoading(true);

      try {
        const response = await fetch(
          `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${id}.json`
        );

        const json = await response.json();

        setJob(json);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  return (
    <Container>
      {loading && <Loading />}
      <Main>
        <LeftSide>
          <Link to="/">
            <ArrowBack />
            <span>Back to search</span>
          </Link>

          <HowToApplyBlock>
            <h1>How to apply</h1>

            {job && <p dangerouslySetInnerHTML={{ __html: job.how_to_apply }}></p>}
          </HowToApplyBlock>
        </LeftSide>

        {job && (
          <RightSide>
            <JobHeader>
              <JobTitleBlock>
                <h1>{job.title}</h1>
                {job.type && <span>{job.type}</span>}
              </JobTitleBlock>

              <CreatedAt>
                <ClockIcon />
                <span>{getCreatedDate(job.created_at)}</span>
              </CreatedAt>

              <JobInfo>
                <CompanyLogoBlock>
                  {job.company_logo ? (
                    <img src={job.company_logo} alt={job.company} />
                  ) : (
                    <p>not found</p>
                  )}
                </CompanyLogoBlock>

                <InfoBlock>
                  <Link to={job.company_url} target="_blank">
                    {job.company}
                  </Link>

                  <LocationBlock>
                    <PlanetIcon />
                    <span>{job.location}</span>
                  </LocationBlock>
                </InfoBlock>
              </JobInfo>
            </JobHeader>

            <JobDescription
              dangerouslySetInnerHTML={{ __html: job.description }}
            ></JobDescription>
          </RightSide>
        )}
      </Main>
    </Container>
  );
};

export default JobDetails;
