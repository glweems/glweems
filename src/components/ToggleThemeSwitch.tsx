import React from 'react';
import styled, { css, useTheme } from 'styled-components';
import DefaultButton from './Common/Button';

export default function ToggleThemeSwitch() {
  const { toggle, mode, isDarkMode } = useTheme();

  const buttonTitle = `Activate ${isDarkMode ? 'light' : 'dark'} mode`;
  return (
    <Wrapper>
      <DefaultButton
        aria-label={buttonTitle}
        title={buttonTitle}
        onClick={toggle}
        className="css-1n0cmkr edpcenh0"
      >
        <div
          className={
            isDarkMode ? 'css-nmnmtn edpcenh1' : 'css-120o22r edpcenh1'
          }
        ></div>
        <div
          className={
            isDarkMode ? 'css-15c58zf edpcenh2' : 'css-rqs3zf edpcenh2'
          }
        ></div>
      </DefaultButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /*! CSS Used from: Embedded */
  button {
    font: inherit;
    margin: 0;
  }
  button {
    overflow: visible;
  }
  button {
    text-transform: none;
  }
  button {
    -webkit-appearance: button;
  }
  button::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  button:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  ::-webkit-input-placeholder {
    color: inherit;
    opacity: 0.54;
  }
  * {
    box-sizing: inherit;
  }
  *:before {
    box-sizing: inherit;
  }
  *:after {
    box-sizing: inherit;
  }
  /*! CSS Used from: Embedded */
  * {
    box-sizing: border-box;
  }
  /*! CSS Used from: Embedded */
  .css-1n0cmkr {
    padding: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: transparent;
    border-radius: 5px;
    border: 0;
    cursor: pointer;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    height: 40px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-right: -11px;
    opacity: 0.75;
    overflow: hidden;
    position: relative;
    -webkit-transform: scale(0.75);
    -ms-transform: scale(0.75);
    transform: scale(0.75);
    -webkit-transition: opacity 0.3s ease;
    transition: opacity 0.3s ease;
    vertical-align: middle;
    width: 40px;
  }
  .css-1n0cmkr:hover {
    opacity: 1;
  }
  /*! CSS Used from: Embedded */
  .css-120o22r {
    border: 2px solid ${({ theme }) => theme.colors.dark};
    background: ${({ theme }) => theme.colors.dark};
    border-radius: 50%;
    height: 24px;
    overflow: hidden;
    position: relative;
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    -webkit-transition: all 0.45s ease;
    transition: all 0.45s ease;
    width: 24px;
  }
  .css-120o22r::before {
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.dark};
    content: '';
    height: 24px;
    opacity: 1;
    position: absolute;
    right: -9px;
    top: -9px;
    -webkit-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    transform: translate(0, 0);
    -webkit-transition: -webkit-transform 0.45s ease;
    -webkit-transition: transform 0.45s ease;
    transition: transform 0.45s ease;
    width: 24px;
  }
  .css-120o22r::after {
    border-radius: 50%;
    box-shadow: 0 -23px 0 ${({ theme }) => theme.colors.dark},
      0 23px 0 ${({ theme }) => theme.colors.dark},
      23px 0 0 ${({ theme }) => theme.colors.dark},
      -23px 0 0 ${({ theme }) => theme.colors.dark},
      15px 15px 0 ${({ theme }) => theme.colors.dark},
      -15px 15px 0 ${({ theme }) => theme.colors.dark},
      15px -15px 0 ${({ theme }) => theme.colors.dark},
      -15px -15px 0 ${({ theme }) => theme.colors.dark};
    content: '';
    height: 8px;
    left: 50%;
    margin: -4px 0 0 -4px;
    position: absolute;
    top: 50%;
    width: 8px;
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    transform: scale(0);
    -webkit-transition: all 0.35s ease;
    transition: all 0.35s ease;
  }
  @media (min-width: 750px) {
    .css-120o22r::after {
      -webkit-transform: scale(0);
      -ms-transform: scale(0);
      transform: scale(0);
    }
  }
  /*! CSS Used from: Embedded */
  .css-rqs3zf {
    background: ${({ theme }) => theme.colors.welcome};
    border-radius: 50%;
    border: 0;
    height: 24px;
    opacity: 1;
    position: absolute;
    right: 0;
    top: 0;
    -webkit-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    transform: translate(0, 0);
    -webkit-transition: background 0.25s ease, -webkit-transform 0.45s ease;
    -webkit-transition: background 0.25s ease, transform 0.45s ease;
    transition: background 0.25s ease, transform 0.45s ease;
    width: 24px;
  }

  /*! CSS Used from: Embedded */
  button {
    font: inherit;
    margin: 0;
  }
  button {
    overflow: visible;
  }
  button {
    text-transform: none;
  }
  button {
    -webkit-appearance: button;
  }
  button::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  button:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  ::-webkit-input-placeholder {
    color: inherit;
    opacity: 0.54;
  }
  * {
    box-sizing: inherit;
  }
  *:before {
    box-sizing: inherit;
  }
  *:after {
    box-sizing: inherit;
  }
  /*! CSS Used from: Embedded */
  * {
    box-sizing: border-box;
  }
  /*! CSS Used from: Embedded */
  .css-1n0cmkr {
    padding: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: transparent;
    border-radius: 5px;
    border: 0;
    cursor: pointer;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    height: 40px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-right: -11px;
    opacity: 0.75;
    overflow: hidden;
    position: relative;
    -webkit-transform: scale(0.75);
    -ms-transform: scale(0.75);
    transform: scale(0.75);
    -webkit-transition: opacity 0.3s ease;
    transition: opacity 0.3s ease;
    vertical-align: middle;
    width: 40px;
  }
  .css-1n0cmkr:hover {
    opacity: 1;
  }
  /*! CSS Used from: Embedded */
  .css-nmnmtn {
    border: 4px solid ${({ theme }) => theme.colors.dark};
    background: ${({ theme }) => theme.colors.dark};
    border-radius: 50%;
    height: 24px;
    overflow: visible;
    position: relative;
    transform: scale(0.55);
    transition: all 0.45s ease 0s;
    width: 24px;
  }
  .css-nmnmtn::before {
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.dark};
    content: '';
    height: 24px;
    opacity: 0;
    position: absolute;
    right: -9px;
    top: -9px;
    transform: translate(14px, -14px);
    transition: transform 0.45s ease 0s;
    width: 24px;
  }
  .css-nmnmtn::after {
    border-radius: 50%;
    box-shadow: 0 -23px 0 ${({ theme }) => theme.colors.dark},
      0 23px 0 ${({ theme }) => theme.colors.dark},
      23px 0 0 ${({ theme }) => theme.colors.dark},
      -23px 0 0 ${({ theme }) => theme.colors.dark},
      15px 15px 0 ${({ theme }) => theme.colors.dark},
      -15px 15px 0 ${({ theme }) => theme.colors.dark},
      15px -15px 0 ${({ theme }) => theme.colors.dark},
      -15px -15px 0 ${({ theme }) => theme.colors.dark};
    content: '';
    height: 8px;
    left: 50%;
    margin: -4px 0px 0px -4px;
    position: absolute;
    top: 50%;
    width: 8px;
    transform: scale(1);
    transition: all 0.35s ease 0s;
  }
  @media (min-width: 750px) {
    .css-nmnmtn::after {
      transform: scale(0.92);
    }
  }
  .css-15c58zf {
    background: var(--theme-ui-colors-white, #ffffff);
    border-radius: 50%;
    border: 0px;
    height: 24px;
    opacity: 0;
    position: absolute;
    right: 0px;
    top: 0px;
    transform: translate(14px, -14px);
    transition: background 0.25s ease 0s, transform 0.45s ease 0s;
    width: 24px;
  }
`;

const Button = styled(DefaultButton)<{ mode: 'light' | 'dark' }>`
  padding: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: transparent;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  height: 40px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-right: -11px;
  opacity: 0.75;
  overflow: hidden;
  position: relative;
  -webkit-transform: scale(0.75);
  -ms-transform: scale(0.75);
  transform: scale(0.75);
  -webkit-transition: opacity 0.3s ease;
  transition: opacity 0.3s ease;
  vertical-align: middle;
  width: 40px;

  ::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }
  ::-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  /*! CSS Used from: Embedded */

  :hover {
    opacity: 1;
  }
  /*! CSS Used from: Embedded */
  .one {
     padding: 0;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background: transparent;
        border-radius: 5px;
        border: 0;
        cursor: pointer;
        display: -webkit-inline-box;
        display: -webkit-inline-flex;
        display: -ms-inline-flexbox;
        display: inline-flex;
        height: 40px;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        margin-right: -11px;
        opacity: 0.75;
        overflow: hidden;
        position: relative;
        -webkit-transform: scale(0.75);
        -ms-transform: scale(0.75);
        transform: scale(0.75);
        -webkit-transition: opacity 0.3s ease;
        transition: opacity 0.3s ease;
        vertical-align: middle;
        width: 40px;
    }
    ::after {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 8px;
      height: 8px;
      margin: -4px 0px 0px -4px;
      border-radius: 50%;
      box-shadow: 0 -23px 0 ${({ theme }) => theme.colors.dark},
        0 23px 0 ${({ theme }) => theme.colors.dark},
        23px 0 0 ${({ theme }) => theme.colors.dark},
        -23px 0 0 ${({ theme }) => theme.colors.dark},
        15px 15px 0 ${({ theme }) => theme.colors.dark},
        -15px 15px 0 ${({ theme }) => theme.colors.dark},
        15px -15px 0 ${({ theme }) => theme.colors.dark},
        -15px -15px 0 ${({ theme }) => theme.colors.dark};
      transform: scale(1);
      transition: all 0.35s ease 0s;
      content: '';
    }
  }
  @media (min-width: 750px) {
    .one::after {
      transform: scale(0.92);
    }
  }
  .two {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 24px;
    height: 24px;
    background: ${({ theme }) => theme.colors.dark};
    border: 0px;
    border-radius: 50%;
    transform: translate(14px, -14px);
    opacity: 0;
    transition: background 0.25s ease 0s, transform 0.45s ease 0s;
  }

  ${(props) =>
    props &&
    props.mode === 'light' &&
    css`
      padding: 0;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      background: transparent;
      border-radius: 5px;
      border: 0;
      cursor: pointer;
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      height: 40px;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      margin-right: -11px;
      opacity: 0.75;
      overflow: hidden;
      position: relative;
      -webkit-transform: scale(0.75);
      -ms-transform: scale(0.75);
      transform: scale(0.75);
      -webkit-transition: opacity 0.3s ease;
      transition: opacity 0.3s ease;
      vertical-align: middle;
      width: 40px;
      .one {
        border: 2px solid ${({ theme }) => theme.colors.dark};
        background: ${({ theme }) => theme.colors.dark};
        border-radius: 50%;
        height: 24px;
        overflow: hidden;
        position: relative;
        transform: scale(1);
        transition: all 0.45s ease;
        width: 24px;
      }
      ::before {
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.dark};
        content: '';
        height: 24px;
        opacity: 1;
        position: absolute;
        right: -9px;
        top: -9px;
        transform: translate(0, 0);
        transition: transform 0.45s ease;
        width: 24px;
      }
      ::after {
        border-radius: 50%;
        box-shadow: 0 -23px 0 ${({ theme }) => theme.colors.dark},
          0 23px 0 ${({ theme }) => theme.colors.dark},
          23px 0 0 ${({ theme }) => theme.colors.dark},
          -23px 0 0 ${({ theme }) => theme.colors.dark},
          15px 15px 0 ${({ theme }) => theme.colors.dark},
          -15px 15px 0 ${({ theme }) => theme.colors.dark},
          15px -15px 0 ${({ theme }) => theme.colors.dark},
          -15px -15px 0 ${({ theme }) => theme.colors.dark};
        content: '';
        height: 8px;
        left: 50%;
        margin: -4px 0 0 -4px;
        position: absolute;
        top: 50%;
        width: 8px;
        transform: scale(0);
        transition: all 0.35s ease;
      }

      .two {
        background: ${({ theme }) => theme.colors.welcome};
        border-radius: 50%;
        border: 0;
        height: 24px;
        opacity: 1;
        position: absolute;
        right: 0;
        top: 0;
        transform: translate(0, 0);
        transition: background 0.25s ease, transform 0.45s ease;
        width: 24px;
      }
    `};
`;
ToggleThemeSwitch.displayName = 'ToggleThemeSwitch';
