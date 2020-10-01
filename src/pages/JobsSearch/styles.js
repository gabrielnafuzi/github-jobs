import styled from 'styled-components';

export const Container = styled.div``;

export const Main = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1200px;
  margin: 1.45rem auto;
  padding: 0 0.6rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LeftSide = styled.div`
  margin-bottom: 1.3rem;

  @media (min-width: 768px) {
    width: 30%;
    margin-right: 1.6rem;
  }
`;

export const RightSide = styled.div`
  @media (min-width: 768px) {
    width: 70%;
  }
`;

export const NoResults = styled.h1`
  text-align: center;
  font-size: 1.2rem;
  color: var(--color-title);
`;
