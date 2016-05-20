import React from 'react'
import Article from './Article'

export default React.createClass({
  render(){
    return (
      <article className={this.props.id < this.props.showUntil ? "comment__viewable" : "comment__hidden"}>
        <img className="comment__img" src={this.props.author_img}/>
        <div className="comment__content">
          <span>
            <p className="comment__text"><span className="comment__name">{this.props.author_name}</span>{this.props.text}</p>
          </span>
          <p className="comment__date">{this.props.date}</p>
        </div>
      </article>
    )
  }
})
