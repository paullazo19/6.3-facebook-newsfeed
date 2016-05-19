import React from 'react'

export default React.createClass({
  getInitialState(){
    return {
      color: 'gray'
    };
  },
  addComment(){
    if(this.state.color === 'gray'){
      this.setState({color: 'green'});
    } else {
      this.setState({color: 'gray'});
    }
  },
  render(){
    return (
      <button className={"comment__button "+this.state.color} onClick={this.addComment}>Comment</button>
    )
  }
})
