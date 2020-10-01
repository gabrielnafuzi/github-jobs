import React from 'react';

import { Container, Box, ArrowLeftIcon, ArrowRightIcon, Ellipsis } from './styles';

const Pagination = ({ page, setPage, totalJobs }) => {
  const paginationItens = Array.from({ length: Math.ceil(totalJobs / 5) }).map(
    (_, idx) => idx + 1
  );

  return (
    <Container>
      <Box
        className={`${page === 1 ? 'disabled' : ''}`}
        onClick={() => page > 1 && setPage(page - 1)}
      >
        <ArrowLeftIcon />
      </Box>
      {paginationItens.map(item => (
        <Box
          key={item}
          className={`number ${page === item && 'active'}`}
          onClick={() => setPage(item)}
        >
          <span>{item}</span>
        </Box>
      ))}
      <Box
        className={`${page === paginationItens.length && 'disabled'}`}
        onClick={() => page <= paginationItens.length - 1 && setPage(page + 1)}
      >
        <ArrowRightIcon />
      </Box>
    </Container>
  );
};

export default Pagination;
