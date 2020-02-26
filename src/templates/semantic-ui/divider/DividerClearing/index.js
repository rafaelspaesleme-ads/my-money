import React from 'react'
import { Divider, Segment, Grid, Icon, Container } from 'semantic-ui-react'
import './style.css'

const DividerClearing = (props) => (
  <Segment className="main-segment">
    <Grid columns={3}>
      <Grid.Column>
        <Grid.Row>
          <h3>
            {props.subTitlePrimary}
          </h3>
        </Grid.Row>
        <Divider  />
        <Grid.Row>
          <h4>
            {props.subTitle}
          </h4>
        </Grid.Row>

        <Grid.Row>
        <strong>
          {props.primaryContact}
        </strong>
        </Grid.Row>

        <Grid.Row>
        <strong>
          {props.secundaryContact}
        </strong>
        </Grid.Row>

        <Grid.Row>
        <strong>
          {props.thirdContact}
        </strong>
      </Grid.Row>
      </Grid.Column>

      <Grid.Column>
        <Grid.Row>
          <h3>{props.subTitleSecundary}</h3>
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <p>
            {props.textFooter}
          </p>
        </Grid.Row>
      </Grid.Column>

      

      <Grid.Column>
        <Grid.Row>
          <Container textAlign="right">
            <h3>{props.subTitleThird}</h3>
          </Container>
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <Container textAlign="right">
              <strong>{props.bedroomContact} </strong>
              <Icon name="" />
              <Icon name={props.iconPrimary} /> 
          </Container>
          <Container textAlign="right">
              <strong>{props.seventhContact} </strong>
              <Icon name="" />
              <Icon name={props.iconSecundary} />
          </Container>
          <Container textAlign="right">
              <strong>{props.eighthContact} </strong>
              <Icon name="" />
              <Icon name={props.iconThird} />
          </Container>
          <Container textAlign="right">
              <strong>{props.nineContact} </strong>
              <Icon name="" />
              <Icon name={props.iconBedroom} />
          </Container>
        </Grid.Row>
      </Grid.Column>
    </Grid>
    <Divider className="main-divider" clearing />
    <Container textAlign="center" >
      <Icon name={props.iconCopyright} />
      {props.copyright}
    </Container>
  </Segment>
)

export default DividerClearing

/*
*/