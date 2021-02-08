import styled from 'styled-components'

const Pod = styled.div`
  margin: 3rem 0;
  padding: 0.5rem;
  font-size: 1rem;
  background: linear-gradient(
    -45deg,
    var(--color-secondary),
    var(--color-secondary) 25%,
    var(--color-primary) 25%,
    var(--color-primary) 50%,
    var(--color-secondary) 50%,
    var(--color-secondary) 75%,
    var(--color-primary) 75%,
    var(--color-primary) 100%
  );
  background-size: 40px 40px;
  border: 4px solid;
  -webkit-animation: scrolling-gradient 2s linear infinite;
  animation: scrolling-gradient 2s linear infinite;
`
export default Pod
