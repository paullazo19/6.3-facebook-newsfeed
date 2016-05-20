import React from 'react'
import Comment from './Comment'
import Article from './Article'

export default React.createClass({
  getDefaultProps(){
    return{
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
  render(){
    var commentScope = this;
    return (
      <div>
        {this.props.comments.map(function(comment, i){
          return <Comment key={i}
          className={commentScope.props.key < commentScope.props.showUntil ? "comment__viewable" : "comment__hidden"}
          author_img={comment.author_img}
          author_name={comment.author_name}
          text={comment.text} date={comment.date}/>
        })}
      </div>
    )
  }
})
