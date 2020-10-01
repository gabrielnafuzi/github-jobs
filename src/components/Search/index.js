import React from 'react';

import { Container, SearchForm, SuitcaseIcon } from './styles';

const Search = ({ handleSubmit, description, setDescription }) => {
  return (
    <Container>
      <div className="wrapper">
        <SearchForm onSubmit={handleSubmit}>
          <div>
            <SuitcaseIcon />
            <input
              value={description}
              onChange={({ target }) => setDescription(target.value)}
              name="description"
              id="description"
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
