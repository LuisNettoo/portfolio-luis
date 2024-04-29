import styled from "styled-components";

export const CardContainer = styled.div`
  width: 28%;
  height: 344px;
  padding: 1.5rem;
  background-color: var(--surface-primary);
  border-radius: 1rem;
  border: 1px solid transparent;

  transition: all ease 250ms;

  margin-top: 40px;

  img {
    width: 100%;
    border-radius: 0.5rem 0.5rem 0 0;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0.5rem 0;
    
    h3 {
      font-family: var(--font-main);
      font-size: 0.875rem; 
      
      color: var(--text-secondary);
    }

    img {
      width: 24px;
    }
  }

  h2 {
    font-family: var(--font-main);
    color: var(--text-primary);

    font-size: 1.25rem;

    margin-bottom: 0.5rem;
  }

  p {
    font-family: var(--font-main);
    color: var(--text-secondary);
    font-size: 1rem;
  }

  &:hover {
    border: 1px solid var(--secondary-color);
    box-shadow: 0px 0px 5px 2px var(--secondary-color);
  }
`