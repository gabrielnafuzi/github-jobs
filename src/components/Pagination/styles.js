import styled from 'styled-components';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;

  > div + div {
    margin-left: 0.6rem;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 36px;
  height: 36px;
  border: 1px solid var(--color-border);
  border-radius: 0.2rem;

  cursor: pointer;
  transition: 0.1s;

  svg {
    width: 16px;
    height: 16px;
    fill: var(--color-border);
  }

  span {
    color: var(--color-border);
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 0.7rem;
  }

  &:hover {
    border-color: var(--color-blue);

    svg {
      fill: var(--color-blue);
    }

    span {
      color: var(--color-blue);
    }
  }

  &.active {
    border-color: var(--color-blue);
    background: var(--color-blue);

    span {
      color: var(--color-white);
    }
  }

  &.ellipsis {
    border: none;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  &.disabled {
    cursor: not-allowed;
  }
`;

export const ArrowLeftIcon = styled(KeyboardArrowLeftIcon)``;

export const ArrowRightIcon = styled(KeyboardArrowRightIcon)``;

export const Ellipsis = styled(MoreHorizIcon)``;
