import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";
export default class AddForm extends Component<
  any,
  {
    courseTitle: string;
    courseCategory: string;
    courseLength: string;
    courseAuthor: string;
  }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      courseTitle: "",
      courseCategory: "",
      courseLength: "",
      courseAuthor: ""
    };
  }

  componentDidUpdate(prevProps: any) {
    if (
      this.props.isUpdateForm !== prevProps.isUpdateForm &&
      this.props.isUpdateForm
    ) {
      this.setState({ ...this.props.initialData });
    }
  }

  onChange = (event: any) => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };

  clearForm = () => {
    this.setState({
      courseTitle: "",
      courseCategory: "",
      courseLength: "",
      courseAuthor: ""
    });
  };

  addCourse = (e: any) => {
    e.preventDefault();
    if (this.props.isUpdateForm) this.props.updateCourse(this.state);
    else this.props.addCourse(this.state);
  };
  render() {
    return (
      <form onSubmit={this.addCourse}>
        <div className='form-group'>
          <label>Title</label>
          <input
            name={"courseTitle"}
            placeholder={"Title of the course"}
            className={"form-control"}
            value={this.state.courseTitle}
            onChange={this.onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label>Author</label>
          <select
            name='courseAuthor'
            value={this.state.courseAuthor}
            className='form-control'
            onChange={this.onChange}
            required>
            <option value=''></option>
            <option value='Deepak kumar'>Deepak kumar</option>
            <option value='Shubham bali'>Shubham bali</option>
            <option value='Pardeep kumar'>Pardeep kumar</option>
          </select>
        </div>
        <div className='form-group'>
          <label>Category</label>
          <input
            name='courseCategory'
            placeholder='Category of the course'
            className='form-control'
            value={this.state.courseCategory}
            onChange={this.onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label>Length</label>
          <input
            name='courseLength'
            placeholder='Length of course'
            className='form-control'
            value={this.state.courseLength}
            onChange={this.onChange}
            required
            pattern='[0-9]{1,2}:[0-9]{1,2}'
            title='XX:XX'
          />
        </div>
        <div className='form-btn-container'>
          <button className='form-btn submit-btn'>
            <i className='fa fa-paper-plane-o' aria-hidden='true'></i> Submit
          </button>
          <input
            type='reset'
            className='form-btn'
            value='Clear Values'
            onClick={this.clearForm}
          />
          <Link to='/'>
            <button className='form-btn'>Cancel</button>
          </Link>
        </div>
      </form>
    );
  }
}
