import {
  faHandPointLeft,
  faHandPointRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { navigate } from 'gatsby'
import React from 'react'

export interface PagerProps {
  previousPagePath?: string
  previousPageText?: string
  nextPagePath?: string
  nextPageText?: string
}
const defaults = {
  prevPageText: 'Prev',
  nextPageText: 'Next',
}

export default function Pager({
  previousPagePath,
  previousPageText,
  nextPagePath,
  nextPageText,
}: PagerProps) {
  const handleClick: React.MouseEventHandler<{
    name: string
  }> = (event) => {
    navigate(event.currentTarget.name)
  }
  return (
    <div
      css={`
        display: flex;
        justify-content: space-between;
        margin: ${({ theme }) => theme.space[2]}px;
      `}
    >
      <button
        name={previousPagePath}
        disabled={
          typeof previousPagePath !== 'string' || previousPagePath === ''
        }
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faHandPointLeft} />
        <span> {previousPageText || defaults.prevPageText}</span>
      </button>
      <button
        name={nextPagePath}
        disabled={typeof nextPagePath !== 'string' || nextPagePath === ''}
        onClick={handleClick}
      >
        <span>{nextPageText || defaults.nextPageText} </span>
        <FontAwesomeIcon icon={faHandPointRight} />
      </button>
    </div>
  )
}

Pager.defaultProps = defaults
