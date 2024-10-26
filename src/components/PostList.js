import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.setState({
          posts: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <>
        <h1>Posts data (fetch using Axios Http Library of JS) :-) </h1>
        <div className="p-8">
          {posts.length
            ? posts.map((post) => (
                <div key={post.id}>
                  {" "}
                  {post.name}:- {post.email}
                </div>
              ))
            : null}
        </div>
      </>
    );
  }
}

export default PostList;
