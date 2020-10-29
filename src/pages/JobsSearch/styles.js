import styled from 'styled-components';
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  MoreHoriz,
} from '@material-ui/icons';

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
  .pagination {
    display: flex;
    width: 100%;
    justify-content: center;

    li {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 32px;
      height: 32px;
      border: 1px solid var(--color-border);
      border-radius: 0.2rem;

      cursor: pointer;
      transition: 0.1s;

      & + li {
        margin-left: 0.3rem;
      }

      svg {
        width: 16px;
        height: 16px;
        fill: var(--color-border);
      }

      a {
        color: var(--color-border);
        font-weight: 400;
        font-size: 0.8rem;
        line-height: 0.7rem;

        padding: 0.425rem;

        outline: none;
      }

      &:hover {
        border-color: var(--color-blue);

        svg {
          fill: var(--color-blue);
        }

        a {
          color: var(--color-blue);
        }
      }

      &.active {
        border-color: var(--color-blue);
        background: var(--color-blue);

        a {
          color: var(--color-white);
        }
      }

      &.break-me {
        border: none;

        a {
          padding: 0;
        }

        svg {
          width: 20px;
          height: 20px;
        }
      }

      &.disabled {
        cursor: not-allowed;
      }
    }
  }

  @media (min-width: 450px) {
    .pagination {
      li {
        width: 36px;
        height: 36px;

        & + li {
          margin-left: 0.6rem;
        }
      }
    }
  }

  @media (min-width: 768px) {
    width: 70%;

    .pagination {
      justify-content: flex-end;

      li {
        width: 36px;
        height: 36px;

        & + li {
          margin-left: 0.6rem;
        }
      }
    }
  }
`;

export const NoResults = styled.h1`
  text-align: center;
  font-size: 1.2rem;
  color: var(--color-title);
`;

export const ArrowLeftIcon = styled(KeyboardArrowLeft)``;

export const ArrowRightIcon = styled(KeyboardArrowRight)``;

export const Ellipsis = styled(MoreHoriz)``;
