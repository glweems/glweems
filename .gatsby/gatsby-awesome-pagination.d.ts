declare module 'gatsby-awesome-pagination' {
  import { Actions } from 'gatsby';
  type PathPrefixFunction = (opts: {
    pageNumber: number;
    numberOfPages: number;
  }) => string;

  export type PathPrefix = string | PathPrefixFunction;

  type PaginateOpts = {
    createPage: Actions['createPage'];
    items: {}[];
    itemsPerPage: number;
    itemsPerFirstPage?: number;
    pathPrefix: PathPrefix;
    component: string;
    context?: {};
  };

  export function paginate(opts: PaginateOpts): void;

  type CreatePagePerItemOpts = {
    createPage: Actions['createPage'];
    items: {}[];
    itemToPath: string | (({}) => string);
    itemToId: string | (({}) => string);
    component: string;
  };

  export function createPagePerItem(opts: CreatePagePerItemOpts): void;
}
