import * as React from 'react';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton
} from 'react-share';
import Box from './Common/Box';

interface ShareButtonsProps {
  config: {
    url: string;
    twitterHandle: string;
    title: string;
    tags: string[];
  };
}

const iconConfig = {
  size: 40,
  round: false,
  borderRadius: 2,
  iconBgStyle: { fill: 'transparent' }
};

export default function ShareButtons({ config: { twitterHandle, url, title, tags } }: ShareButtonsProps) {
  return (
    <Box display="flex" justifyContent="space-evenly" marginY={4}>
      <FacebookShareButton url={url} quote={title} hashtag={`#${tags[0]}`}>
        <FacebookIcon {...iconConfig} />
      </FacebookShareButton>

      <TwitterShareButton url={url} title={title} via={twitterHandle} hashtags={tags}>
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
