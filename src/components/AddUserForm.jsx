import React from "react";
import { useForm } from 'react-hook-form'

const AddUserForm = (props) => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data,e) => {

        //console.log(data);
        //para pasar los datos del input a la funcion adduser()
        props.addUser(data);
        //para limpiar el input despues de ke se envia los datos
        e.target.reset();
    }

    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type="text" name="name"  
            {...register("name", {
                required: { value: true, message: 'Campo requerido' },
               
            })}
            />
                 {errors.name &&
                    <div className="alert alert-danger mt-1 p-1" >
                        {errors.name.message}
                    </div>
                }

            <label>Username</label>
            <input type="text" name="username" 
            {...register("username", {
                required: { value: true, message: 'Campo requerido' },
               
            })}
            />
            {errors.username &&
                    <div className="alert alert-danger mt-1 p-1" >
                        {errors.username.message}
                    </div>
                }
            <button>Add new user</button>
      </form>
     );
}
 
export default AddUserForm;