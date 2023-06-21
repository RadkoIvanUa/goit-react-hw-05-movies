import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 16px;
  padding-top: 100px;
`;

const Header = styled.header`
  width: 100%;
  padding: 20px 0;
  background-color: white;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 1000;

  nav {
    width: 200px;
    margin: 0 auto;
    text-align: center;
    ul {
      display: flex;
      justify-content: center;
      gap: 10px;
    }
  }
`;

export { Header, Container };
