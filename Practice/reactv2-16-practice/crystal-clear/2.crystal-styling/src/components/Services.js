import React, { Component } from 'react';
import { Grid, Icon, Segment } from 'semantic-ui-react';

class Servies extends Component {
  render() {
    return (
      <div className="Services" >
        <Segment size='large' stacked style={{backgroundColor: '#F7F7EC'}} textAlign='center'>
          <Grid columns={3}>
            <Grid.Column><Icon size='big' inverted color='blue' name='wrench' />
              <h4>Maintenance</h4>
              <h5>Equipment failing? Call us and we will fix it!
              <br />Or, If you are signed up for regular cleanings,
              <br />one of our techs will notify us if they see anything wrong.</h5>
            </Grid.Column>
            <Grid.Column><Icon size='big' inverted color='green' name='leaf' />
              <h4>Cleaning</h4>
              <h5>Our techs visit multiple times a week, and will scrub the 
              <br />sides of your pool and get the leaves out on each and every 
              <br />visit. They will also vacuum up dirt if they see it.</h5>
            </Grid.Column>
            <Grid.Column><Icon size='big' color='orange' inverted name='archive' />
              <h4>Supplies</h4>
              <h5>Need pool equipment? Come in to our office to see what we
              <br />have, or have one of our techs deliver it to you on 
              <br />their next visit!</h5>
            </Grid.Column>
            <Grid.Column><Icon size='big' color='red' inverted name='first aid' />
              <h4>Restoration</h4>
              <h5>Is your pool looking like a radioactive quagmire? That's either
              <br />algae or too many margaritas got spilled during your last party.
              <br />Either way, call us and we can clean it up for you!</h5>
            </Grid.Column>
            <Grid.Column><Icon size='big' color='pink' inverted name='tint' />
              <h4>Chemicals</h4>
              <h5>We keep your pool's PH levels where it needs to be to keep
              <br />you and your pool safe, and the acid used is on us! We will
              <br />supply high quality chlorine tabs (as needed) for a cost or
              <br />you can buy your own bucket of tabs that we will use if you like.</h5>
            </Grid.Column>
            <Grid.Column><Icon size='big' color='blue' inverted name='child' />
              <h4>Customer Service</h4>
              <h5>Our employees are thoroughly trained and will take great care
              <br />of your pool. They leave a card on each visit, detailing
              <br />what they did, so you know they visited while you were
              <br />gone so that you can check on how your pool is doing! </h5>
            </Grid.Column>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default Servies;