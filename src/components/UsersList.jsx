import UserCard from "./UserCard";

function UsersList({ list }) {
  return (
    <section className={"container"}>
      <div className="users">
        {list.map((user) => {
          return (
            <UserCard
              key={user.id}
              poster={user.imageUrl}
              title={user.name}
              profession={user.title}
              id={user.id}
            />
          );
        })}
      </div>
    </section>
  );
}
export default UsersList;
