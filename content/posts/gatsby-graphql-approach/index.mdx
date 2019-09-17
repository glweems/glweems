---
id: 6
path: /gatsby-graphql-approach
thumbnail: tbn.png
date: 2019-09-01T01:00:01.889Z
edited:
next: /
title: My approach on GraphQL queries in Gatsby
subtitle: Get you graphql queries simple, organized, and clean
tags:
  - gatsby
  - graphql
popular: false
---

I’ve tried a few different ways to keep my GraphQL queries clean and organized in gatsby.js and think I have found my winner.

```text
your-gatsby-project/
├─ .gitignore
├─ node_modules/
├─ public/
└─ src/
 ├─ components/
 ├─ pages/
 ├─ assets/
 └─ queries/
├─ package.json
├─ gatsby-config.js
└─ gatsby-browser.js
```

All things `graphql` will live within the `src/queries/` directory.

## Creating GraphQL Queries

We are primarily going to be working with the `useStaticQuery`

Some things to know about `useStaticQuery`

- There are a React Hook, meaning they can only be used in the body of a functional component
- Can not be used with GraphQL variables
- Can only export one per file

With that being said let’s create our first query.

Say you’re using markdown files to create a blog and each file creates a page
You would have something like this

```text
blog/page-1
blog/page-2
blog/page-3
```

You’re likely going to want your root `blog/` page to a list of all your blog posts that a user can navigate to
With this query you’ll be able to do just that!

> `useStaticQuery` makes this easy

All you need to do is pass your graphql query into useStaticQuery

```tsx
// src/queries/PostsQuery.js
import { useStaticQuery, graphql } from 'gatsby';

const usePostsQuery = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostsQuery {
      allMarkdownRemark {
        nodes {
          id
          excerpt(pruneLength: 150)
          frontmatter {
            title
            path
            date
            subtitle
            codesandbox
            tags
          }
        }
      }
    }
  `);
  return allMarkdownRemark.nodes;
};

export default usePostsQuery;
```

Now we can create a new `blog` page and import the query

```tsx
// src/pages/blog
import React from 'react';
import usePostsQuery from '../queries/PostsQuery';
import { Link } from ‘gatsby’;


const BlogPage = () => {
  const posts = usePostsQuery();

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <p>{post.frontmatter.title}</p>
          <small>{post.frontmatter.subtitle}</small>
          <Link to={post.frontmatter.path}>View Post</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogPage
```

But wait.
This is all fine and dandy but we can still clean it up some.

Chances are you’re going to have to query the frontmatter from MarkdownRemark more than once.
Soooo…
Let’s create a file strictly for `graphql fragments`

Create a new file `src/queries/fragments.js`

> A nice thing to keep in mind is that fragment queries do _not_ need their own file for each query, so all of your fragments can live here in this one file. _All safe and sound!_

```javascript
// src/queries/fragments.js
import { graphql } from 'gatsby';

const Frontmatter = graphql`
  fragment Frontmatter on File {
    childMarkdownRemark {
      frontmatter {
        date
        path
        title
        subtitle
        codesandbox
        tags
        }
      }
    }
  }
`;

export default { Frontmatter };
```

### Refactoring

Not everyone is enjoys cleaning up code like I do but I hope you will find some appreciation for what happens next

After creating our `Fragment` on the frontmatter, we can edit our original `useBlogPost()` query to the following

```graphql
# Without Fragment
query PostsQuery {
  allMarkdownRemark {
    nodes {
      id
      excerpt(pruneLength: 150)
      frontmatter {
        title
        path
        date
        subtitle
        codesandbox
        tags
      }
    }
  }
}

# With Fragment
query PostsQuery {
  allMarkdownRemark {
    nodes {
      id
      excerpt(pruneLength: 150)
      ...Frontmatter
    }
  }
}
```

### Reusability

For this single query it might take more time than it’s worth to implement this but if you’re using Frontmatter in multiple queries I would absolutely say this is this way to go.

### Other Examples

```graphql
# Fragment I use for fluid image files
fragment FluidImage on ImageSharp {
  fluid(maxWidth: 630, traceSVG: { background: “#181D2B”, color: “#d0c1fa”, threshold: 6 }) {
    ... GatsbyImageSharpFluid_withWebp_tracedSVG
  }
}
```

> This query makes getting a more customized result from `gatsby-image` a lot more doable,

#### Nesting fragments

Here an example of the fragments I use in order to query the frontmatter on my markdown files.

```graphql
# Starting with my FluidImage Fragment
fragment FluidImage on ImageSharp {
  fluid(maxWidth: 630, traceSVG: { background: “#181D2B”, color: “#d0c1fa”, threshold: 6 }) {
    ... GatsbyImageSharpFluid_withWebp_tracedSVG
  }
}
```

```graphql
# Another fragment for my blog posts frontmatter
fragment Frontmatter on MarkdownRemark {
  frontmatter {
    id
    date(formatString: “MMMM DD, YYYY”)
    path
    title
    subtitle
    tags
    next
    thumbnail {
      id
      childImageSharp {
        ...FluidImage
      }
    }
  }
}
```

Creating these fragments allows me to create a super simple query on my blog PostsQuery that looks like this

```javascript
const usePostsQuery = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostsQuery {
      allMarkdownRemark {
        nodes {
          id
          excerpt(pruneLength: 150)
          ...Frontmatter
        }
      }
    }
  `);

  return allMarkdownRemark.nodes;
};
```

Using queries like this and ever need to update a field you only need to do so in your original fragment, not every single use case of the query.
