import React from 'react'
import { Button, Checkbox, Icon, Table, Menu } from 'semantic-ui-react'

function TableFullWidth(props) {

  var list = props.listObjects;

  var listElement; 
  
  if (list === undefined){
    listElement = [
      {id: 1, name: 'teste 1', value: 10.2, quantity: 10, active: false },
      {id: 2, name: 'teste 2', value: 200.3, quantity: 4, active: true },
      {id: 3, name: 'teste 3', value: 15.6, quantity: 3.5, active: false },
      {id: 4, name: 'teste 4', value: 2.2, quantity: 7, active: true }
    ];
  } else {
    listElement = list;
  }

  return (
    <Table celled compact definition>
      <Table.Header fullWidth>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell>{props.headerColunm1}</Table.HeaderCell>
          <Table.HeaderCell>{props.headerColunm2}</Table.HeaderCell>
          <Table.HeaderCell>{props.headerColunm3}</Table.HeaderCell>
          <Table.HeaderCell>{props.headerColunm4}</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
      {
        listElement.map(function(element) {
          return (
            <Table.Row key={element.id}>
              <Table.Cell collapsing>
                <Checkbox className='main-checkbox-table' toggle defaultChecked={element.active} label='x' />
              </Table.Cell>
              <Table.Cell>
                {element.name}
              </Table.Cell>
              <Table.Cell>
                {element.value}
              </Table.Cell>
              <Table.Cell>
                {element.quantity}
              </Table.Cell>
              <Table.Cell>
                {element.value * element.quantity}
              </Table.Cell>
            </Table.Row>
          )
        })
      }
      </Table.Body>

      <Table.Footer fullWidth>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell colSpan='4'>
            <Button
              floated='right'
              icon
              labelPosition='left'
              color='instagram'
              size='small'
            >
              <Icon name='money bill alternate outline' /> {props.nameActionButton}
            </Button>
            <Menu floated='center' pagination>
              <Menu.Item as='a' icon>
                <Icon name='chevron left' />
              </Menu.Item>
              <Menu.Item as='a'>1</Menu.Item>
              <Menu.Item as='a'>2</Menu.Item>
              <Menu.Item as='a'>3</Menu.Item>
              <Menu.Item as='a'>4</Menu.Item>
              <Menu.Item as='a' icon>
                <Icon name='chevron right' />
              </Menu.Item>
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  )
  }

export default TableFullWidth