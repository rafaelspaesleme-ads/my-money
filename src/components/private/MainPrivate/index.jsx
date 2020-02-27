import React from 'react'
import PropTypes from 'prop-types'
import HeaderPrivate from './../HeaderPrivate'
import FooterPrivate from './../FooterPrivate'
import Dashboard from './../Dashboard'
import Profile from './../Profile'
import Produto from './../Produto'
import Venda from './../Venda'
import PageNotFound from './../../PageNotFound'

function selectPage(event) {
    switch (event) {
        case 'dashboard':
            return <Dashboard />;
        case 'profile':
            return <Profile />;
        case 'produto':
            return <Produto />;
        case 'venda':
            return <Venda />;
        default:
          return <PageNotFound />;
      }
}

function MainPrivate(props) {
    return (
        <div>
            <HeaderPrivate />
            {selectPage(props.page)}
            <FooterPrivate />
        </div>
    )
}

MainPrivate.propTypes = {

}

export default MainPrivate

