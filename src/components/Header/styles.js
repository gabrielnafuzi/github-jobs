import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.6rem 0 1.6rem 0.6rem;
`;

export const Title = styled.h1`
  a {
    font-size: 1.2rem;
    font-weight: 700;
    font-family: Poppins;
    line-height: 1.8rem;
    text-decoration: none;
    color: var(--color-title);
  }

  span {
    font-weight: 300;
  }
`;
