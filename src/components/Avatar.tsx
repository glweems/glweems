import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import useAvatarQuery from '../graphql/AvatarQuery';

const Image = styled(Img)`
  border-radius: ${props => props.theme.borderRadius};
`;

const Avatar = () => {
  const data = useAvatarQuery();

  return <Image {...data.file.childImageSharp} />;
};

export default styled(Avatar)``;
