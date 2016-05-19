import React from 'react'
import AddComment from './AddComment'

export default React.createClass({
  componentWillMount(){
    this.setState({ liked: false, count: this.props.count });

  },
  onHandleClickLike(e){
    var like_count =
      this.state.liked ? 0 : 1;
      this.setState({ liked: this.state.liked ? false : true, count: like_count })
      e.preventDefault();
  },
  render(){
    return (
      <article className="section__like">
        <section className="article__buttons">
          <a href="#"
            className={this.state.liked ? "blue" : "gray"}
            onClick={this.onHandleClickLike}>Like</a>
          <AddComment/>
        </section>
        <div className='comments__header'>
          <p className="like_counter">
            <span>{this.state.count}</span>
             &nbsp;like(s)
            <span className="top_comments">top comments</span>
           </p>
        </div>
      </article>
    )
  }
})
