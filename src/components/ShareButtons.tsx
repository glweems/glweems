import * as React from 'react';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';
import Box from './Common/Box';
import { graphql, useStaticQuery } from 'gatsby';
import { TwitterHandleQuery } from '../types/generated';

interface ShareButtonsProps {
  url: string;
  title: string;
  tags: string[];
}

const iconConfig = {
  size: 40,
  round: false,
  borderRadius: 2,
  iconBgStyle: { fill: 'transparent' },
};

export default function ShareButtons({ url, title, tags }: ShareButtonsProps) {
  const { site } = useStaticQuery<TwitterHandleQuery>(query);
  return (
    <Box display="flex" justifyContent="space-evenly" marginY={4}>
      <FacebookShareButton url={url} quote={title} hashtag={`#${tags[0]}`}>
        <FacebookIcon {...iconConfig} />
      </FacebookShareButton>

      <TwitterShareButton
        url={url}
        title={title}
        via={site.siteMetadata.twitterHandle}
        hashtags={tags}
      >
        <TwitterIcon {...iconConfig} />
      </TwitterShareButton>

      <LinkedinShareButton url={url}>
        <LinkedinIcon {...iconConfig} />
      </LinkedinShareButton>

      <RedditShareButton url={url} title={title}>
        <RedditIcon {...iconConfig} />
      </RedditShareButton>
    </Box>
  );
}

const query = graphql`
  query TwitterHandle {
    site {
      siteMetadata {
        twitterHandle
      }
    }
  }
`;
