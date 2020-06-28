import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type ContentYaml = Node & {
  __typename?: 'ContentYaml';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  github?: Maybe<ContentYamlGithub>;
  linkedin?: Maybe<ContentYamlLinkedin>;
  medium?: Maybe<ContentYamlMedium>;
  behance?: Maybe<ContentYamlBehance>;
  instagram?: Maybe<ContentYamlInstagram>;
  email?: Maybe<ContentYamlEmail>;
};

export type ContentYamlBehance = {
  __typename?: 'ContentYamlBehance';
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
};

export type ContentYamlBehanceFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  username?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
};

export type ContentYamlConnection = {
  __typename?: 'ContentYamlConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentYamlEdge>;
  nodes: Array<ContentYaml>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentYamlGroupConnection>;
};

export type ContentYamlConnectionDistinctArgs = {
  field: ContentYamlFieldsEnum;
};

export type ContentYamlConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentYamlFieldsEnum;
};

export type ContentYamlEdge = {
  __typename?: 'ContentYamlEdge';
  next?: Maybe<ContentYaml>;
  node: ContentYaml;
  previous?: Maybe<ContentYaml>;
};

export type ContentYamlEmail = {
  __typename?: 'ContentYamlEmail';
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
};

export type ContentYamlEmailFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  username?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
};

export enum ContentYamlFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  GithubName = 'github___name',
  GithubUsername = 'github___username',
  GithubLink = 'github___link',
  GithubIcon = 'github___icon',
  LinkedinName = 'linkedin___name',
  LinkedinUsername = 'linkedin___username',
  LinkedinLink = 'linkedin___link',
  LinkedinIcon = 'linkedin___icon',
  MediumName = 'medium___name',
  MediumUsername = 'medium___username',
  MediumLink = 'medium___link',
  MediumIcon = 'medium___icon',
  BehanceName = 'behance___name',
  BehanceUsername = 'behance___username',
  BehanceLink = 'behance___link',
  BehanceIcon = 'behance___icon',
  InstagramName = 'instagram___name',
  InstagramUsername = 'instagram___username',
  InstagramLink = 'instagram___link',
  InstagramIcon = 'instagram___icon',
  EmailName = 'email___name',
  EmailUsername = 'email___username',
  EmailLink = 'email___link',
  EmailIcon = 'email___icon'
}

export type ContentYamlFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  github?: Maybe<ContentYamlGithubFilterInput>;
  linkedin?: Maybe<ContentYamlLinkedinFilterInput>;
  medium?: Maybe<ContentYamlMediumFilterInput>;
  behance?: Maybe<ContentYamlBehanceFilterInput>;
  instagram?: Maybe<ContentYamlInstagramFilterInput>;
  email?: Maybe<ContentYamlEmailFilterInput>;
};

export type ContentYamlGithub = {
  __typename?: 'ContentYamlGithub';
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
};

export type ContentYamlGithubFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  username?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
};

export type ContentYamlGroupConnection = {
  __typename?: 'ContentYamlGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentYamlEdge>;
  nodes: Array<ContentYaml>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentYamlInstagram = {
  __typename?: 'ContentYamlInstagram';
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
};

export type ContentYamlInstagramFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  username?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
};

export type ContentYamlLinkedin = {
  __typename?: 'ContentYamlLinkedin';
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
};

export type ContentYamlLinkedinFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  username?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
};

export type ContentYamlMedium = {
  __typename?: 'ContentYamlMedium';
  name?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
};

export type ContentYamlMediumFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  username?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
};

export type ContentYamlSortInput = {
  fields?: Maybe<Array<Maybe<ContentYamlFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type DesignsYaml = Node & {
  __typename?: 'DesignsYaml';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  url?: Maybe<Scalars['String']>;
  short_url?: Maybe<Scalars['String']>;
  tools?: Maybe<Array<Maybe<DesignsYamlTools>>>;
};

export type DesignsYamlConnection = {
  __typename?: 'DesignsYamlConnection';
  totalCount: Scalars['Int'];
  edges: Array<DesignsYamlEdge>;
  nodes: Array<DesignsYaml>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DesignsYamlGroupConnection>;
};

export type DesignsYamlConnectionDistinctArgs = {
  field: DesignsYamlFieldsEnum;
};

export type DesignsYamlConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DesignsYamlFieldsEnum;
};

export type DesignsYamlEdge = {
  __typename?: 'DesignsYamlEdge';
  next?: Maybe<DesignsYaml>;
  node: DesignsYaml;
  previous?: Maybe<DesignsYaml>;
};

export enum DesignsYamlFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  Slug = 'slug',
  Description = 'description',
  Tags = 'tags',
  Url = 'url',
  ShortUrl = 'short_url',
  Tools = 'tools',
  ToolsTitle = 'tools___title',
  ToolsSynonymIconUrl = 'tools___synonym___icon_url',
  ToolsSynonymName = 'tools___synonym___name'
}

export type DesignsYamlFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  short_url?: Maybe<StringQueryOperatorInput>;
  tools?: Maybe<DesignsYamlToolsFilterListInput>;
};

export type DesignsYamlFilterListInput = {
  elemMatch?: Maybe<DesignsYamlFilterInput>;
};

