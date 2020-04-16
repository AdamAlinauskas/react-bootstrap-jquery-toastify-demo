import React, { Component } from "react";
import { Toast, toast } from "react-toastify";
import $ from "jquery";
class Home extends Component {
  state = {};

  componentDidMount() {
    setTimeout(() => $("#myAlert").alert("close"), 2000);
  }

  handleClick = (text) => {
    toast.success(text);
  };

  render() {
    return (
      <div>
        <div
          id="myAlert"
          className="alert alert-success alert-dismissible fade show  "
        >
          Saved!{" "}
        </div>
        <div className="jumbotron">
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-4" />
          <p>
            It uses utility class for typography and spacing to space content
            out within the larger container.
          </p>
          <a className="btn btn-primary btn-lg" href="/Signup" role="button">
            Learn more
          </a>
        </div>
        <h1>Welcome</h1>
        <button
          className="btn btn-success"
          onClick={() => this.handleClick("Find out more...")}
        >
          Find out
        </button>
        &nbsp;
        <button
          className="btn btn-danger "
          onClick={() => toast.error("Error :(")}
        >
          Delete
        </button>
        &nbsp;
        <button
          className="btn btn-outline-warning "
          onClick={() => toast.error("Error :(")}
        >
          Warning
        </button>
        <div>&nbsp;</div>
      </div>
    );
  }
}

export default Home;
