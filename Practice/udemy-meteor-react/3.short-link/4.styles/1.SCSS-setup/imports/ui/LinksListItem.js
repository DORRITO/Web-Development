import React from 'react';
import Clipboard from 'clipboard';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';

export default class LinksListItem extends React.Component{

  ///////set state,switch to copied////
  constructor(props) {
    super(props);
    this.state = {
      justCopied: false
    };
  }///////////////////////

  ////////////clicking copy happened///////
  componentDidMount(){
    this.clipboard = new Clipboard(this.refs.copy);

    this.clipboard.on('success', () => {
      this.setState({ justCopied: true }); //changing state to true so 'copied' shows
      setTimeout(() => this.setState({ justCopied: false }), 1000);//back to false a second late
    }).on('error', () => {
      alert('unable to copy, please manually copy link.');
    })
  }/////////////////////////////////////

  ///////////get rid of everything/////
  componentWillUnmount(){
    console.log('burrninating the countryside');
    this.clipboard.destroy();
  }///////////////////////////////

  /////////////////////////////last visited//////////////////////////////////
  renderStats(){
    const visitMessage = this.props.visitedCount === 1 ? 'visit' : 'visits';
    let visitedMessage = null;

    if (typeof this.props.lastVisitedAt === 'number') {
      visitedMessage = `(visited ${ moment(this.props.lastVisitedAt).fromNow() })`;
    }

    return <p>{this.props.visitedCount} {visitMessage} - {visitedMessage}</p>;
  }////////////////////////////////////////////////////////////////////////

  render(){
    return(
      <div>
        <p>{this.props.url}</p>
        <p>{this.props.shortUrl}</p>
        <p>{this.props.visible.toString()}</p>
        {this.renderStats()}
        <a href={this.props.shortUrl} target="_blank">Visit</a>
        <button ref="copy" data-clipboard-text={this.props.shortUrl}>
          {this.state.justCopied ? 'copied' : 'copy'}
        </button>
        <button onClick={() => {
          Meteor.call('links.setVisibility', this.props._id, !this.props.visible);
        }}>
          {this.props.visible ? 'hide' : 'unhide'}
        </button>
      </div>
    );
  }
}
/////////////////////////////////////////
LinksListItem.propTypes = {
  _id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  shortUrl: PropTypes.string.isRequired,
  visitedCount: PropTypes.number.isRequired,
  lastVisitedAt: PropTypes.number
};
