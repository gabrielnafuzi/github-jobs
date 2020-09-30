import React from 'react';

import { Container, SearchForm, SuitcaseIcon } from './styles';

const Search = () => {
  return (
    <Container>
      <div className="wrapper">
        <SearchForm>
          <div>
            <SuitcaseIcon />
            <input
              type="text"
              placeholder="Title, companies, expertise or benefits"
            />
          </div>
          <button type="submit">Search</button>
        </SearchForm>
      </div>
    </Container>
  );
};

export default Search;
