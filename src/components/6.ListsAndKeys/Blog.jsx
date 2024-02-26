import React from 'react'

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

const Blog = () => {
  /**
   * Version 1: Without key
   * 
   */
  // let postList = posts.map(post => {
  //   return (
  //     <div>
  //       <h3>{post.title}</h3>
  //       <p>{post.content}</p>
  //     </div>
  //   )
  // })


  /**
   * Version 1: Wrong way- using index
   * 
   * "Key" is used for React to optimaze re-render of an updated list.
   * If no key is assigned to the element, then a warning will be displayed in the console, 
   * and by default React will use the array index as "key".
   * 
   * But index as key is error prone and cannot be trusted
   */
  // let postList = posts.map((post, index) => {
  //   return (
  //     <div key={index}>
  //       <h3>{post.title}</h3>
  //       <p>{post.content}</p>
  //     </div>
  //   )
  // })


  /**
   * Version 2: Right way - using unique id (and not changable)
   * 
   * Correct usage of the key attribute. Ensures that the ID will alwase be unique
   */
  // let postList = posts.map(post => {
  //   return (
  //     <div key={post.id}>
  //       <h3>{post.title}</h3>
  //       <p>{post.content}</p>
  //     </div>
  //   )
  // })

  // return (
  //   <div>{postList}</div>
  // )


  /**
   * Version 3: Refactor to child component
   * 
   * key is not a prop defined by the component Post. It is similar
   * to how we used key in div, i.e., a react defined property that is 
   * used when rendering lists for any html tag or component.
   * 
   */
  // let postList = posts.map(post => {
  //   return <Post key={post.id} title={post.title} content={post.content}/>
  // })

  // return (
  //   <div>{postList}</div>
  // )


  /**
   * Version 4: Run .map directly in JSX
   */
  return (
    <div>
      {
        posts.map(post => 
          <Post key={post.id} title={post.title} content={post.content}/>
        )
      }
    </div>
  )
}

export default Blog