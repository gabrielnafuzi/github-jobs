import React from 'react';

import {
  Container,
  CheckBoxBlock,
  LocationBlock,
  InputLocationBlock,
  PlanetIcon,
} from './styles';

const Options = ({
  fulltime,
  setFulltime,
  locationInput,
  setLocationInput,
  locationsOptions,
  setLocationsOptions,
}) => {
  function handleLocationsChange({ target }) {
    if (target.checked) {
      setLocationsOptions([...locationsOptions, target.value]);
    } else {
      setLocationsOptions(
        locationsOptions.filter(location => location !== target.value)
      );
    }
  }

  function handleFulltimeChange({ target }) {
    setFulltime(target.checked);
  }

  function checkLocation(location) {
    return locationsOptions.includes(location);
  }

  const CheckBox = ({ name, label, ...rest }) => (
    <CheckBoxBlock>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type="checkbox"
        value={name}
        onChange={
          name === 'fulltime' ? handleFulltimeChange : handleLocationsChange
        }
        {...rest}
      />
    </CheckBoxBlock>
  );

  return (
    <Container>
      <CheckBox name="fulltime" label="Full time" checked={fulltime} />

      <LocationBlock>
        <h1>Location</h1>

        <InputLocationBlock>
          <PlanetIcon />
          <input
            type="text"
            placeholder="City, state, zip code or country"
            value={locationInput}
            onChange={({ target }) => setLocationInput(target.value)}
          />
        </InputLocationBlock>
      </LocationBlock>

      <CheckBox name="london" label="London" checked={checkLocation('london')} />

      <CheckBox
        name="amsterdam"
        label="Amsterdam"
        checked={checkLocation('amsterdam')}
      />

      <CheckBox
        name="new%20york"
        label="New York"
        checked={checkLocation('new%20york')}
      />

      <CheckBox name="berlin" label="Berlin" checked={checkLocation('berlin')} />
    </Container>
  );
};

export default Options;
