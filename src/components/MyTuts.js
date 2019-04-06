// import React from 'react'
// import PropTypes from 'prop-types'
// import { Link } from 'gatsby'
// import { Card, CardImg, Title, CardBody, CardLink } from 'src/styled/card'
// import Tags from '@/tags'
// import { Flex } from 'elements'

// export const MyTuts = ({ edges }) =>
//   edges.map((edge, index) => (
//     <Card key={index} minwidth='200px'>
//       <h4>{edge.node.frontmatter.title}</h4>
//       <Tags {...edge.node.frontmatter} />
//       <CardBody>
//         <CardImg img={edge.node.frontmatter.thumbnail} height='100px' />
//         <Flex hidden />
//         <CardLink>
//           <Link to={edge.node.frontmatter.path}>Read More...</Link>
//         </CardLink>
//       </CardBody>
//     </Card>
//   ))

// export default MyTuts

// MyTuts.propTypes = {
//   edges: PropTypes.array,
// }
