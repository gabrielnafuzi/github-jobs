import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
`;

export const Loader = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border-top: 3px solid var(--color-white);
  border-right: 3px solid transparent;

  animation: loading 1s linear infinite;

  @keyframes loading {
    to {
      transform: rotate(360deg);
    }
  }
`;
