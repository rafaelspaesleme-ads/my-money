import React from 'react'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'

const DividerLoginForm = (props) => (
  <Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
        <Form>
          <Form.Input
            icon='user'
            iconPosition='left'
            label='Usuário'
            placeholder='Usuário'
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Senha'
            type='password'
          />

          <Button content='Login' primary />
        </Form>
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
        <Button content='Cadastre-se' icon='signup' size='big' />
      </Grid.Column>
    </Grid>

    <Divider vertical>Ou</Divider>
  </Segment>
)

export default DividerLoginForm