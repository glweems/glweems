import React from 'react';
import PropTypes from 'prop-types';

export default function Repository(props) {
  const { name, description, url, primaryLanguage, homepageUrl } = props;
  return (
    <div className="Box">
      <div className="Box-header d-flex flex-items-center">
        <h3 className="Box-title overflow-hidden flex-auto">{name}</h3>
        <button type="button" className="btn btn-primary btn-sm">
          <a href={url}>View</a>
        </button>
      </div>
      <div className="Box-body">
        <p>{description}</p>
        <p>{url}</p>
        <p>{homepageUrl}</p>
        <p>{primaryLanguage.name}</p>
      </div>
    </div>
  );
}
Repository.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  homepageUrl: PropTypes.string,
  primaryLanguage: PropTypes.shape({
    name: PropTypes.string,
  }),
};
