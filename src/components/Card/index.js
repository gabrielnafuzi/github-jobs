import React from 'react';

import {
  Container,
  ImageBlock,
  JobInfos,
  List,
  PlanetIcon,
  ClockIcon,
} from './styles';

const Card = ({ company, companyLogo, title, type, location, createdAt }) => {
  return (
    <Container>
      <ImageBlock>
        <img src={companyLogo} alt={company} />
      </ImageBlock>

      <JobInfos>
        <div className="wrapper">
          <h1>{company}</h1>
          <p>{title}</p>
          {type === 'Full Time' && <span>Full time</span>}
        </div>

        <List>
          <li>
            <PlanetIcon />
            <span>{location}</span>
          </li>

          <li>
            <ClockIcon />
            <span>{createdAt}</span>
          </li>
        </List>
      </JobInfos>
    </Container>
  );
};

export default Card;
