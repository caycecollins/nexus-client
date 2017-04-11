import React, { Component } from 'react'
import styled from 'styled-components'

import {
  BSNav,
  BSNavbar,
  BSNavbarToggler,
  BSNavbarBrand,
  BSNavItem,
  BSNavLink,
  BSCollapse,
} from '../../../wrappers/bootstrap'

export default class Header extends Component {
  state = {
    isOpen: false,
  }

  toggle () {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render () {
    return (
      <Navbar
        toggleable
      >
        <BSNavbarToggler
          right
          onClick={this.toggle}
        />
        <NavbarBrand href="/">Nexus</NavbarBrand>
        <BSCollapse
          isOpen={this.state.isOpen}
          navbar
        >
          <BSNav
            className="ml-auto"
            navbar
          >
            <BSNavItem>
              <NavLink href="/notifications">notifications</NavLink>
            </BSNavItem>
            <BSNavItem>
              <NavLink href="/settings">settings</NavLink>
            </BSNavItem>
          </BSNav>
        </BSCollapse>
      </Navbar>
    )
  }
}

const Navbar = styled(BSNavbar)`
  height: 56px;
  background-color: #1f5f8b;
`

const NavbarBrand = styled(BSNavbarBrand)`
  color: white;
`

const NavLink = styled(BSNavLink)`
  color: white;
`
