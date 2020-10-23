import React, { Component } from "react";

class task extends Component {
  render() {
    return (
      <form className="container">
        <div class="form-group">
          <label for="exampleInputEmail1">Task Name</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter name of the task"
          />
          <small id="emailHelp" class="form-text text-muted"></small>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Date</label>
          <input
            name="requested_order_ship_date"
            type="date"
            disabled={this.state.mode}
            //value={moment(this.state.item.requested_order_ship_date).format(
              "DD-MMM-YYYY"
            )}
            className="form-control"
            onChange={this.handleInputChange}
          />
          <small id="emailHelp" class="form-text text-muted"></small>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Description</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter the description of the task"
          />
          <small id="emailHelp" class="form-text text-muted"></small>
        </div>

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

export default task;
