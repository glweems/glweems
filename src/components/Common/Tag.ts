import styled from 'styled-components'
import { Link } from 'gatsby'
import { tagBg, tagColor } from '../../theme'

export const Tag = styled(Link)`
  padding: 0.3em 0.5em;
  color: ${tagColor};
  font-weight: bold;
  font-size: 65%;
  text-transform: uppercase;
  text-decoration: none;
  vertical-align: middle;
  background: ${tagBg};
  border-radius: 0.5em;
`
