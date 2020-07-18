/* eslint-disable react/jsx-props-no-spreading */
import { GatsbyLinkProps, Link as GatsbyLink } from 'gatsby';
import { OutboundLink as GoogleLink } from 'gatsby-plugin-google-analytics';
import React from 'react';

export type LinkProps = Omit<GatsbyLinkProps<{}>, 'ref'>;

export default function Link({ to, ...props }: LinkProps) {
  const internal = /^\/(?!\/)/.test(to);

  return internal ? (
    <GatsbyLink to={to} {...props} />
  ) : (
    <GoogleLink href={to} target={internal ? '_self' : '_blank'} {...props} />
  );
}

Link.defaultProps = {
  className: 'link',
  getProps: ({ isCurrent, isPartiallyCurrent, href }) => {
    if (isCurrent || (isPartiallyCurrent && href !== '/'))
      return { className: 'active' };
  },
};
