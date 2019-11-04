import { ADD_COURSE, DELETE_COURSE, UPDATE_COURSE } from "../actionTypes";

const initialState: any = {
  courseList: [
    {
      id: 1,
      courseTitle: "Clean Code: Writing Code for Humans",
      courseCategory: "Software Architecture",
      courseLength: "3:10",
      courseAuthor: "Deepak kumar"
    },
    {
      id: 2,
      courseTitle: "Web Component Fundamentals",
      courseCategory: "Software Testing",
      courseLength: "5:10",
      courseAuthor: "Shubham bali"
    },
    {
      id: 3,
      courseTitle: "Architecting Applications for the Real World",
      courseCategory: "Software Practices",
      courseLength: "5:30",
      courseAuthor: "Pardeep kumar"
    }
  ]
};

export default function(
  state = initialState,
  action: {
    type: String;
    payload: any;
  }
) {
  switch (action.type) {
    case ADD_COURSE:
      return {
        courseList: [...state.courseList, action.payload]
      };
    case DELETE_COURSE:
      return {
        courseList: state.courseList.filter(
          (course: {
            courseTitle: String;
            courseCategory: String;
            courseLength: String;
            courseAuthor: String;
            id: Number;
          }) => course.id !== action.payload
        )
      };

    case UPDATE_COURSE:
      return {
        courseList: state.courseList.map(
          (course: {
            courseTitle: String;
            courseCategory: String;
            courseLength: String;
            courseAuthor: String;
            id: Number;
          }) => {
            if (course.id === action.payload.id) {
              return action.payload;
            }
            return course;
          }
        )
      };

    default:
      return state;
  }
}
