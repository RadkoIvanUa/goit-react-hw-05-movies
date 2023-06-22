import styled from '@emotion/styled';

const StyledSearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  input {
    outline: none;
    border: none;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    border-radius: 10px;
    padding: 10px;
    font-size: 20px;
  }
  button {
    margin-left: 10px;
    border-radius: 10px;
    border: none;
    padding: 10px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
    background-color: white;

    font-size: 20px;
    :hover {
      color: orange;
      transform: scale(1.1);
      cursor: pointer;
    }
  }
`;

export { StyledSearchForm };
