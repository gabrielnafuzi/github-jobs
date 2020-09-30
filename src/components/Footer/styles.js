import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.35rem 0;

  p,
  a {
    font-family: Montserrat;
    font-weight: 600;
    font-size: 0.7rem;
    line-height: 0.85rem;

    color: var(--color-text-secondary);
  }

  a {
    text-decoration: none;
    transition: 0.1s;

    &:hover {
      text-decoration: underline;
      color: var(--color-blue);
    }
  }
`;
