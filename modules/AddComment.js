import React from 'react'

export default React.createClass({
  getInitialState(){
    return {
      color: 'grayComment'
    };
  },
  addComment(){
    if(this.state.color === 'grayComment'){
      this.setState({color: 'green'});
    } else {
      this.setState({color: 'grayComment'});
    }
  },
  render(){
    return (
      <button className={"comment__button "+this.state.color} onClick={this.addComment}>Comment</button>
    )
  }
})
