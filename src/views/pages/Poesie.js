
import React from 'react';

import axios from 'axios';

export default class Poesie extends React.Component {
  state = {
    posts: []
  }

  componentDidMount = () => {
    this.getBlogPost();
  };


  getBlogPost = () => {
    axios.get('https://pienessere-backend.herokuapp.com/api/poesia')
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
        console.log('Data has been received!!');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  }

  displayBlogPost = (posts) => {

    if (!posts.length) return null;
    // console.log(posts[0].poesia.split("\n"))

    return posts.map((post, index) => (
      <div key={index} >
        <p>{`"`+post.intro+`"`}</p>
        <h5 align="left">{post.desc}</h5>
        <div align="center">
      {post.poesia.split("\n").map((frase,index2)=>{
        return( 
          <h5 key={index+""+index2}>{frase}</h5> 
          );
      })}
      <hr></hr>
      </div>
      </div>
    ));
  };


  render() {
    return (
      <>
        {this.displayBlogPost(this.state.posts)}
      </>
    )
  }
}