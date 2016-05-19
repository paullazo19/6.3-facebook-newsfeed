import React from 'react'
import Article from './Article'
import Like from './Like'
import AddComment from './AddComment'
import Comments from './Comments'
import Counter from './Counter'

export default React.createClass({
  render() {
    return (
      <main className="wrapper">
        <Article/>
        <section className="article__buttons">
          <Like/>
          <AddComment/>
        </section>
        <section className="comments__section">
          <Counter/>
          <Comments/>
        </section>
      </main>
    )
  }
})
