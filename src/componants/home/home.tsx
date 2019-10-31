import React, { Component } from "react";
import ButtonGroup from "../buttonGroup/buttonGroup";
import Table from "../table/table";
import { connect } from "react-redux";
import { withRouter } from "react-router";
class Home extends Component<any, any> {
  constructor(props: any) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div>
        <h1>Courses</h1>
        <ButtonGroup />
        <Table courseList={this.props.courses.courseList} />
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  const { courses } = state;
  return { courses };
}

export default withRouter(connect<any, any, any>(mapStateToProps)(Home));

interface PassedProps extends React.Props<any> {
  props: { courses: { courses: { courseList: any } } };
}
