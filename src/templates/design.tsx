import React, { useRef } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Container } from 'reactstrap';
import { animated, useSprings } from 'react-spring';
import clamp from 'lodash-es/clamp';
import { useGesture } from 'react-use-gesture';
import styled from 'styled-components';
import SEO from '../components/SEO';
import Cursor from '../assets/cursor.png';

const Image = styled(animated(Img))``;

const pages = [
  'https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/296878/pexels-photo-296878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/1509428/pexels-photo-1509428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
];
const Wrapper = styled.div`
  * {
    box-sizing: border-box;

    user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  overscroll-behavior-y: contain;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  user-select: none;
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica,
    ubuntu, roboto, noto, segoe ui, arial, sans-serif;
  position: fixed;
  overflow: hidden;
  #viewer {
    user-select: none;
    position: fixed;
    overflow: hidden;
    width: 100%;
    height: 100%;
    cursor: url(${Cursor}), 39 39, auto;
  }

  #viewer > div {
    position: absolute;
    width: 100vw;
    height: 50vh;
    will-change: transform;
  }

  ${Image} {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 100%;
    will-change: transform;
    user-select: none;
    box-shadow: 0 62.5px 125px -25px rgba(50, 50, 73, 0.5), 0 37.5px 75px -37.5px rgba(0, 0, 0, 0.6);
  }
`;
const Div = styled(animated.div)``;

const Viewpager = ({ images }) => {
  const index = useRef(0);
  const [props, set] = useSprings(images.length, i => ({
    x: i * window.innerWidth,
    sc: 1,
    display: 'block',
  }));
  const bind = useGesture(({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
    if (down && distance > window.innerWidth / 2)
      cancel((index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, pages.length - 1)));
    set(i => {
      if (i < index.current - 1 || i > index.current + 1) return { display: 'none' };
      const x = (i - index.current) * window.innerWidth + (down ? xDelta : 0);
      const sc = down ? 1 - distance / window.innerWidth / 2 : 1;
      return { x, sc, display: 'block' };
    });
  });
  return (
    <Wrapper>
      <div id="viewer">
        {props.map(({ x, display, sc }, i) => (
          <Div
            {...bind()}
            key={i}
            style={{ display, transform: x.interpolate(x => `translate3d(${x}px,0,0)`) }}
          >
            <Image
              style={{ transform: sc.interpolate(s => `scale(${s})`) }}
              {...images[i].childImageSharp}
            />
          </Div>
        ))}
      </div>
    </Wrapper>
  );
};
const DesignTemplate = ({
  data: {
    behanceProjects: { name, tags, description },
    allFile: { nodes: fileNodes },
  },
}: DesignTemplate) => {
  const images = fileNodes.map(({ childImageSharp: { fluid }, id }) => (
    <Image key={id} fluid={fluid} />
  ));
  return (
    <>
      <SEO title={name} keywords={tags} description={description} />

      <Viewpager images={fileNodes} />
      <Container fluid>
        <h1>{name}</h1>
        <h3>{description}</h3>
        {/* {fileNodes.map(({ childImageSharp: { fluid }, id }) => (
          <Img key={id} fluid={fluid} />
        ))} */}
      </Container>
    </>
  );
};

interface DesignTemplate {
  data: {
    behanceProjects: BehanceProject;
    allFile: {
      nodes: LocalFile[];
      totalCount: number;
    };
  };
}

export const designQuery = graphql`
  query SingleDesign($slug: String!) {
    behanceProjects(slug: { regex: $slug }) {
      ...BehanceCard
      tools {
        title
      }
    }
    allFile(filter: { relativeDirectory: { regex: $slug }, name: { ne: "cover" } }) {
      nodes {
        id
        name
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      totalCount
    }
  }
`;

export default DesignTemplate;
