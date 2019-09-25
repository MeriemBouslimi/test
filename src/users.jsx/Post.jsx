import React from "react";
import "../App.css";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount = () => {
    this.getPosts();
  };
  getPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/comments?postId=3")
      .then(response => response.json())
      .then(json => this.setState({ posts: json }));
  };

  render() {
    return (
      <div>
        <div className="posts">
          <img
            src="/images/figprofil.png"
            alt="post"
            className="img-post"
          ></img>
          {this.state.posts.map((el, i) => (
            <div className="posts-info">
              <div className="name-comt">Name:{el.name}</div>
              <div className="name-comt">E-mail:{el.email}</div>
              <h3 className="commantaire">Commantaire:</h3>
              <div>{el.body}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Posts;
