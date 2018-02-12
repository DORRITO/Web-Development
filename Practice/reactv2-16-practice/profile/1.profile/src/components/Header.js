import React from 'react'
import GridRow, { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const circle = { width: 200, height: 200 }

const AppHeader = () => (
  <Header>
    <Grid centered columns={2}>
        <Segment className="Centered-Box" style={{marginTop: '10rem', background: '#D6E3E8BF'}} padded>
          <Grid.Row centered >
            <Grid.Column textAlign='center'>
                <h2>Hello, I'm Lance!</h2> 
                <h3>A Jr. Developer from the great state of Arizona who is looking for my first web developer job after making a career switch.</h3>
          </Grid.Column>
        </Grid.Row>
        </Segment>
        <Grid.Row centered>
            <Grid.Column textAlign='center'>
                Here is my profile
            </Grid.Column>
        </Grid.Row>
    </Grid>
  </Header>
)

export default AppHeader;

// <Segment circular style={circle}></Segment>