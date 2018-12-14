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
    fetch(`https://en.wikipedia.org//w/api.php?action=query&format=json&origin=*&prop=description&prop=pageimages&pithumbsize=500&titles=${this.props.bug}`)
      .then((response) => {
        response.json()
          .then((json) => {
            console.log(json);
            const pages = json.query.pages;
            const pageId = Object.keys(pages)[0];
            //const thumbnail = pages[pageId].thumbnail.source;

            this.setState({title: pages[pageId].title, thumbnail: pages[pageId].thumbnail.source});
          })
      })

    fetch(`https://en.wikipedia.org//w/api.php?action=query&format=json&origin=*&prop=extracts&exintro=true&explaintext=true&titles=${this.props.bug}`)
      .then((response) => {
        response.json()
          .then((json) => {
            console.log(json);
            const pages = json.query.pages;
            const pageId = Object.keys(pages)[0];
            this.setState({description: pages[pageId].extract});
          })
      })
  }

  handleClick() {
    //let title;
    this.setState({img: !this.state.img});
  }

  render() {
    console.log(this.state);
    return (
      <div className="bug-card" onClick={() => this.handleClick()}>
        {this.state.img ? (<img src={this.state.thumbnail} alt={this.props.bug}/>) : (<div className='bug-info'>{this.state.title}<p>{this.state.description}</p></div>)}
      </div>
    );
  }
}

export default Bug;
