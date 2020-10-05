
import React from 'react';

import axios from 'axios';

export default class Ricette extends React.Component {
  state = {
    posts: []
  }

  componentDidMount = () => {
    this.getBlogPost();
  };


  getBlogPost = () => {
    axios.get('https://pienessere-backend.herokuapp.com/api/ricetta')
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data.reverse() });
        console.log('Data has been received!!');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  }

  displayBlogPost = (posts) => {

    if (!posts.length) return null;
    // console.log(posts)
    return posts.map((post, index) => (
      <div key={index} >
        <h2 >{post.title}</h2>
        {(post.img!=="")?<img src={post.img} style={{width:"15em",height:"20em",marginBottom:"20px"}} alt=""/>:""}
        <h5 align="left">{post.desc}</h5>
        <h5 align="left"><strong>Ricetta</strong></h5>
        <div>
      {post.ricetta.split("\n").map((frase,index2)=>{
        return( 
          <h5 align="center" key={index+""+index2}>{frase}</h5> 
          );
      })}
      </div>
      <h5 align="left"><strong>Preparazione</strong></h5>
        <div>
      {post.preparazione.split("\n").map((frase,index2)=>{
        return( 
          <h5 align="left" key={index+""+index2}>{frase}</h5> 
          );
      })}
      </div>
        <hr></hr>
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