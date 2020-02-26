import React from 'react'
import { Divider, Grid, Image, Segment } from 'semantic-ui-react'

const DividerVertical = () => (
  <Segment>
    <Grid columns={2} relaxed='very'>
      <Grid.Column>
        <p>
          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </p>
        <p>
          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </p>
        <p>
          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </p>
        <p>
          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </p>
      </Grid.Column>
      <Grid.Column>
        <p>
          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </p>
        <p>
          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </p>
        <p>
          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </p>
        <p>
          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </p>
      </Grid.Column>
    </Grid>

    <Divider vertical>And</Divider>
  </Segment>
)

export default DividerVertical