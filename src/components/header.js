import React from 'react'
import Logo from './logo'
import Navigation from './navigation'
import Search from './search'

const Header = ({appUrl}) => {
  return (
    <header className="pure-u-1">
      <Logo/>
      <Navigation appUrl={appUrl} />
      <Search/>
    </header>
  )
};

export default Header;
