import React, { Component } from "react";
class Weather extends Component {
  state = {
    loading: true,
    person: null,
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ loading: false, person: data.results[0] });
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <div>loading...</div>
        ) : (
          <div className="col-sm-12 offset-md-4">
            <div className="title col-sm-12">
              {this.state.person.name.title}
            </div>
            <div className="first col-sm-12">
              {this.state.person.name.first}
            </div>
            <div className="last col-sm-12">{this.state.person.name.last}</div>
            <img src={this.state.person.picture.large} className="image" />
          </div>
        )}
      </div>
    );
  }
}

export default Weather;
