import React from 'react';
import Box from '../components/Common/Box';

export default function ResumePage() {
  return (
    <Box container>
      <iframe
        title="Garrett Resume"
        css={`
          height: 1600px;
          width: 100%;
        `}
        src="https://docs.google.com/document/d/e/2PACX-1vQeU-cHFCX8Ec1YLAPTLh7RltaGOTtGNmEgkCqbQ6RfnD6rC8BrVN_cjntiYsUXgqq4RWlv_N3ic03P/pub?embedded=true"
      />
    </Box>
  );
}
