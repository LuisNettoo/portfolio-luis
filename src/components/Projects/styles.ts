import styled from "styled-components";

export const ProjectsContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 0 10%;

  > h2 {
    font-size: 1rem;
    font-family: var(--font-title);
    color: var(--secondary-color);

    margin-bottom: 0.5rem;
  }

  > p {
    font-family: var(--font-main);
    font-size: 1.5rem;
    color: var(--text-primary);
  }

  div.cards__container {
    display: flex;
    justify-content: space-between;

    margin-bottom: 40px;
  }

  button {
    outline: 0;
    border: 0;
    padding: 1rem;
    border-radius: 0.5rem;
    
    background-color: var(--surface-secondary);
    color: var(--text-primary);

    font-family: var(--font-main);
    font-size: 1rem;
    font-weight: 600;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    cursor: pointer;
    transition: all ease 250ms;

    &:hover {
      filter: brightness(0.8);
    }
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 48px;

    > div {
      flex-wrap: wrap;

      div {
        width: 100%;
      }
    }

    > p {
      text-align: center;
    }
    
  }
`