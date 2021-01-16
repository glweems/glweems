import React, { FC } from 'react'
import styled from 'styled-components'

export interface BottomNavProps {
  children: any
}
export const BottomNav: FC<BottomNavProps> = ({ children }) => {
  return (
    <Nav>
      {React.Children.map(children, (child, i) => {
        const className = 'BottomNav_Item'
        return (
          <div key={`${className}_${i}`} className={className}>
            {child}
          </div>
        )
      })}
    </Nav>
  )
}

const Nav = styled.nav`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(4rem, 1fr));
  justify-items: space-evenly;
  height: 50px;
  padding: env(safe-area-inset-bottom);
  background-color: #fff;
  box-shadow: 0 -2px 5px -2px #333;
  transform: translateZ(0);
  will-change: transform;

  .BottomNav_Item {
    display: flex;
    place-content: center;
    place-items: center;
    width: 100%;
    text-align: center;
    border: 2px solid pink;
  }
`
