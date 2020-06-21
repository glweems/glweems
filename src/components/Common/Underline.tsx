import React from 'react';
import { motion } from 'framer-motion';

export default function Underline({ children }: { children: React.ReactNode }): React.ReactElement {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      {children}
    </motion.div>
  );
}

Underline.displayName = 'Underline';
