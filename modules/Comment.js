import React from 'react'

export default React.createClass({
  render(){
    return (
      <article>
        <img className="comment__img" src={this.props.author_img}/>
        <h2>{this.props.author_name}</h2>
        <p>{this.props.text}</p>
        <p>{this.props.date}</p>
      </article>
    )
  }
})
