import React, { Component } from "react";
import AddFrom from "../addForm/addForm";
import { addCourse, UpdateCourse } from "../../redux/actions/updateCourse";
import { connect } from "react-redux";
import { withRouter, RouteProps, useParams } from "react-router-dom";
import AddForm from "../addForm/addForm";
class AddCourse extends Component<
  {
    addCourse: Function;
    history: any;
    UpdateCourse: Function;
    courses: { courseList: [] };
    match: any;
  },
  { isUpdateForm: Boolean; initialData: any }
> {
  constructor(props: any) {
    super(props);
    this.state = { isUpdateForm: false, initialData: {} };
  }

  componentDidMount() {
    if (this.props.history.location.pathname.includes("editCourse")) {
      const initialData = this.props.courses.courseList.find(
        (course: any) => course.id == this.props.match.params.id
      );

      this.setState({
        isUpdateForm: true,
        initialData
      });
    }
  }

  updateCourse = (courseData: {
    courseTitle: String;
    courseCategory: String;
    courseLength: String;
    courseAuthor: String;
    id: Number;
  }) => {
    this.props.UpdateCourse(courseData);
    this.props.history.goBack();
  };

  addCourse = (courseData: {
    courseTitle: String;
    courseCategory: String;
    courseLength: String;
    courseAuthor: String;
  }) => {
    this.props.addCourse(courseData);
    this.props.history.goBack();
  };

  render() {
    return (
      <div className='form-container'>
        <h1>Add</h1>
        <AddFrom
          initialData={this.state.initialData}
          isUpdateForm={this.state.isUpdateForm}
          addCourse={this.addCourse}
          updateCourse={this.updateCourse}
        />
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  const { courses } = state;
  return { courses };
}

export default withRouter(
  connect(
    mapStateToProps,
    { addCourse, UpdateCourse }
  )(AddCourse)
);
