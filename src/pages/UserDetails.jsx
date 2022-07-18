import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_URL } from "../components/constants";
import "../components/user-details.css";
import UsersList from "../components/UsersList";

function UserDetails() {
  const [user, setUser] = useState(null);
  const [userFriends, setUserFriends] = useState([]);
  const [path, setPath] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetch(`${API_URL}/user/${id}`)
      .then((res) => res.json())
      .then((specificUser) => {
        setUser(specificUser);
        setPath([...path, { id: specificUser.id, name: specificUser.name }]);
      });
  }, [id]);

  useEffect(() => {
    fetch(`${API_URL}/user/${id}/friends/1/10`)
      .then((res) => res.json())
      .then((data) => setUserFriends(data.list));
  }, [id]);

  if (!user) return <h1>Loading...</h1>;

  return (
    <div>
      <div className={"user-details"}>
        <img src={user.imageUrl} />
        <div>
          <p>Info</p>
          <p>
            {user.name} - {user.lastName}
          </p>
          <p>{user.title}</p>
          <p>Email: {user.email}</p>
        </div>
        <div>
          <p>Address</p>
          <p>City: {user.address.city}</p>
          <p>Street: {user.address.streetAddress}</p>
        </div>
      </div>

      <div className={"user-container flex"}>
        {path.map((user, index) => (
          <div
            key={String(user.id) + index}
            className={"link"}
            onClick={() => {
              if (user.id === id) return;
              navigate(`/user/${user.id}`);
            }}
          >
            {user.name} >
          </div>
        ))}
      </div>
      <div className={"user-container"}>
        <h2>Friends:</h2>
        <UsersList list={userFriends} />
      </div>
    </div>
  );
}

export default UserDetails;
