import React from 'react';
import styled, { css } from 'styled-components';
import { FlexCssProps } from './Flex';

interface Props extends FlexCssProps {
  listStyleNone?: boolean;
  children: React.ReactNode;
}
const Ul = styled.ul<Props>`
  ${(props) =>
    props.listStyleNone &&
    css`
      list-style: none;
      margin: 0;
    `}
`;
const Li = styled.li`
  max-width: fit-content;
`;

export const List: React.FC<Props> = ({ listStyleNone, children }) => {
  const ListItems = () => React.Children.map(children, (child, i) => <Li key={i}>{child}</Li>);
  return <Ul listStyleNone={listStyleNone}>{ListItems()}</Ul>;
};
