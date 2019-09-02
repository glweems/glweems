import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import useAvatarQuery from '../graphql/AvatarQuery';

const Avatar = () => {
  const { file } = useAvatarQuery();

  return <Img fixed={file.childImageSharp.fixed} />;
};

export default styled(Avatar)``;
