import React from 'react';
import ReactPaginate from 'react-paginate';

import Search from '../../components/Search';
import Options from '../../components/Options';
import Card from '../../components/Card';
import Loading from '../../components/Loading';

import createSearchUrl from '../../utils/createSearchUrl';
import getCreatedDate from '../../utils/getCreatedDate';

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  NoResults,
  ArrowLeftIcon,
  ArrowRightIcon,
  Ellipsis,
} from './styles';

const JobsSearch = () => {
  const [jobs, setJobs] = React.useState(null);
  const [description, setDescription] = React.useState('');
  const [fullTime, setFullTime] = React.useState(false);
  const [locationInput, setLocationInput] = React.useState('');
  const [locationOptions, setLocationOptions] = React.useState('');

  const [loading, setLoading] = React.useState(false);
  const [page, setPage] = React.useState(0);

  const itensPerPage = 5;

  async function handleSubmit(event) {
    if (event) {
      event.preventDefault();
    }

    setLoading(true);
    setPage(0);

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

  function handlePageChange({ selected }) {
    setPage(selected);
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
              .slice(itensPerPage * page, itensPerPage * (page + 1))
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
            <ReactPaginate
              previousLabel={<ArrowLeftIcon />}
              nextLabel={<ArrowRightIcon />}
              breakLabel={<Ellipsis />}
              breakClassName={'break-me'}
              pageCount={10}
              marginPagesDisplayed={2}
              pageRangeDisplayed={1}
              onPageChange={handlePageChange}
              containerClassName={'pagination'}
              activeClassName={'active'}
            />
          )}
        </RightSide>
      </Main>
    </Container>
  );
};

export default JobsSearch;
