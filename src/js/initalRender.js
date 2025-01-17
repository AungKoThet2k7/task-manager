import { addlist, tasks } from "./list.js";

const initalRender = () => {
  tasks.forEach((task) => {
    addlist(task);
  });
};

export default initalRender;
