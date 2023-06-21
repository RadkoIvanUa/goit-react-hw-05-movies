import styled from '@emotion/styled';

const StyledMoviesList = styled.ul`
  max-width: 800px;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  margin: 0 auto;

  li {
    a {
      display: block;
      text-decoration: none;
      font-size: 20px;
      padding: 10px;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
      border-radius: 10px;

      color: inherit;
      transition: color 300ms cubic-bezier(0.23, 1, 0.32, 1);
      :visited {
        color: inherit;
      }
      :hover {
        color: orange;
        transform: scale(1.1);
        background-color: white;
      }
    }
  }
`;

export { StyledMoviesList };
