import styled from 'styled-components';
import * as React from 'react';

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`;

interface TextProps {
  variant?: 'title';
  children: any;
}
export default function Text({ variant, children, theme }: TextProps) {
  if (variant === 'title') return <Title theme={theme}>{children}</Title>;
  return <p>{children}</p>;
}
