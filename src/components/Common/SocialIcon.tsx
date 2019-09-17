import * as React from 'react';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { Link } from './Link';
import { Account } from '../..';

interface SocialIconProps {
  account: Account;
  size?: SizeProp;
}

export const SocialIcon = ({ account, size }: SocialIconProps) => (
  <Link to={account.link} alt={account.name} target="_blank">
    <FaIcon
      icon={account.icon}
      size={size}
      className={`social-icon ${account.name.toLowerCase()}`}
    />
  </Link>
);