export type DesignsYamlGroupConnection = {
  __typename?: 'DesignsYamlGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<DesignsYamlEdge>;
  nodes: Array<DesignsYaml>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DesignsYamlSortInput = {
  fields?: Maybe<Array<Maybe<DesignsYamlFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DesignsYamlTools = {
  __typename?: 'DesignsYamlTools';
  title?: Maybe<Scalars['String']>;
  synonym?: Maybe<DesignsYamlToolsSynonym>;
};

export type DesignsYamlToolsFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  synonym?: Maybe<DesignsYamlToolsSynonymFilterInput>;
};

export type DesignsYamlToolsFilterListInput = {
  elemMatch?: Maybe<DesignsYamlToolsFilterInput>;
};

export type DesignsYamlToolsSynonym = {
  __typename?: 'DesignsYamlToolsSynonym';
  icon_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type DesignsYamlToolsSynonymFilterInput = {
  icon_url?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  __typename?: 'File';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  childContentYaml?: Maybe<ContentYaml>;
  childrenSideprojectsYaml?: Maybe<Array<Maybe<SideprojectsYaml>>>;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
  childrenDesignsYaml?: Maybe<Array<Maybe<DesignsYaml>>>;
};

export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  PublicUrl = 'publicURL',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpResolutionsBase64 = 'childImageSharp___resolutions___base64',
  ChildImageSharpResolutionsTracedSvg = 'childImageSharp___resolutions___tracedSVG',
  ChildImageSharpResolutionsAspectRatio = 'childImageSharp___resolutions___aspectRatio',
  ChildImageSharpResolutionsWidth = 'childImageSharp___resolutions___width',
  ChildImageSharpResolutionsHeight = 'childImageSharp___resolutions___height',
  ChildImageSharpResolutionsSrc = 'childImageSharp___resolutions___src',
  ChildImageSharpResolutionsSrcSet = 'childImageSharp___resolutions___srcSet',
  ChildImageSharpResolutionsSrcWebp = 'childImageSharp___resolutions___srcWebp',
  ChildImageSharpResolutionsSrcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
  ChildImageSharpResolutionsOriginalName = 'childImageSharp___resolutions___originalName',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpSizesBase64 = 'childImageSharp___sizes___base64',
  ChildImageSharpSizesTracedSvg = 'childImageSharp___sizes___tracedSVG',
  ChildImageSharpSizesAspectRatio = 'childImageSharp___sizes___aspectRatio',
  ChildImageSharpSizesSrc = 'childImageSharp___sizes___src',
  ChildImageSharpSizesSrcSet = 'childImageSharp___sizes___srcSet',
  ChildImageSharpSizesSrcWebp = 'childImageSharp___sizes___srcWebp',
  ChildImageSharpSizesSrcSetWebp = 'childImageSharp___sizes___srcSetWebp',
  ChildImageSharpSizesSizes = 'childImageSharp___sizes___sizes',
  ChildImageSharpSizesOriginalImg = 'childImageSharp___sizes___originalImg',
  ChildImageSharpSizesOriginalName = 'childImageSharp___sizes___originalName',
  ChildImageSharpSizesPresentationWidth = 'childImageSharp___sizes___presentationWidth',
  ChildImageSharpSizesPresentationHeight = 'childImageSharp___sizes___presentationHeight',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ChildContentYamlId = 'childContentYaml___id',
  ChildContentYamlParentId = 'childContentYaml___parent___id',
  ChildContentYamlParentParentId = 'childContentYaml___parent___parent___id',
  ChildContentYamlParentParentChildren = 'childContentYaml___parent___parent___children',
  ChildContentYamlParentChildren = 'childContentYaml___parent___children',
  ChildContentYamlParentChildrenId = 'childContentYaml___parent___children___id',
  ChildContentYamlParentChildrenChildren = 'childContentYaml___parent___children___children',
  ChildContentYamlParentInternalContent = 'childContentYaml___parent___internal___content',
  ChildContentYamlParentInternalContentDigest = 'childContentYaml___parent___internal___contentDigest',
  ChildContentYamlParentInternalDescription = 'childContentYaml___parent___internal___description',
  ChildContentYamlParentInternalFieldOwners = 'childContentYaml___parent___internal___fieldOwners',
  ChildContentYamlParentInternalIgnoreType = 'childContentYaml___parent___internal___ignoreType',
  ChildContentYamlParentInternalMediaType = 'childContentYaml___parent___internal___mediaType',
  ChildContentYamlParentInternalOwner = 'childContentYaml___parent___internal___owner',
  ChildContentYamlParentInternalType = 'childContentYaml___parent___internal___type',
  ChildContentYamlChildren = 'childContentYaml___children',
  ChildContentYamlChildrenId = 'childContentYaml___children___id',
  ChildContentYamlChildrenParentId = 'childContentYaml___children___parent___id',
  ChildContentYamlChildrenParentChildren = 'childContentYaml___children___parent___children',
  ChildContentYamlChildrenChildren = 'childContentYaml___children___children',
  ChildContentYamlChildrenChildrenId = 'childContentYaml___children___children___id',
  ChildContentYamlChildrenChildrenChildren = 'childContentYaml___children___children___children',
  ChildContentYamlChildrenInternalContent = 'childContentYaml___children___internal___content',
  ChildContentYamlChildrenInternalContentDigest = 'childContentYaml___children___internal___contentDigest',
  ChildContentYamlChildrenInternalDescription = 'childContentYaml___children___internal___description',
  ChildContentYamlChildrenInternalFieldOwners = 'childContentYaml___children___internal___fieldOwners',
  ChildContentYamlChildrenInternalIgnoreType = 'childContentYaml___children___internal___ignoreType',
  ChildContentYamlChildrenInternalMediaType = 'childContentYaml___children___internal___mediaType',
  ChildContentYamlChildrenInternalOwner = 'childContentYaml___children___internal___owner',
  ChildContentYamlChildrenInternalType = 'childContentYaml___children___internal___type',
  ChildContentYamlInternalContent = 'childContentYaml___internal___content',
  ChildContentYamlInternalContentDigest = 'childContentYaml___internal___contentDigest',
  ChildContentYamlInternalDescription = 'childContentYaml___internal___description',
  ChildContentYamlInternalFieldOwners = 'childContentYaml___internal___fieldOwners',
  ChildContentYamlInternalIgnoreType = 'childContentYaml___internal___ignoreType',
  ChildContentYamlInternalMediaType = 'childContentYaml___internal___mediaType',
  ChildContentYamlInternalOwner = 'childContentYaml___internal___owner',
  ChildContentYamlInternalType = 'childContentYaml___internal___type',
  ChildContentYamlGithubName = 'childContentYaml___github___name',
  ChildContentYamlGithubUsername = 'childContentYaml___github___username',
  ChildContentYamlGithubLink = 'childContentYaml___github___link',
  ChildContentYamlGithubIcon = 'childContentYaml___github___icon',
  ChildContentYamlLinkedinName = 'childContentYaml___linkedin___name',
  ChildContentYamlLinkedinUsername = 'childContentYaml___linkedin___username',
  ChildContentYamlLinkedinLink = 'childContentYaml___linkedin___link',
  ChildContentYamlLinkedinIcon = 'childContentYaml___linkedin___icon',
  ChildContentYamlMediumName = 'childContentYaml___medium___name',
  ChildContentYamlMediumUsername = 'childContentYaml___medium___username',
  ChildContentYamlMediumLink = 'childContentYaml___medium___link',
  ChildContentYamlMediumIcon = 'childContentYaml___medium___icon',
  ChildContentYamlBehanceName = 'childContentYaml___behance___name',
  ChildContentYamlBehanceUsername = 'childContentYaml___behance___username',
  ChildContentYamlBehanceLink = 'childContentYaml___behance___link',
  ChildContentYamlBehanceIcon = 'childContentYaml___behance___icon',
  ChildContentYamlInstagramName = 'childContentYaml___instagram___name',
  ChildContentYamlInstagramUsername = 'childContentYaml___instagram___username',
  ChildContentYamlInstagramLink = 'childContentYaml___instagram___link',
  ChildContentYamlInstagramIcon = 'childContentYaml___instagram___icon',
  ChildContentYamlEmailName = 'childContentYaml___email___name',
  ChildContentYamlEmailUsername = 'childContentYaml___email___username',
  ChildContentYamlEmailLink = 'childContentYaml___email___link',
  ChildContentYamlEmailIcon = 'childContentYaml___email___icon',
  ChildrenSideprojectsYaml = 'childrenSideprojectsYaml',
  ChildrenSideprojectsYamlId = 'childrenSideprojectsYaml___id',
  ChildrenSideprojectsYamlParentId = 'childrenSideprojectsYaml___parent___id',
  ChildrenSideprojectsYamlParentParentId = 'childrenSideprojectsYaml___parent___parent___id',
  ChildrenSideprojectsYamlParentParentChildren = 'childrenSideprojectsYaml___parent___parent___children',
  ChildrenSideprojectsYamlParentChildren = 'childrenSideprojectsYaml___parent___children',
  ChildrenSideprojectsYamlParentChildrenId = 'childrenSideprojectsYaml___parent___children___id',
  ChildrenSideprojectsYamlParentChildrenChildren = 'childrenSideprojectsYaml___parent___children___children',
  ChildrenSideprojectsYamlParentInternalContent = 'childrenSideprojectsYaml___parent___internal___content',
  ChildrenSideprojectsYamlParentInternalContentDigest = 'childrenSideprojectsYaml___parent___internal___contentDigest',
  ChildrenSideprojectsYamlParentInternalDescription = 'childrenSideprojectsYaml___parent___internal___description',
  ChildrenSideprojectsYamlParentInternalFieldOwners = 'childrenSideprojectsYaml___parent___internal___fieldOwners',
  ChildrenSideprojectsYamlParentInternalIgnoreType = 'childrenSideprojectsYaml___parent___internal___ignoreType',
  ChildrenSideprojectsYamlParentInternalMediaType = 'childrenSideprojectsYaml___parent___internal___mediaType',
  ChildrenSideprojectsYamlParentInternalOwner = 'childrenSideprojectsYaml___parent___internal___owner',
  ChildrenSideprojectsYamlParentInternalType = 'childrenSideprojectsYaml___parent___internal___type',
  ChildrenSideprojectsYamlChildren = 'childrenSideprojectsYaml___children',
  ChildrenSideprojectsYamlChildrenId = 'childrenSideprojectsYaml___children___id',
  ChildrenSideprojectsYamlChildrenParentId = 'childrenSideprojectsYaml___children___parent___id',
  ChildrenSideprojectsYamlChildrenParentChildren = 'childrenSideprojectsYaml___children___parent___children',
  ChildrenSideprojectsYamlChildrenChildren = 'childrenSideprojectsYaml___children___children',
  ChildrenSideprojectsYamlChildrenChildrenId = 'childrenSideprojectsYaml___children___children___id',
  ChildrenSideprojectsYamlChildrenChildrenChildren = 'childrenSideprojectsYaml___children___children___children',
  ChildrenSideprojectsYamlChildrenInternalContent = 'childrenSideprojectsYaml___children___internal___content',
  ChildrenSideprojectsYamlChildrenInternalContentDigest = 'childrenSideprojectsYaml___children___internal___contentDigest',
  ChildrenSideprojectsYamlChildrenInternalDescription = 'childrenSideprojectsYaml___children___internal___description',
  ChildrenSideprojectsYamlChildrenInternalFieldOwners = 'childrenSideprojectsYaml___children___internal___fieldOwners',
  ChildrenSideprojectsYamlChildrenInternalIgnoreType = 'childrenSideprojectsYaml___children___internal___ignoreType',
  ChildrenSideprojectsYamlChildrenInternalMediaType = 'childrenSideprojectsYaml___children___internal___mediaType',
  ChildrenSideprojectsYamlChildrenInternalOwner = 'childrenSideprojectsYaml___children___internal___owner',
  ChildrenSideprojectsYamlChildrenInternalType = 'childrenSideprojectsYaml___children___internal___type',
  ChildrenSideprojectsYamlInternalContent = 'childrenSideprojectsYaml___internal___content',
  ChildrenSideprojectsYamlInternalContentDigest = 'childrenSideprojectsYaml___internal___contentDigest',
  ChildrenSideprojectsYamlInternalDescription = 'childrenSideprojectsYaml___internal___description',
  ChildrenSideprojectsYamlInternalFieldOwners = 'childrenSideprojectsYaml___internal___fieldOwners',
  ChildrenSideprojectsYamlInternalIgnoreType = 'childrenSideprojectsYaml___internal___ignoreType',
  ChildrenSideprojectsYamlInternalMediaType = 'childrenSideprojectsYaml___internal___mediaType',
  ChildrenSideprojectsYamlInternalOwner = 'childrenSideprojectsYaml___internal___owner',
  ChildrenSideprojectsYamlInternalType = 'childrenSideprojectsYaml___internal___type',
  ChildrenSideprojectsYamlTitle = 'childrenSideprojectsYaml___title',
  ChildrenSideprojectsYamlImageSourceInstanceName = 'childrenSideprojectsYaml___image___sourceInstanceName',
  ChildrenSideprojectsYamlImageAbsolutePath = 'childrenSideprojectsYaml___image___absolutePath',
  ChildrenSideprojectsYamlImageRelativePath = 'childrenSideprojectsYaml___image___relativePath',
  ChildrenSideprojectsYamlImageExtension = 'childrenSideprojectsYaml___image___extension',
  ChildrenSideprojectsYamlImageSize = 'childrenSideprojectsYaml___image___size',
  ChildrenSideprojectsYamlImagePrettySize = 'childrenSideprojectsYaml___image___prettySize',
  ChildrenSideprojectsYamlImageModifiedTime = 'childrenSideprojectsYaml___image___modifiedTime',
  ChildrenSideprojectsYamlImageAccessTime = 'childrenSideprojectsYaml___image___accessTime',
  ChildrenSideprojectsYamlImageChangeTime = 'childrenSideprojectsYaml___image___changeTime',
  ChildrenSideprojectsYamlImageBirthTime = 'childrenSideprojectsYaml___image___birthTime',
  ChildrenSideprojectsYamlImageRoot = 'childrenSideprojectsYaml___image___root',
  ChildrenSideprojectsYamlImageDir = 'childrenSideprojectsYaml___image___dir',
  ChildrenSideprojectsYamlImageBase = 'childrenSideprojectsYaml___image___base',
  ChildrenSideprojectsYamlImageExt = 'childrenSideprojectsYaml___image___ext',
  ChildrenSideprojectsYamlImageName = 'childrenSideprojectsYaml___image___name',
  ChildrenSideprojectsYamlImageRelativeDirectory = 'childrenSideprojectsYaml___image___relativeDirectory',
  ChildrenSideprojectsYamlImageDev = 'childrenSideprojectsYaml___image___dev',
  ChildrenSideprojectsYamlImageMode = 'childrenSideprojectsYaml___image___mode',
  ChildrenSideprojectsYamlImageNlink = 'childrenSideprojectsYaml___image___nlink',
  ChildrenSideprojectsYamlImageUid = 'childrenSideprojectsYaml___image___uid',
  ChildrenSideprojectsYamlImageGid = 'childrenSideprojectsYaml___image___gid',
  ChildrenSideprojectsYamlImageRdev = 'childrenSideprojectsYaml___image___rdev',
  ChildrenSideprojectsYamlImageIno = 'childrenSideprojectsYaml___image___ino',
  ChildrenSideprojectsYamlImageAtimeMs = 'childrenSideprojectsYaml___image___atimeMs',
  ChildrenSideprojectsYamlImageMtimeMs = 'childrenSideprojectsYaml___image___mtimeMs',
  ChildrenSideprojectsYamlImageCtimeMs = 'childrenSideprojectsYaml___image___ctimeMs',
  ChildrenSideprojectsYamlImageAtime = 'childrenSideprojectsYaml___image___atime',
  ChildrenSideprojectsYamlImageMtime = 'childrenSideprojectsYaml___image___mtime',
  ChildrenSideprojectsYamlImageCtime = 'childrenSideprojectsYaml___image___ctime',
  ChildrenSideprojectsYamlImageBirthtime = 'childrenSideprojectsYaml___image___birthtime',
  ChildrenSideprojectsYamlImageBirthtimeMs = 'childrenSideprojectsYaml___image___birthtimeMs',
  ChildrenSideprojectsYamlImageBlksize = 'childrenSideprojectsYaml___image___blksize',
  ChildrenSideprojectsYamlImageBlocks = 'childrenSideprojectsYaml___image___blocks',
  ChildrenSideprojectsYamlImagePublicUrl = 'childrenSideprojectsYaml___image___publicURL',
  ChildrenSideprojectsYamlImageChildImageSharpId = 'childrenSideprojectsYaml___image___childImageSharp___id',
  ChildrenSideprojectsYamlImageChildImageSharpChildren = 'childrenSideprojectsYaml___image___childImageSharp___children',
  ChildrenSideprojectsYamlImageId = 'childrenSideprojectsYaml___image___id',
  ChildrenSideprojectsYamlImageParentId = 'childrenSideprojectsYaml___image___parent___id',
  ChildrenSideprojectsYamlImageParentChildren = 'childrenSideprojectsYaml___image___parent___children',
  ChildrenSideprojectsYamlImageChildren = 'childrenSideprojectsYaml___image___children',
  ChildrenSideprojectsYamlImageChildrenId = 'childrenSideprojectsYaml___image___children___id',
  ChildrenSideprojectsYamlImageChildrenChildren = 'childrenSideprojectsYaml___image___children___children',
  ChildrenSideprojectsYamlImageInternalContent = 'childrenSideprojectsYaml___image___internal___content',
  ChildrenSideprojectsYamlImageInternalContentDigest = 'childrenSideprojectsYaml___image___internal___contentDigest',
  ChildrenSideprojectsYamlImageInternalDescription = 'childrenSideprojectsYaml___image___internal___description',
  ChildrenSideprojectsYamlImageInternalFieldOwners = 'childrenSideprojectsYaml___image___internal___fieldOwners',
  ChildrenSideprojectsYamlImageInternalIgnoreType = 'childrenSideprojectsYaml___image___internal___ignoreType',
  ChildrenSideprojectsYamlImageInternalMediaType = 'childrenSideprojectsYaml___image___internal___mediaType',
  ChildrenSideprojectsYamlImageInternalOwner = 'childrenSideprojectsYaml___image___internal___owner',
  ChildrenSideprojectsYamlImageInternalType = 'childrenSideprojectsYaml___image___internal___type',
  ChildrenSideprojectsYamlImageChildContentYamlId = 'childrenSideprojectsYaml___image___childContentYaml___id',
  ChildrenSideprojectsYamlImageChildContentYamlChildren = 'childrenSideprojectsYaml___image___childContentYaml___children',
  ChildrenSideprojectsYamlImageChildrenSideprojectsYaml = 'childrenSideprojectsYaml___image___childrenSideprojectsYaml',
  ChildrenSideprojectsYamlImageChildrenSideprojectsYamlId = 'childrenSideprojectsYaml___image___childrenSideprojectsYaml___id',
  ChildrenSideprojectsYamlImageChildrenSideprojectsYamlChildren = 'childrenSideprojectsYaml___image___childrenSideprojectsYaml___children',
  ChildrenSideprojectsYamlImageChildrenSideprojectsYamlTitle = 'childrenSideprojectsYaml___image___childrenSideprojectsYaml___title',
  ChildrenSideprojectsYamlImageChildrenSideprojectsYamlLink = 'childrenSideprojectsYaml___image___childrenSideprojectsYaml___link',
  ChildrenSideprojectsYamlImageChildrenSideprojectsYamlDescription = 'childrenSideprojectsYaml___image___childrenSideprojectsYaml___description',
  ChildrenSideprojectsYamlImageChildrenSideprojectsYamlGithub = 'childrenSideprojectsYaml___image___childrenSideprojectsYaml___github',
  ChildrenSideprojectsYamlImageChildrenSideprojectsYamlTags = 'childrenSideprojectsYaml___image___childrenSideprojectsYaml___tags',
  ChildrenSideprojectsYamlImageChildMarkdownRemarkId = 'childrenSideprojectsYaml___image___childMarkdownRemark___id',
  ChildrenSideprojectsYamlImageChildMarkdownRemarkExcerpt = 'childrenSideprojectsYaml___image___childMarkdownRemark___excerpt',
  ChildrenSideprojectsYamlImageChildMarkdownRemarkRawMarkdownBody = 'childrenSideprojectsYaml___image___childMarkdownRemark___rawMarkdownBody',
  ChildrenSideprojectsYamlImageChildMarkdownRemarkFileAbsolutePath = 'childrenSideprojectsYaml___image___childMarkdownRemark___fileAbsolutePath',
  ChildrenSideprojectsYamlImageChildMarkdownRemarkHtml = 'childrenSideprojectsYaml___image___childMarkdownRemark___html',
  ChildrenSideprojectsYamlImageChildMarkdownRemarkHtmlAst = 'childrenSideprojectsYaml___image___childMarkdownRemark___htmlAst',
  ChildrenSideprojectsYamlImageChildMarkdownRemarkExcerptAst = 'childrenSideprojectsYaml___image___childMarkdownRemark___excerptAst',
  ChildrenSideprojectsYamlImageChildMarkdownRemarkHeadings = 'childrenSideprojectsYaml___image___childMarkdownRemark___headings',
  ChildrenSideprojectsYamlImageChildMarkdownRemarkTimeToRead = 'childrenSideprojectsYaml___image___childMarkdownRemark___timeToRead',
  ChildrenSideprojectsYamlImageChildMarkdownRemarkTableOfContents = 'childrenSideprojectsYaml___image___childMarkdownRemark___tableOfContents',
  ChildrenSideprojectsYamlImageChildMarkdownRemarkUrl = 'childrenSideprojectsYaml___image___childMarkdownRemark___url',
  ChildrenSideprojectsYamlImageChildMarkdownRemarkDisqusIdentifier = 'childrenSideprojectsYaml___image___childMarkdownRemark___disqusIdentifier',
  ChildrenSideprojectsYamlImageChildMarkdownRemarkChildren = 'childrenSideprojectsYaml___image___childMarkdownRemark___children',
  ChildrenSideprojectsYamlImageChildrenDesignsYaml = 'childrenSideprojectsYaml___image___childrenDesignsYaml',
  ChildrenSideprojectsYamlImageChildrenDesignsYamlId = 'childrenSideprojectsYaml___image___childrenDesignsYaml___id',
  ChildrenSideprojectsYamlImageChildrenDesignsYamlChildren = 'childrenSideprojectsYaml___image___childrenDesignsYaml___children',
  ChildrenSideprojectsYamlImageChildrenDesignsYamlName = 'childrenSideprojectsYaml___image___childrenDesignsYaml___name',
  ChildrenSideprojectsYamlImageChildrenDesignsYamlSlug = 'childrenSideprojectsYaml___image___childrenDesignsYaml___slug',
  ChildrenSideprojectsYamlImageChildrenDesignsYamlDescription = 'childrenSideprojectsYaml___image___childrenDesignsYaml___description',
  ChildrenSideprojectsYamlImageChildrenDesignsYamlTags = 'childrenSideprojectsYaml___image___childrenDesignsYaml___tags',
  ChildrenSideprojectsYamlImageChildrenDesignsYamlUrl = 'childrenSideprojectsYaml___image___childrenDesignsYaml___url',
  ChildrenSideprojectsYamlImageChildrenDesignsYamlShortUrl = 'childrenSideprojectsYaml___image___childrenDesignsYaml___short_url',
  ChildrenSideprojectsYamlImageChildrenDesignsYamlTools = 'childrenSideprojectsYaml___image___childrenDesignsYaml___tools',
  ChildrenSideprojectsYamlLink = 'childrenSideprojectsYaml___link',
  ChildrenSideprojectsYamlDescription = 'childrenSideprojectsYaml___description',
  ChildrenSideprojectsYamlGithub = 'childrenSideprojectsYaml___github',
  ChildrenSideprojectsYamlTags = 'childrenSideprojectsYaml___tags',
  ChildMarkdownRemarkId = 'childMarkdownRemark___id',
  ChildMarkdownRemarkFrontmatterTitle = 'childMarkdownRemark___frontmatter___title',
  ChildMarkdownRemarkFrontmatterId = 'childMarkdownRemark___frontmatter___id',
  ChildMarkdownRemarkFrontmatterPath = 'childMarkdownRemark___frontmatter___path',
  ChildMarkdownRemarkFrontmatterThumbnailSourceInstanceName = 'childMarkdownRemark___frontmatter___thumbnail___sourceInstanceName',
  ChildMarkdownRemarkFrontmatterThumbnailAbsolutePath = 'childMarkdownRemark___frontmatter___thumbnail___absolutePath',
  ChildMarkdownRemarkFrontmatterThumbnailRelativePath = 'childMarkdownRemark___frontmatter___thumbnail___relativePath',
  ChildMarkdownRemarkFrontmatterThumbnailExtension = 'childMarkdownRemark___frontmatter___thumbnail___extension',
  ChildMarkdownRemarkFrontmatterThumbnailSize = 'childMarkdownRemark___frontmatter___thumbnail___size',
  ChildMarkdownRemarkFrontmatterThumbnailPrettySize = 'childMarkdownRemark___frontmatter___thumbnail___prettySize',
  ChildMarkdownRemarkFrontmatterThumbnailModifiedTime = 'childMarkdownRemark___frontmatter___thumbnail___modifiedTime',
  ChildMarkdownRemarkFrontmatterThumbnailAccessTime = 'childMarkdownRemark___frontmatter___thumbnail___accessTime',
  ChildMarkdownRemarkFrontmatterThumbnailChangeTime = 'childMarkdownRemark___frontmatter___thumbnail___changeTime',
  ChildMarkdownRemarkFrontmatterThumbnailBirthTime = 'childMarkdownRemark___frontmatter___thumbnail___birthTime',
  ChildMarkdownRemarkFrontmatterThumbnailRoot = 'childMarkdownRemark___frontmatter___thumbnail___root',
  ChildMarkdownRemarkFrontmatterThumbnailDir = 'childMarkdownRemark___frontmatter___thumbnail___dir',
  ChildMarkdownRemarkFrontmatterThumbnailBase = 'childMarkdownRemark___frontmatter___thumbnail___base',
  ChildMarkdownRemarkFrontmatterThumbnailExt = 'childMarkdownRemark___frontmatter___thumbnail___ext',
  ChildMarkdownRemarkFrontmatterThumbnailName = 'childMarkdownRemark___frontmatter___thumbnail___name',
  ChildMarkdownRemarkFrontmatterThumbnailRelativeDirectory = 'childMarkdownRemark___frontmatter___thumbnail___relativeDirectory',
  ChildMarkdownRemarkFrontmatterThumbnailDev = 'childMarkdownRemark___frontmatter___thumbnail___dev',
  ChildMarkdownRemarkFrontmatterThumbnailMode = 'childMarkdownRemark___frontmatter___thumbnail___mode',
  ChildMarkdownRemarkFrontmatterThumbnailNlink = 'childMarkdownRemark___frontmatter___thumbnail___nlink',
  ChildMarkdownRemarkFrontmatterThumbnailUid = 'childMarkdownRemark___frontmatter___thumbnail___uid',
  ChildMarkdownRemarkFrontmatterThumbnailGid = 'childMarkdownRemark___frontmatter___thumbnail___gid',
  ChildMarkdownRemarkFrontmatterThumbnailRdev = 'childMarkdownRemark___frontmatter___thumbnail___rdev',
  ChildMarkdownRemarkFrontmatterThumbnailIno = 'childMarkdownRemark___frontmatter___thumbnail___ino',
  ChildMarkdownRemarkFrontmatterThumbnailAtimeMs = 'childMarkdownRemark___frontmatter___thumbnail___atimeMs',
  ChildMarkdownRemarkFrontmatterThumbnailMtimeMs = 'childMarkdownRemark___frontmatter___thumbnail___mtimeMs',
  ChildMarkdownRemarkFrontmatterThumbnailCtimeMs = 'childMarkdownRemark___frontmatter___thumbnail___ctimeMs',
  ChildMarkdownRemarkFrontmatterThumbnailAtime = 'childMarkdownRemark___frontmatter___thumbnail___atime',
  ChildMarkdownRemarkFrontmatterThumbnailMtime = 'childMarkdownRemark___frontmatter___thumbnail___mtime',
  ChildMarkdownRemarkFrontmatterThumbnailCtime = 'childMarkdownRemark___frontmatter___thumbnail___ctime',
  ChildMarkdownRemarkFrontmatterThumbnailBirthtime = 'childMarkdownRemark___frontmatter___thumbnail___birthtime',
  ChildMarkdownRemarkFrontmatterThumbnailBirthtimeMs = 'childMarkdownRemark___frontmatter___thumbnail___birthtimeMs',
  ChildMarkdownRemarkFrontmatterThumbnailBlksize = 'childMarkdownRemark___frontmatter___thumbnail___blksize',
  ChildMarkdownRemarkFrontmatterThumbnailBlocks = 'childMarkdownRemark___frontmatter___thumbnail___blocks',
  ChildMarkdownRemarkFrontmatterThumbnailPublicUrl = 'childMarkdownRemark___frontmatter___thumbnail___publicURL',
  ChildMarkdownRemarkFrontmatterThumbnailId = 'childMarkdownRemark___frontmatter___thumbnail___id',
  ChildMarkdownRemarkFrontmatterThumbnailChildren = 'childMarkdownRemark___frontmatter___thumbnail___children',
  ChildMarkdownRemarkFrontmatterThumbnailChildrenSideprojectsYaml = 'childMarkdownRemark___frontmatter___thumbnail___childrenSideprojectsYaml',
  ChildMarkdownRemarkFrontmatterThumbnailChildrenDesignsYaml = 'childMarkdownRemark___frontmatter___thumbnail___childrenDesignsYaml',
  ChildMarkdownRemarkFrontmatterDate = 'childMarkdownRemark___frontmatter___date',
  ChildMarkdownRemarkFrontmatterNext = 'childMarkdownRemark___frontmatter___next',
  ChildMarkdownRemarkFrontmatterSubtitle = 'childMarkdownRemark___frontmatter___subtitle',
  ChildMarkdownRemarkFrontmatterTags = 'childMarkdownRemark___frontmatter___tags',
  ChildMarkdownRemarkFrontmatterPopular = 'childMarkdownRemark___frontmatter___popular',
  ChildMarkdownRemarkExcerpt = 'childMarkdownRemark___excerpt',
  ChildMarkdownRemarkRawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  ChildMarkdownRemarkFileAbsolutePath = 'childMarkdownRemark___fileAbsolutePath',
  ChildMarkdownRemarkHtml = 'childMarkdownRemark___html',
  ChildMarkdownRemarkHtmlAst = 'childMarkdownRemark___htmlAst',
  ChildMarkdownRemarkExcerptAst = 'childMarkdownRemark___excerptAst',
  ChildMarkdownRemarkHeadings = 'childMarkdownRemark___headings',
  ChildMarkdownRemarkHeadingsId = 'childMarkdownRemark___headings___id',
  ChildMarkdownRemarkHeadingsValue = 'childMarkdownRemark___headings___value',
  ChildMarkdownRemarkHeadingsDepth = 'childMarkdownRemark___headings___depth',
  ChildMarkdownRemarkTimeToRead = 'childMarkdownRemark___timeToRead',
  ChildMarkdownRemarkTableOfContents = 'childMarkdownRemark___tableOfContents',
  ChildMarkdownRemarkWordCountParagraphs = 'childMarkdownRemark___wordCount___paragraphs',
  ChildMarkdownRemarkWordCountSentences = 'childMarkdownRemark___wordCount___sentences',
  ChildMarkdownRemarkWordCountWords = 'childMarkdownRemark___wordCount___words',
  ChildMarkdownRemarkUrl = 'childMarkdownRemark___url',
  ChildMarkdownRemarkDisqusIdentifier = 'childMarkdownRemark___disqusIdentifier',
  ChildMarkdownRemarkParentId = 'childMarkdownRemark___parent___id',
  ChildMarkdownRemarkParentParentId = 'childMarkdownRemark___parent___parent___id',
  ChildMarkdownRemarkParentParentChildren = 'childMarkdownRemark___parent___parent___children',
  ChildMarkdownRemarkParentChildren = 'childMarkdownRemark___parent___children',
  ChildMarkdownRemarkParentChildrenId = 'childMarkdownRemark___parent___children___id',
  ChildMarkdownRemarkParentChildrenChildren = 'childMarkdownRemark___parent___children___children',
  ChildMarkdownRemarkParentInternalContent = 'childMarkdownRemark___parent___internal___content',
  ChildMarkdownRemarkParentInternalContentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  ChildMarkdownRemarkParentInternalDescription = 'childMarkdownRemark___parent___internal___description',
  ChildMarkdownRemarkParentInternalFieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  ChildMarkdownRemarkParentInternalIgnoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  ChildMarkdownRemarkParentInternalMediaType = 'childMarkdownRemark___parent___internal___mediaType',
  ChildMarkdownRemarkParentInternalOwner = 'childMarkdownRemark___parent___internal___owner',
  ChildMarkdownRemarkParentInternalType = 'childMarkdownRemark___parent___internal___type',
  ChildMarkdownRemarkChildren = 'childMarkdownRemark___children',
  ChildMarkdownRemarkChildrenId = 'childMarkdownRemark___children___id',
  ChildMarkdownRemarkChildrenParentId = 'childMarkdownRemark___children___parent___id',
  ChildMarkdownRemarkChildrenParentChildren = 'childMarkdownRemark___children___parent___children',
  ChildMarkdownRemarkChildrenChildren = 'childMarkdownRemark___children___children',
  ChildMarkdownRemarkChildrenChildrenId = 'childMarkdownRemark___children___children___id',
  ChildMarkdownRemarkChildrenChildrenChildren = 'childMarkdownRemark___children___children___children',
  ChildMarkdownRemarkChildrenInternalContent = 'childMarkdownRemark___children___internal___content',
  ChildMarkdownRemarkChildrenInternalContentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  ChildMarkdownRemarkChildrenInternalDescription = 'childMarkdownRemark___children___internal___description',
  ChildMarkdownRemarkChildrenInternalFieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  ChildMarkdownRemarkChildrenInternalIgnoreType = 'childMarkdownRemark___children___internal___ignoreType',
  ChildMarkdownRemarkChildrenInternalMediaType = 'childMarkdownRemark___children___internal___mediaType',
  ChildMarkdownRemarkChildrenInternalOwner = 'childMarkdownRemark___children___internal___owner',
  ChildMarkdownRemarkChildrenInternalType = 'childMarkdownRemark___children___internal___type',
  ChildMarkdownRemarkInternalContent = 'childMarkdownRemark___internal___content',
  ChildMarkdownRemarkInternalContentDigest = 'childMarkdownRemark___internal___contentDigest',
  ChildMarkdownRemarkInternalDescription = 'childMarkdownRemark___internal___description',
  ChildMarkdownRemarkInternalFieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  ChildMarkdownRemarkInternalIgnoreType = 'childMarkdownRemark___internal___ignoreType',
  ChildMarkdownRemarkInternalMediaType = 'childMarkdownRemark___internal___mediaType',
  ChildMarkdownRemarkInternalOwner = 'childMarkdownRemark___internal___owner',
  ChildMarkdownRemarkInternalType = 'childMarkdownRemark___internal___type',
  ChildrenDesignsYaml = 'childrenDesignsYaml',
  ChildrenDesignsYamlId = 'childrenDesignsYaml___id',
  ChildrenDesignsYamlParentId = 'childrenDesignsYaml___parent___id',
  ChildrenDesignsYamlParentParentId = 'childrenDesignsYaml___parent___parent___id',
  ChildrenDesignsYamlParentParentChildren = 'childrenDesignsYaml___parent___parent___children',
  ChildrenDesignsYamlParentChildren = 'childrenDesignsYaml___parent___children',
  ChildrenDesignsYamlParentChildrenId = 'childrenDesignsYaml___parent___children___id',
  ChildrenDesignsYamlParentChildrenChildren = 'childrenDesignsYaml___parent___children___children',
  ChildrenDesignsYamlParentInternalContent = 'childrenDesignsYaml___parent___internal___content',
  ChildrenDesignsYamlParentInternalContentDigest = 'childrenDesignsYaml___parent___internal___contentDigest',
  ChildrenDesignsYamlParentInternalDescription = 'childrenDesignsYaml___parent___internal___description',
  ChildrenDesignsYamlParentInternalFieldOwners = 'childrenDesignsYaml___parent___internal___fieldOwners',
  ChildrenDesignsYamlParentInternalIgnoreType = 'childrenDesignsYaml___parent___internal___ignoreType',
  ChildrenDesignsYamlParentInternalMediaType = 'childrenDesignsYaml___parent___internal___mediaType',
  ChildrenDesignsYamlParentInternalOwner = 'childrenDesignsYaml___parent___internal___owner',
  ChildrenDesignsYamlParentInternalType = 'childrenDesignsYaml___parent___internal___type',
  ChildrenDesignsYamlChildren = 'childrenDesignsYaml___children',
  ChildrenDesignsYamlChildrenId = 'childrenDesignsYaml___children___id',
  ChildrenDesignsYamlChildrenParentId = 'childrenDesignsYaml___children___parent___id',
  ChildrenDesignsYamlChildrenParentChildren = 'childrenDesignsYaml___children___parent___children',
  ChildrenDesignsYamlChildrenChildren = 'childrenDesignsYaml___children___children',
  ChildrenDesignsYamlChildrenChildrenId = 'childrenDesignsYaml___children___children___id',
  ChildrenDesignsYamlChildrenChildrenChildren = 'childrenDesignsYaml___children___children___children',
  ChildrenDesignsYamlChildrenInternalContent = 'childrenDesignsYaml___children___internal___content',
  ChildrenDesignsYamlChildrenInternalContentDigest = 'childrenDesignsYaml___children___internal___contentDigest',
  ChildrenDesignsYamlChildrenInternalDescription = 'childrenDesignsYaml___children___internal___description',
  ChildrenDesignsYamlChildrenInternalFieldOwners = 'childrenDesignsYaml___children___internal___fieldOwners',
  ChildrenDesignsYamlChildrenInternalIgnoreType = 'childrenDesignsYaml___children___internal___ignoreType',
  ChildrenDesignsYamlChildrenInternalMediaType = 'childrenDesignsYaml___children___internal___mediaType',
  ChildrenDesignsYamlChildrenInternalOwner = 'childrenDesignsYaml___children___internal___owner',
  ChildrenDesignsYamlChildrenInternalType = 'childrenDesignsYaml___children___internal___type',
  ChildrenDesignsYamlInternalContent = 'childrenDesignsYaml___internal___content',
  ChildrenDesignsYamlInternalContentDigest = 'childrenDesignsYaml___internal___contentDigest',
  ChildrenDesignsYamlInternalDescription = 'childrenDesignsYaml___internal___description',
  ChildrenDesignsYamlInternalFieldOwners = 'childrenDesignsYaml___internal___fieldOwners',
  ChildrenDesignsYamlInternalIgnoreType = 'childrenDesignsYaml___internal___ignoreType',
  ChildrenDesignsYamlInternalMediaType = 'childrenDesignsYaml___internal___mediaType',
  ChildrenDesignsYamlInternalOwner = 'childrenDesignsYaml___internal___owner',
  ChildrenDesignsYamlInternalType = 'childrenDesignsYaml___internal___type',
  ChildrenDesignsYamlName = 'childrenDesignsYaml___name',
  ChildrenDesignsYamlSlug = 'childrenDesignsYaml___slug',
  ChildrenDesignsYamlDescription = 'childrenDesignsYaml___description',
  ChildrenDesignsYamlTags = 'childrenDesignsYaml___tags',
  ChildrenDesignsYamlUrl = 'childrenDesignsYaml___url',
  ChildrenDesignsYamlShortUrl = 'childrenDesignsYaml___short_url',
  ChildrenDesignsYamlTools = 'childrenDesignsYaml___tools',
  ChildrenDesignsYamlToolsTitle = 'childrenDesignsYaml___tools___title',
  ChildrenDesignsYamlToolsSynonymIconUrl = 'childrenDesignsYaml___tools___synonym___icon_url',
  ChildrenDesignsYamlToolsSynonymName = 'childrenDesignsYaml___tools___synonym___name'
}

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childContentYaml?: Maybe<ContentYamlFilterInput>;
  childrenSideprojectsYaml?: Maybe<SideprojectsYamlFilterListInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
  childrenDesignsYaml?: Maybe<DesignsYamlFilterListInput>;
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export enum ImageCropFocus {
  Center = 'CENTER',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  East = 'EAST',
  Southeast = 'SOUTHEAST',
  South = 'SOUTH',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
  Northwest = 'NORTHWEST',
  Entropy = 'ENTROPY',
  Attention = 'ATTENTION'
}

export enum ImageFit {
  Cover = 'COVER',
  Contain = 'CONTAIN',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE'
}

export enum ImageFormat {
  NoChange = 'NO_CHANGE',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP'
}

export type ImageSharp = Node & {
  __typename?: 'ImageSharp';
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge';
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedOriginalName = 'fixed___originalName',
  ResolutionsBase64 = 'resolutions___base64',
  ResolutionsTracedSvg = 'resolutions___tracedSVG',
  ResolutionsAspectRatio = 'resolutions___aspectRatio',
  ResolutionsWidth = 'resolutions___width',
  ResolutionsHeight = 'resolutions___height',
  ResolutionsSrc = 'resolutions___src',
  ResolutionsSrcSet = 'resolutions___srcSet',
  ResolutionsSrcWebp = 'resolutions___srcWebp',
  ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
  ResolutionsOriginalName = 'resolutions___originalName',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidPresentationHeight = 'fluid___presentationHeight',
  SizesBase64 = 'sizes___base64',
  SizesTracedSvg = 'sizes___tracedSVG',
  SizesAspectRatio = 'sizes___aspectRatio',
  SizesSrc = 'sizes___src',
  SizesSrcSet = 'sizes___srcSet',
  SizesSrcWebp = 'sizes___srcWebp',
  SizesSrcSetWebp = 'sizes___srcSetWebp',
  SizesSizes = 'sizes___sizes',
  SizesOriginalImg = 'sizes___originalImg',
  SizesOriginalName = 'sizes___originalName',
  SizesPresentationWidth = 'sizes___presentationWidth',
  SizesPresentationHeight = 'sizes___presentationHeight',
  OriginalWidth = 'original___width',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeOriginalName = 'resize___originalName',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize';
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  __typename?: 'ImageSharpResolutions';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  __typename?: 'ImageSharpSizes';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export enum MarkdownExcerptFormats {
  Plain = 'PLAIN',
  Html = 'HTML',
  Markdown = 'MARKDOWN'
}

export type MarkdownHeading = {
  __typename?: 'MarkdownHeading';
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MarkdownHeadingFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>;
};

export enum MarkdownHeadingLevels {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6'
}

export type MarkdownRemark = Node & {
  __typename?: 'MarkdownRemark';
  id: Scalars['ID'];
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
  excerpt?: Maybe<Scalars['String']>;
  rawMarkdownBody?: Maybe<Scalars['String']>;
  fileAbsolutePath?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['String']>;
  htmlAst?: Maybe<Scalars['JSON']>;
  excerptAst?: Maybe<Scalars['JSON']>;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead?: Maybe<Scalars['Int']>;
  tableOfContents?: Maybe<Scalars['String']>;
  wordCount?: Maybe<MarkdownWordCount>;
  url?: Maybe<Scalars['String']>;
  disqusIdentifier?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};

export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};

export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>;
};

