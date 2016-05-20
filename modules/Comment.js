import React from 'react'

export default React.createClass({
  render(){
    return (
      <article>
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
