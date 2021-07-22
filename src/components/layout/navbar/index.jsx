import {theme_switch,main_navigation,logo_anim} from './style.module.css'
import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { User, Briefcase, Feather,  GitHub, Sun , Moon } from 'react-feather'

import {NavbarElement, NavbarList, NavbarLogo} from './style'


const Navbar = ({ siteTitle }) => (
  <nav>
    <div className="container">
      <NavbarElement>
          <NavbarLogo>
            <h3>
              <Link to="/">
                <div className="align-middle anim-width"><div className="logo-anim"><span> {siteTitle} </span> </div></div>
              </Link>
            </h3>
          </NavbarLogo> 
          <div className={main_navigation}>
            <NavbarList>
              <li><Link to="/" id="navlinks" className="lined-link" activeClassName="active"> <User /> <span> About </span> </Link></li> 
              <li><Link to="/repositories" id="navlinks" className="lined-link" activeClassName="active"> <GitHub /> <span> Github </span> </Link></li>  
              <li><Link to="/works" id="navlinks" className="lined-link" activeClassName="active"> <Briefcase /> <span> Portfolio </span> </Link></li>  
              <li><Link to="/blog" id="navlinks" className="lined-link" activeClassName="active"> <Feather /> <span> Blog </span> </Link></li>
            </NavbarList> 
          </div>
      </NavbarElement>
      {/* < div className = {theme_switch}>
       < Sun onClick= {()=>{console.log('sun clicked')}}/> <Moon onClick= {()=>{console.log('moon clicked')}}/>
       </div> */}
    </div>
  </nav>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
