import React from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon
} from 'react-share'
import { Flex } from './Common'

// import './Share.scss';

interface Props {
  twitterHandle: `@garrettlweems`
  url: string
  title: string
  tags: string[]
}

const iconBg = { fill: '#fff' }

export const ShareButtons = ({ twitterHandle = '@garrettlweems', url = '/', title = 'title', tags }: Props) => (
  <Flex justifyContent="space-between">
    <FacebookShareButton url={url}>
      <FacebookIcon logoFillColor="#3b5997" iconBgStyle={iconBg} />
    </FacebookShareButton>

    <TwitterShareButton url={url} title={title} via={twitterHandle.split('@').join('')} hashtags={tags}>
      <TwitterIcon logoFillColor="#00aced" iconBgStyle={iconBg} />
    </TwitterShareButton>

    <LinkedinShareButton url={url}>
      <LinkedinIcon logoFillColor="#007fb1" iconBgStyle={iconBg} />
    </LinkedinShareButton>

    <RedditShareButton url={url} title={title}>
      <RedditIcon logoFillColor="#5f99cf" iconBgStyle={iconBg} />
    </RedditShareButton>

    <WhatsappShareButton url={url} title={title}>
      <WhatsappIcon logoFillColor="#2cb742" iconBgStyle={iconBg} />
    </WhatsappShareButton>
  </Flex>
)

export default ShareButtons
