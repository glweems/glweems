import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import * as React from 'react';
import { Account } from './../../utils/data';
interface SocialIconProps {
  account: Account;
  size?: SizeProp;
}
const icon = {
  hidden: { x: -100, opacity: 0, scale: 0 },
  visible: { x: 0, opacity: 1, scale: 1 },
};

export default function SocialIcon({ account, size }: SocialIconProps) {
  return (
    <motion.div
      variants={icon}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.a href={account.link} target="_blank" rel="noreferrer">
        <FaIcon icon={account.icon} size={size} />
      </motion.a>
    </motion.div>
  );
}
