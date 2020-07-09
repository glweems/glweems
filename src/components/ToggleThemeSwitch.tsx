import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import styled, { useTheme, css } from 'styled-components';
import { transparentize } from 'polished';
import MoonIcon from '../assets/moon.svg';
import SunIcon from '../assets/sun.svg';
import { buttonCss } from '../theme';
import DefaultButton from './Common/Button';

export default function ToggleThemeSwitch() {
  const { toggle, mode, isDarkMode } = useTheme();

  const buttonTitle = `Activate ${isDarkMode ? 'light' : 'dark'} mode`;
  return (
    <Button
      aria-label={buttonTitle}
      title={buttonTitle}
      onClick={toggle}
      mode={mode}
    >
      <div className="toggle-icon one"></div>
      <div className="toggle-icon two"></div>
    </Button>
  );
}

const Button = styled(DefaultButton)<{ mode: 'light' | 'dark' }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin: 0;
  margin-right: -11px;
  padding: 0;
  overflow: visible;
  overflow: hidden;
  font: inherit;
  text-transform: none;
  vertical-align: middle;
  background: transparent;
  border: 0;
  border-radius: 5px;
  transform: scale(0.75);
  cursor: pointer;
  opacity: 0.75;
  transition: opacity 0.3s ease;
  appearance: none;

  ::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }
  ::-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  ::-webkit-input-placeholder {
    color: inherit;
    opacity: 0.54;
  }

  /*! CSS Used from: Embedded */

  :hover {
    opacity: 1;
  }
  /*! CSS Used from: Embedded */
  .one {
    position: relative;
    width: 24px;
    height: 24px;
    overflow: visible;
    background: ${({ theme }) => theme.colors.muted};
    border: 4px solid ${({ theme }) => theme.colors.muted};
    border-radius: 50%;
    transform: scale(0.55);
    transition: all 0.45s ease 0s;
    ::before {
      position: absolute;
      top: -9px;
      right: -9px;
      width: 24px;
      height: 24px;
      border: 2px solid ${({ theme }) => theme.colors.muted};
      border-radius: 50%;
      transform: translate(14px, -14px);
      opacity: 0;
      transition: transform 0.45s ease 0s;
      content: '';
    }
    ::after {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 8px;
      height: 8px;
      margin: -4px 0px 0px -4px;
      border-radius: 50%;
      box-shadow: 0 -23px 0 ${({ theme }) => theme.colors.muted},
        0 23px 0 ${({ theme }) => theme.colors.muted},
        23px 0 0 ${({ theme }) => theme.colors.muted},
        -23px 0 0 ${({ theme }) => theme.colors.muted},
        15px 15px 0 ${({ theme }) => theme.colors.muted},
        -15px 15px 0 ${({ theme }) => theme.colors.muted},
        15px -15px 0 ${({ theme }) => theme.colors.muted},
        -15px -15px 0 ${({ theme }) => theme.colors.muted};
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
    background: ${({ theme }) => theme.colors.muted};
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
      appearance: none;
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
      justify-content: center;
      margin-right: -11px;
      opacity: 0.75;
      overflow: hidden;
      position: relative;
      transform: scale(0.75);
      transition: opacity 0.3s ease;
      vertical-align: middle;
      width: 40px;
      .one {
        border: 2px solid ${({ theme }) => theme.colors.muted};
        background: ${({ theme }) => theme.colors.muted};
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
        border: 2px solid ${({ theme }) => theme.colors.muted};
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
        box-shadow: 0 -23px 0 ${({ theme }) => theme.colors.muted},
          0 23px 0 ${({ theme }) => theme.colors.muted},
          23px 0 0 ${({ theme }) => theme.colors.muted},
          -23px 0 0 ${({ theme }) => theme.colors.muted},
          15px 15px 0 ${({ theme }) => theme.colors.muted},
          -15px 15px 0 ${({ theme }) => theme.colors.muted},
          15px -15px 0 ${({ theme }) => theme.colors.muted},
          -15px -15px 0 ${({ theme }) => theme.colors.muted};
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
        background: ${({ theme }) => theme.colors.rootBg};
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
