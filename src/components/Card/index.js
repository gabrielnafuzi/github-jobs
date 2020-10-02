import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  ImageBlock,
  JobInfos,
  List,
  PlanetIcon,
  ClockIcon,
} from './styles';

const Card = ({ id, company, companyLogo, title, type, location, createdAt }) => {
  return (
    <Container>
      <ImageBlock>
        {companyLogo ? <img src={companyLogo} alt={company} /> : <p>not found</p>}
      </ImageBlock>

      <JobInfos>
        <div className="wrapper">
          <h1>{company}</h1>
          <Link to={`/details/${id}`}>{title}</Link>
          {type && <span>{type}</span>}
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
