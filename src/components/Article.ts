import styled from 'styled-components'

export const Article = styled.article`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 100px 1fr;
  gap: 1rem;
  justify-content: space-between;
  width: 100%;
  padding: 4rem 0px;
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
    grid-column: 1 / 2;
    margin: 0;
  }
  img {
    margin: 0;
  }

  &:focus-within {
    outline: 0.25rem dashed var(--color-primary);
    outline-offset: 0.25rem;
  }
`
