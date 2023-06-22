import { NavLink, Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { Suspense } from 'react';
import { Puff } from 'react-loader-spinner';

// STYLED COMPONENTS

import { Header, Container } from './StyledLayout';

const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 30px;
  font-weight: 600;
  color: inherit;
  transition: color 300ms cubic-bezier(0.23, 1, 0.32, 1);
  :hover {
    color: orange;
    transform: scale(1.1);
    background-color: white;
  }

  &.active {
    color: orange;
  }
`;

export default function Layout() {
  return (
    <>
      <Header>
        <nav>
          <ul>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="movies">Movies</StyledLink>
            </li>
          </ul>
        </nav>
      </Header>
      <Container>
        <main>
          <Suspense
            fallback={
              <Puff
                height="160"
                width="160"
                radius={1}
                color="orange"
                ariaLabel="puff-loading"
                wrapperStyle={{
                  display: 'flex',
                  justifyContent: 'center',
                  transform: 'translateY(70%)',
                }}
                wrapperClass=""
                visible={true}
              />
            }
          >
            <Outlet />
          </Suspense>
        </main>
      </Container>
    </>
  );
}
