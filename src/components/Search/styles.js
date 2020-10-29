import styled from 'styled-components';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import backgroundImg from '../../assets/images/backgroundImg.png';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 0.6rem;

  .wrapper {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;

    padding: 3.45rem 0.9rem;
    border-radius: 0.4rem;
  }
`;

export const SearchForm = styled.form`
  width: 100%;
  max-width: 790px;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-around;
  background: var(--color-white);

  padding: 0 0.25rem 0 0.875rem;
  border-radius: 0.2rem;

  &:focus-within {
    svg {
      fill: var(--color-blue);
    }
  }

  > div {
    display: flex;
    align-items: center;
    width: 100%;
  }

  svg {
    fill: var(--color-text-secondary);
    width: 15px;
    height: 14.25px;
    flex-shrink: 0;
  }

  input {
    flex: 1;

    font-size: 0.6rem;
    font-weight: 400;
    line-height: 0.7rem;
    text-overflow: ellipsis;
    padding: 1.1rem;
    outline: 0;

    color: var(--color-title);

    &::placeholder {
      color: var(--color-text-secondary);
    }
  }

  button {
    font-size: 0.8rem;
    line-height: 0.9375rem;

    color: var(--color-white);
    padding: 0.7rem 1.35rem;
    background: var(--color-blue);
    border-radius: 0.2rem;
    outline: none;

    opacity: 0.8;
    transition: opacity 0.3s ease;

    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  @media (max-width: 26.25rem) {
    flex-direction: column;
    background: none;

    > div {
      background: var(--color-white);

      border-radius: 0.2rem;
      padding: 0 0.4rem;
    }

    button {
      margin-top: 1rem;
      padding: 0.8rem 2.35rem;
    }
  }
`;

export const SuitcaseIcon = styled(WorkOutlineIcon)``;
