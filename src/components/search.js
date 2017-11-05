import React from 'react'

const Search = () => {
  return (
    <div id="searchArea" className="pure-u-2-3 pure-u-md-1-2 center">
      <form role="search" method="get" action="">
        <input name="search" type="text" placeholder="suchen ..." required />
        <button name="search"></button>
      </form>
    </div>
  )
};

export default Search;
