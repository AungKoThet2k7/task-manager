import initalRender from "./initalRender.js";
import listener from "./listener.js";
import observer from "./observer.js";

class Todo {
  init() {
    observer();
    initalRender();
    listener();
  }
}

export default Todo;
