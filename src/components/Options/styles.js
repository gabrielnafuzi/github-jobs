import styled from 'styled-components';
import PublicIcon from '@material-ui/icons/Public';

export const Container = styled.div``;

export const CheckBoxBlock = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-end;

  margin-bottom: 0.95rem;

  input[type='checkbox'] {
    width: 18px;
    height: 18px;
    appearance: none;

    border: 1px solid var(--color-text-secondary);
    border-radius: 0.1rem;
    outline: none;

    cursor: pointer;

    &:checked {
      appearance: checkbox;
    }
  }

  label {
    color: var(--color-blue-dark);
    font-size: 0.7rem;
    font-family: Poppins;
    font-weight: 500;
    line-height: 1.05rem;
    margin-left: 0.6rem;
  }
`;

export const LocationBlock = styled.div`
  margin: 1.4rem 0;

  > h1 {
    font-size: 0.7rem;
    font-weight: 700;
    font-family: Poppins;
    line-height: 1.05rem;
    text-transform: uppercase;

    color: var(--color-text-secondary);

    margin-bottom: 0.7rem;
  }
`;

export const InputLocationBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: #fff;
  border: 1px solid var(--color-border);

  padding: 0.2rem 0 0.2rem 0.7rem;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 0.2rem;

  &:focus-within {
    border-color: var(--color-blue);

    svg {
      fill: var(--color-blue);
    }
  }

  input {
    width: 100%;
    padding: 0.8rem 0;

    color: var(--color-title);
    margin-left: 0.8rem;
    outline: none;

    &::placeholder {
      color: var(--color-text-secondary);
    }
  }

  svg {
    fill: var(--color-text-secondary);
    width: 15px;
    height: 15px;
    flex-shrink: 0;
  }
`;

export const PlanetIcon = styled(PublicIcon)``;
