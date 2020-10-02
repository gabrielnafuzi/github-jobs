import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Title } from './styles';

const Header = () => {
  return (
    <Container>
      <Title>
        <Link to="/">
          Github <span>Jobs</span>
        </Link>
      </Title>
    </Container>
  );
};

export default Header;
