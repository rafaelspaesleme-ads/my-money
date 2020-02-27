import React from 'react'
import { Dropdown, Icon } from 'semantic-ui-react'
import './style.css'
import ModalCloseIcon from './../../modal/ModalCloseIcon'

const trigger = (
  <span>
    <Icon name='sidebar' />
  </span>
)

const options = [
  { key: 'sign', text: 'Login', icon: 'sign-in' },
  { key: 'new-user', text: 'Novo cliente', icon: 'user circle' },
  { key: 'about', text: 'Sobre', icon: 'address card' },
]

const DropdownTrigger = () => (
  <Dropdown className="main-dropdown" direction='left' trigger={trigger} >
    <Dropdown.Menu>
      <Dropdown.Item >
        <ModalCloseIcon 
          buttonDropdownItemIcon={options[0].icon} 
          buttonDropdownItemLabel={options[0].text}
          buttonDropdownItemKey={options[0].key}
          typeDropdown={0}
        />
      </Dropdown.Item>
      <Dropdown.Item >
        <ModalCloseIcon 
          buttonDropdownItemIcon={options[1].icon} 
          buttonDropdownItemLabel={options[1].text}
          buttonDropdownItemKey={options[1].key}
          typeDropdown={1}
        />
      </Dropdown.Item>
      <Dropdown.Divider/>
      <Dropdown.Item >
        <ModalCloseIcon 
          buttonDropdownItemIcon={options[2].icon} 
          buttonDropdownItemLabel={options[2].text}
          buttonDropdownItemKey={options[2].key}
          typeDropdown={2}
        />
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownTrigger