import { ADD_COURSE } from "../actionTypes";

export default (courseDetails: {
  courseTitle: String;
  courseCategory: String;
  courseLength: String;
  courseAuthor: String;
}) => ({
  type: ADD_COURSE,
  payload: {
    ...courseDetails
  }
});
