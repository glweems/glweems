import styled, { css } from 'styled-components';
import { FlexProperty } from 'csstype';
import { media, breakpoints } from '../../theme';

const { sm, md, lg } = breakpoints;
export interface ContainerProps {
  gap?: 1 | 2 | 3;
  smFlush?: boolean;
  bg?: boolean;
  inverted?: boolean;
  justifyContent?: FlexProperty<'show'>;
}

const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.sm};
  margin: 0 auto;
  ${media.greaterThan('sm')`
      max-width: ${({ theme }) => theme.breakpoints.md};
  `}
  ${media.greaterThan('md')`
      max-width: ${({ theme }) => theme.breakpoints.lg};
  `}
`;

export default Container;
