import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const circle = { width: 200, height: 200, backgroundColor: "blue" }

const AppHeader = () => (
  <Header >Yesss
    <Segment circular style={circle}></Segment>
  </Header>
)

export default AppHeader;