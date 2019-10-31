import * as React from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon
} from 'react-share'
import { Flex } from '../../components/Common'

interface Props {
  config: {
    url: string
    twitterHandle: string
    title: string
    tags: string[]
  }
}

const iconConfig = {
  size: 40,
  round: false,
  borderRadius: 2,
  iconBgStyle: { fill: 'transparent' }
}
export const ShareButtons: React.FC<Props> = ({ config: { twitterHandle, url, title, tags } }) => (
  <Flex>
    <FacebookShareButton url={url} quote={title} hashtag={`#${tags[0]}`}>
      <FacebookIcon logoFillColor="#3b5997" {...iconConfig} />
    </FacebookShareButton>

    <TwitterShareButton url={url} title={title} via={twitterHandle} hashtags={tags}>
      <TwitterIcon logoFillColor="#00aced" {...iconConfig} />
    </TwitterShareButton>

    <LinkedinShareButton url={url}>
      <LinkedinIcon logoFillColor="#007fb1" {...iconConfig} />
    </LinkedinShareButton>

    <RedditShareButton url={url} title={title}>
      <RedditIcon logoFillColor="#5f99cf" {...iconConfig} />
    </RedditShareButton>
  </Flex>
)

export default ShareButtons
