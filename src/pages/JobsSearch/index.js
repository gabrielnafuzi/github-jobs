import React from 'react';
import { formatDistanceToNow } from 'date-fns';

import Search from '../../components/Search';
import Options from '../../components/Options';
import Pagination from '../../components/Pagination';

import Card from '../../components/Card';
import createSearchUrl from '../../utils/createSearchUrl';

import { Container, Main, LeftSide, RightSide, NoResults } from './styles';
import Loading from '../../components/Loading';

const JobsSearch = () => {
  const [jobs, setJobs] = React.useState(null);
  const [description, setDescription] = React.useState('');
  const [fullTime, setFullTime] = React.useState(false);
  const [locationInput, setLocationInput] = React.useState('');
  const [locationOptions, setLocationOptions] = React.useState('');

  const [loading, setLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);

  async function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);
    setPage(1);

    try {
      const location = locationInput ? locationInput : locationOptions;

      const url = createSearchUrl(description, fullTime, location, page);

      const response = await fetch(url);
      const json = await response.json();

      setJobs(json);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  function getCreatedDate(date) {
    const year = new Date(date).getFullYear();
    const month = new Date(date).getMonth();
    const day = new Date(date).getDate();
    const hours = new Date(date).getHours();
    const minutes = new Date(date).getMinutes();
    const seconds = new Date(date).getSeconds();

    return formatDistanceToNow(
      new Date(year, month, day, hours, minutes, seconds),
      {
        includeSeconds: true,
        addSuffix: true,
      }
    );
  }

  return (
    <Container>
      <Search
        handleSubmit={handleSubmit}
        description={description}
        setDescription={setDescription}
      />

      <Main>
        <LeftSide>
          <Options
            fullTime={fullTime}
            setFullTime={setFullTime}
            locationInput={locationInput}
            setLocationInput={setLocationInput}
            locationOptions={locationOptions}
            setLocationOptions={setLocationOptions}
          />
        </LeftSide>

        <RightSide>
          {loading && <Loading />}
          {!jobs ||
            (jobs.length === 0 && (
              <NoResults>
                No results. Please modify your search and try again.
              </NoResults>
            ))}
          {jobs &&
            jobs
              .slice(5 * (page - 1), 5 * page)
              .map(job => (
                <Card
                  key={job.id}
                  company={job.company}
                  companyLogo={job.company_logo}
                  title={job.title}
                  type={job.type}
                  location={job.location}
                  createdAt={getCreatedDate(job.created_at)}
                />
              ))}
          {jobs && jobs.length > 0 && (
            <Pagination page={page} setPage={setPage} totalJobs={jobs.length} />
          )}
        </RightSide>
      </Main>
    </Container>
  );
};

export default JobsSearch;
