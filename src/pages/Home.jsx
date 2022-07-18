import { useEffect, useState } from "react";
import { API_URL } from "../components/constants";
import UsersList from "../components/UsersList";

function Home() {
  const [usersState, setUsersState] = useState([]);

  useEffect(function () {
    fetch(`${API_URL}/user/1/100`)
      .then((res) => res.json())
      .then((users) => {
        setUsersState(users.list);
      });
  }, []);

  return <UsersList list={usersState} />;
}
export default Home;
