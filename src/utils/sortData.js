const SortData = (TaskData, userData, type) => {
  const priority = {
    0: "No Priority",
    1: "Low",
    2: "Medium",
    3: "High",
    4: "Urgent",
  };

  let res = {};

  if (type === "Priority" && TaskData && userData) {
    res = { "No Priority": [], Urgent: [], High: [], Medium: [], Low: [] };
    TaskData?.forEach((task) => {
      res[priority[task.priority]].push({
        ...task,
        priority: false,
        userStatus: userData[+task.userId[4] - 1]?.available,
        userName: userData[+task.userId[4] - 1]?.name,
        type: "Priority",
        profileStatus: false,
      });
    });
  }

  if (type === "Status" && TaskData && userData) {
    res = { Backlog: [], Todo: [], "In progress": [], Done: [], Cancelled: [] };

    TaskData?.forEach((task) => {
      if (!res[task.status]) {
        res[task.status] = [];
      }
      res[task.status].push({
        ...task,
        status: false,
        userStatus: userData[+task.userId[4] - 1]?.available,
        userName: userData[+task.userId[4] - 1]?.name,
        type: "Status",
        profileStatus: false,
      });
    });
  }

  if (type === "Users" && TaskData && userData) {
    TaskData?.forEach((task) => {
      if (!res[userData[+task.userId[4] - 1]?.name]) {
        res[userData[+task.userId[4] - 1]?.name] = [];
      }
      res[userData[+task.userId[4] - 1]?.name].push({
        ...task,
        userStatus: false,
        userName: false,
        profileStatus: userData[+task.userId[4] - 1]?.available,
        type: "Users",
      });
    });
  }
  return res;
};

export default SortData;
