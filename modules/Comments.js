import React from 'react'

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
          author_img: "./images/janet",
          text: "Integer sit amet nibh et lacus sollicitudin finibus. Nullam lorem metus, hendrerit vel sagittis varius, placerat vitae dui. Etiam nec vestibulum quam. Proin auctor mauris at urna porta ultrices.",
          date: "6 hours ago"
        },
        {
          author_name: "jack black",
          author_img: "./images/jack",
          text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam sem eros, mattis vitae elementum id, gravida et tortor. Praesent ultrices sapien ac efficitur laoreet. Vivamus tincidunt dui in risus interdum consequat. Aliquam rhoncus ut eros ac mattis.",
          date: "8 hours ago"
        },
      ]

    }
  },
  render(){
    return (
      <div className="comments__list">
        {this.props.comments.map(function(i){
          return
          <div>
            <h3 key={i}>{this.props.comments.author_name}</h3>
            <p key={i}>{this.props.comments.text}</p>
          </div>
        })}
      </div>
    )
  }
})
