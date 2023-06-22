import styled from '@emotion/styled';

const StyledCast = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  padding: 20px;
  border-radius: 10px;

  li {
    flex-basis: calc((100% - 80px) / 5);
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    border-radius: 10px;
    transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
    :hover {
      box-shadow: rgb(254 88 6 / 30%) 0px 0px 0px 3px;
    }

    img {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      display: block;

      object-fit: cover;
    }
    div {
      padding: 10px;
      text-align: center;
    }
  }
`;

export { StyledCast };
