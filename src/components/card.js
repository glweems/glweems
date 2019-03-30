import PropTypes from 'prop-types'
import React from 'react'
import Theme, { MQ } from 'src/Theme'
import styled, { css } from 'styled-components'

export const CardGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  text-align: left;

  /* ${MQ.laptop(`
  grid-template-columns: 1fr 1fr 1fr;
  `)} */
`

export const Card = styled.div`
  /* background: ${Theme.colors.light}; */
  display: grid;
  gap: 0.25rem;
  padding: 0.25rem 0;
  align-items: space-evenly;
  align-content: space-evenly;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-auto-rows: 1fr;
  grid-template-areas:
    'title'
    'subtitle'
    'link';
  ${props =>
    props.imgRight &&
    css`
      grid-template-columns: 3fr 1fr;
      grid-template-areas:
        'title img'
        'subtitle img'
        'link img';
    `}
  ${props =>
    props.imgTop &&
    css`
      grid-template-rows: auto auto auto 1fr;
      grid-template-areas:
        'title'
        'subtitle'
        'img'
        'link';
      ${MQ.laptop(`
  grid-template-rows: auto auto auto 1fr;
  `)}
    `}
`
export const ImgDiv = styled.div`
  background-position: 50% 50%;
  background-size: cover;
  grid-area: img;
  height: 200px;
  width: 100%;
  ${MQ.mobileM(`
  width: 60%;
  `)}
  ${MQ.laptop(`
  max-height: 200px;
  `)}
`

export const CardTitle = styled.h2`
  color: ${Theme.colors.dark};

  display: -webkit-box;
  fill: rgba(0, 0, 0, 0.84);
  font-family: ${Theme.headingFont};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  grid-area: title;
  line-height: 20px;
  margin: 0;
  margin-left: 0.5rem;
  max-height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const CardSubtitle = styled.div`
  color: ${Theme.colors.secondary};

  display: -webkit-box;
  fill: rgba(0, 0, 0, 0.54);
  font-size: 13px;
  font-style: normal;
  font-weight: 200;
  grid-area: subtitle;
  letter-spacing: 0;
  line-height: 18px;
  margin-left: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  transform: translateY(1.52px);

  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`

export const CardLink = styled.div`
  color: ${Theme.colors.blue};
  font-size: 12px;
  font-weight: bold;
  grid-area: link;
  letter-spacing: 1px;
  margin-left: 0.5rem;
  padding: 0;
  width: fit-content;
  :hover {
    text-decoration: underline;
  }
`

export default Card
