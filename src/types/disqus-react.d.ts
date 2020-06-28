import * as React from 'react';

export interface DisqusConfig {
  url?: string;
  identifier?: string;
  title?: string;
}

export interface DiscussionEmbedConfig extends DisqusConfig {
  categoryID?: string;
  language?: string;
  // Callbacks
  preData?: (...args: any[]) => any;
  preInit?: (...args: any[]) => any;
  onInit?: (...args: any[]) => any;
  onReady?: (...args: any[]) => any;
  afterRender?: (...args: any[]) => any;
  preReset?: (...args: any[]) => any;
  onIdentify?: (...args: any[]) => any;
  beforeComment?: (...args: any[]) => any;
  onNewComment?: (...args: any[]) => any;
  onPaginate?: (...args: any[]) => any;
}

export interface DiscussionEmbedProps {
  shortname: string;
  config: DiscussionEmbedConfig;
}

export interface CommentCountProps {
  shortname: string;
  config: DisqusConfig;
  children?: React.ReactNode;
}

export interface CommentEmbedProps {
  commentId: string;
  showParentComment?: boolean;
  showMedia?: boolean;
  width?: number;
  height?: number;
}

export interface IDisqus {
  CommentCount: React.Component<CommentCountProps, {}>;
  CommentEmbed: React.Component<CommentEmbedProps, {}>;
  DiscussionEmbed: React.Component<DiscussionEmbedProps, {}>;
}

declare class CommentCount extends React.Component<CommentCountProps, {}> {}
declare class CommentEmbed extends React.Component<CommentEmbedProps, {}> {}
declare class DiscussionEmbed extends React.Component<
  DiscussionEmbedProps,
  {}
> {}
declare const Disqus: {
  CommentCount: React.ComponentType<CommentCountProps>;
  CommentEmbed: React.ComponentType<CommentEmbedProps>;
  DiscussionEmbed: React.ComponentType<DiscussionEmbedProps>;
};

export { CommentCount, CommentEmbed, DiscussionEmbed };
export default Disqus;
