import React from 'react'
import styled, { useTheme, css } from 'styled-components'
import { motion } from 'framer-motion'

export default function ToggleNavButton(
  props: React.HTMLAttributes<HTMLButtonElement>
) {
  const { isNavOpen, toggleNav } = useTheme()
  const buttonTitle = `${isNavOpen ? 'open' : 'close'} navigation menu`
  return (
    <button
      {...props}
      onClick={toggleNav}
      aria-label={buttonTitle}
      title={buttonTitle}
    >
      <ToggleNavIcon
        as={motion.div}
        isNavOpen={isNavOpen}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />
    </button>
  )
}

const ToggleNavIcon = styled.div<{ isNavOpen: boolean }>`
  position: relative;
  z-index: 1000;
  width: 24px;
  height: 3px;
  margin: 10px 0px;
  background: ${({ theme }) => theme.colors.secondaryText};
  border-radius: 2px;
  ::before,
  ::after {
    position: absolute;
    right: 0px;
    height: 3px;
    background: ${({ theme }) => theme.colors.secondaryText};
    border-radius: 2px;
    transition: transform 250ms cubic-bezier(0.68, -0.55, 0.265, 1.55) 0s;
    content: ' ';
  }
  ::before {
    top: -7px;
    width: 20px;
  }
  ::after {
    top: 7px;
    width: 16px;
  }

  ${(props) =>
    props.isNavOpen &&
    css`
      background: 0px 0px;
      ::before,
      ::after {
        top: 0px;
        width: 24px;
      }
      ::before {
        transform: rotate(45deg);
      }
      ::after {
        transform: rotate(-45deg);
      }
      ::after {
        top: 0px;
        width: 24px;
        transform: rotate(-45deg);
      }
      ::before {
        top: 0px;
        width: 24px;
        transform: rotate(45deg);
      }
    `};
`
