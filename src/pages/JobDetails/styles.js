import styled from 'styled-components';
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Public from '@material-ui/icons/Public';

export const Container = styled.div``;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 0.6rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 1.8rem;

  @media (min-width: 768px) {
    width: 20%;
    margin-right: 3.85rem;
  }

  > a {
    text-decoration: none;
    display: flex;
    align-items: center;

    svg {
      transform: matrix(-1, 0, 0, 1, 0, 0);
      fill: var(--color-blue);
      margin-right: 0.55rem;
      flex-shrink: 0;
    }

    span {
      font-size: 0.7rem;
      font-weight: 500;
      font-family: 500;
      line-height: 1.05rem;
      color: var(--color-blue);
    }

    &:hover svg {
      animation: pointing 1s ease-in-out infinite;
    }

    @keyframes pointing {
      0%,
      100% {
        transform: matrix(-1, 0, 0, 1, 0, 0), translate(0, 0);
      }

      50% {
        transform: matrix(-1, 0, 0, 1, 0, 0) translate(8px, 0);
      }
    }
  }
`;

export const HowToApplyBlock = styled.div`
  margin-top: 1.8rem;

  h1 {
    font-family: Poppins;
    font-size: 0.7rem;
    font-weight: 700;
    line-height: 1.05rem;
    text-transform: uppercase;

    color: var(--color-text-secondary);
  }

  p {
    margin-top: 0.8rem;

    font-family: Poppins;
    font-size: 0.7rem;
    font-weight: 500;

    color: var(--color-blue-dark);

    a {
      color: var(--color-blue);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const RightSide = styled.div`
  @media (min-width: 768px) {
    width: 80%;
  }
`;

export const JobHeader = styled.header`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.6rem;
`;

export const JobTitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.6rem;

  h1 {
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 0.97rem;

    color: var(--color-blue-dark);

    margin-bottom: 0.5rem;
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

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;

    h1 {
      margin-right: 0.85rem;
      margin-bottom: 0;
    }
  }
`;

export const CreatedAt = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 18px;
    height: 18px;
    margin-right: 0.425rem;
    fill: var(--color-text-secondary);
    flex-shrink: 0;
  }

  span {
    font-size: 0.7rem;
    font-weight: 500;
    line-height: 0.7rem;
    color: var(--color-text-secondary);
  }
`;

export const JobInfo = styled.div`
  margin-top: 1.85rem;
  display: flex;
`;

export const CompanyLogoBlock = styled.div`
  width: 42px;
  height: 42px;
  margin-right: 0.7rem;

  img {
    object-fit: cover;
    border-radius: 0.2rem;
    height: 100%;
  }
`;

export const InfoBlock = styled.div`
  h1 {
    font-size: 0.8rem;
    font-weight: 700;
    line-height: 1.05rem;
    color: var(--color-blue-dark);
  }
`;

export const LocationBlock = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.36rem;

  svg {
    width: 15px;
    height: 15px;
    fill: var(--color-text-secondary);
    flex-shrink: 0;

    margin-right: 0.375rem;
  }

  span {
    font-size: 0.6rem;
    font-weight: 500;
    line-height: 0.7rem;
    color: var(--color-text-secondary);
  }
`;

export const JobDescription = styled.div`
  p {
    color: var(--color-blue-dark);
    margin-bottom: 1.2rem;
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 1.2rem;
  }
`;

export const PlanetIcon = styled(Public)``;

export const ClockIcon = styled(AccessTimeIcon)``;

export const ArrowBack = styled(TrendingFlatIcon)``;
