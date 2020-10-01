import React from 'react';

import Search from '../../components/Search';
import Options from '../../components/Options';
import Pagination from '../../components/Pagination';

import Card from '../../components/Card';
import createSearchUrl from '../../utils/createSearchUrl';

import { Container, Main, LeftSide, RightSide } from './styles';

const JobsSearch = () => {
  const [data, setData] = React.useState(null);
  const [description, setDescription] = React.useState('');
  const [fulltime, setFulltime] = React.useState(false);
  const [locationInput, setLocationInput] = React.useState('');
  const [locationsOptions, setLocationsOptions] = React.useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    const url = createSearchUrl(
      description,
      fulltime,
      locationInput,
      locationsOptions
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
            fulltime={fulltime}
            setFulltime={setFulltime}
            locationInput={locationInput}
            setLocationInput={setLocationInput}
            locationsOptions={locationsOptions}
            setLocationsOptions={setLocationsOptions}
          />
        </LeftSide>

        <RightSide>
          <Card
            company="Shell Business Operations Chennai"
            companyLogo="https://cdn.iconscout.com/icon/free/png-256/shell-9-282410.png"
            title="Data Scientist"
            type="Full Time"
            location="India"
            createdAt="5 days ago"
          />

          <Card
            company="Shell Business Operations Chennai"
            companyLogo="https://cdn.iconscout.com/icon/free/png-256/shell-9-282410.png"
            title="Data Scientist"
            type="Full Time"
            location="India"
            createdAt="5 days ago"
          />

          <Card
            company="Shell Business Operations Chennai"
            companyLogo="https://cdn.iconscout.com/icon/free/png-256/shell-9-282410.png"
            title="Data Scientist"
            type="Full Time"
            location="India"
            createdAt="5 days ago"
          />

          <Card
            company="Shell Business Operations Chennai"
            companyLogo="https://cdn.iconscout.com/icon/free/png-256/shell-9-282410.png"
            title="Data Scientist"
            type="Full Time"
            location="India"
            createdAt="5 days ago"
          />

          <Pagination />
        </RightSide>
      </Main>
    </Container>
  );
};

export default JobsSearch;
