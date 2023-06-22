import styled from '@emotion/styled';

const StyledReviews = styled.ul`
  li {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 10px;
    transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
    :hover {
      box-shadow: rgb(254 88 6 / 30%) 0px 0px 0px 3px;
    }
  }
`;
export { StyledReviews };
