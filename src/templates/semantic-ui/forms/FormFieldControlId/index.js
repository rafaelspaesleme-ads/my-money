import React from 'react'
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'

const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

const FormFieldControlId = () => (
  <Form>
    <Form.Group widths='equal'>
      <Form.Field
        id='form-input-control-first-name'
        control={Input}
        label='Nome'
        placeholder='Digite seu nome...'
      />
      <Form.Field
        id='form-input-control-last-name'
        control={Input}
        label='Sobrenome'
        placeholder='Digite seu sobrenome...'
      />
    </Form.Group>
    <Form.Field
      id='form-textarea-control-opinion'
      control={TextArea}
      label='Sobre'
      placeholder='Escreva sobre você...'
    />
    <Form.Field
      id='form-input-control-error-email'
      control={Input}
      label='Email'
      placeholder='Digite seu email... (ex meu@email.com)'
    />
    <Form.Field
      id='form-button-control-public'
      control={Button}
      content='Cadastrar'
      color='instagram'
    />
  </Form>
)

export default FormFieldControlId