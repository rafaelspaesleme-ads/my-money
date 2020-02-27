import React, { Component } from 'react';
import { Grid, Icon, List, Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import TableFullWidth from './../../../templates/semantic-ui/tables/TableFullWidth'
import './style.css'
import ModalCloseIcon from '../../../templates/semantic-ui/modal/ModalCloseIcon';

// import { Container } from './styles';
const windowWidth = window.innerWidth;

function disableMenu(event) {
  if(event < 1030){
      return 'main-display-none'
  } else {
      return ''
  }
}
export default class Dashboard extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row className="main-grid-row-body">
            <Grid.Column className={`main-grid-col-left ${disableMenu(windowWidth)}`}>
                <h2 id="main-title-dashboard"><Icon name='dashboard' /> Dashboard</h2>
                <List className="main-list-menu">
                    <List.Item className="main-list-item" >
                        <Link className="main-link-dashboard" to="/sales">
                            <Label size="large" className="main-label-menu">
                                Venda
                            </Label>
                        </Link>
                    </List.Item>
                    <List.Item className="main-list-item" >
                        <Link className="main-link-dashboard" to="/product">
                            <Label size="large" className="main-label-menu">
                                Produto
                            </Label>
                        </Link>
                    </List.Item>
                    <List.Item className="main-list-item" >
                        <Link className="main-link-dashboard" to="/profile">
                            <Label size="large" className="main-label-menu">
                                Perfil
                            </Label>
                        </Link>
                    </List.Item>
                    <hr id="main-hr"/>
                    <List.Item className="main-list-item" >
                        <Link className="main-link-dashboard" to="/">
                            <Label size="large" className="main-label-menu">
                                Sair
                            </Label>
                        </Link>
                    </List.Item>
                </List>
            </Grid.Column>

            <Grid.Column className="main-grid-col-right">
                <Grid.Row className="main-grid-row-table" >
                    <strong>Vendas do dia</strong>
                    <TableFullWidth 
                        headerColunm1='Produto' 
                        headerColunm2='Valor' 
                        headerColunm3='Quantidade' 
                        headerColunm4='Resultado' 
                        nameActionButton='Nova venda'
                        iconActionButton='money bill alternate outline'
                        keyObject={1} 
                        typeObject={0} 
                    />
                </Grid.Row>
                <Grid.Row className="main-grid-row-table" >
                    <strong>Vendas da semana</strong>
                    <TableFullWidth 
                        headerColunm1='Produto' 
                        headerColunm2='Valor' 
                        headerColunm3='Quantidade' 
                        headerColunm4='Resultado' 
                        nameActionButton='Nova venda' 
                        iconActionButton='money bill alternate outline'
                        keyObject={1} 
                        typeObject={0} 
                    />
                </Grid.Row>
                <Grid.Row className="main-grid-row-table" >
                    <strong>Vendas do mês</strong>
                    <TableFullWidth 
                        headerColunm1='Produto' 
                        headerColunm2='Valor' 
                        headerColunm3='Quantidade' 
                        headerColunm4='Resultado' 
                        nameActionButton='Nova venda' 
                        iconActionButton='money bill alternate outline'
                        keyObject={1} 
                        typeObject={0} 
                    />
                </Grid.Row>
                <Grid.Row className="main-grid-row-table" >
                    <strong>Produtos</strong>
                    <TableFullWidth 
                        headerColunm1='Produto' 
                        headerColunm2='Valor' 
                        headerColunm3='Quantidade' 
                        headerColunm4='Resultado' 
                        nameActionButton='Novo produto'
                        iconActionButton='dolly flatbed'
                        keyObject={1} 
                        typeObject={0} 

                    />
                </Grid.Row>
            </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
