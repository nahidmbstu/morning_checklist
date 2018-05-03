import React, { Component } from 'react';




class MainContent extends Component {

    constructor(props) {

        super(props);
        this.state = { weatherData: {}, ip_data: {}, TopNews: {}, TopMovies: {} }

    }
    
    
    componentWillMount() {

       setTimeout(() => {
        
           this.setState({ ip_data: this.props.ip },() => {

               fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.ip_data.city},${this.state.ip_data.country_code}&appid=c3931bf0db2a97835bdc4ed752303b91&units=metric`)
                   .then((response) => response.json())
                   .then((responseJson) => {
                       console.log(responseJson)
                       this.setState({ weatherData: responseJson })

                    })
                   .catch((error) => console.log(error));
           })
       }, 2000);
       
    }

    componentDidMount(){

        setTimeout(() => {

            let url = 'https://newsapi.org/v2/top-headlines?' +
                'country=' + "us" 
                +'&apiKey=40020c0117f54fd58f6fc4585ee88242';

            fetch(url)
                    .then((response) => response.json())
                    .then((responseJson) => {
                        console.log("TopNews",responseJson)
                        this.setState({ TopNews : responseJson })
                    })
                    .catch((error) => console.log(error));
            
        }, 2000);

        

        var url = "https://api.themoviedb.org/3/movie/popular?api_key=0a0b111f54f7c4c49f4ac6e615c63a8c&language=en-US&page=1";

        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("Top Movies --->", responseJson)
                this.setState({ TopMovies: responseJson })
                
            })
            .catch((error) => console.log(error));


        
    }

    render() {

        return (

            <div className="main">
                <div className="row">
                    <div className="col-sm-8">
                        <div className="row">
    
                            <div className="col-sm-6" >

                          
                                    <div className="card" style={{ color: '#000' }}>
                                        <div className="card-header">
                                            Weather
                                    </div>

                                    { this.state.weatherData.hasOwnProperty("weather") ? (

                                        <div className="card-body">
                                            <h5 className="card-title">{
                                                this.state.weatherData.weather[0].description

                                            }</h5>
                                            <p className="card-text">temparature:  {
                                                this.state.weatherData.main.temp
                                                 } Cel. </p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>


                                        </div>
                                     ) : null }
                                    </div>

                            </div>
                            <div className="col-sm-6" style={{ color: '#000' }}>


                                <div className="card" >
                                    <div className="card-header">
                                        Top Movies
                                </div>

                                    {this.state.TopMovies.hasOwnProperty("results") ? (

                                        this.state.TopMovies.results.map(movie =>
                                            <li className="list-group-item"> # { movie.title}</li>

                                        )) : null}


                                </div>


                          
                            </div>

                        </div>
                      
                    </div>
                    <div className="col-sm-4" style={{ color: '#000' }}>
                      
                     
                    
                        <div className="card" >
                            <div className="card-header">
                                Top News
                           </div>

                            {this.state.TopNews.hasOwnProperty("articles") ? (

                            this.state.TopNews.articles.map(article => 
                                    <li className="list-group-item"> # { article.description }</li>
                                
                            )): null }

                           
                        </div>




                    </div>
                </div>
            </div>


        );

    }

}

export default MainContent;