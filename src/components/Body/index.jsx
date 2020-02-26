import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

function Body(props) {
    return (
        <div id="main-body">
            <Header />
            <Main />
            <Footer />            
        </div>
    )
}

Body.propTypes = {

}

export default Body

