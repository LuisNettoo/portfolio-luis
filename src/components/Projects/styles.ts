import styled from "styled-components";

export const ProjectsContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    font-size: 1rem;
    font-family: var(--font-title);
    color: var(--secondary-color);

    margin-bottom: 0.5rem;
  }

  p {
    font-family: var(--font-main);
    font-size: 1.5rem;
    color: var(--text-primary);
  }

  section {
    display: flex;
    gap: 1rem;
  }
`