import React from 'react';
import "../App.css";
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';



class Userslist extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        users:[],  
      }
    }
    componentDidMount = () => {
        this.getUsers();
    }
    getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.setState({users:json}))
      };

render(){
    return(
        <div >
            
        <div>
            {this.state.users.map((el,i)=>
            <div className='users'>
              <Image className="vol" src="/images/vol.jpg" fluid />
            <div className='user'>
              <Link to="/profil/:id">
            <img className="fig-profil" src="/images/figprofil.png" alt="img" />
            </Link>
            <Link className='name' to="/profil/:id">
            <h2 className="namep">{el.username}</h2>
            </Link>
            <div className="coordonnee">  
            <div className="coord">
              <h3 className="title">Company</h3>
              <div>Name:{el.company.name}</div>
              <div>CatchPhrase{el.company.catchPhrase}</div>
              <div>bs:{el.company.bs}</div>
            </div>
            <div className="coord">
            <div>Name: {el.name}</div> 
            <div>E-mail: {el.email}</div>
            <div>Phone:{el.phone}</div>
            <div>website:{el.website}</div>
            </div>
            <div className="coord">
            <h3 className="title">Adresse</h3>
            <div>Street:{el.address.street}</div> 
            <div>Suite:{el.address.suite}</div>
            <div>City:{el.address.city}</div>
            <div>Zipcode:{el.address.zipcode}</div>
            <div>Geo lat:{el.address.geo.lat}</div>
            <div>Geo lng:{el.address.geo.lng}</div>
            </div>
            </div>
            <Link to="/profil/:id">
            <button className="followinf-btn" variant="primary" size="lg" active>following</button>
            </Link>
            </div>
            </div>
            )}
        </div>
        </div>
    )};}
    export default Userslist;