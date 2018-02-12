import React from 'react'
import GridRow, { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const circle = { width: 200, height: 200 }

const AppHeader = () => (
  <Header>
    <Grid centered columns={2}>
        <Segment className="Centered-Box" style={{marginTop: '7%', background: '#D6E3E8B3'}} padded>
          <Grid.Row centered >
            <Grid.Column textAlign='center'>
                <h2>Hello, I'm Lance!</h2> 
                <h3>A Jr. Developer from the great state of Arizona who is looking for my first web developer job after making a career switch.</h3>
                <h5 style={{marginTop: '-1%'}} >I enjoy Sports, playing music, writing, chasing around my cats, and of course, coding!</h5>
          </Grid.Column>
        </Grid.Row>
        </Segment>
        <Grid.Row centered columns={2} className='Display' style={{ marginTop: '3%'}}>
            <Segment className='Display' style={{ background: '#D6E3E8B3', paddingRight: '3rem'}} stacked>
                <Grid.Column textAlign='left'>
                <h3>Areas of knowledge</h3>
                <ul>
                    <li>HTML &emsp; Node.JS &emsp; Github</li>
                    <li>&emsp;&nbsp;CSS &emsp; MongoDB &emsp; Meteor.JS</li>
                    <li>&emsp;&nbsp;Semantic UI &emsp; React &emsp; Redux</li>
                    <li>&emsp;&emsp;&emsp;&emsp;JavaScript &emsp; Socket.IO &emsp; Mongoose</li>
                </ul>
                </Grid.Column>
            </Segment>
            <Segment className='Display' style={{ background: '#D6E3E8B3', marginLeft: '10%'}} stacked>
                <Grid.Column textAlign='left'>
                <h3>Websites:</h3>
                <Segment color='orange' >
                    <Button color='teal' href="https://mcmtac.herokuapp.com/" target="_blank">MCMTAC</Button>
                    <br />My first full stack app, created with React, MongoDB,
                    <br />Redux, and socket IO for chat. It is a page
                    <br />that allows my friends in others cities and I
                    <br />to play a D&D style game I created. 
                    <br />
                    <br />to login, use: name: 'gm' password: 'me123'
                    </Segment>
                </Grid.Column>
            </Segment>
        </Grid.Row>
    </Grid>
  </Header>
)

export default AppHeader;

// <Segment circular style={circle}></Segment>