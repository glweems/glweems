import React from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  fill: ${props => props.theme.bg};
  stroke: ${props => props.theme.bg};
`

export const FullLogo = props => (
  <svg lengthAdjust='auto' height='1em' viewBox='0 0 567 99' {...props}>
    <path d='M41.8 23.6L13 46.1v1.2l28.7 22.2L33.6 80 0 52.7v-12l34.1-27.4 7.7 10.3zm13.6 23.7c0-18.8 10-33.8 42.2-34.5l.9 14.3C73.8 25.2 70.7 33 70.7 44.9c0 13.9 4.9 21 17.6 21.6-.3-5.9-.6-14.6-.7-21h13.6c0 13 .1 22.5.1 30.8-30.4 6.8-45.9-5.6-45.9-29zm57.9 30V66.4h15.2V16.8l-15-.8 1.2-10.4h28.4v60.9h15.3l-1.2 10.9h-43.9zm77.8-22.4l-6.4 22.4h-12.5c-1.6-10.1-4-31.9-4.7-51.8h13.9c.1 12.6.3 21.2.5 35.1h.4c1.6-5.8 4.1-13.5 5.5-18.3h8.1c1.5 4.9 4.1 12.8 5.7 18.6h.4c.1-13.9.2-22.7.2-35.4h13.5c-.8 19.9-3.4 41.7-4.9 51.8H198l-6.9-22.4zm33.7-2.4c0-16.2 12.2-28.5 26-28.5 14.8 0 21.7 11.5 19.9 30.4l-31.2.8c1.6 8.6 9.3 11 30 11.3l-1.3 12c-34.7.9-43.4-9.1-43.4-26zm14.4-5.6c4.7-.1 12.2-.4 17.5-.5-.3-6.8-2.7-10.5-8.5-10.5-5.6-.1-8.5 2.8-9 11zm41.9 5.6c0-16.2 12.2-28.5 26-28.5 14.8 0 21.7 11.5 19.9 30.4l-31.2.8c1.6 8.6 9.3 11 30 11.3l-1.3 12c-34.7.9-43.4-9.1-43.4-26zm14.4-5.6c4.7-.1 12.2-.4 17.5-.5-.3-6.8-2.7-10.5-8.5-10.5-5.6-.1-8.5 2.8-9 11zm53.9-8.9c.1 9.9.2 23.4.2 39.3h-13.3c0-24 0-39.8-.4-51.4l12.4-.7.4 4.2c2.7-3.1 6-5.3 10.1-5.3 4 0 6.2 2.1 7.2 5.5 2.7-3.1 6-5.5 10.6-5.5 6.1 0 8.7 4.3 8.7 12.1v41.2H372V40.9c0-3.5-1.1-4.5-3-4.5-1.4 0-2.5.5-3.4 1.4v39.4H356V40.9c0-3.5-1-4.5-2.7-4.5-1.4 0-2.7.7-3.9 1.6zm85.8-.8c-17.3-1.4-23.5-.5-23.5 2.8 0 5.3 26.6 8.9 26.6 21.8 0 9.5-10 17.3-40.7 16.3l.5-12.3c18.7.9 25 0 25-3.5 0-5.6-26.4-7.8-26.4-20.9 0-9.6 10.3-18.2 38.1-16.6l.4 12.4zm84.2-31.3L473.2 99l-12.5-5.9L506.9 0l12.5 5.9zm5.8 63.8L554 47.3v-1.2l-28.7-22.2 8.1-10.4L567 40.6v12L532.9 80l-7.7-10.3z' />
  </svg>
)

export const SvgOpen = props => (
  <Svg width='2.5em' height='2em' viewBox='0 0 57 38' {...props}>
    <path
      data-name='Line 1'
      fill='none'
      strokeLinecap='round'
      strokeWidth={6}
      d='M3 3h51'
    />
    <path
      data-name='Line 2'
      fill='none'
      strokeLinecap='round'
      strokeWidth={6}
      d='M3 19h51'
    />
    <path
      data-name='Line 3'
      fill='none'
      strokeLinecap='round'
      strokeWidth={6}
      d='M3 35h51'
    />
  </Svg>
)

export const SvgClose = props => (
  <Svg width='2.5em' height='2em' viewBox='0 0 57 38' {...props}>
    <path
      data-name='Line 4'
      fill='none'
      strokeLinecap='round'
      strokeWidth={6}
      d='M4.136 4.136l51 32'
    />
    <path
      data-name='Line 5'
      fill='none'
      strokeLinecap='round'
      strokeWidth={6}
      d='M4.136 36.136l51-32'
    />
  </Svg>
)
