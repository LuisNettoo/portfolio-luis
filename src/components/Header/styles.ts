import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 24px 80px;

  display: flex;
  justify-content: space-between;

  background-color: var(--surface-background);

  box-shadow: 1px 2px 10px 6px rgba(0,0,0,0.5);
`

export const HeaderLogo = styled.h1`
  font-family: var(--font-title);
  font-size: 1.5rem;
  color: var(--text-secondary);

  strong {
    color: var(--text-primary);
  }
`

export const HeaderNavigation = styled.nav`
  font-family: var(--font-main);

  ul {
    display: flex;
    gap: 1rem;

    color: var(--text-secondary);

    li:first-child {
      color: var(--text-primary);
      font-weight: bold;
    }
  }
`