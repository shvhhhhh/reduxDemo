import { ADD_COURSE, DELETE_COURSE, UPDATE_COURSE } from "../actionTypes";
let id = 4;
export const addCourse = (courseDetails: {
  courseTitle: String;
  courseCategory: String;
  courseLength: String;
  courseAuthor: String;
}) => ({
  type: ADD_COURSE,
  payload: {
    ...courseDetails,
    id: id++
  }
});

export const deleteCourse = (payload: Number) => ({
  type: DELETE_COURSE,
  payload
});

export const UpdateCourse = (payload: {
  id: Number;
  courseTitle: String;
  courseCategory: String;
  courseLength: String;
  courseAuthor: String;
}) => ({
  type: UPDATE_COURSE,
  payload
});
