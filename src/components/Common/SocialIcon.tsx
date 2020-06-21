import * as React from 'react';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { Link } from './Link';
import { Account } from '../..';
import { motion } from 'framer-motion';
import Box from './Box';
interface SocialIconProps {
  account: Account;
  size?: SizeProp;
}
const icon = { hidden: { x: -100, opacity: 0, scale: 0 }, visible: { x: 0, opacity: 1, scale: 1 } };
export const SocialIcon = ({ account, size }: SocialIconProps) => (
  <Box
    className="social-icon"
    margin={1}
    as={motion.div}
    variants={icon}
    transition={{
      type: 'spring',
      stiffness: 260,
      damping: 20
    }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <motion.a href={account.link} target="_blank" rel="noreferrer">
      <FaIcon icon={account.icon} size={size} />
    </motion.a>
  </Box>
);
