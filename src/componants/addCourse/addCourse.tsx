import React, { Component } from "react";
import AddFrom from "../addForm/addForm";
import addCourse from "../../redux/actions/addCourse";
import { connect } from "react-redux";
import { withRouter, RouteProps } from "react-router-dom";
import AddForm from "../addForm/addForm";
class AddCourse extends Component<{ addCourse: Function; history: any }> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div className='form-container'>
        <h1>Add</h1>
        <AddFrom
          addCourse={(courseData: any) => {
            this.props.history.goBack();
            this.props.addCourse(courseData);
          }}
        />
      </div>
    );
  }
}

export default withRouter(
  connect(
    null,
    { addCourse }
  )(AddCourse)
);
