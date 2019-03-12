import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '@/layout';
import SEO from '@/seo';

const Designs = ({ data }) => (
  <>
    {designs.map((design, index) => (
      <div key={index}>
        <p>{design.title}</p>
        <Img fluid={data[design.src].childImageSharp.fluid} />
      </div>
    ))}
  </>
);

export default ({ data }) => (
  <Layout>
    <SEO title="Portfolio" keywords={[`graphic`, `design`, `illustration`]} />
    <Designs data={data} />
  </Layout>
);

// export default class Portfolio extends Component {
//   constructor(props) {
//     super(data);
//     this.data = data;
//   }

//   render() {
//     return (
//       <Layout>
//         <SEO
//           title="Portfolio"
//           keywords={[`graphic`, `design`, `illustration`]}
//         />
//         <Designs data={data} />
//       </Layout>
//     );
//   }
// }

export const query = graphql`
  query PortfolioQuery {
    OrganicVsGeometric: file(
      relativePath: { eq: "designs/organic-vs-geometric.jpg" }
    ) {
      name
      childImageSharp {
        fluid(maxWidth: 512) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    PrismBranding: file(relativePath: { eq: "designs/prism-branding.jpg" }) {
      name
      childImageSharp {
        fluid(maxWidth: 512) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    PeaceRun: file(relativePath: { eq: "designs/peace-run-all.jpg" }) {
      name
      childImageSharp {
        fluid(maxWidth: 512) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    LadyTigers1: file(relativePath: { eq: "designs/lady-tigers-1.jpg" }) {
      name
      childImageSharp {
        fluid(maxWidth: 512) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    LadyTigers2: file(relativePath: { eq: "designs/lady-tigers-2.jpg" }) {
      name
      childImageSharp {
        fluid(maxWidth: 512) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const designs = [
  {
    title: 'Organic VS Geometric',
    link: 'https://www.behance.net/gallery/50768561/Organic-VS-Geometric',
    src: 'OrganicVsGeometric',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Company Artwork',
    link: 'https://www.behance.net/gallery/59400101/Company-Artwork',
    src: 'PrismBranding',
    desc: '',
  },
  {
    title: 'Blanton Fun-Run T-Shirt Design.',
    link:
      'https://www.behance.net/gallery/47274017/Peace-and-Love-Fun-Run-T-Shirt-Design',
    src: 'PeaceRun',
    desc: '',
  },
  {
    title: 'McMath Athletics T-Shirt Design',
    link:
      'https://www.behance.net/gallery/48973673/McMath-Athletics-T-Shirt-Design',
    src: 'LadyTigers1',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  },
  {
    title: 'McMath Athletics T-Shirt Design',
    link:
      'https://www.behance.net/gallery/48973673/McMath-Athletics-T-Shirt-Design',
    src: 'LadyTigers2',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  },
];
