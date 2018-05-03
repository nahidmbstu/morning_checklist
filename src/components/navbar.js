import React, { Component } from 'react';
import MainContent from "./MainContent";

class Navbar extends Component {

    constructor(props){

        super(props);

        this.state = { IP_Data : {} } 

        
    }
    componentDidMount() {

        var url = 'https://api.ipdata.co';
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    IP_Data: responseJson
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }
  
    render() {
     
    return (

        <div>

        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
         
            <a className="navbar-brand" href="#">Brand Logo</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample03">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Your Location </a>
                    </li>
                    <button type="button" className="btn btn-success btn-sm">

                        <img src={this.state.IP_Data.flag} className="img-fluid" alt="Responsive image"/>
                        <span>  </span>

                        {String(this.state.IP_Data.city) + "  ,  " + String(this.state.IP_Data.country_name)  }
                    </button>

                </ul>

            </div>

           
        </nav>

           
                <MainContent ip = {this.state.IP_Data} />
           
      </div>

    );

    }

}

export default Navbar;