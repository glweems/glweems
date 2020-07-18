import * as React from 'react';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import styled from 'styled-components';
import { siteMetadata } from '../../.gatsby/config';
interface ShareButtonsProps {
  url: string;
  title: string;
  tags: string[];
}

export default function ShareButtons({ url, title, tags }: ShareButtonsProps) {
  return (
    <Styled>
      <div className="line" />
      <span>Share</span>

      <FacebookShareButton
        aria-label="shere to facebook"
        url={url}
        quote={title}
      >
        Facebook
      </FacebookShareButton>

      <TwitterShareButton
        aria-label="shere to twitter"
        url={url}
        title={title}
        via={siteMetadata.twitterHandle}
        hashtags={tags}
      >
        Twitter
      </TwitterShareButton>
    </Styled>
  );
}

const Styled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-top: ${({ theme }) => theme.space[6]};
  margin-bottom: ${({ theme }) => theme.space[6]};
  padding: ${({ theme }) => theme.space[6]};

  div,
  span,
  button {
    margin-right: 20px;
  }

  .line {
    flex-grow: 1;
    border-top: 1px solid ${({ theme }) => theme.colors.secondaryText};
    opacity: 0.5;
  }
  button {
    touch-action: manipulation;
    :focus {
      outline: ${({ theme }) => theme.colors.primary} auto 5px;
    }
    :hover {
      color: ${({ theme }) => theme.colors.primary} !important;
    }
  }

  span {
    color: ${({ theme }) => theme.colors.secondaryText};
    font-size: 70%;
    line-height: 2.5;
    text-transform: uppercase;
    opacity: 0.7;
  }
`;
