import React, { Component } from "react";

class entry extends Component {
  render() {
    return (
      <form className="container">
        <div class="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter name"
          />
          <small id="emailHelp" class="form-text text-muted"></small>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Designation</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter designation"
          />
          <small id="emailHelp" class="form-text text-muted"></small>
        </div>
        {/* <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div> */}
        <button type="submit" class="btn btn-primary">
          Add user
        </button>
        <button type="submit" class="btn btn-primary">
          Edit User
        </button>
        <button type="submit" class="btn btn-primary">
          Delete user
        </button>
      </form>
    );
  }
}

export default entry;
