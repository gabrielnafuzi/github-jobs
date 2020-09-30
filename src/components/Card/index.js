import React from 'react';

import {
  Container,
  ImageBlock,
  JobInfos,
  List,
  PlanetIcon,
  ClockIcon,
} from './styles';

const Card = () => {
  return (
    <Container>
      <ImageBlock>
        <img
          src="https://kasisto.com/wp-content/themes/kasisto/img/client-logo.png"
          alt="Kasisto"
        />
      </ImageBlock>

      <JobInfos>
        <div className="wrapper">
          <h1>Kasisto</h1>
          <p>Front-End Software Engineer</p>
          <span>Full time</span>
        </div>

        <List>
          <li>
            <PlanetIcon />
            <span>New York</span>
          </li>

          <li>
            <ClockIcon />
            <span>5 days ago</span>
          </li>
        </List>
      </JobInfos>
    </Container>
  );
};

export default Card;
