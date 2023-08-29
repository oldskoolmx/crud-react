import React, { useState } from "react";
import UserTable from "./components/UserTable";
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";
import { v4 as uuidv4 } from 'uuid';


function App() {

  const usersData = [
    // se reemplaza el numero del id por la funcion uuidv4()
    // { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ]
  //state
  const [users, setUsers] = useState(usersData);
  //agregar usuarios
  const addUser = (user) => {

    user.id = uuidv4()
    setUsers([
      ...users, user
    ])
  }

  //eliminar usuarios
  const deleteUser = (id) => {

    console.log(id);
    // vamos a ser un recorrido por todos los usuarios y vamos a preguntar si el usuario 
    // es distintinto al id que enviamos al principio, que lo guarde dentro del filtro y si es igual al id
    // que lo excluya

    const arrayFiltrado = users.filter(user => user.id !== id);
    setUsers(arrayFiltrado);
  }

  // editar usuarios
  // vamos a pintar un formulario u otro, cual sea su caso editar o agregar
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    // vacios para recuperar los datos de la tabla
    id: null, name: '', username: ''
  });
  // con esta funcion recibimos el usuario que vamos a modificar
  const editRow = (user) => {

    setEditing(true);
    setCurrentUser({

      id: user.id, name: user.name, username: user.username
    })
  }

  const updateUser = (id, updateUser) => {
    setEditing(false);

    // si el usuario es igual al id, entonces pintame el usuario actualizado si no sigueme pintando el usuario tradicional
    setUsers(users.map(user => (user.id === id ? updateUser : user)))

  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">

          {
            editing ? (
              <div>
                <h2>Editar Usuario</h2>
                <EditUserForm currentUser={currentUser}
                  updateUser={updateUser}
                />

              </div>
            ) : (
              <div>
                <h2>Add user</h2>
                <AddUserForm addUser={addUser} />
              </div>
            )
          }

        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users}
            deleteUser={deleteUser}

            editRow={editRow} />
        </div>
      </div>
    </div>
  );
}

export default App;
