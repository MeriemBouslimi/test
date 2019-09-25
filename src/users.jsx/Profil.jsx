import React from "react";
import "../App.css";
import { Image } from "react-bootstrap";
import { Link } from 'react-router-dom';

class Profil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profil: []
    };
  }

  componentDidMount = () => {
    this.getProfil();
  };
  getProfil = () => {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then(response => response.json())
      .then(json => this.setState({ profil: json }));
  };

  render() {
    console.log(this.state.profil);
    return (
      <div className="profil">
        <div>
          <Image className="vol" src="/images/vol.jpg" fluid />
          <div className="user">
            <img className="fig-profil" src="/images/figprofil.png" alt="img" />
            <h2 className="name">Bret</h2>
          </div>
        </div>
        {this.state.profil.map((el, i) => (
          <div className="post">
            <h1>{el.name}</h1>
            <div class="container">
            <Link to="/posts/:id">
              <img
                src="/images/post.jpg"
                alt="Avatar"
                class="image"
              />
              </Link>
            </div>
            <h2 className="title-commt">Post:</h2>
            <div className="commt">{el.body}</div>
          </div>
        ))}
      </div>
    );
  }
}
export default Profil;
