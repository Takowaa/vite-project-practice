import {useEffect, useState} from "react";
import UserItem from "./UserItem.jsx";


const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, [])
  console.log(users)
  return (
    <div>
      <ul>
        {
          users.map((user) => (
             <UserItem key={user.id} name={user.name} email={user.email}/>
          ))
        }
      </ul>
    </div>
  );
};

export default Users;