export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkConnection = {
  __typename?: 'MarkdownRemarkConnection';
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MarkdownRemarkGroupConnection>;
};

export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  __typename?: 'MarkdownRemarkEdge';
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export enum MarkdownRemarkFieldsEnum {
  Id = 'id',
  FrontmatterTitle = 'frontmatter___title',
  FrontmatterId = 'frontmatter___id',
  FrontmatterPath = 'frontmatter___path',
  FrontmatterThumbnailSourceInstanceName = 'frontmatter___thumbnail___sourceInstanceName',
  FrontmatterThumbnailAbsolutePath = 'frontmatter___thumbnail___absolutePath',
  FrontmatterThumbnailRelativePath = 'frontmatter___thumbnail___relativePath',
  FrontmatterThumbnailExtension = 'frontmatter___thumbnail___extension',
  FrontmatterThumbnailSize = 'frontmatter___thumbnail___size',
  FrontmatterThumbnailPrettySize = 'frontmatter___thumbnail___prettySize',
  FrontmatterThumbnailModifiedTime = 'frontmatter___thumbnail___modifiedTime',
  FrontmatterThumbnailAccessTime = 'frontmatter___thumbnail___accessTime',
  FrontmatterThumbnailChangeTime = 'frontmatter___thumbnail___changeTime',
  FrontmatterThumbnailBirthTime = 'frontmatter___thumbnail___birthTime',
  FrontmatterThumbnailRoot = 'frontmatter___thumbnail___root',
  FrontmatterThumbnailDir = 'frontmatter___thumbnail___dir',
  FrontmatterThumbnailBase = 'frontmatter___thumbnail___base',
  FrontmatterThumbnailExt = 'frontmatter___thumbnail___ext',
  FrontmatterThumbnailName = 'frontmatter___thumbnail___name',
  FrontmatterThumbnailRelativeDirectory = 'frontmatter___thumbnail___relativeDirectory',
  FrontmatterThumbnailDev = 'frontmatter___thumbnail___dev',
  FrontmatterThumbnailMode = 'frontmatter___thumbnail___mode',
  FrontmatterThumbnailNlink = 'frontmatter___thumbnail___nlink',
  FrontmatterThumbnailUid = 'frontmatter___thumbnail___uid',
  FrontmatterThumbnailGid = 'frontmatter___thumbnail___gid',
  FrontmatterThumbnailRdev = 'frontmatter___thumbnail___rdev',
  FrontmatterThumbnailIno = 'frontmatter___thumbnail___ino',
  FrontmatterThumbnailAtimeMs = 'frontmatter___thumbnail___atimeMs',
  FrontmatterThumbnailMtimeMs = 'frontmatter___thumbnail___mtimeMs',
  FrontmatterThumbnailCtimeMs = 'frontmatter___thumbnail___ctimeMs',
  FrontmatterThumbnailAtime = 'frontmatter___thumbnail___atime',
  FrontmatterThumbnailMtime = 'frontmatter___thumbnail___mtime',
  FrontmatterThumbnailCtime = 'frontmatter___thumbnail___ctime',
  FrontmatterThumbnailBirthtime = 'frontmatter___thumbnail___birthtime',
  FrontmatterThumbnailBirthtimeMs = 'frontmatter___thumbnail___birthtimeMs',
  FrontmatterThumbnailBlksize = 'frontmatter___thumbnail___blksize',
  FrontmatterThumbnailBlocks = 'frontmatter___thumbnail___blocks',
  FrontmatterThumbnailPublicUrl = 'frontmatter___thumbnail___publicURL',
  FrontmatterThumbnailChildImageSharpId = 'frontmatter___thumbnail___childImageSharp___id',
  FrontmatterThumbnailChildImageSharpChildren = 'frontmatter___thumbnail___childImageSharp___children',
  FrontmatterThumbnailId = 'frontmatter___thumbnail___id',
  FrontmatterThumbnailParentId = 'frontmatter___thumbnail___parent___id',
  FrontmatterThumbnailParentChildren = 'frontmatter___thumbnail___parent___children',
  FrontmatterThumbnailChildren = 'frontmatter___thumbnail___children',
  FrontmatterThumbnailChildrenId = 'frontmatter___thumbnail___children___id',
  FrontmatterThumbnailChildrenChildren = 'frontmatter___thumbnail___children___children',
  FrontmatterThumbnailInternalContent = 'frontmatter___thumbnail___internal___content',
  FrontmatterThumbnailInternalContentDigest = 'frontmatter___thumbnail___internal___contentDigest',
  FrontmatterThumbnailInternalDescription = 'frontmatter___thumbnail___internal___description',
  FrontmatterThumbnailInternalFieldOwners = 'frontmatter___thumbnail___internal___fieldOwners',
  FrontmatterThumbnailInternalIgnoreType = 'frontmatter___thumbnail___internal___ignoreType',
  FrontmatterThumbnailInternalMediaType = 'frontmatter___thumbnail___internal___mediaType',
  FrontmatterThumbnailInternalOwner = 'frontmatter___thumbnail___internal___owner',
  FrontmatterThumbnailInternalType = 'frontmatter___thumbnail___internal___type',
  FrontmatterThumbnailChildContentYamlId = 'frontmatter___thumbnail___childContentYaml___id',
  FrontmatterThumbnailChildContentYamlChildren = 'frontmatter___thumbnail___childContentYaml___children',
  FrontmatterThumbnailChildrenSideprojectsYaml = 'frontmatter___thumbnail___childrenSideprojectsYaml',
  FrontmatterThumbnailChildrenSideprojectsYamlId = 'frontmatter___thumbnail___childrenSideprojectsYaml___id',
  FrontmatterThumbnailChildrenSideprojectsYamlChildren = 'frontmatter___thumbnail___childrenSideprojectsYaml___children',
  FrontmatterThumbnailChildrenSideprojectsYamlTitle = 'frontmatter___thumbnail___childrenSideprojectsYaml___title',
  FrontmatterThumbnailChildrenSideprojectsYamlLink = 'frontmatter___thumbnail___childrenSideprojectsYaml___link',
  FrontmatterThumbnailChildrenSideprojectsYamlDescription = 'frontmatter___thumbnail___childrenSideprojectsYaml___description',
  FrontmatterThumbnailChildrenSideprojectsYamlGithub = 'frontmatter___thumbnail___childrenSideprojectsYaml___github',
  FrontmatterThumbnailChildrenSideprojectsYamlTags = 'frontmatter___thumbnail___childrenSideprojectsYaml___tags',
  FrontmatterThumbnailChildMarkdownRemarkId = 'frontmatter___thumbnail___childMarkdownRemark___id',
  FrontmatterThumbnailChildMarkdownRemarkExcerpt = 'frontmatter___thumbnail___childMarkdownRemark___excerpt',
  FrontmatterThumbnailChildMarkdownRemarkRawMarkdownBody = 'frontmatter___thumbnail___childMarkdownRemark___rawMarkdownBody',
  FrontmatterThumbnailChildMarkdownRemarkFileAbsolutePath = 'frontmatter___thumbnail___childMarkdownRemark___fileAbsolutePath',
  FrontmatterThumbnailChildMarkdownRemarkHtml = 'frontmatter___thumbnail___childMarkdownRemark___html',
  FrontmatterThumbnailChildMarkdownRemarkHtmlAst = 'frontmatter___thumbnail___childMarkdownRemark___htmlAst',
  FrontmatterThumbnailChildMarkdownRemarkExcerptAst = 'frontmatter___thumbnail___childMarkdownRemark___excerptAst',
  FrontmatterThumbnailChildMarkdownRemarkHeadings = 'frontmatter___thumbnail___childMarkdownRemark___headings',
  FrontmatterThumbnailChildMarkdownRemarkTimeToRead = 'frontmatter___thumbnail___childMarkdownRemark___timeToRead',
  FrontmatterThumbnailChildMarkdownRemarkTableOfContents = 'frontmatter___thumbnail___childMarkdownRemark___tableOfContents',
  FrontmatterThumbnailChildMarkdownRemarkUrl = 'frontmatter___thumbnail___childMarkdownRemark___url',
  FrontmatterThumbnailChildMarkdownRemarkDisqusIdentifier = 'frontmatter___thumbnail___childMarkdownRemark___disqusIdentifier',
  FrontmatterThumbnailChildMarkdownRemarkChildren = 'frontmatter___thumbnail___childMarkdownRemark___children',
  FrontmatterThumbnailChildrenDesignsYaml = 'frontmatter___thumbnail___childrenDesignsYaml',
  FrontmatterThumbnailChildrenDesignsYamlId = 'frontmatter___thumbnail___childrenDesignsYaml___id',
  FrontmatterThumbnailChildrenDesignsYamlChildren = 'frontmatter___thumbnail___childrenDesignsYaml___children',
  FrontmatterThumbnailChildrenDesignsYamlName = 'frontmatter___thumbnail___childrenDesignsYaml___name',
  FrontmatterThumbnailChildrenDesignsYamlSlug = 'frontmatter___thumbnail___childrenDesignsYaml___slug',
  FrontmatterThumbnailChildrenDesignsYamlDescription = 'frontmatter___thumbnail___childrenDesignsYaml___description',
  FrontmatterThumbnailChildrenDesignsYamlTags = 'frontmatter___thumbnail___childrenDesignsYaml___tags',
  FrontmatterThumbnailChildrenDesignsYamlUrl = 'frontmatter___thumbnail___childrenDesignsYaml___url',
  FrontmatterThumbnailChildrenDesignsYamlShortUrl = 'frontmatter___thumbnail___childrenDesignsYaml___short_url',
  FrontmatterThumbnailChildrenDesignsYamlTools = 'frontmatter___thumbnail___childrenDesignsYaml___tools',
  FrontmatterDate = 'frontmatter___date',
  FrontmatterNext = 'frontmatter___next',
  FrontmatterSubtitle = 'frontmatter___subtitle',
  FrontmatterTags = 'frontmatter___tags',
  FrontmatterPopular = 'frontmatter___popular',
  Excerpt = 'excerpt',
  RawMarkdownBody = 'rawMarkdownBody',
  FileAbsolutePath = 'fileAbsolutePath',
  Html = 'html',
  HtmlAst = 'htmlAst',
  ExcerptAst = 'excerptAst',
  Headings = 'headings',
  HeadingsId = 'headings___id',
  HeadingsValue = 'headings___value',
  HeadingsDepth = 'headings___depth',
  TimeToRead = 'timeToRead',
  TableOfContents = 'tableOfContents',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words',
  Url = 'url',
  DisqusIdentifier = 'disqusIdentifier',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  url?: Maybe<StringQueryOperatorInput>;
  disqusIdentifier?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MarkdownRemarkFrontmatter = {
  __typename?: 'MarkdownRemarkFrontmatter';
  title?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  path?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<File>;
  date?: Maybe<Scalars['Date']>;
  next?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  popular?: Maybe<Scalars['Boolean']>;
};

export type MarkdownRemarkFrontmatterDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<IntQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  thumbnail?: Maybe<FileFilterInput>;
  date?: Maybe<DateQueryOperatorInput>;
  next?: Maybe<StringQueryOperatorInput>;
  subtitle?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  popular?: Maybe<BooleanQueryOperatorInput>;
};

