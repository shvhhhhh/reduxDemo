import { ADD_COURSE } from "../actionTypes";

const initialState: any = {
  courseList: [
    {
      courseTitle: "Clean Code: Writing Code for Humans",
      courseCategory: "Software Architecture",
      courseLength: "3:10",
      courseAuthor: "Deepak kumar"
    },
    {
      courseTitle: "Web Component Fundamentals",
      courseCategory: "Software Testing",
      courseLength: "5:10",
      courseAuthor: "Shubham bali"
    },
    {
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
    payload: {
      courseTitle: String;
      courseCategory: String;
      courseLength: String;
      courseAuthor: String;
    };
  }
) {
  switch (action.type) {
    case ADD_COURSE:
      return {
        courseList: [...state.courseList, action.payload]
      };
    default:
      return state;
  }
}
