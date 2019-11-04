import React from "react";
const AddCourse = React.lazy(() => import("./componants/addCourse/addCourse"));
const Home = React.lazy(() => import("./componants/home/home"));
export default [
  { path: "/", component: Home },
  { path: "/addCourse", component: AddCourse },
  { path: "/editCourse/:id", component: AddCourse }
];
