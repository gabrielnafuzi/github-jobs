import React from 'react';

import Search from '../../components/Search';
import Options from '../../components/Options';
import Pagination from '../../components/Pagination';

import Card from '../../components/Card';
import { Container, Main, LeftSide, RightSide } from './styles';

const JobsSearch = () => {
  return (
    <Container>
      <Search />

      <Main>
        <LeftSide>
          <Options />
        </LeftSide>

        <RightSide>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Pagination />
        </RightSide>
      </Main>
    </Container>
  );
};

export default JobsSearch;
