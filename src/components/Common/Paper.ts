import styled from 'styled-components';
import Box from './Box';

const Paper = styled(Box)``;

Paper.defaultProps = {
  backgroundColor: 'rgba(256, 256, 256, 0.0125)',
  border: 1,
  padding: 4,
  borderRadius: 2,
  borderColor: 'rgba(256, 256, 256, 0.05)',
  m: 'auto',
};

export default Paper;
