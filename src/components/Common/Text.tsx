import styled from 'styled-components';
import * as React from 'react';
import { primary } from '../../theme';

const Title = styled.h1`
  color: ${primary};
`;

interface Props {
  variant?: 'title';
  children: any;
}
export const Text = ({ variant, children, theme }: Props): JSX.Element => {
  if (variant === 'title') return <Title theme={theme}>{children}</Title>;
  return <p>{children}</p>;
};
