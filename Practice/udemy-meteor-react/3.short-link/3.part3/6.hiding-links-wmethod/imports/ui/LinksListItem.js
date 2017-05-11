import React from 'react';
import Clipboard from 'clipboard';
import PropTypes from 'prop-types';

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

  render(){
    return(
      <div>
        <p>{this.props.url}</p>
        <p>{this.props.shortUrl}</p>
        <button ref="copy" data-clipboard-text={this.props.shortUrl}>
          {this.state.justCopied ? 'copied' : 'copy'}
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
  shortUrl: PropTypes.string.isRequired
};
