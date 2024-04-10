import styled from "styled-components"

export const AboutContainer = styled.section`
  display: flex;
  align-items: center;
  padding: 96px 10%;
  gap: 10%;

  background-color: var(--surface-background);

  h1 {
    font-family: var(--font-title);
    font-size: 2rem;

    background: -webkit-linear-gradient(rgba(153,85,232,1), rgba(0,212,255,1));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    margin-bottom: 2rem;
  }

  h2 {
    font-family: var(--font-main);
    font-size: 1.5rem;
    font-weight: medium;
    color: var(--text-primary);

    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    font-family: var(--font-main);
    line-height: 24px;

    color: var(--text-secondary);
    margin-bottom: 2rem;
  }

  div {
    display: flex;
    max-height: min-content;
    gap: 1rem;
  }

  a {
    padding: 1rem 1.5rem;
    border-radius: .5rem;
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;

    font-family: var(--font-main);
    font-size: 1rem;
    font-weight: 550;
    color: var(--text-primary);

    text-decoration: none;

    transition: all ease 250ms;

    &:hover {
      filter: brightness(0.8);
    }
  
    &:first-child {
      background-color: var(--surface-secondary);
    }

    &:last-child {
      background-color: var(--primary-color-500);
    }
  }

  > img {
    min-width: 488px;
  }
`

export const AboutMeContainer = styled.section`
  display: flex;
  justify-content: space-around;
  background-color: var(--surface-primary);
  margin: 10%;
  border-radius: 1rem;
  gap: 5%;
  padding: 72px;
  box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.60);
  
  img {
    width: 30rem;
  }

  section {
    img {
      width: 24px;
    }
  }
  
`