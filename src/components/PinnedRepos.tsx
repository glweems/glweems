import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { A, Flex } from 'elements';
import * as React from 'react';
import { Card, CardLink, CardSubtitle, CardTitle } from 'styled/card';

interface Props {
  edges: object[]
  node: { name: string }
}

export const PinnedRepos = ({ edges }: Props) => edges.map((edge, i) =>
  (<Card key={i} minwidth="200px">
    <CardTitle>{edge.node.name}</CardTitle>
    <div>
      <A href={edge.node.url}>
        <FontAwesomeIcon icon={faGithub} />
      </A>
    </div>
    <CardSubtitle>{edge.node.description}</CardSubtitle>

    <Flex>
      <A href={edge.node.homepageUrl}>homepage</A>
    </Flex>

    <CardLink />
  </Card>));
