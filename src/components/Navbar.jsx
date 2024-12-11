import React, { useState } from 'react';
import { MDBIcon } from 'mdb-react-ui-kit';
import './style.css'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse
  } from 'mdb-react-ui-kit';

function Navbar() {
    const [openNav, setOpenNav] = useState(false);
  return (
    // <div className='nav'>
    <MDBNavbar  expand='lg' light bgColor='secondary' >
    <MDBContainer fluid>
      <MDBNavbarBrand href='#' style={{ color: '#fff' }} className='nav1'> <img src="https://assets.static-upwork.com/org-logo/1376569498387136512" className='img1' alt="" /><h6 style={{margin:'10px'}}><span style={{ color: '#007bff' }}>DEEP</span> <span style={{ color: '#fff' }}> NET</span><span className='soft' style={{ color: '#6c757d' }} > <br />SOFT</span></h6></MDBNavbarBrand>
      <MDBNavbarToggler
        type='button'
        aria-expanded='false'
        aria-label='Toggle navigation'
        onClick={() => setOpenNav(!openNav)}
      >
        <MDBIcon icon='bars' fas />
      </MDBNavbarToggler>
      <MDBCollapse navbar open={openNav}>
        <MDBNavbarNav className='nav2'>
          <MDBNavbarItem>
            <MDBNavbarLink active aria-current='page' href='/' style={{ color: '#fff' }}>
              Home
            </MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink href='/' style={{ color: '#007bff' }}>Menu</MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink href='#' style={{ color: '#fff' }}>Make a Reservation</MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true' style={{ color: '#fff' }}>
              About Us
            </MDBNavbarLink>
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBContainer>
  </MDBNavbar>
//   </div>
 
  )
}

export default Navbar
