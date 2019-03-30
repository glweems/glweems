// import PropTypes from 'prop-types'
// import React from 'react'
// import { Link } from 'gatsby'
// import Theme, { MQ } from 'src/Theme'
// import styled from 'styled-components'
// // *:nth-last-child(1):nth-child(odd) { grid-column: 1 /-1; }
// export const CardGrid = styled.div`
//   max-width: 100%;

//   display: grid;
//   grid-template-columns: 1fr;
//   justify-content: center;
//   justify-items: center;
//   /* background: ${Theme.colors.light}; */
//   ${MQ.mobileL(`grid-template-columns: repeat(2, 1fr); gap: 1rem 1rem;`)}
//   ${MQ.tablet(`grid-template-columns: repeat(3, 1fr); gap: 1rem;`)}
//   ${MQ.laptop(`grid-template-columns: repeat(4, 1fr); gap: 1.5rem;`)}
// `
// const Div = styled.div`
//   display: grid;
//   grid-template-columns: auto 30%;
//   justify-content: space-between;
//   justify-items: center;
//   flex-basis: 100%;
//   margin-bottom: 1rem;
// `

// const ImgDiv = styled.div`
//   max-height: 90%;
//   max-width: 90%;
//   overflow: hidden;
// `
// const Body = styled.div`
//   padding: 1rem;
//   display: flex;
//   flex-direction: column;
// `

// const Title = styled.h4`
//   font-family: ${Theme.fontFamily.header};
//   width: 100%;
// `
// const Subtitle = styled.h6`
//   font-family: ${Theme.fontFamily.body};
//   width: 100%;
// `

// const BlogPostPreview = props => {
//   const { img, body, title, subtitle, link, html, children } = props

//   const imgStyle = {
//     backgroundImage: `url(${img})`,
//     height: '100%',
//     width: '100%',
//     backgroundPosition: 'center',
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     borderRadius: '3px',
//   }
//   return (
//     <Link to={link}>
//       <Div>
//         <Body>
//           {!title || <Title>{title}</Title>}
//           {!subtitle || <Subtitle>{subtitle}</Subtitle>}
//           {!body || null}
//           {children}
//         </Body>
//         <ImgDiv style={imgStyle} />
//       </Div>
//     </Link>
//   )
// }

// BlogPostPreview.propTypes = {
//   img: PropTypes.string,
//   body: PropTypes.string,
//   title: PropTypes.string,
//   link: PropTypes.string,
// }

// export default BlogPostPreview

// /*
// export default class card extends Component {
//   static propTypes = {
//     prop: PropTypes
//   }

//   render() {
//     return (
//       <div>

//       </div>
//     )
//   }
// }
// */
