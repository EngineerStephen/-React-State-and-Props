import React, { Component } from "react";

class MoviesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movie: "",
            producer: "",
            AdditionalDetails: " ",
            isLoading: false,
            currentMovieIndex: 0,
            currentProducerIndex: 0,
            currentAdditionalDetailsIndex: 0
        };

        this.movieTitles = ["Pearl Harbor", "Vandamn", "Thor", "RoboCop", "The Matrix"];
        this.producers = ["Michael Bay", "Steven Spielberg", "James Cameron", "Christopher Nolan", "Quentin Tarantino"];
        this.additionalDetails = ["This is a movie about Pearl Harbor", "This is a movie about Vandamn", "This is a movie about Thor", "This is a movie about RoboCop", "This is a movie about The Matrix"];

        
        this.changeMovie = this.changeMovie.bind(this);
        this.changeProducer = this.changeProducer.bind(this);
        this.changeAdditionalDetails = this.changeAdditionalDetails.bind(this);
        this.toggleLoading = this.toggleLoading.bind(this);
    }

    changeMovie() {
        this.setState(prevState => {
            const nextIndex = (prevState.currentMovieIndex + 1) % this.movieTitles.length;
            return {
                movie: this.movieTitles[nextIndex],
                currentMovieIndex: nextIndex
            };
        });
    }
    changeProducer() {
        this.setState(prevState => {
            const nextIndex = (prevState.currentProducerIndex + 1) % this.producers.length;
            return {
                movie: this.producers[nextIndex],
                currentProducerIndex: nextIndex
            };
        });
    }

    changeAdditionalDetails() {
        this.setState(prevState => {
            const nextIndex = (prevState.currentAdditionalDetailsIndex + 1) % this.additionalDetails.length;
            return {
                movie: this.additionalDetails[nextIndex],
                currentAdditionalDetailsIndex: nextIndex
            };
        });
    }   

    toggleLoading() {
        this.setState(prevState => ({
            isLoading: !prevState.isLoading
        }));
    }



    render() {
        const { movie, producer, AdditionalDetails, isLoading } = this.state;
    
        return (
            <div>
                <h1>Movie: {movie}</h1>
                <button onClick={this.changeMovie}>Change Movie</button>
                <br /><br />
                
                <h2>Producer: {producer}</h2>
                <button onClick={this.changeProducer}>Change Producer</button>
                <br /><br />
                
                <h3>Additional Details: {AdditionalDetails}</h3>
                <button onClick={this.changeAdditionalDetails}>Change Additional Details</button>
                <br /><br /><br /><br />
                
                <button onClick={this.toggleLoading}>Toggle Loading</button>
                {isLoading && <p>Loading...</p>}
            </div>
        );
    }}

export default MoviesList;