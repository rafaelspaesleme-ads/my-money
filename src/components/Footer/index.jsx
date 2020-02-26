import React from 'react'
import PropTypes from 'prop-types'
import FooterPublic from './../utils/public/FooterPublic';
import './style.css'

function Footer(props) {
    return (
        <footer id="main-footer">
            <FooterPublic />
        </footer>
    )
}

Footer.propTypes = {

}

export default Footer

