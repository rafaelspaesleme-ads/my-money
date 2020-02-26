import React from 'react'
import PropTypes from 'prop-types'
import HeaderPublic from './../utils/public/HeaderPublic'
//import HeaderPrivate from './../utils/public/HeaderPrivate'
import './style.css';

function Header(props) {
    return (
        <header id="main-header">
            <HeaderPublic />
        </header>
    )
}

Header.propTypes = {

}

export default Header

