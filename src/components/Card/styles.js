import styled from 'styled-components';
import PublicIcon from '@material-ui/icons/Public';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0.6rem;

  margin-bottom: 1.15rem;

  background: var(--color-white);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 0.2rem;

  @media (min-width: 768px) {
    margin-bottom: 1.6rem;
  }
`;

export const ImageBlock = styled.div`
  width: 90px;
  height: 90px;

  img {
    object-fit: cover;
    height: 90px;
    border-radius: 0.2rem;
  }
`;

export const JobInfos = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 0.8rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  .wrapper {
    h1 {
      font-size: 0.6rem;
      font-weight: 700;
      line-height: 0.7rem;
      color: var(--color-blue-dark);
    }

    p {
      margin-top: 0.4rem;
      margin-bottom: 0.7rem;

      font-size: 0.8rem;
      font-weight: 400;
      line-height: 0.9375rem;
      color: var(--color-blue-dark);
    }

    span {
      max-width: max-content;
      font-size: 0.6rem;
      font-weight: 700;
      color: var(--color-blue-dark);
      line-height: 0.7rem;
      padding: 0.3rem 0.4rem;
      border: 1px solid var(--color-blue-dark);
      border-radius: 0.2rem;
    }
  }
`;

export const List = styled.ul`
  margin-top: 1.3rem;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    align-self: flex-end;
    margin-left: auto;

    li + li {
      margin-left: 1.425rem;
    }
  }

  li {
    display: flex;
    align-items: center;
    justify-self: flex-start;
    margin-right: auto;

    svg {
      fill: var(--color-text-secondary);
      margin-right: 0.375rem;
      width: 15px;
      height: 15px;
      flex-shrink: 0;
    }

    span {
      font-size: 0.6rem;
      font-weight: 500;
      line-height: 0.7rem;
      color: var(--color-text-secondary);
    }
  }
`;

export const PlanetIcon = styled(PublicIcon)``;

export const ClockIcon = styled(AccessTimeIcon)``;
