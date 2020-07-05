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
import { icon } from '@fortawesome/fontawesome-svg-core';

interface ShareButtonsProps {
  url: string;
  title: string;
  tags: string[];
}

const iconConfig = {
  size: 35,
  round: false,
  borderRadius: 2,
  className: 'social-share-button',
};

export default function ShareButtons({ url, title, tags }: ShareButtonsProps) {
  const { site } = useStaticQuery<TwitterHandleQuery>(query);
  return (
    <React.Fragment>
      <div>
        <FacebookShareButton url={url} quote={title} hashtag={`#${tags[0]}`}>
          <FacebookIcon {...iconConfig} />
        </FacebookShareButton>
      </div>

      <div>
        <TwitterShareButton
          url={url}
          title={title}
          via={site.siteMetadata.twitterHandle}
          hashtags={tags}
        >
          <TwitterIcon {...iconConfig} />
        </TwitterShareButton>
      </div>

      <div>
        <LinkedinShareButton url={url}>
          <LinkedinIcon {...iconConfig} />
        </LinkedinShareButton>
      </div>

      <div>
        <RedditShareButton url={url} title={title}>
          <RedditIcon {...iconConfig} />
        </RedditShareButton>
      </div>
    </React.Fragment>
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