export type MarkdownRemarkGroupConnection = {
  __typename?: 'MarkdownRemarkGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownWordCount = {
  __typename?: 'MarkdownWordCount';
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY'
}

export type Query = {
  __typename?: 'Query';
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  markdownRemark?: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  designsYaml?: Maybe<DesignsYaml>;
  allDesignsYaml: DesignsYamlConnection;
  sideprojectsYaml?: Maybe<SideprojectsYaml>;
  allSideprojectsYaml: SideprojectsYamlConnection;
  contentYaml?: Maybe<ContentYaml>;
  allContentYaml: ContentYamlConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};

export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childContentYaml?: Maybe<ContentYamlFilterInput>;
  childrenSideprojectsYaml?: Maybe<SideprojectsYamlFilterListInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
  childrenDesignsYaml?: Maybe<DesignsYamlFilterListInput>;
};

export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<DateQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  url?: Maybe<StringQueryOperatorInput>;
  disqusIdentifier?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>;
  sort?: Maybe<MarkdownRemarkSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryDesignsYamlArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  short_url?: Maybe<StringQueryOperatorInput>;
  tools?: Maybe<DesignsYamlToolsFilterListInput>;
};

export type QueryAllDesignsYamlArgs = {
  filter?: Maybe<DesignsYamlFilterInput>;
  sort?: Maybe<DesignsYamlSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySideprojectsYamlArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<FileFilterInput>;
  link?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  github?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllSideprojectsYamlArgs = {
  filter?: Maybe<SideprojectsYamlFilterInput>;
  sort?: Maybe<SideprojectsYamlSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryContentYamlArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  github?: Maybe<ContentYamlGithubFilterInput>;
  linkedin?: Maybe<ContentYamlLinkedinFilterInput>;
  medium?: Maybe<ContentYamlMediumFilterInput>;
  behance?: Maybe<ContentYamlBehanceFilterInput>;
  instagram?: Maybe<ContentYamlInstagramFilterInput>;
  email?: Maybe<ContentYamlEmailFilterInput>;
};

export type QueryAllContentYamlArgs = {
  filter?: Maybe<ContentYamlFilterInput>;
  sort?: Maybe<ContentYamlSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type SideprojectsYaml = Node & {
  __typename?: 'SideprojectsYaml';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  image?: Maybe<File>;
  link?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  github?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SideprojectsYamlConnection = {
  __typename?: 'SideprojectsYamlConnection';
  totalCount: Scalars['Int'];
  edges: Array<SideprojectsYamlEdge>;
  nodes: Array<SideprojectsYaml>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SideprojectsYamlGroupConnection>;
};

export type SideprojectsYamlConnectionDistinctArgs = {
  field: SideprojectsYamlFieldsEnum;
};

export type SideprojectsYamlConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SideprojectsYamlFieldsEnum;
};

export type SideprojectsYamlEdge = {
  __typename?: 'SideprojectsYamlEdge';
  next?: Maybe<SideprojectsYaml>;
  node: SideprojectsYaml;
  previous?: Maybe<SideprojectsYaml>;
};

export enum SideprojectsYamlFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Title = 'title',
  ImageSourceInstanceName = 'image___sourceInstanceName',
  ImageAbsolutePath = 'image___absolutePath',
  ImageRelativePath = 'image___relativePath',
  ImageExtension = 'image___extension',
  ImageSize = 'image___size',
  ImagePrettySize = 'image___prettySize',
  ImageModifiedTime = 'image___modifiedTime',
  ImageAccessTime = 'image___accessTime',
  ImageChangeTime = 'image___changeTime',
  ImageBirthTime = 'image___birthTime',
  ImageRoot = 'image___root',
  ImageDir = 'image___dir',
  ImageBase = 'image___base',
  ImageExt = 'image___ext',
  ImageName = 'image___name',
  ImageRelativeDirectory = 'image___relativeDirectory',
  ImageDev = 'image___dev',
  ImageMode = 'image___mode',
  ImageNlink = 'image___nlink',
  ImageUid = 'image___uid',
  ImageGid = 'image___gid',
  ImageRdev = 'image___rdev',
  ImageIno = 'image___ino',
  ImageAtimeMs = 'image___atimeMs',
  ImageMtimeMs = 'image___mtimeMs',
  ImageCtimeMs = 'image___ctimeMs',
  ImageAtime = 'image___atime',
  ImageMtime = 'image___mtime',
  ImageCtime = 'image___ctime',
  ImageBirthtime = 'image___birthtime',
  ImageBirthtimeMs = 'image___birthtimeMs',
  ImageBlksize = 'image___blksize',
  ImageBlocks = 'image___blocks',
  ImagePublicUrl = 'image___publicURL',
  ImageChildImageSharpFixedBase64 = 'image___childImageSharp___fixed___base64',
  ImageChildImageSharpFixedTracedSvg = 'image___childImageSharp___fixed___tracedSVG',
  ImageChildImageSharpFixedAspectRatio = 'image___childImageSharp___fixed___aspectRatio',
  ImageChildImageSharpFixedWidth = 'image___childImageSharp___fixed___width',
  ImageChildImageSharpFixedHeight = 'image___childImageSharp___fixed___height',
  ImageChildImageSharpFixedSrc = 'image___childImageSharp___fixed___src',
  ImageChildImageSharpFixedSrcSet = 'image___childImageSharp___fixed___srcSet',
  ImageChildImageSharpFixedSrcWebp = 'image___childImageSharp___fixed___srcWebp',
  ImageChildImageSharpFixedSrcSetWebp = 'image___childImageSharp___fixed___srcSetWebp',
  ImageChildImageSharpFixedOriginalName = 'image___childImageSharp___fixed___originalName',
  ImageChildImageSharpResolutionsBase64 = 'image___childImageSharp___resolutions___base64',
  ImageChildImageSharpResolutionsTracedSvg = 'image___childImageSharp___resolutions___tracedSVG',
  ImageChildImageSharpResolutionsAspectRatio = 'image___childImageSharp___resolutions___aspectRatio',
  ImageChildImageSharpResolutionsWidth = 'image___childImageSharp___resolutions___width',
  ImageChildImageSharpResolutionsHeight = 'image___childImageSharp___resolutions___height',
  ImageChildImageSharpResolutionsSrc = 'image___childImageSharp___resolutions___src',
  ImageChildImageSharpResolutionsSrcSet = 'image___childImageSharp___resolutions___srcSet',
  ImageChildImageSharpResolutionsSrcWebp = 'image___childImageSharp___resolutions___srcWebp',
  ImageChildImageSharpResolutionsSrcSetWebp = 'image___childImageSharp___resolutions___srcSetWebp',
  ImageChildImageSharpResolutionsOriginalName = 'image___childImageSharp___resolutions___originalName',
  ImageChildImageSharpFluidBase64 = 'image___childImageSharp___fluid___base64',
  ImageChildImageSharpFluidTracedSvg = 'image___childImageSharp___fluid___tracedSVG',
  ImageChildImageSharpFluidAspectRatio = 'image___childImageSharp___fluid___aspectRatio',
  ImageChildImageSharpFluidSrc = 'image___childImageSharp___fluid___src',
  ImageChildImageSharpFluidSrcSet = 'image___childImageSharp___fluid___srcSet',
  ImageChildImageSharpFluidSrcWebp = 'image___childImageSharp___fluid___srcWebp',
  ImageChildImageSharpFluidSrcSetWebp = 'image___childImageSharp___fluid___srcSetWebp',
  ImageChildImageSharpFluidSizes = 'image___childImageSharp___fluid___sizes',
  ImageChildImageSharpFluidOriginalImg = 'image___childImageSharp___fluid___originalImg',
  ImageChildImageSharpFluidOriginalName = 'image___childImageSharp___fluid___originalName',
  ImageChildImageSharpFluidPresentationWidth = 'image___childImageSharp___fluid___presentationWidth',
  ImageChildImageSharpFluidPresentationHeight = 'image___childImageSharp___fluid___presentationHeight',
  ImageChildImageSharpSizesBase64 = 'image___childImageSharp___sizes___base64',
  ImageChildImageSharpSizesTracedSvg = 'image___childImageSharp___sizes___tracedSVG',
  ImageChildImageSharpSizesAspectRatio = 'image___childImageSharp___sizes___aspectRatio',
  ImageChildImageSharpSizesSrc = 'image___childImageSharp___sizes___src',
  ImageChildImageSharpSizesSrcSet = 'image___childImageSharp___sizes___srcSet',
  ImageChildImageSharpSizesSrcWebp = 'image___childImageSharp___sizes___srcWebp',
  ImageChildImageSharpSizesSrcSetWebp = 'image___childImageSharp___sizes___srcSetWebp',
  ImageChildImageSharpSizesSizes = 'image___childImageSharp___sizes___sizes',
  ImageChildImageSharpSizesOriginalImg = 'image___childImageSharp___sizes___originalImg',
  ImageChildImageSharpSizesOriginalName = 'image___childImageSharp___sizes___originalName',
  ImageChildImageSharpSizesPresentationWidth = 'image___childImageSharp___sizes___presentationWidth',
  ImageChildImageSharpSizesPresentationHeight = 'image___childImageSharp___sizes___presentationHeight',
  ImageChildImageSharpOriginalWidth = 'image___childImageSharp___original___width',
  ImageChildImageSharpOriginalHeight = 'image___childImageSharp___original___height',
  ImageChildImageSharpOriginalSrc = 'image___childImageSharp___original___src',
  ImageChildImageSharpResizeSrc = 'image___childImageSharp___resize___src',
  ImageChildImageSharpResizeTracedSvg = 'image___childImageSharp___resize___tracedSVG',
  ImageChildImageSharpResizeWidth = 'image___childImageSharp___resize___width',
  ImageChildImageSharpResizeHeight = 'image___childImageSharp___resize___height',
  ImageChildImageSharpResizeAspectRatio = 'image___childImageSharp___resize___aspectRatio',
  ImageChildImageSharpResizeOriginalName = 'image___childImageSharp___resize___originalName',
  ImageChildImageSharpId = 'image___childImageSharp___id',
  ImageChildImageSharpParentId = 'image___childImageSharp___parent___id',
  ImageChildImageSharpParentChildren = 'image___childImageSharp___parent___children',
  ImageChildImageSharpChildren = 'image___childImageSharp___children',
  ImageChildImageSharpChildrenId = 'image___childImageSharp___children___id',
  ImageChildImageSharpChildrenChildren = 'image___childImageSharp___children___children',
  ImageChildImageSharpInternalContent = 'image___childImageSharp___internal___content',
  ImageChildImageSharpInternalContentDigest = 'image___childImageSharp___internal___contentDigest',
  ImageChildImageSharpInternalDescription = 'image___childImageSharp___internal___description',
  ImageChildImageSharpInternalFieldOwners = 'image___childImageSharp___internal___fieldOwners',
  ImageChildImageSharpInternalIgnoreType = 'image___childImageSharp___internal___ignoreType',
  ImageChildImageSharpInternalMediaType = 'image___childImageSharp___internal___mediaType',
  ImageChildImageSharpInternalOwner = 'image___childImageSharp___internal___owner',
  ImageChildImageSharpInternalType = 'image___childImageSharp___internal___type',
  ImageId = 'image___id',
  ImageParentId = 'image___parent___id',
  ImageParentParentId = 'image___parent___parent___id',
  ImageParentParentChildren = 'image___parent___parent___children',
  ImageParentChildren = 'image___parent___children',
  ImageParentChildrenId = 'image___parent___children___id',
  ImageParentChildrenChildren = 'image___parent___children___children',
  ImageParentInternalContent = 'image___parent___internal___content',
  ImageParentInternalContentDigest = 'image___parent___internal___contentDigest',
  ImageParentInternalDescription = 'image___parent___internal___description',
  ImageParentInternalFieldOwners = 'image___parent___internal___fieldOwners',
  ImageParentInternalIgnoreType = 'image___parent___internal___ignoreType',
  ImageParentInternalMediaType = 'image___parent___internal___mediaType',
  ImageParentInternalOwner = 'image___parent___internal___owner',
  ImageParentInternalType = 'image___parent___internal___type',
  ImageChildren = 'image___children',
  ImageChildrenId = 'image___children___id',
  ImageChildrenParentId = 'image___children___parent___id',
  ImageChildrenParentChildren = 'image___children___parent___children',
  ImageChildrenChildren = 'image___children___children',
  ImageChildrenChildrenId = 'image___children___children___id',
  ImageChildrenChildrenChildren = 'image___children___children___children',
  ImageChildrenInternalContent = 'image___children___internal___content',
  ImageChildrenInternalContentDigest = 'image___children___internal___contentDigest',
  ImageChildrenInternalDescription = 'image___children___internal___description',
  ImageChildrenInternalFieldOwners = 'image___children___internal___fieldOwners',
  ImageChildrenInternalIgnoreType = 'image___children___internal___ignoreType',
  ImageChildrenInternalMediaType = 'image___children___internal___mediaType',
  ImageChildrenInternalOwner = 'image___children___internal___owner',
  ImageChildrenInternalType = 'image___children___internal___type',
  ImageInternalContent = 'image___internal___content',
  ImageInternalContentDigest = 'image___internal___contentDigest',
  ImageInternalDescription = 'image___internal___description',
  ImageInternalFieldOwners = 'image___internal___fieldOwners',
  ImageInternalIgnoreType = 'image___internal___ignoreType',
  ImageInternalMediaType = 'image___internal___mediaType',
  ImageInternalOwner = 'image___internal___owner',
  ImageInternalType = 'image___internal___type',
  ImageChildContentYamlId = 'image___childContentYaml___id',
  ImageChildContentYamlParentId = 'image___childContentYaml___parent___id',
  ImageChildContentYamlParentChildren = 'image___childContentYaml___parent___children',
  ImageChildContentYamlChildren = 'image___childContentYaml___children',
  ImageChildContentYamlChildrenId = 'image___childContentYaml___children___id',
  ImageChildContentYamlChildrenChildren = 'image___childContentYaml___children___children',
  ImageChildContentYamlInternalContent = 'image___childContentYaml___internal___content',
  ImageChildContentYamlInternalContentDigest = 'image___childContentYaml___internal___contentDigest',
  ImageChildContentYamlInternalDescription = 'image___childContentYaml___internal___description',
  ImageChildContentYamlInternalFieldOwners = 'image___childContentYaml___internal___fieldOwners',
  ImageChildContentYamlInternalIgnoreType = 'image___childContentYaml___internal___ignoreType',
  ImageChildContentYamlInternalMediaType = 'image___childContentYaml___internal___mediaType',
  ImageChildContentYamlInternalOwner = 'image___childContentYaml___internal___owner',
  ImageChildContentYamlInternalType = 'image___childContentYaml___internal___type',
  ImageChildContentYamlGithubName = 'image___childContentYaml___github___name',
  ImageChildContentYamlGithubUsername = 'image___childContentYaml___github___username',
  ImageChildContentYamlGithubLink = 'image___childContentYaml___github___link',
  ImageChildContentYamlGithubIcon = 'image___childContentYaml___github___icon',
  ImageChildContentYamlLinkedinName = 'image___childContentYaml___linkedin___name',
  ImageChildContentYamlLinkedinUsername = 'image___childContentYaml___linkedin___username',
  ImageChildContentYamlLinkedinLink = 'image___childContentYaml___linkedin___link',
  ImageChildContentYamlLinkedinIcon = 'image___childContentYaml___linkedin___icon',
  ImageChildContentYamlMediumName = 'image___childContentYaml___medium___name',
  ImageChildContentYamlMediumUsername = 'image___childContentYaml___medium___username',
  ImageChildContentYamlMediumLink = 'image___childContentYaml___medium___link',
  ImageChildContentYamlMediumIcon = 'image___childContentYaml___medium___icon',
  ImageChildContentYamlBehanceName = 'image___childContentYaml___behance___name',
  ImageChildContentYamlBehanceUsername = 'image___childContentYaml___behance___username',
  ImageChildContentYamlBehanceLink = 'image___childContentYaml___behance___link',
  ImageChildContentYamlBehanceIcon = 'image___childContentYaml___behance___icon',
  ImageChildContentYamlInstagramName = 'image___childContentYaml___instagram___name',
  ImageChildContentYamlInstagramUsername = 'image___childContentYaml___instagram___username',
  ImageChildContentYamlInstagramLink = 'image___childContentYaml___instagram___link',
  ImageChildContentYamlInstagramIcon = 'image___childContentYaml___instagram___icon',
  ImageChildContentYamlEmailName = 'image___childContentYaml___email___name',
  ImageChildContentYamlEmailUsername = 'image___childContentYaml___email___username',
  ImageChildContentYamlEmailLink = 'image___childContentYaml___email___link',
  ImageChildContentYamlEmailIcon = 'image___childContentYaml___email___icon',
  ImageChildrenSideprojectsYaml = 'image___childrenSideprojectsYaml',
  ImageChildrenSideprojectsYamlId = 'image___childrenSideprojectsYaml___id',
  ImageChildrenSideprojectsYamlParentId = 'image___childrenSideprojectsYaml___parent___id',
  ImageChildrenSideprojectsYamlParentChildren = 'image___childrenSideprojectsYaml___parent___children',
  ImageChildrenSideprojectsYamlChildren = 'image___childrenSideprojectsYaml___children',
  ImageChildrenSideprojectsYamlChildrenId = 'image___childrenSideprojectsYaml___children___id',
  ImageChildrenSideprojectsYamlChildrenChildren = 'image___childrenSideprojectsYaml___children___children',
  ImageChildrenSideprojectsYamlInternalContent = 'image___childrenSideprojectsYaml___internal___content',
  ImageChildrenSideprojectsYamlInternalContentDigest = 'image___childrenSideprojectsYaml___internal___contentDigest',
  ImageChildrenSideprojectsYamlInternalDescription = 'image___childrenSideprojectsYaml___internal___description',
  ImageChildrenSideprojectsYamlInternalFieldOwners = 'image___childrenSideprojectsYaml___internal___fieldOwners',
  ImageChildrenSideprojectsYamlInternalIgnoreType = 'image___childrenSideprojectsYaml___internal___ignoreType',
  ImageChildrenSideprojectsYamlInternalMediaType = 'image___childrenSideprojectsYaml___internal___mediaType',
  ImageChildrenSideprojectsYamlInternalOwner = 'image___childrenSideprojectsYaml___internal___owner',
  ImageChildrenSideprojectsYamlInternalType = 'image___childrenSideprojectsYaml___internal___type',
  ImageChildrenSideprojectsYamlTitle = 'image___childrenSideprojectsYaml___title',
  ImageChildrenSideprojectsYamlImageSourceInstanceName = 'image___childrenSideprojectsYaml___image___sourceInstanceName',
  ImageChildrenSideprojectsYamlImageAbsolutePath = 'image___childrenSideprojectsYaml___image___absolutePath',
  ImageChildrenSideprojectsYamlImageRelativePath = 'image___childrenSideprojectsYaml___image___relativePath',
  ImageChildrenSideprojectsYamlImageExtension = 'image___childrenSideprojectsYaml___image___extension',
  ImageChildrenSideprojectsYamlImageSize = 'image___childrenSideprojectsYaml___image___size',
  ImageChildrenSideprojectsYamlImagePrettySize = 'image___childrenSideprojectsYaml___image___prettySize',
  ImageChildrenSideprojectsYamlImageModifiedTime = 'image___childrenSideprojectsYaml___image___modifiedTime',
  ImageChildrenSideprojectsYamlImageAccessTime = 'image___childrenSideprojectsYaml___image___accessTime',
  ImageChildrenSideprojectsYamlImageChangeTime = 'image___childrenSideprojectsYaml___image___changeTime',
  ImageChildrenSideprojectsYamlImageBirthTime = 'image___childrenSideprojectsYaml___image___birthTime',
  ImageChildrenSideprojectsYamlImageRoot = 'image___childrenSideprojectsYaml___image___root',
  ImageChildrenSideprojectsYamlImageDir = 'image___childrenSideprojectsYaml___image___dir',
  ImageChildrenSideprojectsYamlImageBase = 'image___childrenSideprojectsYaml___image___base',
  ImageChildrenSideprojectsYamlImageExt = 'image___childrenSideprojectsYaml___image___ext',
  ImageChildrenSideprojectsYamlImageName = 'image___childrenSideprojectsYaml___image___name',
  ImageChildrenSideprojectsYamlImageRelativeDirectory = 'image___childrenSideprojectsYaml___image___relativeDirectory',
  ImageChildrenSideprojectsYamlImageDev = 'image___childrenSideprojectsYaml___image___dev',
  ImageChildrenSideprojectsYamlImageMode = 'image___childrenSideprojectsYaml___image___mode',
  ImageChildrenSideprojectsYamlImageNlink = 'image___childrenSideprojectsYaml___image___nlink',
  ImageChildrenSideprojectsYamlImageUid = 'image___childrenSideprojectsYaml___image___uid',
  ImageChildrenSideprojectsYamlImageGid = 'image___childrenSideprojectsYaml___image___gid',
  ImageChildrenSideprojectsYamlImageRdev = 'image___childrenSideprojectsYaml___image___rdev',
  ImageChildrenSideprojectsYamlImageIno = 'image___childrenSideprojectsYaml___image___ino',
  ImageChildrenSideprojectsYamlImageAtimeMs = 'image___childrenSideprojectsYaml___image___atimeMs',
  ImageChildrenSideprojectsYamlImageMtimeMs = 'image___childrenSideprojectsYaml___image___mtimeMs',
  ImageChildrenSideprojectsYamlImageCtimeMs = 'image___childrenSideprojectsYaml___image___ctimeMs',
  ImageChildrenSideprojectsYamlImageAtime = 'image___childrenSideprojectsYaml___image___atime',
  ImageChildrenSideprojectsYamlImageMtime = 'image___childrenSideprojectsYaml___image___mtime',
  ImageChildrenSideprojectsYamlImageCtime = 'image___childrenSideprojectsYaml___image___ctime',
  ImageChildrenSideprojectsYamlImageBirthtime = 'image___childrenSideprojectsYaml___image___birthtime',
  ImageChildrenSideprojectsYamlImageBirthtimeMs = 'image___childrenSideprojectsYaml___image___birthtimeMs',
  ImageChildrenSideprojectsYamlImageBlksize = 'image___childrenSideprojectsYaml___image___blksize',
  ImageChildrenSideprojectsYamlImageBlocks = 'image___childrenSideprojectsYaml___image___blocks',
  ImageChildrenSideprojectsYamlImagePublicUrl = 'image___childrenSideprojectsYaml___image___publicURL',
  ImageChildrenSideprojectsYamlImageId = 'image___childrenSideprojectsYaml___image___id',
  ImageChildrenSideprojectsYamlImageChildren = 'image___childrenSideprojectsYaml___image___children',
  ImageChildrenSideprojectsYamlImageChildrenSideprojectsYaml = 'image___childrenSideprojectsYaml___image___childrenSideprojectsYaml',
  ImageChildrenSideprojectsYamlImageChildrenDesignsYaml = 'image___childrenSideprojectsYaml___image___childrenDesignsYaml',
  ImageChildrenSideprojectsYamlLink = 'image___childrenSideprojectsYaml___link',
  ImageChildrenSideprojectsYamlDescription = 'image___childrenSideprojectsYaml___description',
  ImageChildrenSideprojectsYamlGithub = 'image___childrenSideprojectsYaml___github',
  ImageChildrenSideprojectsYamlTags = 'image___childrenSideprojectsYaml___tags',
  ImageChildMarkdownRemarkId = 'image___childMarkdownRemark___id',
  ImageChildMarkdownRemarkFrontmatterTitle = 'image___childMarkdownRemark___frontmatter___title',
  ImageChildMarkdownRemarkFrontmatterId = 'image___childMarkdownRemark___frontmatter___id',
  ImageChildMarkdownRemarkFrontmatterPath = 'image___childMarkdownRemark___frontmatter___path',
  ImageChildMarkdownRemarkFrontmatterDate = 'image___childMarkdownRemark___frontmatter___date',
  ImageChildMarkdownRemarkFrontmatterNext = 'image___childMarkdownRemark___frontmatter___next',
  ImageChildMarkdownRemarkFrontmatterSubtitle = 'image___childMarkdownRemark___frontmatter___subtitle',
  ImageChildMarkdownRemarkFrontmatterTags = 'image___childMarkdownRemark___frontmatter___tags',
  ImageChildMarkdownRemarkFrontmatterPopular = 'image___childMarkdownRemark___frontmatter___popular',
  ImageChildMarkdownRemarkExcerpt = 'image___childMarkdownRemark___excerpt',
  ImageChildMarkdownRemarkRawMarkdownBody = 'image___childMarkdownRemark___rawMarkdownBody',
  ImageChildMarkdownRemarkFileAbsolutePath = 'image___childMarkdownRemark___fileAbsolutePath',
  ImageChildMarkdownRemarkHtml = 'image___childMarkdownRemark___html',
  ImageChildMarkdownRemarkHtmlAst = 'image___childMarkdownRemark___htmlAst',
  ImageChildMarkdownRemarkExcerptAst = 'image___childMarkdownRemark___excerptAst',
  ImageChildMarkdownRemarkHeadings = 'image___childMarkdownRemark___headings',
  ImageChildMarkdownRemarkHeadingsId = 'image___childMarkdownRemark___headings___id',
  ImageChildMarkdownRemarkHeadingsValue = 'image___childMarkdownRemark___headings___value',
  ImageChildMarkdownRemarkHeadingsDepth = 'image___childMarkdownRemark___headings___depth',
  ImageChildMarkdownRemarkTimeToRead = 'image___childMarkdownRemark___timeToRead',
  ImageChildMarkdownRemarkTableOfContents = 'image___childMarkdownRemark___tableOfContents',
  ImageChildMarkdownRemarkWordCountParagraphs = 'image___childMarkdownRemark___wordCount___paragraphs',
  ImageChildMarkdownRemarkWordCountSentences = 'image___childMarkdownRemark___wordCount___sentences',
  ImageChildMarkdownRemarkWordCountWords = 'image___childMarkdownRemark___wordCount___words',
  ImageChildMarkdownRemarkUrl = 'image___childMarkdownRemark___url',
  ImageChildMarkdownRemarkDisqusIdentifier = 'image___childMarkdownRemark___disqusIdentifier',
  ImageChildMarkdownRemarkParentId = 'image___childMarkdownRemark___parent___id',
  ImageChildMarkdownRemarkParentChildren = 'image___childMarkdownRemark___parent___children',
  ImageChildMarkdownRemarkChildren = 'image___childMarkdownRemark___children',
  ImageChildMarkdownRemarkChildrenId = 'image___childMarkdownRemark___children___id',
  ImageChildMarkdownRemarkChildrenChildren = 'image___childMarkdownRemark___children___children',
  ImageChildMarkdownRemarkInternalContent = 'image___childMarkdownRemark___internal___content',
  ImageChildMarkdownRemarkInternalContentDigest = 'image___childMarkdownRemark___internal___contentDigest',
  ImageChildMarkdownRemarkInternalDescription = 'image___childMarkdownRemark___internal___description',
  ImageChildMarkdownRemarkInternalFieldOwners = 'image___childMarkdownRemark___internal___fieldOwners',
  ImageChildMarkdownRemarkInternalIgnoreType = 'image___childMarkdownRemark___internal___ignoreType',
  ImageChildMarkdownRemarkInternalMediaType = 'image___childMarkdownRemark___internal___mediaType',
  ImageChildMarkdownRemarkInternalOwner = 'image___childMarkdownRemark___internal___owner',
  ImageChildMarkdownRemarkInternalType = 'image___childMarkdownRemark___internal___type',
  ImageChildrenDesignsYaml = 'image___childrenDesignsYaml',
  ImageChildrenDesignsYamlId = 'image___childrenDesignsYaml___id',
  ImageChildrenDesignsYamlParentId = 'image___childrenDesignsYaml___parent___id',
  ImageChildrenDesignsYamlParentChildren = 'image___childrenDesignsYaml___parent___children',
  ImageChildrenDesignsYamlChildren = 'image___childrenDesignsYaml___children',
  ImageChildrenDesignsYamlChildrenId = 'image___childrenDesignsYaml___children___id',
  ImageChildrenDesignsYamlChildrenChildren = 'image___childrenDesignsYaml___children___children',
  ImageChildrenDesignsYamlInternalContent = 'image___childrenDesignsYaml___internal___content',
  ImageChildrenDesignsYamlInternalContentDigest = 'image___childrenDesignsYaml___internal___contentDigest',
  ImageChildrenDesignsYamlInternalDescription = 'image___childrenDesignsYaml___internal___description',
  ImageChildrenDesignsYamlInternalFieldOwners = 'image___childrenDesignsYaml___internal___fieldOwners',
  ImageChildrenDesignsYamlInternalIgnoreType = 'image___childrenDesignsYaml___internal___ignoreType',
  ImageChildrenDesignsYamlInternalMediaType = 'image___childrenDesignsYaml___internal___mediaType',
  ImageChildrenDesignsYamlInternalOwner = 'image___childrenDesignsYaml___internal___owner',
  ImageChildrenDesignsYamlInternalType = 'image___childrenDesignsYaml___internal___type',
  ImageChildrenDesignsYamlName = 'image___childrenDesignsYaml___name',
  ImageChildrenDesignsYamlSlug = 'image___childrenDesignsYaml___slug',
  ImageChildrenDesignsYamlDescription = 'image___childrenDesignsYaml___description',
  ImageChildrenDesignsYamlTags = 'image___childrenDesignsYaml___tags',
  ImageChildrenDesignsYamlUrl = 'image___childrenDesignsYaml___url',
  ImageChildrenDesignsYamlShortUrl = 'image___childrenDesignsYaml___short_url',
  ImageChildrenDesignsYamlTools = 'image___childrenDesignsYaml___tools',
  ImageChildrenDesignsYamlToolsTitle = 'image___childrenDesignsYaml___tools___title',
  Link = 'link',
  Description = 'description',
  Github = 'github',
  Tags = 'tags'
}

export type SideprojectsYamlFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<FileFilterInput>;
  link?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  github?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
};

