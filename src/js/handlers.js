import Swal from "sweetalert2";
import { addlist, listDelete, listDone, listEdit } from "./list.js";
import { listGroup, taskInput } from "./selector.js";

export const listGroupHandler = (event) => {
  const list = event.target.closest(".list");
  if (event.target.classList.contains("list-del-btn")) {
    listDelete(event.target.closest(".list").id);
  }

  if (event.target.classList.contains("list-edit-btn")) {
    listEdit(event.target.closest(".list").id);
  }

  if (event.target.classList.contains("list-done-check")) {
    listDone(event.target.closest(".list").id);
  }
};

export const addListHandler = () => {
  if (taskInput.value.trim()) {
    addlist(taskInput.value);
  }
};

export const taskInputHandler = (event) => {
  if (event.key === "Enter" && taskInput.value.trim()) {
    addlist(taskInput.value);
  }
};

export const deleteAllHandler = () => {
  // if (confirm("Are you sure to delete all lists ?")) {
  const allList = listGroup.querySelectorAll(".list");
  allList.forEach((list) => {
    listDelete(list.id);
  });
  // }
};

export const doneAllHandler = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      const allList = listGroup.querySelectorAll(".list");
      allList.forEach((list) => {
        list.querySelector(".list-done-check").checked = true;
        listDone(list.id);
      });
    }
  });
};
