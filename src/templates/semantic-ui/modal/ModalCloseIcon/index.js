import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import './style.css'
import DividerLoginForm from './../../divider/DividerLoginForm'
import FormFieldControlId from './../../forms/FormFieldControlId'
import AccordionStandard from './../../accordion/AccordionStandard'

function optionModal(event) {
    if (event === 0){
        return (<DividerLoginForm />)
    } else if (event === 1) {
        return (<FormFieldControlId />)
    } else {
        return (<AccordionStandard />)
    }
}

function ModalCloseIcon(props) {

    const iconModal = props.buttonDropdownItemIcon;
    const keyModal = props.buttonDropdownItemKey;
    const labelModal = props.buttonDropdownItemLabel;
    const colorModal = props.buttonDropdownItemColor;


    return (<Modal trigger={<Button 
                        className="main-button-modal"  
                        key={keyModal}
                        color={colorModal}
                    >
                    <center>
                        <Icon name={iconModal} />
                        {labelModal}
                    </center>
                    </Button>} 
    closeIcon>
        <Header icon={iconModal} content={labelModal} />
        <Modal.Content>
        <p>
            {optionModal(props.typeDropdown)}
        </p>
        </Modal.Content>
    </Modal>)
}

export default ModalCloseIcon