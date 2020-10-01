import React from 'react';

import {
  Container,
  CheckBoxBlock,
  LocationBlock,
  InputLocationBlock,
  PlanetIcon,
} from './styles';

const Options = ({
  fullTime,
  setFullTime,
  locationInput,
  setLocationInput,
  locationOptions,
  setLocationOptions,
}) => {
  const locations = [
    {
      name: 'london',
      label: 'London',
    },
    {
      name: 'amsterdam',
      label: 'Amsterdam',
    },
    {
      name: 'new+york',
      label: 'New York',
    },
    {
      name: 'berlin',
      label: 'Berlin',
    },
  ];

  async function handleChange({ target }) {
    if (target.type === 'text') {
      setLocationInput(target.value);
      setLocationOptions('');
    }

    if (target.type === 'checkbox') {
      if (target.value === locationOptions) {
        setLocationOptions('');
      } else {
        setLocationOptions(target.value);
        setLocationInput('');
      }
    }
  }

  return (
    <Container>
      <CheckBoxBlock>
        <label htmlFor="fulltime">Full Time Only</label>
        <input
          id="fulltime"
          type="checkbox"
          value={fullTime}
          onChange={({ target }) => setFullTime(target.checked)}
        />
      </CheckBoxBlock>

      <LocationBlock>
        <h1>Location</h1>

        <InputLocationBlock>
          <PlanetIcon />
          <input
            type="text"
            placeholder="City, state, zip code or country"
            value={locationInput}
            onChange={handleChange}
          />
        </InputLocationBlock>
      </LocationBlock>

      {locations.map(locationItem => (
        <CheckBoxBlock key={locationItem.name}>
          <label htmlFor={locationItem.name}>{locationItem.label}</label>
          <input
            id={locationItem.name}
            type="checkbox"
            value={locationItem.name}
            checked={locationItem.name === locationOptions}
            onChange={handleChange}
          />
        </CheckBoxBlock>
      ))}
    </Container>
  );
};

export default Options;
