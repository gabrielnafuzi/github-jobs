import React from 'react';

import {
  Container,
  CheckBoxBlock,
  LocationBlock,
  InputLocationBlock,
  PlanetIcon,
} from './styles';

const Options = () => {
  const CheckBox = ({ name, label }) => (
    <CheckBoxBlock>
      <label htmlFor={name}>{label}</label>
      <input id={name} type="checkbox" />
    </CheckBoxBlock>
  );

  return (
    <Container>
      <CheckBox name="fulltime" label="Full time" />

      <LocationBlock>
        <h1>Location</h1>

        <InputLocationBlock>
          <PlanetIcon />
          <input type="text" placeholder="City, state, zip code or country" />
        </InputLocationBlock>
      </LocationBlock>

      <CheckBox name="london" label="London" />
      <CheckBox name="amsterdam" label="Amsterdam" />
      <CheckBox name="newyork" label="New York" />
      <CheckBox name="berlin" label="Berlin" />
    </Container>
  );
};

export default Options;
