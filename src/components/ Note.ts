import styled from 'styled-components'

const Note = styled.div`
  position: relative;
  padding: 6rem 2rem 3rem 2rem;
  background: repeating-radial-gradient(
      var(--color-secondary),
      var(--color-secondary) 6px,
      var(--color-primary) 6px,
      var(--color-primary) 10px,
      transparent 0%,
      transparent 100%
    ),
    repeating-radial-gradient(
      var(--color-secondary),
      var(--color-secondary) 6px,
      var(--color-primary) 6px,
      var(--color-primary) 10px,
      transparent 0%,
      transparent 100%
    ),
    linear-gradient(
      var(--color-shade),
      var(--color-shade) 60px,
      var(--color-primary) 60px,
      var(--color-primary) 64px
    );
  background-color: var(--color-secondary);
  background-repeat: no-repeat;
  background-position: right 5px, right 30px top 5px, 0 0;
  background-size: 50px 50px, 50px 50px, 100% 64px;
  border: 4px solid var(--color-primary);
  -webkit-box-shadow: 12px 12px 0 0 var(--color-primary);
  box-shadow: 12px 12px 0 0 var(--color-primary);
`
Note.displayName = 'Note'
export default Note
