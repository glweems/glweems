import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import Box from './Common/Box'
import Flex from './Common/Flex'
import Paper from './Common/Paper'

interface FooterProps {
  sections: Record<string, ReactNode[]>
}

const Footer: FC<FooterProps> = ({ sections }) => {
  return (
    <Paper as="footer">
      <Box container>
        <Flex flexWrap={true}>
          {Object.entries(sections).map(([section, links]) =>
            links.map((link) => link)
          )}
        </Flex>
      </Box>
    </Paper>
  )
}

const FooterStyles = styled.footer`
  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: -1rem;
    margin-left: calc(var(--ifm-spacing-horizontal) * -1);
    margin-right: -1rem;
    margin-right: calc(var(--ifm-spacing-horizontal) * -1);
  }
`

Footer.displayName = 'Footer'
export default Footer
