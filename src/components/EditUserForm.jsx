import React, { useEffect } from "react";
import { useForm } from 'react-hook-form'

const EditUserForm = (props) => {

    //console.log(props.currentUser);

    const { register, formState: { errors }, handleSubmit, setValue } = useForm({

        defaultValues:  props.currentUser
           
    });

    useEffect(() => {
        if (props) 
        {
        setValue('name', props.currentUser.name);
        setValue('username', props.currentUser.username); 
    }
    }, [props]);
    
    

    const onSubmit = (data,e) => {

        console.log(data);
        data.id=props.currentUser.id
        // data es lo que viene del input y el id es el que estamos recibiendo
       props.updateUser(props.currentUser.id, data)
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
            <button>Edita el usuario</button>
      </form>
     );
}
 
export default EditUserForm;