export type SideprojectsYamlFilterListInput = {
  elemMatch?: Maybe<SideprojectsYamlFilterInput>;
};

export type SideprojectsYamlGroupConnection = {
  __typename?: 'SideprojectsYamlGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SideprojectsYamlEdge>;
  nodes: Array<SideprojectsYaml>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SideprojectsYamlSortInput = {
  fields?: Maybe<Array<Maybe<SideprojectsYamlFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Site = Node & {
  __typename?: 'Site';
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Date']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SitePortArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};

export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  BuildTime = 'buildTime'
}

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  SiteMetadataTitle = 'siteMetadata___title',
  SiteMetadataTitleTemplate = 'siteMetadata___titleTemplate',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataImage = 'siteMetadata___image',
  SiteMetadataLanguageCode = 'siteMetadata___languageCode',
  SiteMetadataCountryCode = 'siteMetadata___countryCode',
  SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
  SiteMetadataTwitterHandle = 'siteMetadata___twitterHandle',
  SiteMetadataDisqusShortName = 'siteMetadata___disqusShortName',
  Port = 'port',
  Host = 'host',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<DateQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  __typename?: 'SitePageContext';
  slug?: Maybe<Scalars['String']>;
  prev?: Maybe<Scalars['String']>;
  next?: Maybe<Scalars['String']>;
  pageNumber?: Maybe<Scalars['Int']>;
  humanPageNumber?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  numberOfPages?: Maybe<Scalars['Int']>;
  previousPagePath?: Maybe<Scalars['String']>;
  nextPagePath?: Maybe<Scalars['String']>;
  hi?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
  prev?: Maybe<StringQueryOperatorInput>;
  next?: Maybe<StringQueryOperatorInput>;
  pageNumber?: Maybe<IntQueryOperatorInput>;
  humanPageNumber?: Maybe<IntQueryOperatorInput>;
  skip?: Maybe<IntQueryOperatorInput>;
  limit?: Maybe<IntQueryOperatorInput>;
  numberOfPages?: Maybe<IntQueryOperatorInput>;
  previousPagePath?: Maybe<StringQueryOperatorInput>;
  nextPagePath?: Maybe<StringQueryOperatorInput>;
  hi?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Path = 'path',
  Component = 'component',
  InternalComponentName = 'internalComponentName',
  ComponentChunkName = 'componentChunkName',
  MatchPath = 'matchPath',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  ContextSlug = 'context___slug',
  ContextPrev = 'context___prev',
  ContextNext = 'context___next',
  ContextPageNumber = 'context___pageNumber',
  ContextHumanPageNumber = 'context___humanPageNumber',
  ContextSkip = 'context___skip',
  ContextLimit = 'context___limit',
  ContextNumberOfPages = 'context___numberOfPages',
  ContextPreviousPagePath = 'context___previousPagePath',
  ContextNextPagePath = 'context___nextPagePath',
  ContextHi = 'context___hi',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsPlugins = 'pluginCreator___pluginOptions___plugins',
  PluginCreatorPluginOptionsPluginsResolve = 'pluginCreator___pluginOptions___plugins___resolve',
  PluginCreatorPluginOptionsPluginsId = 'pluginCreator___pluginOptions___plugins___id',
  PluginCreatorPluginOptionsPluginsName = 'pluginCreator___pluginOptions___plugins___name',
  PluginCreatorPluginOptionsPluginsVersion = 'pluginCreator___pluginOptions___plugins___version',
  PluginCreatorPluginOptionsPluginsBrowserApIs = 'pluginCreator___pluginOptions___plugins___browserAPIs',
  PluginCreatorPluginOptionsPluginsSsrApIs = 'pluginCreator___pluginOptions___plugins___ssrAPIs',
  PluginCreatorPluginOptionsPluginsPluginFilepath = 'pluginCreator___pluginOptions___plugins___pluginFilepath',
  PluginCreatorPluginOptionsFonts = 'pluginCreator___pluginOptions___fonts',
  PluginCreatorPluginOptionsFontsFamily = 'pluginCreator___pluginOptions___fonts___family',
  PluginCreatorPluginOptionsFontsVariants = 'pluginCreator___pluginOptions___fonts___variants',
  PluginCreatorPluginOptionsPathToConfigModule = 'pluginCreator___pluginOptions___pathToConfigModule',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsMaxWidth = 'pluginCreator___pluginOptions___maxWidth',
  PluginCreatorPluginOptionsWithWebp = 'pluginCreator___pluginOptions___withWebp',
  PluginCreatorPluginOptionsWrapperStyle = 'pluginCreator___pluginOptions___wrapperStyle',
  PluginCreatorPluginOptionsTrackingId = 'pluginCreator___pluginOptions___trackingId',
  PluginCreatorPluginOptionsHead = 'pluginCreator___pluginOptions___head',
  PluginCreatorPluginOptionsLogo = 'pluginCreator___pluginOptions___logo',
  PluginCreatorPluginOptionsInjectHtml = 'pluginCreator___pluginOptions___injectHTML',
  PluginCreatorPluginOptionsIconsAndroid = 'pluginCreator___pluginOptions___icons___android',
  PluginCreatorPluginOptionsIconsAppleIcon = 'pluginCreator___pluginOptions___icons___appleIcon',
  PluginCreatorPluginOptionsIconsAppleStartup = 'pluginCreator___pluginOptions___icons___appleStartup',
  PluginCreatorPluginOptionsIconsCoast = 'pluginCreator___pluginOptions___icons___coast',
  PluginCreatorPluginOptionsIconsFavicons = 'pluginCreator___pluginOptions___icons___favicons',
  PluginCreatorPluginOptionsIconsFirefox = 'pluginCreator___pluginOptions___icons___firefox',
  PluginCreatorPluginOptionsIconsTwitter = 'pluginCreator___pluginOptions___icons___twitter',
  PluginCreatorPluginOptionsIconsYandex = 'pluginCreator___pluginOptions___icons___yandex',
  PluginCreatorPluginOptionsIconsWindows = 'pluginCreator___pluginOptions___icons___windows',
  PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
  PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
  PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
  PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
  PluginCreatorPluginOptionsIcon = 'pluginCreator___pluginOptions___icon',
  PluginCreatorPluginOptionsCacheBustingMode = 'pluginCreator___pluginOptions___cache_busting_mode',
  PluginCreatorPluginOptionsIncludeFavicon = 'pluginCreator___pluginOptions___include_favicon',
  PluginCreatorPluginOptionsLegacy = 'pluginCreator___pluginOptions___legacy',
  PluginCreatorPluginOptionsThemeColorInHead = 'pluginCreator___pluginOptions___theme_color_in_head',
  PluginCreatorPluginOptionsCacheDigest = 'pluginCreator___pluginOptions___cacheDigest',
  PluginCreatorPluginOptionsConfigDir = 'pluginCreator___pluginOptions___configDir',
  PluginCreatorPluginOptionsProjectRoot = 'pluginCreator___pluginOptions___projectRoot',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath'
}

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsPlugins = 'pluginOptions___plugins',
  PluginOptionsPluginsResolve = 'pluginOptions___plugins___resolve',
  PluginOptionsPluginsId = 'pluginOptions___plugins___id',
  PluginOptionsPluginsName = 'pluginOptions___plugins___name',
  PluginOptionsPluginsVersion = 'pluginOptions___plugins___version',
  PluginOptionsPluginsPluginOptionsMaxWidth = 'pluginOptions___plugins___pluginOptions___maxWidth',
  PluginOptionsPluginsPluginOptionsWithWebp = 'pluginOptions___plugins___pluginOptions___withWebp',
  PluginOptionsPluginsPluginOptionsWrapperStyle = 'pluginOptions___plugins___pluginOptions___wrapperStyle',
  PluginOptionsPluginsBrowserApIs = 'pluginOptions___plugins___browserAPIs',
  PluginOptionsPluginsSsrApIs = 'pluginOptions___plugins___ssrAPIs',
  PluginOptionsPluginsPluginFilepath = 'pluginOptions___plugins___pluginFilepath',
  PluginOptionsFonts = 'pluginOptions___fonts',
  PluginOptionsFontsFamily = 'pluginOptions___fonts___family',
  PluginOptionsFontsVariants = 'pluginOptions___fonts___variants',
  PluginOptionsPathToConfigModule = 'pluginOptions___pathToConfigModule',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsMaxWidth = 'pluginOptions___maxWidth',
  PluginOptionsWithWebp = 'pluginOptions___withWebp',
  PluginOptionsWrapperStyle = 'pluginOptions___wrapperStyle',
  PluginOptionsTrackingId = 'pluginOptions___trackingId',
  PluginOptionsHead = 'pluginOptions___head',
  PluginOptionsLogo = 'pluginOptions___logo',
  PluginOptionsInjectHtml = 'pluginOptions___injectHTML',
  PluginOptionsIconsAndroid = 'pluginOptions___icons___android',
  PluginOptionsIconsAppleIcon = 'pluginOptions___icons___appleIcon',
  PluginOptionsIconsAppleStartup = 'pluginOptions___icons___appleStartup',
  PluginOptionsIconsCoast = 'pluginOptions___icons___coast',
  PluginOptionsIconsFavicons = 'pluginOptions___icons___favicons',
  PluginOptionsIconsFirefox = 'pluginOptions___icons___firefox',
  PluginOptionsIconsTwitter = 'pluginOptions___icons___twitter',
  PluginOptionsIconsYandex = 'pluginOptions___icons___yandex',
  PluginOptionsIconsWindows = 'pluginOptions___icons___windows',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsCacheBustingMode = 'pluginOptions___cache_busting_mode',
  PluginOptionsIncludeFavicon = 'pluginOptions___include_favicon',
  PluginOptionsLegacy = 'pluginOptions___legacy',
  PluginOptionsThemeColorInHead = 'pluginOptions___theme_color_in_head',
  PluginOptionsCacheDigest = 'pluginOptions___cacheDigest',
  PluginOptionsConfigDir = 'pluginOptions___configDir',
  PluginOptionsProjectRoot = 'pluginOptions___projectRoot',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords'
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions';
  plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>;
  fonts?: Maybe<Array<Maybe<SitePluginPluginOptionsFonts>>>;
  pathToConfigModule?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  maxWidth?: Maybe<Scalars['Int']>;
  withWebp?: Maybe<Scalars['Boolean']>;
  wrapperStyle?: Maybe<Scalars['String']>;
  trackingId?: Maybe<Scalars['String']>;
  head?: Maybe<Scalars['Boolean']>;
  logo?: Maybe<Scalars['String']>;
  injectHTML?: Maybe<Scalars['Boolean']>;
  icons?: Maybe<SitePluginPluginOptionsIcons>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cacheDigest?: Maybe<Scalars['String']>;
  configDir?: Maybe<Scalars['String']>;
  projectRoot?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
  fonts?: Maybe<SitePluginPluginOptionsFontsFilterListInput>;
  pathToConfigModule?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  maxWidth?: Maybe<IntQueryOperatorInput>;
  withWebp?: Maybe<BooleanQueryOperatorInput>;
  wrapperStyle?: Maybe<StringQueryOperatorInput>;
  trackingId?: Maybe<StringQueryOperatorInput>;
  head?: Maybe<BooleanQueryOperatorInput>;
  logo?: Maybe<StringQueryOperatorInput>;
  injectHTML?: Maybe<BooleanQueryOperatorInput>;
  icons?: Maybe<SitePluginPluginOptionsIconsFilterInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  configDir?: Maybe<StringQueryOperatorInput>;
  projectRoot?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsFonts = {
  __typename?: 'SitePluginPluginOptionsFonts';
  family?: Maybe<Scalars['String']>;
  variants?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsFontsFilterInput = {
  family?: Maybe<StringQueryOperatorInput>;
  variants?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFontsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsFontsFilterInput>;
};

export type SitePluginPluginOptionsIcons = {
  __typename?: 'SitePluginPluginOptionsIcons';
  android?: Maybe<Scalars['Boolean']>;
  appleIcon?: Maybe<Scalars['Boolean']>;
  appleStartup?: Maybe<Scalars['Boolean']>;
  coast?: Maybe<Scalars['Boolean']>;
  favicons?: Maybe<Scalars['Boolean']>;
  firefox?: Maybe<Scalars['Boolean']>;
  twitter?: Maybe<Scalars['Boolean']>;
  yandex?: Maybe<Scalars['Boolean']>;
  windows?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsIconsFilterInput = {
  android?: Maybe<BooleanQueryOperatorInput>;
  appleIcon?: Maybe<BooleanQueryOperatorInput>;
  appleStartup?: Maybe<BooleanQueryOperatorInput>;
  coast?: Maybe<BooleanQueryOperatorInput>;
  favicons?: Maybe<BooleanQueryOperatorInput>;
  firefox?: Maybe<BooleanQueryOperatorInput>;
  twitter?: Maybe<BooleanQueryOperatorInput>;
  yandex?: Maybe<BooleanQueryOperatorInput>;
  windows?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsPlugins = {
  __typename?: 'SitePluginPluginOptionsPlugins';
  resolve?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptions>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
};

export type SitePluginPluginOptionsPluginsPluginOptions = {
  __typename?: 'SitePluginPluginOptionsPluginsPluginOptions';
  maxWidth?: Maybe<Scalars['Int']>;
  withWebp?: Maybe<Scalars['Boolean']>;
  wrapperStyle?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  maxWidth?: Maybe<IntQueryOperatorInput>;
  withWebp?: Maybe<BooleanQueryOperatorInput>;
  wrapperStyle?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  title?: Maybe<Scalars['String']>;
  titleTemplate?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  languageCode?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  twitterHandle?: Maybe<Scalars['String']>;
  disqusShortName?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  titleTemplate?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<StringQueryOperatorInput>;
  languageCode?: Maybe<StringQueryOperatorInput>;
  countryCode?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  twitterHandle?: Maybe<StringQueryOperatorInput>;
  disqusShortName?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type CreatePagesQueryQueryVariables = Exact<{ [key: string]: never }>;

export type CreatePagesQueryQuery = { __typename?: 'Query' } & {
  posts: { __typename?: 'MarkdownRemarkConnection' } & {
    nodes: Array<
      { __typename?: 'MarkdownRemark' } & {
        frontmatter?: Maybe<{ __typename?: 'MarkdownRemarkFrontmatter' } & Pick<MarkdownRemarkFrontmatter, 'path'>>;
      }
    >;
  };
  designs: { __typename?: 'DesignsYamlConnection' } & {
    nodes: Array<{ __typename?: 'DesignsYaml' } & Pick<DesignsYaml, 'slug'>>;
  };
};

export type DesignCountQueryVariables = Exact<{ [key: string]: never }>;

export type DesignCountQuery = { __typename?: 'Query' } & {
  allDesignsYaml: { __typename?: 'DesignsYamlConnection' } & Pick<DesignsYamlConnection, 'totalCount'> & {
      nodes: Array<{ __typename?: 'DesignsYaml' } & Pick<DesignsYaml, 'id'>>;
    };
};

export type BlogPostCountQueryVariables = Exact<{ [key: string]: never }>;

export type BlogPostCountQuery = { __typename?: 'Query' } & {
  allMarkdownRemark: { __typename?: 'MarkdownRemarkConnection' } & Pick<MarkdownRemarkConnection, 'totalCount'> & {
      nodes: Array<{ __typename?: 'MarkdownRemark' } & Pick<MarkdownRemark, 'id'>>;
    };
};

export type GatsbyImageSharpFixedFragment = { __typename?: 'ImageSharpFixed' } & Pick<
  ImageSharpFixed,
  'base64' | 'width' | 'height' | 'src' | 'srcSet'
>;

export type GatsbyImageSharpFixed_TracedSvgFragment = { __typename?: 'ImageSharpFixed' } & Pick<
  ImageSharpFixed,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'
>;

export type GatsbyImageSharpFixed_WithWebpFragment = { __typename?: 'ImageSharpFixed' } & Pick<
  ImageSharpFixed,
  'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = { __typename?: 'ImageSharpFixed' } & Pick<
  ImageSharpFixed,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpFixed_NoBase64Fragment = { __typename?: 'ImageSharpFixed' } & Pick<
  ImageSharpFixed,
  'width' | 'height' | 'src' | 'srcSet'
>;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = { __typename?: 'ImageSharpFixed' } & Pick<
  ImageSharpFixed,
  'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpFluidFragment = { __typename?: 'ImageSharpFluid' } & Pick<
  ImageSharpFluid,
  'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { __typename?: 'ImageSharpFluid' } & {
  maxHeight: ImageSharpFluid['presentationHeight'];
  maxWidth: ImageSharpFluid['presentationWidth'];
};

export type GatsbyImageSharpFluid_TracedSvgFragment = { __typename?: 'ImageSharpFluid' } & Pick<
  ImageSharpFluid,
  'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpFluid_WithWebpFragment = { __typename?: 'ImageSharpFluid' } & Pick<
  ImageSharpFluid,
  'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = { __typename?: 'ImageSharpFluid' } & Pick<
  ImageSharpFluid,
  'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>;

export type GatsbyImageSharpFluid_NoBase64Fragment = { __typename?: 'ImageSharpFluid' } & Pick<
  ImageSharpFluid,
  'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = { __typename?: 'ImageSharpFluid' } & Pick<
  ImageSharpFluid,
  'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>;

export type GatsbyImageSharpResolutionsFragment = { __typename?: 'ImageSharpResolutions' } & Pick<
  ImageSharpResolutions,
  'base64' | 'width' | 'height' | 'src' | 'srcSet'
>;

export type GatsbyImageSharpResolutions_TracedSvgFragment = { __typename?: 'ImageSharpResolutions' } & Pick<
  ImageSharpResolutions,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'
>;

export type GatsbyImageSharpResolutions_WithWebpFragment = { __typename?: 'ImageSharpResolutions' } & Pick<
  ImageSharpResolutions,
  'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = { __typename?: 'ImageSharpResolutions' } & Pick<
  ImageSharpResolutions,
  'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpResolutions_NoBase64Fragment = { __typename?: 'ImageSharpResolutions' } & Pick<
  ImageSharpResolutions,
  'width' | 'height' | 'src' | 'srcSet'
>;

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = { __typename?: 'ImageSharpResolutions' } & Pick<
  ImageSharpResolutions,
  'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpSizesFragment = { __typename?: 'ImageSharpSizes' } & Pick<
  ImageSharpSizes,
  'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpSizes_TracedSvgFragment = { __typename?: 'ImageSharpSizes' } & Pick<
  ImageSharpSizes,
  'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpSizes_WithWebpFragment = { __typename?: 'ImageSharpSizes' } & Pick<
  ImageSharpSizes,
  'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>;

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = { __typename?: 'ImageSharpSizes' } & Pick<
  ImageSharpSizes,
  'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>;

export type GatsbyImageSharpSizes_NoBase64Fragment = { __typename?: 'ImageSharpSizes' } & Pick<
  ImageSharpSizes,
  'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = { __typename?: 'ImageSharpSizes' } & Pick<
  ImageSharpSizes,
  'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>;

export type GhostImageQueryVariables = Exact<{ [key: string]: never }>;

export type GhostImageQuery = { __typename?: 'Query' } & {
  file?: Maybe<
    { __typename?: 'File' } & {
      childImageSharp?: Maybe<
        { __typename?: 'ImageSharp' } & {
          fixed?: Maybe<{ __typename?: 'ImageSharpFixed' } & GatsbyImageSharpFixedFragment>;
        }
      >;
    }
  >;
};

export type LandingGhostsQueryVariables = Exact<{ [key: string]: never }>;

export type LandingGhostsQuery = { __typename?: 'Query' } & {
  ghosts: { __typename?: 'FileConnection' } & {
    nodes: Array<
      { __typename?: 'File' } & Pick<File, 'name'> & {
          childImageSharp?: Maybe<
            { __typename?: 'ImageSharp' } & {
              fixed?: Maybe<{ __typename?: 'ImageSharpFixed' } & GatsbyImageSharpFixed_TracedSvgFragment>;
            }
          >;
        }
    >;
  };
};

export type NavbarGhostQueryVariables = Exact<{ [key: string]: never }>;

export type NavbarGhostQuery = { __typename?: 'Query' } & {
  file?: Maybe<
    { __typename?: 'File' } & {
      childImageSharp?: Maybe<
        { __typename?: 'ImageSharp' } & {
          fixed?: Maybe<{ __typename?: 'ImageSharpFixed' } & GatsbyImageSharpFixed_TracedSvgFragment>;
        }
      >;
    }
  >;
};

export type DesignsPageQueryVariables = Exact<{ [key: string]: never }>;

export type DesignsPageQuery = { __typename?: 'Query' } & {
  allBehanceProjects: { __typename?: 'DesignsYamlConnection' } & {
    nodes: Array<{ __typename?: 'DesignsYaml' } & Pick<DesignsYaml, 'slug' | 'name' | 'description' | 'tags'>>;
  };
  behanceImages: { __typename?: 'FileConnection' } & {
    nodes: Array<
      { __typename?: 'File' } & Pick<File, 'relativeDirectory'> & {
          childImageSharp?: Maybe<
            { __typename?: 'ImageSharp' } & {
              fluid?: Maybe<{ __typename?: 'ImageSharpFluid' } & GatsbyImageSharpFluidFragment>;
            }
          >;
        }
    >;
  };
};

export type FixedImageFragment = { __typename?: 'ImageSharp' } & {
  fixed?: Maybe<
    { __typename?: 'ImageSharpFixed' } & Pick<
      ImageSharpFixed,
      'originalName' | 'base64' | 'tracedSVG' | 'aspectRatio' | 'srcWebp' | 'srcSetWebp' | 'width' | 'height' | 'srcSet'
    >
  >;
};

export type FluidImageFragment = { __typename?: 'ImageSharp' } & {
  fluid?: Maybe<
    { __typename?: 'ImageSharpFluid' } & Pick<
      ImageSharpFluid,
      | 'base64'
      | 'tracedSVG'
      | 'srcWebp'
      | 'srcSetWebp'
      | 'originalImg'
      | 'originalName'
      | 'aspectRatio'
      | 'sizes'
      | 'presentationWidth'
      | 'presentationHeight'
      | 'src'
      | 'srcSet'
    >
  >;
};

export type FrontmatterFragment = { __typename?: 'MarkdownRemark' } & {
  frontmatter?: Maybe<
    { __typename?: 'MarkdownRemarkFrontmatter' } & Pick<
      MarkdownRemarkFrontmatter,
      'id' | 'date' | 'path' | 'title' | 'subtitle' | 'tags' | 'next'
    > & {
        thumbnail?: Maybe<
          { __typename?: 'File' } & Pick<File, 'id' | 'relativePath' | 'publicURL'> & {
              childImageSharp?: Maybe<
                { __typename?: 'ImageSharp' } & {
                  fluid?: Maybe<{ __typename?: 'ImageSharpFluid' } & GatsbyImageSharpFluid_TracedSvgFragment>;
                }
              >;
            }
        >;
      }
  >;
};

export type BlogPostFragment = { __typename?: 'MarkdownRemark' } & Pick<
  MarkdownRemark,
  'id' | 'excerpt' | 'timeToRead'
> &
  FrontmatterFragment;

export type PostsQueryVariables = Exact<{ [key: string]: never }>;

export type PostsQuery = { __typename?: 'Query' } & {
  allMarkdownRemark: { __typename?: 'MarkdownRemarkConnection' } & {
    nodes: Array<{ __typename?: 'MarkdownRemark' } & BlogPostFragment>;
  };
};

export type SeoQueryQueryVariables = Exact<{ [key: string]: never }>;

export type SeoQueryQuery = { __typename?: 'Query' } & {
  site?: Maybe<
    { __typename?: 'Site' } & {
      siteMetadata?: Maybe<
        { __typename?: 'SiteSiteMetadata' } & Pick<SiteSiteMetadata, 'titleTemplate'> & {
            defaultTitle: SiteSiteMetadata['title'];
            defaultDescription: SiteSiteMetadata['description'];
            url: SiteSiteMetadata['siteUrl'];
            defaultImage: SiteSiteMetadata['image'];
          }
      >;
    }
  >;
};

export type SideProjectsQueryVariables = Exact<{ [key: string]: never }>;

export type SideProjectsQuery = { __typename?: 'Query' } & {
  allSideprojectsYaml: { __typename?: 'SideprojectsYamlConnection' } & {
    nodes: Array<
      { __typename?: 'SideprojectsYaml' } & Pick<
        SideprojectsYaml,
        'id' | 'title' | 'link' | 'github' | 'description' | 'tags'
      > & {
          image?: Maybe<
            { __typename?: 'File' } & { childImageSharp?: Maybe<{ __typename?: 'ImageSharp' } & FluidImageFragment> }
          >;
        }
    >;
  };
};

export type UseDesignsQueryVariables = Exact<{ [key: string]: never }>;

export type UseDesignsQuery = { __typename?: 'Query' } & {
  projects: { __typename?: 'DesignsYamlConnection' } & {
    nodes: Array<{ __typename?: 'DesignsYaml' } & Pick<DesignsYaml, 'slug' | 'name' | 'description' | 'tags'>>;
  };
  images: { __typename?: 'FileConnection' } & {
    nodes: Array<
      { __typename?: 'File' } & Pick<File, 'id' | 'name' | 'relativeDirectory'> & {
          childImageSharp?: Maybe<
            { __typename?: 'ImageSharp' } & {
              fluid?: Maybe<{ __typename?: 'ImageSharpFluid' } & GatsbyImageSharpFluid_TracedSvgFragment>;
            }
          >;
        }
    >;
  };
};

export type AllSiteTagsQueryVariables = Exact<{ [key: string]: never }>;

export type AllSiteTagsQuery = { __typename?: 'Query' } & {
  blogTags: { __typename?: 'MarkdownRemarkConnection' } & {
    group: Array<
      { __typename?: 'MarkdownRemarkGroupConnection' } & {
        tag: MarkdownRemarkGroupConnection['fieldValue'];
        qty: MarkdownRemarkGroupConnection['totalCount'];
      }
    >;
  };
  designTags: { __typename?: 'DesignsYamlConnection' } & {
    group: Array<
      { __typename?: 'DesignsYamlGroupConnection' } & {
        tag: DesignsYamlGroupConnection['fieldValue'];
        qty: DesignsYamlGroupConnection['totalCount'];
      }
    >;
  };
  sideProjectTags: { __typename?: 'SideprojectsYamlConnection' } & {
    group: Array<
      { __typename?: 'SideprojectsYamlGroupConnection' } & {
        tag: SideprojectsYamlGroupConnection['fieldValue'];
        qty: SideprojectsYamlGroupConnection['totalCount'];
      }
    >;
  };
};

export type BlogListQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
}>;

export type BlogListQuery = { __typename?: 'Query' } & {
  allMarkdownRemark: { __typename?: 'MarkdownRemarkConnection' } & {
    posts: Array<
      { __typename?: 'MarkdownRemark' } & Pick<MarkdownRemark, 'id' | 'excerpt'> & {
          frontmatter?: Maybe<
            { __typename?: 'MarkdownRemarkFrontmatter' } & Pick<
              MarkdownRemarkFrontmatter,
              'id' | 'date' | 'path' | 'title' | 'subtitle' | 'tags'
            > & {
                thumbnail?: Maybe<
                  { __typename?: 'File' } & Pick<File, 'id' | 'relativePath' | 'publicURL'> & {
                      childImageSharp?: Maybe<
                        { __typename?: 'ImageSharp' } & {
                          fixed?: Maybe<
                            { __typename?: 'ImageSharpFixed' } & GatsbyImageSharpFixed_WithWebp_TracedSvgFragment
                          >;
                        }
                      >;
                    }
                >;
              }
          >;
        }
    >;
  };
};

export type BlogTemplateQueryVariables = Exact<{
  slug: Scalars['String'];
  prev?: Maybe<Scalars['String']>;
  next?: Maybe<Scalars['String']>;
}>;

export type BlogTemplateQuery = { __typename?: 'Query' } & {
  post?: Maybe<
    { __typename?: 'MarkdownRemark' } & Pick<MarkdownRemark, 'url' | 'disqusIdentifier' | 'timeToRead' | 'htmlAst'> &
      FrontmatterFragment
  >;
  prev?: Maybe<
    { __typename?: 'MarkdownRemark' } & {
      frontmatter?: Maybe<
        { __typename?: 'MarkdownRemarkFrontmatter' } & Pick<MarkdownRemarkFrontmatter, 'path'> & {
            title: MarkdownRemarkFrontmatter['subtitle'];
          }
      >;
    }
  >;
  next?: Maybe<
    { __typename?: 'MarkdownRemark' } & {
      frontmatter?: Maybe<
        { __typename?: 'MarkdownRemarkFrontmatter' } & Pick<MarkdownRemarkFrontmatter, 'path'> & {
            title: MarkdownRemarkFrontmatter['subtitle'];
          }
      >;
    }
  >;
  site?: Maybe<
    { __typename?: 'Site' } & {
      siteMetadata?: Maybe<
        { __typename?: 'SiteSiteMetadata' } & Pick<SiteSiteMetadata, 'twitterHandle' | 'disqusShortName'>
      >;
    }
  >;
};

export type DesignsTemplateQueryQueryVariables = Exact<{
  slug: Scalars['String'];
}>;

export type DesignsTemplateQueryQuery = { __typename?: 'Query' } & {
  design?: Maybe<
    { __typename?: 'DesignsYaml' } & Pick<DesignsYaml, 'id' | 'slug' | 'name' | 'description' | 'tags'> & {
        tools?: Maybe<Array<Maybe<{ __typename?: 'DesignsYamlTools' } & Pick<DesignsYamlTools, 'title'>>>>;
      }
  >;
  images: { __typename?: 'FileConnection' } & Pick<FileConnection, 'totalCount'> & {
      nodes: Array<
        { __typename?: 'File' } & Pick<File, 'id' | 'name'> & {
            childImageSharp?: Maybe<{ __typename?: 'ImageSharp' } & FluidImageFragment>;
          }
      >;
    };
};

export type DesignListQueryVariables = Exact<{
  skip: Scalars['Int'];
  limit: Scalars['Int'];
}>;

export type DesignListQuery = { __typename?: 'Query' } & {
  allDesignsYaml: { __typename?: 'DesignsYamlConnection' } & {
    nodes: Array<{ __typename?: 'DesignsYaml' } & Pick<DesignsYaml, 'name' | 'description' | 'slug'>>;
  };
  allFile: { __typename?: 'FileConnection' } & {
    nodes: Array<
      { __typename?: 'File' } & Pick<File, 'relativeDirectory' | 'sourceInstanceName'> & {
          childImageSharp?: Maybe<
            { __typename?: 'ImageSharp' } & {
              fixed?: Maybe<{ __typename?: 'ImageSharpFixed' } & GatsbyImageSharpFixed_WithWebp_TracedSvgFragment>;
            }
          >;
        }
    >;
  };
};

export type TagPageTemplateQueryVariables = Exact<{
  tag?: Maybe<Scalars['String']>;
}>;

export type TagPageTemplateQuery = { __typename?: 'Query' } & {
  matchedPosts: { __typename?: 'MarkdownRemarkConnection' } & { qty: MarkdownRemarkConnection['totalCount'] } & {
    posts: Array<{ __typename?: 'MarkdownRemark' } & Pick<MarkdownRemark, 'excerpt'> & FrontmatterFragment>;
  };
  matchedDesigns: { __typename?: 'DesignsYamlConnection' } & { qty: DesignsYamlConnection['totalCount'] } & {
    designs: Array<{ __typename?: 'DesignsYaml' } & Pick<DesignsYaml, 'description'>>;
  };
  matchedSideProjects: { __typename?: 'SideprojectsYamlConnection' } & {
    qty: SideprojectsYamlConnection['totalCount'];
  } & {
    projects: Array<
      { __typename?: 'SideprojectsYaml' } & Pick<SideprojectsYaml, 'link' | 'title' | 'github' | 'description'>
    >;
  };
};

export const GatsbyImageSharpFixedFragmentDoc = gql`
  fragment GatsbyImageSharpFixed on ImageSharpFixed {
    base64
    width
    height
    src
    srcSet
  }
`;
export const GatsbyImageSharpFixed_TracedSvgFragmentDoc = gql`
  fragment GatsbyImageSharpFixed_tracedSVG on ImageSharpFixed {
    tracedSVG
    width
    height
    src
    srcSet
  }
`;
export const GatsbyImageSharpFixed_WithWebpFragmentDoc = gql`
  fragment GatsbyImageSharpFixed_withWebp on ImageSharpFixed {
    base64
    width
    height
    src
    srcSet
    srcWebp
    srcSetWebp
  }
`;
export const GatsbyImageSharpFixed_WithWebp_TracedSvgFragmentDoc = gql`
  fragment GatsbyImageSharpFixed_withWebp_tracedSVG on ImageSharpFixed {
    tracedSVG
    width
    height
    src
    srcSet
    srcWebp
    srcSetWebp
  }
`;
export const GatsbyImageSharpFixed_NoBase64FragmentDoc = gql`
  fragment GatsbyImageSharpFixed_noBase64 on ImageSharpFixed {
    width
    height
    src
    srcSet
  }
`;
export const GatsbyImageSharpFixed_WithWebp_NoBase64FragmentDoc = gql`
  fragment GatsbyImageSharpFixed_withWebp_noBase64 on ImageSharpFixed {
    width
    height
    src
    srcSet
    srcWebp
    srcSetWebp
  }
`;
export const GatsbyImageSharpFluidFragmentDoc = gql`
  fragment GatsbyImageSharpFluid on ImageSharpFluid {
    base64
    aspectRatio
    src
    srcSet
    sizes
  }
`;
export const GatsbyImageSharpFluidLimitPresentationSizeFragmentDoc = gql`
  fragment GatsbyImageSharpFluidLimitPresentationSize on ImageSharpFluid {
    maxHeight: presentationHeight
    maxWidth: presentationWidth
  }
`;
export const GatsbyImageSharpFluid_WithWebpFragmentDoc = gql`
  fragment GatsbyImageSharpFluid_withWebp on ImageSharpFluid {
    base64
    aspectRatio
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
  }
`;
export const GatsbyImageSharpFluid_WithWebp_TracedSvgFragmentDoc = gql`
  fragment GatsbyImageSharpFluid_withWebp_tracedSVG on ImageSharpFluid {
    tracedSVG
    aspectRatio
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
  }
`;
export const GatsbyImageSharpFluid_NoBase64FragmentDoc = gql`
  fragment GatsbyImageSharpFluid_noBase64 on ImageSharpFluid {
    aspectRatio
    src
    srcSet
    sizes
  }
`;
export const GatsbyImageSharpFluid_WithWebp_NoBase64FragmentDoc = gql`
  fragment GatsbyImageSharpFluid_withWebp_noBase64 on ImageSharpFluid {
    aspectRatio
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
  }
`;
export const GatsbyImageSharpResolutionsFragmentDoc = gql`
  fragment GatsbyImageSharpResolutions on ImageSharpResolutions {
    base64
    width
    height
    src
    srcSet
  }
`;
export const GatsbyImageSharpResolutions_TracedSvgFragmentDoc = gql`
  fragment GatsbyImageSharpResolutions_tracedSVG on ImageSharpResolutions {
    tracedSVG
    width
    height
    src
    srcSet
  }
`;
export const GatsbyImageSharpResolutions_WithWebpFragmentDoc = gql`
  fragment GatsbyImageSharpResolutions_withWebp on ImageSharpResolutions {
    base64
    width
    height
    src
    srcSet
    srcWebp
    srcSetWebp
  }
`;
export const GatsbyImageSharpResolutions_WithWebp_TracedSvgFragmentDoc = gql`
  fragment GatsbyImageSharpResolutions_withWebp_tracedSVG on ImageSharpResolutions {
    tracedSVG
    width
    height
    src
    srcSet
    srcWebp
    srcSetWebp
  }
`;
export const GatsbyImageSharpResolutions_NoBase64FragmentDoc = gql`
  fragment GatsbyImageSharpResolutions_noBase64 on ImageSharpResolutions {
    width
    height
    src
    srcSet
  }
`;
export const GatsbyImageSharpResolutions_WithWebp_NoBase64FragmentDoc = gql`
  fragment GatsbyImageSharpResolutions_withWebp_noBase64 on ImageSharpResolutions {
    width
    height
    src
    srcSet
    srcWebp
    srcSetWebp
  }
`;
export const GatsbyImageSharpSizesFragmentDoc = gql`
  fragment GatsbyImageSharpSizes on ImageSharpSizes {
    base64
    aspectRatio
    src
    srcSet
    sizes
  }
`;
export const GatsbyImageSharpSizes_TracedSvgFragmentDoc = gql`
  fragment GatsbyImageSharpSizes_tracedSVG on ImageSharpSizes {
    tracedSVG
    aspectRatio
    src
    srcSet
    sizes
  }
`;
export const GatsbyImageSharpSizes_WithWebpFragmentDoc = gql`
  fragment GatsbyImageSharpSizes_withWebp on ImageSharpSizes {
    base64
    aspectRatio
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
  }
`;
export const GatsbyImageSharpSizes_WithWebp_TracedSvgFragmentDoc = gql`
  fragment GatsbyImageSharpSizes_withWebp_tracedSVG on ImageSharpSizes {
    tracedSVG
    aspectRatio
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
  }
`;
export const GatsbyImageSharpSizes_NoBase64FragmentDoc = gql`
  fragment GatsbyImageSharpSizes_noBase64 on ImageSharpSizes {
    aspectRatio
    src
    srcSet
    sizes
  }
`;
export const GatsbyImageSharpSizes_WithWebp_NoBase64FragmentDoc = gql`
  fragment GatsbyImageSharpSizes_withWebp_noBase64 on ImageSharpSizes {
    aspectRatio
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
  }
`;
export const FixedImageFragmentDoc = gql`
  fragment FixedImage on ImageSharp {
    fixed(width: $width, height: $height) {
      originalName
      base64
      tracedSVG
      aspectRatio
      srcWebp
      srcSetWebp
      originalName
      width
      height
      srcSet
      srcSetWebp
      base64
      aspectRatio
    }
  }
`;
export const FluidImageFragmentDoc = gql`
  fragment FluidImage on ImageSharp {
    fluid(maxWidth: 630, traceSVG: { background: "transparent", color: "#d0c1fa", threshold: 6 }) {
      base64
      tracedSVG
      srcWebp
      srcSetWebp
      originalImg
      originalName
      aspectRatio
      sizes
      presentationWidth
      presentationHeight
      src
      srcSet
    }
  }
`;
export const GatsbyImageSharpFluid_TracedSvgFragmentDoc = gql`
  fragment GatsbyImageSharpFluid_tracedSVG on ImageSharpFluid {
    tracedSVG
    aspectRatio
    src
    srcSet
    sizes
  }
`;
export const FrontmatterFragmentDoc = gql`
  fragment Frontmatter on MarkdownRemark {
    frontmatter {
      id
      date(formatString: "MMMM DD, YYYY")
      path
      title
      subtitle
      tags
      next
      thumbnail {
        id
        relativePath
        publicURL
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
  ${GatsbyImageSharpFluid_TracedSvgFragmentDoc}
`;
export const BlogPostFragmentDoc = gql`
  fragment BlogPost on MarkdownRemark {
    id
    excerpt(pruneLength: 75)
    timeToRead
    ...Frontmatter
  }
  ${FrontmatterFragmentDoc}
`;
export const CreatePagesQueryDocument = gql`
  query CreatePagesQuery {
    posts: allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          path
        }
      }
    }
    designs: allDesignsYaml {
      nodes {
        slug
      }
    }
  }
`;
export type CreatePagesQueryComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<CreatePagesQueryQuery, CreatePagesQueryQueryVariables>,
  'query'
>;

export const CreatePagesQueryComponent = (props: CreatePagesQueryComponentProps) => (
  <ApolloReactComponents.Query<CreatePagesQueryQuery, CreatePagesQueryQueryVariables>
    query={CreatePagesQueryDocument}
    {...props}
  />
);

export type CreatePagesQueryProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<CreatePagesQueryQuery, CreatePagesQueryQueryVariables>;
} &
  TChildProps;
export function withCreatePagesQuery<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    CreatePagesQueryQuery,
    CreatePagesQueryQueryVariables,
    CreatePagesQueryProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    CreatePagesQueryQuery,
    CreatePagesQueryQueryVariables,
    CreatePagesQueryProps<TChildProps, TDataName>
  >(CreatePagesQueryDocument, {
    alias: 'createPagesQuery',
    ...operationOptions
  });
}
export type CreatePagesQueryQueryResult = ApolloReactCommon.QueryResult<
  CreatePagesQueryQuery,
  CreatePagesQueryQueryVariables
>;
export const DesignCountDocument = gql`
  query DesignCount {
    allDesignsYaml {
      nodes {
        id
      }
      totalCount
    }
  }
`;
export type DesignCountComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<DesignCountQuery, DesignCountQueryVariables>,
  'query'
>;

export const DesignCountComponent = (props: DesignCountComponentProps) => (
  <ApolloReactComponents.Query<DesignCountQuery, DesignCountQueryVariables> query={DesignCountDocument} {...props} />
);

export type DesignCountProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<DesignCountQuery, DesignCountQueryVariables>;
} &
  TChildProps;
