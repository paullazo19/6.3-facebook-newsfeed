import React from 'react'

export default React.createClass({
  getDefaultProps(){
    return{
      likes_count: 0,
    }
  },
  getInitialState(){
    return {
      count: this.props.likes_count
    };
  },
  addToCount(){
    if(this.state.count === 0){
      this.setState({count: this.state.count+1});
    } else {
      this.setState({count: this.state.count-1});
    }
  },
  render(){
    return (
      <p className="like_counter"><span  onClick={this.addToCount}>{this.state.count}</span> like(s)<span className="top_comments">top comments</span></p>
    )
  }
})
