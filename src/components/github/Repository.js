import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Repo = styled.div`
  background-color: #fff;
  border: 1px solid #d1d5da;
  border-radius: 3px;
  box-sizing: border-box;
`

const Header = styled.div`
  align-items: center;
  background-color: #f6f8fa;
  border: 1px solid #d1d5da;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin: -1px -1px 0;
  padding: 1px;
  font-weight: bold;
  button {
    float: right;
    a {
      color: white;
      text-decoration: none;
    }
  }
`
// const Body = styled.div`
//   border-bottom: 1px solid #e1e4e8;
//   border-bottom-left-radius: 2px;
//   border-bottom-right-radius: 2px;
//   box-sizing: border-box;
//   margin-bottom: -1px;
//   padding: 16px;
// `;

export default function Repository(props) {
  const { name, description, url, primaryLanguage, homepageUrl } = props
  return (
    <Repo className="Box">
      <Header className="Box-header d-flex flex-items-center">
        <h3>{name}</h3>
        <button type="button" className="btn btn-primary">
          <a href={url}>View</a>
        </button>
      </Header>
      <div className="Box-body">
        <p>{description}</p>
        <p>{url}</p>
        <p>{homepageUrl}</p>
        <p>{primaryLanguage.name}</p>
      </div>
    </Repo>
  )
}
Repository.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  homepageUrl: PropTypes.string,
  primaryLanguage: PropTypes.shape({
    name: PropTypes.string,
  }),
}
