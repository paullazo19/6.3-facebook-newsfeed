import React from 'react'
import Counter from './Counter'

export default React.createClass({
  getInitialState(){
    return {
      color: 'gray'
    };
  },
  addLike(){
    if(this.state.color === 'gray'){
      this.setState({color: 'blue'});
    } else {
      this.setState({color: 'gray'});
    }
  },
  render(){
    return (
      <button className={"like__button "+this.state.color}  onClick={this.addLike}>Like</button>
    )
  }
})
