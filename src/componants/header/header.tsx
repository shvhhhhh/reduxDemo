import React, { Component } from "react";
import "./style.css";

export default class header extends Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div className='header'>
        <nav>
          <ul>
            <li>
              <a aria-current='page' className='active-link' href='/'>
                Home
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
