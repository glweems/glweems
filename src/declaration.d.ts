// This file is used to hold ambient type declarations, as well as type shims
// for npm module without type declarations, and assets files.

// For example, to shim modules without declarations, use:
// declare module 'package-without-declarations';

// And to shim assets, use (one file extension per `declare`):
// declare module '*.png';
declare module '*.module.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '@microlink/react';
declare module 'gatsby';
declare module 'gatsby-image';

interface BehanceProject {
  allowComments: number;
  areas: string[];
  canvasWidth: number;
  conceived: number;
  copyright: {
    description: string;
    license: string;
    license_id: number;
  };
  created: number;
  creatorID: number;
  description: string;
  editorVersion: number;
  fields: {
    slug: string;
  };
  id: string;
  matureAccess: string;
  matureContent: number;
  name: string;
  stats: {
    views: number;
    comments: number;
    appreciations: number;
  };
  tags: string[];
  tools: [
    {
      approved: string;
      category: string;
      category_id: number;
      category_label: string;
      id: number;
      synonym: {
        icon_url: string;
        gallery_url: string;
        download_url: string;
        icon_url_2x: string;
        name: string;
        synonym_id: number;
        tag_id: number;
        title: string;
        type: number;
        url: string;
      };
      title: string;
      url: string;
    },
    {
      approved: string;
      category: string;
      category_id: number;
      category_label: string;
      id: number;
      synonym: {
        icon_url: string;
        gallery_url: string;
        download_url: string;
        icon_url_2x: string;
        name: string;
        synonym_id: number;
        tag_id: number;
        title: string;
        type: number;
        url: string;
      };
      title: string;
      url: string;
    },
  ];
  url: string;
  covers: {
    size_original: string;
    size_max_808: string;
    size_404: string;
    size_230: string;
    size_202: string;
    size_115: string;
  };
}
