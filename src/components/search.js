import React from 'react'

const Search = () => {
  return (
    <div id="searchArea" className="pure-u-1">
      <a id="toggleSearch" className="pure-menu-link menu-item" href="#"></a>
      <input name="search" type="text" placeholder="suchen ..." required />
    </div>
  )
};

export default Search;
