import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Links} from '../api/links';
import LinksListItem from './LinksListItem';

export default class LinksList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      links: []
    };
  }

  componentDidMount() {
    console.log('componentDidMount linkslist');
    this.linksTracker = Tracker.autorun(() => {
      Meteor.subscribe('links'); //subscribes to the publish in links api, uses its name.
      const links = Links.find().fetch();
      this.setState({ links });
    });
  }
  componentWillUnmount() {
    console.log('componentWillUnmount linkslist');
    this.linksTracker.stop();
  }

  renderLinksListItems() {
    return this.state.links.map((link) => {
      const shortUrl = Meteor.absoluteUrl(link._id);
      return <LinksListItem key={link._id} shortUrl={shortUrl} {...link} />;
    })
  }

  render() {
    return(
      <div>
        <p>Links list</p>
        <div>
          {this.renderLinksListItems()}
        </div>
      </div>
    )
  }
}
