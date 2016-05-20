import React from 'react'
import Like from './Like'
import Comment from './Comment'

export default React.createClass({
  getDefaultProps(){
    return{
      count: 0,
      author_name: "paul's articles",
      author_img: "./images/paul.png",
      article_text: "This is content of the article. Integer sit amet nibh et lacus sollicitudin finibus. Nullam lorem metus, hendrerit vel.",
      article_date: "march 10th, 2010",
      article_footer: "Vivamus ac blandit ante, accumsan mattis ",
      comments: [
        {
          author_name: "joe johnson",
          author_img: "./images/sam.jpg",
          text: "Suspendisse suscipit augue nec eleifend consectetur. Praesent consectetur justo eget risus mollis egestas. Vivamus ac blandit ante, accumsan mattis tortor. Sed pulvinar lacinia odio, vitae blandit tellus fringilla ut. Sed ornare, libero at fringilla venenatis, ante neque pretium turpis, a posuere nisi eros nec leo. Praesent vel commodo erat.",
          date: "4 hours ago"
        },
        {
          author_name: "kate robinson",
          author_img: "./images/janet.jpg",
          text: "Integer sit amet nibh et lacus sollicitudin finibus. Nullam lorem metus, hendrerit vel sagittis varius, placerat vitae dui. Etiam nec vestibulum quam. Proin auctor mauris at urna porta ultrices.",
          date: "6 hours ago"
        },
        {
          author_name: "jack black",
          author_img: "./images/jack.jpg",
          text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam sem eros, mattis vitae elementum id, gravida et tortor. Praesent ultrices sapien ac efficitur laoreet. Vivamus tincidunt dui in risus interdum consequat. Aliquam rhoncus ut eros ac mattis.",
          date: "8 hours ago"
        },
      ]
    }
  },
  componentWillMount(){
    this.setState({showUntil: 2})

  },
  onHandleClickShowAll(){
    this.setState({showUntil: this.props.comments.length})

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
          <div>
            {this.props.comments.map(function(comment, i){
              return <Comment key={i} id={i} showUntil={this.state.showUntil}
              author_img={comment.author_img}
              author_name={comment.author_name}
              text={comment.text} date={comment.date}/>

            },this)}
          </div>
          <button
            className="comments__viewMore"
            onClick={this.onHandleClickShowAll}>View more comments
          </button>
        </section>
      </div>
    )
  }
})
