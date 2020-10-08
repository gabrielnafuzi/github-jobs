import React from 'react';

import Search from '../../components/Search';
import Options from '../../components/Options';
import Pagination from '../../components/Pagination';

import Card from '../../components/Card';
import createSearchUrl from '../../utils/createSearchUrl';

import { Container, Main, LeftSide, RightSide, NoResults } from './styles';
import Loading from '../../components/Loading';
import getCreatedDate from '../../utils/getCreatedDate';

const JobsSearch = () => {
  const [jobs, setJobs] = React.useState(null);
  const [description, setDescription] = React.useState('');
  const [fullTime, setFullTime] = React.useState(false);
  const [locationInput, setLocationInput] = React.useState('');
  const [locationOptions, setLocationOptions] = React.useState('');

  const [loading, setLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    if (window.localStorage.getItem('params')) {
      const params = JSON.parse(window.localStorage.getItem('params'));
      const localPage = JSON.parse(window.localStorage.getItem('page'));

      async function fetchData() {
        setLoading(true);

        try {
          const url = createSearchUrl(
            params.description,
            params.fulltime,
            params.location
          );

          const response = await fetch(url);
          const json = await response.json();

          setJobs(json);
          setPage(localPage);
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      }

      fetchData();
    }
  }, []);

  async function handleSubmit(event) {
    if (event) {
      event.preventDefault();
    }

    setLoading(true);
    setPage(1);

    try {
      const location = locationInput ? locationInput : locationOptions;

      const url = createSearchUrl(description, fullTime, location, page);

      const response = await fetch(url);
      const json = await response.json();

      window.localStorage.setItem(
        'params',
        JSON.stringify({
          location,
          description,
          fullTime,
        })
      );

      window.localStorage.setItem('page', page);

      setJobs(json);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      {loading && <Loading />}

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
          {!jobs ||
            (!jobs.length && (
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
                  id={job.id}
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
