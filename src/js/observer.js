import { updateDoneTaskTotal, updateTaskTotal } from "./list.js";
import { doneTaskTotal, listGroup } from "./selector.js";

const observer = () => {

    
  const job = () => {
    updateDoneTaskTotal();
    updateTaskTotal();
  };

  const observerOptions = {
    childList: true,
    subtree: true,
    attributes: true,
  };
  const listGroupObserver = new MutationObserver(job);
  listGroupObserver.observe(listGroup, observerOptions);
};

export default observer;
