import React from 'react';

import { Container, Box, ArrowLeftIcon, ArrowRightIcon, Ellipsis } from './styles';

const Pagination = () => {
  return (
    <Container>
      <Box>
        <ArrowLeftIcon />
      </Box>

      <Box className="number">
        <span>1</span>
      </Box>

      <Box className="number active">
        <span>2</span>
      </Box>

      <Box className="number">
        <span>3</span>
      </Box>

      <Box className="ellipsis">
        <Ellipsis />
      </Box>

      <Box>
        <ArrowRightIcon />
      </Box>
    </Container>
  );
};

export default Pagination;