export function withDesignCount<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    DesignCountQuery,
    DesignCountQueryVariables,
    DesignCountProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    DesignCountQuery,
    DesignCountQueryVariables,
    DesignCountProps<TChildProps, TDataName>
  >(DesignCountDocument, {
    alias: 'designCount',
    ...operationOptions
  });
}
export type DesignCountQueryResult = ApolloReactCommon.QueryResult<DesignCountQuery, DesignCountQueryVariables>;
export const BlogPostCountDocument = gql`
  query BlogPostCount {
    allMarkdownRemark {
      totalCount
      nodes {
        id
      }
    }
  }
`;
export type BlogPostCountComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<BlogPostCountQuery, BlogPostCountQueryVariables>,
  'query'
>;

export const BlogPostCountComponent = (props: BlogPostCountComponentProps) => (
  <ApolloReactComponents.Query<BlogPostCountQuery, BlogPostCountQueryVariables>
    query={BlogPostCountDocument}
    {...props}
  />
);

export type BlogPostCountProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<BlogPostCountQuery, BlogPostCountQueryVariables>;
} &
  TChildProps;
export function withBlogPostCount<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    BlogPostCountQuery,
    BlogPostCountQueryVariables,
    BlogPostCountProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    BlogPostCountQuery,
    BlogPostCountQueryVariables,
    BlogPostCountProps<TChildProps, TDataName>
  >(BlogPostCountDocument, {
    alias: 'blogPostCount',
    ...operationOptions
  });
}
export type BlogPostCountQueryResult = ApolloReactCommon.QueryResult<BlogPostCountQuery, BlogPostCountQueryVariables>;
export const GhostImageDocument = gql`
  query GhostImage {
    file(relativePath: { eq: "ghost.png" }) {
      childImageSharp {
        fixed(width: 30, height: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
  ${GatsbyImageSharpFixedFragmentDoc}
`;
export type GhostImageComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<GhostImageQuery, GhostImageQueryVariables>,
  'query'
