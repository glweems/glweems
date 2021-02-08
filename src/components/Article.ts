import styled from 'styled-components'

export const Article = styled.article`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 0px;
  border-bottom: 4px solid var(--color-primary);
  border-block-end: 0.25rem dashed var(--color-shade);
  .title {
    :hover {
      text-decoration: underline;
    }
  }
  a {
    text-decoration: none;
    &:focus {
      outline: none;
    }
  }

  .tbn {
    margin: 0;
  }
  img {
    margin: 0;
  }

  &:focus-within {
    outline: 0.25rem dashed var(--color-primary);
    outline-offset: 0.25rem;
  }
  > {
    width: 100%;
  }
`
