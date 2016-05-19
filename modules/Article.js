import React from 'react'
import Like from './Like'
import Comments from './Comments'

export default React.createClass({
  getDefaultProps(){
    return{
      count: 0,
      author_name: "paul's articles",
      author_img: "./images/paul.png",
      article_text: "This is content of the article. Integer sit amet nibh et lacus sollicitudin finibus. Nullam lorem metus, hendrerit vel.",
      article_date: "march 10th, 2010",
      article_footer: "Vivamus ac blandit ante, accumsan mattis "

    }
  },
  render(){
    return (
      <div>
        <article className="article">
          <img className="author__image" src={this.props.author_img}/>
          <div className="article__header">
            <h1 className="author__name">{this.props.author_name}</h1>
            <h4 className="article__date">{this.props.article_date}</h4>
          </div>
          <div>
            <p className="article__text">{this.props.article_text}</p>
            <p className="article__footer">{this.props.article_footer}<a className="article__footer--link" href="#">gravida interdum.</a></p>
          </div>
        </article>
        <Like count={this.props.count}/>
        <section className="comments__section">
          <Comments/>
        </section>
      </div>
    )
  }
})
