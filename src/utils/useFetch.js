import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = () => {
  const [user, setUser] = useState("");
  const [task, setTask] = useState("");
  const [isLoading, setIsLoading] = useState("");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => {
        setUser(response.data.users);
        setTask(response.data.tickets);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return [user, task, isLoading];
};
