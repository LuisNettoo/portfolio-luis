import styled from "styled-components"

export const AboutContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 10%;

  max-width: 1280px;
  margin: 96px auto;

  background-color: var(--surface-background);

  h1 {
    font-family: var(--font-title);
    font-size: 2rem;

    background: -webkit-linear-gradient(rgba(153,85,232,1), rgba(0,212,255,1));
    background-clip: text;
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

  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 0 7%;

    margin: 10% 0;

    > img {
      min-width: 100%;
      max-width: 100%;
      margin-bottom: 24px;
    }

    section {
      p {
        text-align: justify;
      }
    }
  }
`

export const AboutMeContainer = styled.section`
  display: flex;
  justify-content: space-around;
  background-color: var(--surface-primary);
  border-radius: 1rem;
  gap: 5%;
  box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.60);

  max-width: 1280px;
  margin: 40px auto;
  
  > img {
    margin: 5%;
    width: 438px;
  }

  section {
    margin: 5%;

    div {
      display: flex;
      gap: 1.5rem;

      margin-bottom: 2rem;
    }

    img {
      width: 24px;
    }

    h3 {
      font-family: var(--font-title);
      font-size: 1rem;
      color: var(--secondary-color);

      margin-bottom: 0.5rem;
    }

    h2 {
      font-family: var(--font-main);
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 32px;
      color: var(--text-primary);

      margin-bottom: 1rem;
    }

    p {
      font-family: var(--font-main);
      color: var(--text-secondary);
      font-size: 1rem;
      line-height: 24px;
    
      margin-bottom: 2rem;
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

      background-color: var(--primary-color-500);
    }
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    border-radius: 0;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    margin-bottom: 48px;

    > img {
      max-width: 90%;
      margin-bottom: 40px;
    }
  }
`