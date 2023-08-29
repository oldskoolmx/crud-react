import React from "react";

const UserTable = (props) => {
    console.log(props.users);

    return ( 
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    // preguntamos si hay usuarios con esta funcion
                    props.users.length > 0 ? (
                    //lo que este adentro de los parentecis de user => () se va a retornar
                    props.users.map(user => (

                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>
                                <button className="button muted-button"
                                    onClick={ 
                                        //() => {props.setEditing(true)}
                                        () => {props.editRow(user)}
                                    }
                                >Edit</button>
                                <button className="button muted-button"
                                //se hace una funcion de flecha para que no se ejecute de inmediato 
                                onClick={() => {props.deleteUser(user.id)}}
                                >Delete</button>
                            </td>
                        </tr>
                    ))) : (
                        <tr>
                            {/* si no hay usuarios pintamos el siguiente mensaje */}
                            <td colSpan={3}>No hay usuarios</td>
                        </tr> 
                    )
                }
            </tbody>
      </table>
     );
}
 
export default UserTable;