import * as React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon
} from 'react-share';
import { Flex } from '../../components/Common';
import Box from '../../components/Common/Box';

interface Props {
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
export const ShareButtons: React.FC<Props> = ({ config: { twitterHandle, url, title, tags } }) => (
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

export default ShareButtons;
