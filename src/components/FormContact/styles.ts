import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  background-color: var(--surface-primary);
  border-radius: 1rem;

  max-width: 1280px;
  margin: 40px auto;

  > section {
    margin: 72px;
    width: 50%;

    img {
      width: 160px;
    }

    h3 {
      font-family: var(--font-title);
      color: var(--secondary-color);
      font-size: 1rem;

      margin-bottom: 8px;
    }

    h2 {
      font-family: var(--font-main);
      font-size: 1.25rem;
      font-weight: 600;

      color: var(--text-primary);

      margin-bottom: 16px;
    }
    
    p {
      font-family: var(--font-main);
      font-size: 1rem;

      color: var(--text-secondary);

      margin-bottom: 16px;
    }

    > div {
      display: flex;
      gap: 0.5rem;

      a {
        display: flex;
        align-items: center;
        justify-content: center;

        width: min-content;
        height: min-content;

        background-color: var(--surface-secondary);
        
        padding: 12px;
        border-radius: 0.5rem;

        transition: all ease 250ms;

        img {
          width: 24px;
        }

        &:hover {
          filter: brightness(0.8);
        }
      }
    }
  }

  > form {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 72px;

    input, textarea {
      border-radius: 0.5rem;
      border: 1px solid transparent;
      outline: none;
      padding: 12px;

      margin-bottom: 1rem;

      font-family: var(--font-main);
      font-size: 1rem;
      color: var(--text-primary);

      background-color: var(--surface-background);

      &:focus {
        border: 1px solid var(--secondary-color);
      }
    }

    textarea {
      margin-bottom: 2rem;
    }

    button {
      padding: 1rem 1.5rem;
      border-radius: .5rem;
      border: 0;
      cursor: pointer;

      width: max-content;
      
      display: flex;
      justify-content: center;
      align-items: center;
      gap: .5rem;

      font-family: var(--font-main);
      font-size: 1rem;
      font-weight: 500;
      color: var(--text-primary);

      background-color: var(--primary-color-500);
    }
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 8%;
    border-radius: 0;

    > section {
      width: 100%;
      margin-bottom: 48px;

      > img {
        margin-bottom: 40px;
      }
    }

    form {
      margin: 48px 72px;
      width: 100%;
    }
  }
`