>;

export const GhostImageComponent = (props: GhostImageComponentProps) => (
  <ApolloReactComponents.Query<GhostImageQuery, GhostImageQueryVariables> query={GhostImageDocument} {...props} />
);

export type GhostImageProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<GhostImageQuery, GhostImageQueryVariables>;
} &
  TChildProps;
export function withGhostImage<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    GhostImageQuery,
    GhostImageQueryVariables,
    GhostImageProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    GhostImageQuery,
    GhostImageQueryVariables,
    GhostImageProps<TChildProps, TDataName>
  >(GhostImageDocument, {
    alias: 'ghostImage',
    ...operationOptions
  });
}
export type GhostImageQueryResult = ApolloReactCommon.QueryResult<GhostImageQuery, GhostImageQueryVariables>;
export const LandingGhostsDocument = gql`
  query LandingGhosts {
    ghosts: allFile(filter: { relativeDirectory: { eq: "ghost" }, name: { nin: ["ghost-yellow", "ghost-purple"] } }) {
      nodes {
        name
        childImageSharp {
          fixed(height: 90) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  }
  ${GatsbyImageSharpFixed_TracedSvgFragmentDoc}
`;
export type LandingGhostsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<LandingGhostsQuery, LandingGhostsQueryVariables>,
  'query'
