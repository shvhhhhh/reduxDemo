import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default class ButtonGroup extends Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div className='btn-container'>
        <Link to='/addCourse'>
          <button className='btn btn-New'>
            <i className='fa fa-plus' aria-hidden='true'></i> New
          </button>
        </Link>
        <button className='btn btn-Edit'>
          <i className='fa fa-pencil' aria-hidden='true'></i> Edit
        </button>
        <button className='btn btn-Delete'>
          <i className='fa fa-trash-o' aria-hidden='true'></i> Delete
        </button>
      </div>
    );
  }
}
