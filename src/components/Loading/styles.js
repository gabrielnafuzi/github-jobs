import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 4rem;
  
`;

export const Loader = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border-top: 3px solid var(--color-border);
  border-right: 3px solid transparent;

  animation: loading 1s linear infinite;

  @keyframes loading {
    to {
      transform: rotate(360deg);
    }
  }
`;
