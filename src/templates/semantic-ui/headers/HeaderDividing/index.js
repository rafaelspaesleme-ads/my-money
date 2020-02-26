import React from 'react'
import { Header } from 'semantic-ui-react'


const HeaderDividing = (props) => (
  <Header as='h3' 
    dividing 
    color={props.colorHeader}
    size={props.sizeHeader}
    textAlign={props.textAlignHeader}
    icon={props.iconHeader}
    >
    {props.titleHeader}
  </Header>
)

export default HeaderDividing