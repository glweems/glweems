import { Card, CardImg, Subtitle, Title } from 'styled/card';
import { Flex } from 'elements';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { ellipsis } from 'polished';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export const BehanceProjects = ({ edges }) =>
  edges.map(({ node: { fields: { slug }, name, covers, id } }) => (
    <Card minwidth="225px" key={id}>
      <Title>{name}</Title>
      <Link to={`/designs/${slug}`}>
        <CardImg img={covers.size_max_808} />
      </Link>
    </Card>
  ));

BehanceProjects.propTypes = {
  edges: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        covers: PropTypes.shape({
          size_max_808: PropTypes.string.isRequired,
        }),
        fields: PropTypes.shape({
          slug: PropTypes.string.isRequired,
        }),
        tags: PropTypes.array.isRequired,
      }),
    }).isRequired,
  ),
};
export const PinnedRepos = ({ edges }) =>
  edges.map(({ node: { name, url, description } }, i) => (
    <Card key={i} minwidth="225px">
      <Flex between noMargin noPadding alignCenter>
        <Title>{name}</Title>
        <Link href={url} target="_">
          <FontAwesomeIcon icon={faGithub} />
        </Link>
      </Flex>
      <Subtitle style={ellipsis(225)}>{description}</Subtitle>
      {/* <Flex scroll>
        {languages.edges.map(({ node: { name: lang, color, id } }) => (
          <Tag key={id} color={color}>
            {lang}
          </Tag>
        ))}
      </Flex> */}
    </Card>
  ));

PinnedRepos.propTypes = {
  edges: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        languages: PropTypes.shape({
          node: PropTypes.shape({
            edges: PropTypes.arrayOf({
              name: PropTypes.string.isRequired,
              color: PropTypes.string.isRequired,
            }),
          }),
        }),
      }),
    }).isRequired,
  ),
};
