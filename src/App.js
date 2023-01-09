// import axios from 'axios';
import React, { useEffect, useState } from "react";
import "./App.css";
import AddUser from "./components/AddUser";
import User from "./components/User"; 

const App = () => {
  const [users, setUsers] = useState([]);

  const URL = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    fetch(URL)
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((err) => {
          console.log(err);
        });
  }, []);


  //   const fetchData = async () => {
  //   axios.get('https://jsonplaceholder.typicode.com/users')
  //   .then(response => setUsers(response.data))
  //   .catch(error => console.log(error))
  // }
//   async function fetchData(){
//     try {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//         setUsers(response.data);
//     } catch (error) {
//         console.error(error);
//     }
// }
//   const fetchData = async () => {
//     try {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//         setUsers(response.data);
//     } catch (error) {
//         console.error(error);
//     }
// }

  const onAdd = async (name, email) => {
    await fetch(URL, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setUsers(
            users.filter((user) => {
              return user.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // console.log(users);
  return (
    <div className="App">
      <h3>React Crud Using Jsonplaceholder</h3>
      <br />
      <div>
      <AddUser onAdd={onAdd} />
        {users.map((user) => (
          <User
            id={user.id}
            key={user.id}
            name={user.name}
            website={user.website}
            email={user.email}
            address={user?.address?.street}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
