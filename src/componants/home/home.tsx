import React, { Component } from "react";
import ButtonGroup from "../buttonGroup/buttonGroup";
import Table from "../table/table";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { deleteCourse } from "../../redux/actions/updateCourse";
class Home extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { selectedCourseId: null };
  }
  deleteCourse = () => {
    this.props.deleteCourse(this.state.selectedCourseId);
    this.setState({ selectedCourseId: null });
  };
  selectCourse = (id: Number) => {
    this.setState({ selectedCourseId: id });
  };

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <ButtonGroup
          deleteCourse={this.deleteCourse}
          selectedCourseId={this.state.selectedCourseId}
        />
        <Table
          selectedCourseId={this.state.selectedCourseId}
          selectCourse={this.selectCourse}
          courseList={this.props.courses.courseList}
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
  connect<any, any, any>(
    mapStateToProps,
    { deleteCourse }
  )(Home)
);
