import React, { Component } from "react";
import "./style.css";
export default class Table extends Component<any, any> {
  constructor(props: { courseList: any }) {
    super(props);
  }
  render() {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Length</th>
            <th>Category</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {this.props.courseList.map(
            (
              course: {
                courseTitle: String;
                courseCategory: String;
                courseLength: String;
                courseAuthor: String;
              },
              i: number
            ) => (
              <tr key={i}>
                <td className='title'>{course.courseTitle}</td>
                <td>{course.courseLength}</td>
                <td>{course.courseCategory}</td>
                <td>{course.courseAuthor}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    );
  }
}

interface PassedProps extends React.Props<any> {
  props: { courseList: any };
}
