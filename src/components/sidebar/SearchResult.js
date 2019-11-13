import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function SearchResult(props) {
  const {
    searchResult, open, collapsed, handleClose,
  } = props;

  const leftBandStyle = {
    width: 60,
    height: '100%',
    background: 'transparent',
    position: 'absolute',
    left: open && !collapsed ? 0 : -60,
    zIndex: 3,
  };

  const contentStyle = {
    left: open && !collapsed ? 60 : -318,
  };

  return (
    <>
      <div style={leftBandStyle} onClick={handleClose} />
      <div className="search-result" style={contentStyle}>
        <div className="results-container">
          {searchResult && searchResult.map((result, index) => (
            <div className="search-result-item d-flex" key={`search_result_${index}`}>
              <Link to={result.link}>
                {result.before}
                <span style={{ color: '#E40046' }}>{result.keyword}</span>
                {result.after}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

SearchResult.propTypes = {
  searchResult: PropTypes.array,
  open: PropTypes.bool,
  collapsed: PropTypes.bool,
  handleClose: PropTypes.func,
};

SearchResult.defaultProps = {
  searchResult: [],
  open: false,
  collapsed: false,
  handleClose: null,
};

export default SearchResult;
