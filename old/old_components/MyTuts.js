import { Card, Title } from 'styled/card';
import { Flex } from 'elements';
import FluidImg from 'gatsby-image';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const MyTuts = ({ edges }) =>
  edges.map(({ node: { fields: { slug }, frontmatter, id, timeToRead } }) => (
    <Card minwidth="245px" key={id}>
      <Title>{frontmatter.title}</Title>
      <Link to={slug}>
        <FluidImg className="card-img" fluid={frontmatter.thumbnail.childImageSharp.fluid} />
      </Link>
      <div>
        <Flex between>
          <small muted>{`${timeToRead} min read`}</small>
          <small>{new Date(frontmatter.date).toISOString().slice(0, 10)}</small>
        </Flex>
      </div>
    </Card>
  ));

MyTuts.propTypes = {
  edges: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        id: PropTypes.string.isRequired,
        excerpt: PropTypes.string.isRequired,
        timeToRead: PropTypes.number.isRequired,
        frontmatter: PropTypes.shape({
          title: PropTypes.string.isRequired,
          tags: PropTypes.array.isRequired,
        }),
        fields: PropTypes.shape({
          slug: PropTypes.string.isRequired,
        }),
      }),
    }).isRequired,
  ),
};

MyTuts.propTypes = {
  edges: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        id: PropTypes.string.isRequired,
        excerpt: PropTypes.string.isRequired,
        timeToRead: PropTypes.number.isRequired,
        frontmatter: PropTypes.shape({
          title: PropTypes.string.isRequired,
          tags: PropTypes.array.isRequired,
        }),
        fields: PropTypes.shape({
          slug: PropTypes.string.isRequired,
        }),
      }),
    }).isRequired,
  ),
};

export default MyTuts;
