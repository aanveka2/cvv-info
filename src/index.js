import React, { Component } from "react";
import { render } from "react-dom";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { Form, Field } from "react-final-form";
const images = [
  "//placekitten.com/1500/500",
  "//placekitten.com/4000/3000",
  "//placekitten.com/800/1200",
  "//placekitten.com/1500/1500"
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            CVV:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input
            type="button"
            value="info"
            onClick={() => this.setState({ isOpen: true })}
          />
        </form>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
