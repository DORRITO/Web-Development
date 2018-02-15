import React from 'react'
import {Card, Header} from 'semantic-ui-react'

import Services from './Services';

const Events = () => (
    <div className='BackgroundBlack' >
        <div className="BackgroundImage">
        <h1></h1><h1></h1>
            <div className='Theme-Events'>
                <Card fluid centered raised color='orange'>
                    <Card.Content textAlign='center'>
                        <Card.Header>Events/Sports Pictures:</Card.Header>
                        <Card.Description as='h4'>Usually shot hourly: contact me for specific rates!</Card.Description>
                    </Card.Content>
                </Card>
            </div>
        </div>
    </div>
)

export default Events;