import React from 'react'
import PropTypes from 'prop-types'
import HeaderDividing from './../../../templates/semantic-ui/headers/HeaderDividing'
import DropdownTrigger from './../../../templates/semantic-ui/dropdowns/DropdownTrigger'
import './style.css'


function HeaderPublic(props) {
    return (
        <div id="main-header-public">
        <DropdownTrigger />        
            <HeaderDividing 
                titleHeader="Teste" 
                colorHeader="yellow" 
                sizeHeader="huge" 
                textAlignHeader="center" 
                iconHeader="money bill alternate outline" 
            />    
        </div>
    )
}

HeaderPublic.propTypes = {

}

export default HeaderPublic

