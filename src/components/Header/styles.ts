import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 24px 80px;

  display: flex;
  justify-content: space-between;

  background-color: var(--surface-background);
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
  }
`