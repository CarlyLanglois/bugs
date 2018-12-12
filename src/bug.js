import React, { Component } from 'react';
import './App.css';

class Bug extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: true,
      title: '',
      description: '',
      thumbnail: ''
    }
  }

  componentDidMount() {
    fetch(`https://en.wikipedia.org//w/api.php?action=query&format=json&origin=*&prop=description&prop=pageimages&titles=${this.props.bug}`)
      .then((response) => {
        response.json()
          .then((json) => {
            console.log(json);
            const pages = json.query.pages;
            const pageId = Object.keys(pages)[0];
            this.setState({title: pages[pageId].title, description: pages[pageId].description, thumbnail: pages[pageId].thumbnail.source});
          })
      })
  }

  handleClick() {
    let title;
    this.setState({img: !this.state.img});
  }

  render() {
    console.log(this.state);
    return (
      <div className="App-intro" onClick={() => this.handleClick()}>
        {this.state.img ? (<img src={this.state.thumbnail || this.props.img} alt={'LactoB'}/>) : (<div>{this.state.title}<p>{this.state.description}</p></div>)}
      </div>
    );
  }
}

export default Bug;