>;

export const LandingGhostsComponent = (props: LandingGhostsComponentProps) => (
  <ApolloReactComponents.Query<LandingGhostsQuery, LandingGhostsQueryVariables>
    query={LandingGhostsDocument}
    {...props}
  />
);

export type LandingGhostsProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<LandingGhostsQuery, LandingGhostsQueryVariables>;
} &
  TChildProps;
export function withLandingGhosts<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    LandingGhostsQuery,
    LandingGhostsQueryVariables,
    LandingGhostsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    LandingGhostsQuery,
    LandingGhostsQueryVariables,
    LandingGhostsProps<TChildProps, TDataName>
  >(LandingGhostsDocument, {
    alias: 'landingGhosts',
    ...operationOptions
  });
}
export type LandingGhostsQueryResult = ApolloReactCommon.QueryResult<LandingGhostsQuery, LandingGhostsQueryVariables>;
export const NavbarGhostDocument = gql`
  query NavbarGhost {
    file(relativePath: { eq: "ghost.png" }) {
      childImageSharp {
        fixed(height: 25) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
  ${GatsbyImageSharpFixed_TracedSvgFragmentDoc}
`;
export type NavbarGhostComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<NavbarGhostQuery, NavbarGhostQueryVariables>,
  'query'
>;

export const NavbarGhostComponent = (props: NavbarGhostComponentProps) => (
  <ApolloReactComponents.Query<NavbarGhostQuery, NavbarGhostQueryVariables> query={NavbarGhostDocument} {...props} />
);

export type NavbarGhostProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<NavbarGhostQuery, NavbarGhostQueryVariables>;
} &
  TChildProps;
export function withNavbarGhost<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    NavbarGhostQuery,
    NavbarGhostQueryVariables,
    NavbarGhostProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    NavbarGhostQuery,
    NavbarGhostQueryVariables,
    NavbarGhostProps<TChildProps, TDataName>
  >(NavbarGhostDocument, {
    alias: 'navbarGhost',
    ...operationOptions
  });
}
export type NavbarGhostQueryResult = ApolloReactCommon.QueryResult<NavbarGhostQuery, NavbarGhostQueryVariables>;
export const DesignsPageDocument = gql`
  query DesignsPage {
    allBehanceProjects: allDesignsYaml {
      nodes {
        slug
        name
        description
        tags
      }
    }
    behanceImages: allFile(
      filter: { relativeDirectory: { regex: "/gatsby-source-behance-images/" }, name: { eq: "cover" } }
    ) {
      nodes {
        relativeDirectory
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
  ${GatsbyImageSharpFluidFragmentDoc}
`;
export type DesignsPageComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<DesignsPageQuery, DesignsPageQueryVariables>,
  'query'
>;

export const DesignsPageComponent = (props: DesignsPageComponentProps) => (
  <ApolloReactComponents.Query<DesignsPageQuery, DesignsPageQueryVariables> query={DesignsPageDocument} {...props} />
);

export type DesignsPageProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<DesignsPageQuery, DesignsPageQueryVariables>;
} &
  TChildProps;
export function withDesignsPage<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    DesignsPageQuery,
    DesignsPageQueryVariables,
    DesignsPageProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    DesignsPageQuery,
    DesignsPageQueryVariables,
    DesignsPageProps<TChildProps, TDataName>
  >(DesignsPageDocument, {
    alias: 'designsPage',
    ...operationOptions
  });
}
export type DesignsPageQueryResult = ApolloReactCommon.QueryResult<DesignsPageQuery, DesignsPageQueryVariables>;
export const PostsDocument = gql`
  query Posts {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        ...BlogPost
      }
    }
  }
  ${BlogPostFragmentDoc}
`;
export type PostsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<PostsQuery, PostsQueryVariables>,
  'query'
>;

export const PostsComponent = (props: PostsComponentProps) => (
  <ApolloReactComponents.Query<PostsQuery, PostsQueryVariables> query={PostsDocument} {...props} />
);

export type PostsProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<PostsQuery, PostsQueryVariables>;
} &
  TChildProps;
export function withPosts<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    PostsQuery,
    PostsQueryVariables,
    PostsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<TProps, PostsQuery, PostsQueryVariables, PostsProps<TChildProps, TDataName>>(
    PostsDocument,
    {
      alias: 'posts',
      ...operationOptions
    }
  );
}
export type PostsQueryResult = ApolloReactCommon.QueryResult<PostsQuery, PostsQueryVariables>;
export const SeoQueryDocument = gql`
  query SEOQuery {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        url: siteUrl
        defaultImage: image
      }
    }
  }
`;
export type SeoQueryComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<SeoQueryQuery, SeoQueryQueryVariables>,
  'query'
>;

export const SeoQueryComponent = (props: SeoQueryComponentProps) => (
  <ApolloReactComponents.Query<SeoQueryQuery, SeoQueryQueryVariables> query={SeoQueryDocument} {...props} />
);

export type SeoQueryProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<SeoQueryQuery, SeoQueryQueryVariables>;
} &
  TChildProps;
export function withSeoQuery<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    SeoQueryQuery,
    SeoQueryQueryVariables,
    SeoQueryProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<TProps, SeoQueryQuery, SeoQueryQueryVariables, SeoQueryProps<TChildProps, TDataName>>(
    SeoQueryDocument,
    {
      alias: 'seoQuery',
      ...operationOptions
    }
  );
}
export type SeoQueryQueryResult = ApolloReactCommon.QueryResult<SeoQueryQuery, SeoQueryQueryVariables>;
export const SideProjectsDocument = gql`
  query SideProjects {
    allSideprojectsYaml {
      nodes {
        id
        title
        link
        github
        description
        image {
          childImageSharp {
            ...FluidImage
          }
        }
        tags
      }
    }
  }
  ${FluidImageFragmentDoc}
`;
export type SideProjectsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<SideProjectsQuery, SideProjectsQueryVariables>,
  'query'
>;

export const SideProjectsComponent = (props: SideProjectsComponentProps) => (
  <ApolloReactComponents.Query<SideProjectsQuery, SideProjectsQueryVariables> query={SideProjectsDocument} {...props} />
);

export type SideProjectsProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<SideProjectsQuery, SideProjectsQueryVariables>;
} &
  TChildProps;
export function withSideProjects<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    SideProjectsQuery,
    SideProjectsQueryVariables,
    SideProjectsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    SideProjectsQuery,
    SideProjectsQueryVariables,
    SideProjectsProps<TChildProps, TDataName>
  >(SideProjectsDocument, {
    alias: 'sideProjects',
    ...operationOptions
  });
}
export type SideProjectsQueryResult = ApolloReactCommon.QueryResult<SideProjectsQuery, SideProjectsQueryVariables>;
export const UseDesignsDocument = gql`
  query UseDesigns {
    projects: allDesignsYaml {
      nodes {
        slug
        name
        description
        tags
      }
    }
    images: allFile(filter: { sourceInstanceName: { eq: "designs" }, name: { eq: "cover" } }) {
      nodes {
        id
        name
        relativeDirectory
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
  ${GatsbyImageSharpFluid_TracedSvgFragmentDoc}
`;
export type UseDesignsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<UseDesignsQuery, UseDesignsQueryVariables>,
  'query'
>;

export const UseDesignsComponent = (props: UseDesignsComponentProps) => (
  <ApolloReactComponents.Query<UseDesignsQuery, UseDesignsQueryVariables> query={UseDesignsDocument} {...props} />
);

export type UseDesignsProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<UseDesignsQuery, UseDesignsQueryVariables>;
} &
  TChildProps;
export function withUseDesigns<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    UseDesignsQuery,
    UseDesignsQueryVariables,
    UseDesignsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    UseDesignsQuery,
    UseDesignsQueryVariables,
    UseDesignsProps<TChildProps, TDataName>
  >(UseDesignsDocument, {
    alias: 'useDesigns',
    ...operationOptions
  });
}
export type UseDesignsQueryResult = ApolloReactCommon.QueryResult<UseDesignsQuery, UseDesignsQueryVariables>;
export const AllSiteTagsDocument = gql`
  query AllSiteTags {
    blogTags: allMarkdownRemark(limit: 2000, sort: { fields: frontmatter___tags }) {
      group(field: frontmatter___tags) {
        tag: fieldValue
        qty: totalCount
      }
    }
    designTags: allDesignsYaml(limit: 2000, sort: { fields: tags, order: ASC }) {
      group(field: tags) {
        tag: fieldValue
        qty: totalCount
      }
    }
    sideProjectTags: allSideprojectsYaml(limit: 2000, sort: { order: ASC, fields: tags }) {
      group(field: tags) {
        tag: fieldValue
        qty: totalCount
      }
    }
  }
`;
export type AllSiteTagsComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<AllSiteTagsQuery, AllSiteTagsQueryVariables>,
  'query'
>;

export const AllSiteTagsComponent = (props: AllSiteTagsComponentProps) => (
  <ApolloReactComponents.Query<AllSiteTagsQuery, AllSiteTagsQueryVariables> query={AllSiteTagsDocument} {...props} />
);

export type AllSiteTagsProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<AllSiteTagsQuery, AllSiteTagsQueryVariables>;
} &
  TChildProps;
export function withAllSiteTags<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    AllSiteTagsQuery,
    AllSiteTagsQueryVariables,
    AllSiteTagsProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    AllSiteTagsQuery,
    AllSiteTagsQueryVariables,
    AllSiteTagsProps<TChildProps, TDataName>
  >(AllSiteTagsDocument, {
    alias: 'allSiteTags',
    ...operationOptions
  });
}
export type AllSiteTagsQueryResult = ApolloReactCommon.QueryResult<AllSiteTagsQuery, AllSiteTagsQueryVariables>;
export const BlogListDocument = gql`
  query BlogList($skip: Int, $limit: Int) {
    allMarkdownRemark(skip: $skip, limit: $limit, sort: { fields: [frontmatter___date], order: DESC }) {
      posts: nodes {
        id
        excerpt(pruneLength: 75)
        frontmatter {
          id
          date(formatString: "MMMM DD, YYYY")
          path
          title
          subtitle
          tags
          thumbnail {
            id
            relativePath
            publicURL
            childImageSharp {
              fixed(
                height: 200
                width: 275
                traceSVG: { color: "#d0c1fa", background: "transparent" }
                cropFocus: CENTER
              ) {
                ...GatsbyImageSharpFixed_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  }
  ${GatsbyImageSharpFixed_WithWebp_TracedSvgFragmentDoc}
`;
export type BlogListComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<BlogListQuery, BlogListQueryVariables>,
  'query'
>;

export const BlogListComponent = (props: BlogListComponentProps) => (
  <ApolloReactComponents.Query<BlogListQuery, BlogListQueryVariables> query={BlogListDocument} {...props} />
);

export type BlogListProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<BlogListQuery, BlogListQueryVariables>;
} &
  TChildProps;
export function withBlogList<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    BlogListQuery,
    BlogListQueryVariables,
    BlogListProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<TProps, BlogListQuery, BlogListQueryVariables, BlogListProps<TChildProps, TDataName>>(
    BlogListDocument,
    {
      alias: 'blogList',
      ...operationOptions
    }
  );
}
export type BlogListQueryResult = ApolloReactCommon.QueryResult<BlogListQuery, BlogListQueryVariables>;
export const BlogTemplateDocument = gql`
  query BlogTemplate($slug: String!, $prev: String, $next: String) {
    post: markdownRemark(frontmatter: { path: { eq: $slug } }) {
      url
      disqusIdentifier
      timeToRead
      htmlAst
      ...Frontmatter
    }
    prev: markdownRemark(frontmatter: { path: { eq: $prev } }) {
      frontmatter {
        title: subtitle
        path
      }
    }
    next: markdownRemark(frontmatter: { path: { eq: $next } }) {
      frontmatter {
        title: subtitle
        path
      }
    }
    site {
      siteMetadata {
        twitterHandle
        disqusShortName
      }
    }
  }
  ${FrontmatterFragmentDoc}
`;
export type BlogTemplateComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<BlogTemplateQuery, BlogTemplateQueryVariables>,
  'query'
> &
  ({ variables: BlogTemplateQueryVariables; skip?: boolean } | { skip: boolean });

export const BlogTemplateComponent = (props: BlogTemplateComponentProps) => (
  <ApolloReactComponents.Query<BlogTemplateQuery, BlogTemplateQueryVariables> query={BlogTemplateDocument} {...props} />
);

export type BlogTemplateProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<BlogTemplateQuery, BlogTemplateQueryVariables>;
} &
  TChildProps;
export function withBlogTemplate<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    BlogTemplateQuery,
    BlogTemplateQueryVariables,
    BlogTemplateProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    BlogTemplateQuery,
    BlogTemplateQueryVariables,
    BlogTemplateProps<TChildProps, TDataName>
  >(BlogTemplateDocument, {
    alias: 'blogTemplate',
    ...operationOptions
  });
}
export type BlogTemplateQueryResult = ApolloReactCommon.QueryResult<BlogTemplateQuery, BlogTemplateQueryVariables>;
export const DesignsTemplateQueryDocument = gql`
  query DesignsTemplateQuery($slug: String!) {
    design: designsYaml(slug: { regex: $slug }) {
      id
      slug
      name
      description
      tags
      tools {
        title
      }
    }
    images: allFile(filter: { relativePath: { regex: $slug }, sourceInstanceName: { eq: "designs" } }) {
      nodes {
        id
        name
        childImageSharp {
          ...FluidImage
        }
      }
      totalCount
    }
  }
  ${FluidImageFragmentDoc}
`;
export type DesignsTemplateQueryComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<DesignsTemplateQueryQuery, DesignsTemplateQueryQueryVariables>,
  'query'
> &
  ({ variables: DesignsTemplateQueryQueryVariables; skip?: boolean } | { skip: boolean });

export const DesignsTemplateQueryComponent = (props: DesignsTemplateQueryComponentProps) => (
  <ApolloReactComponents.Query<DesignsTemplateQueryQuery, DesignsTemplateQueryQueryVariables>
    query={DesignsTemplateQueryDocument}
    {...props}
  />
);

export type DesignsTemplateQueryProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<DesignsTemplateQueryQuery, DesignsTemplateQueryQueryVariables>;
} &
  TChildProps;
export function withDesignsTemplateQuery<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    DesignsTemplateQueryQuery,
    DesignsTemplateQueryQueryVariables,
    DesignsTemplateQueryProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    DesignsTemplateQueryQuery,
    DesignsTemplateQueryQueryVariables,
    DesignsTemplateQueryProps<TChildProps, TDataName>
  >(DesignsTemplateQueryDocument, {
    alias: 'designsTemplateQuery',
    ...operationOptions
  });
}
export type DesignsTemplateQueryQueryResult = ApolloReactCommon.QueryResult<
  DesignsTemplateQueryQuery,
  DesignsTemplateQueryQueryVariables
>;
export const DesignListDocument = gql`
  query DesignList($skip: Int!, $limit: Int!) {
    allDesignsYaml(skip: $skip, limit: $limit, sort: { fields: slug, order: ASC }) {
      nodes {
        name
        description
        slug
      }
    }
    allFile(
      skip: $skip
      limit: $limit
      filter: { sourceInstanceName: { eq: "designs" }, name: { eq: "cover" } }
      sort: { fields: relativeDirectory, order: ASC }
    ) {
      nodes {
        relativeDirectory
        sourceInstanceName
        childImageSharp {
          fixed(height: 200, width: 275, traceSVG: { color: "#d0c1fa", background: "transparent" }, cropFocus: CENTER) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  }
  ${GatsbyImageSharpFixed_WithWebp_TracedSvgFragmentDoc}
`;
export type DesignListComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<DesignListQuery, DesignListQueryVariables>,
  'query'
> &
  ({ variables: DesignListQueryVariables; skip?: boolean } | { skip: boolean });

export const DesignListComponent = (props: DesignListComponentProps) => (
  <ApolloReactComponents.Query<DesignListQuery, DesignListQueryVariables> query={DesignListDocument} {...props} />
);

export type DesignListProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<DesignListQuery, DesignListQueryVariables>;
} &
  TChildProps;
export function withDesignList<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    DesignListQuery,
    DesignListQueryVariables,
    DesignListProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    DesignListQuery,
    DesignListQueryVariables,
    DesignListProps<TChildProps, TDataName>
  >(DesignListDocument, {
    alias: 'designList',
    ...operationOptions
  });
}
export type DesignListQueryResult = ApolloReactCommon.QueryResult<DesignListQuery, DesignListQueryVariables>;
export const TagPageTemplateDocument = gql`
  query TagPageTemplate($tag: String) {
    matchedPosts: allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      qty: totalCount
      posts: nodes {
        excerpt
        ...Frontmatter
      }
    }
    matchedDesigns: allDesignsYaml(limit: 2000, filter: { tags: { in: [$tag] } }) {
      qty: totalCount
      designs: nodes {
        description
      }
    }
    matchedSideProjects: allSideprojectsYaml(filter: { tags: { in: [$tag] } }) {
      qty: totalCount
      projects: nodes {
        link
        title
        github
        description
      }
    }
  }
  ${FrontmatterFragmentDoc}
`;
export type TagPageTemplateComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<TagPageTemplateQuery, TagPageTemplateQueryVariables>,
  'query'
>;

export const TagPageTemplateComponent = (props: TagPageTemplateComponentProps) => (
  <ApolloReactComponents.Query<TagPageTemplateQuery, TagPageTemplateQueryVariables>
    query={TagPageTemplateDocument}
    {...props}
  />
);

export type TagPageTemplateProps<TChildProps = {}, TDataName extends string = 'data'> = {
  [key in TDataName]: ApolloReactHoc.DataValue<TagPageTemplateQuery, TagPageTemplateQueryVariables>;
} &
  TChildProps;
export function withTagPageTemplate<TProps, TChildProps = {}, TDataName extends string = 'data'>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    TagPageTemplateQuery,
    TagPageTemplateQueryVariables,
    TagPageTemplateProps<TChildProps, TDataName>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    TagPageTemplateQuery,
    TagPageTemplateQueryVariables,
    TagPageTemplateProps<TChildProps, TDataName>
  >(TagPageTemplateDocument, {
    alias: 'tagPageTemplate',
    ...operationOptions
  });
}
export type TagPageTemplateQueryResult = ApolloReactCommon.QueryResult<
  TagPageTemplateQuery,
  TagPageTemplateQueryVariables
>;
