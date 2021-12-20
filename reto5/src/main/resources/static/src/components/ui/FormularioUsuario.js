// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import ActualizarUsuarios from '../paginas/ActualizarUsuario';


// const FormularioUsuarios = ({usuario}) => {

//     const {id, identification, name, birthDay, monthBirthtDay, address, cellPhone, photography, email, password, type } = usuario;

//     const [ usuarios, guardarUsuarios] = useState([]);

//     fetch("http://localhost:8080/api/user/all")
//     .then((res) => res.json())
//     .then((data) => {
//         //console.log(data);
//         guardarUsuarios(data);
//     });
   
// // const actualizarUsuario = id =>{

// //     {usuarios.map( usuario =>(
// //         <ActualizarUsuarios
// //        key={usuario.id}
// //        usuarios={usuario}
// //        /> ))}
  
// // }


//     const borrarUsuarios = id =>{

//         Swal.fire({
//             title: 'Quieres borrar el producto?',
//             text: "You won't be able to revert this!",
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             confirmButtonText: 'Si, desea borrar el Usuario!'
//           }).then((result) => {
//             if (result.isConfirmed) {
//                 try{
//                     console.log(id);
//                     fetch(`http://localhost:8080/api/user/${id}`,{
//                         method: "DELETE",
//                         headers: {
//                             Accept: "aplication/json",
//                             "Content-Type": "aplication/json",
//                         },
//                       }).then((data) =>{
//                          // console.log(data);
//                       });   
//               Swal.fire(
//                 'Deleted!',
//                 'Se borro correctamente.',
//                 'success'
//               );
//             } catch (error) {
//                 console.log(error)
//             }
            
//         }
//       })
// }
       


//     return( 
//         <>
    
                

//         <div className="w-full px-3 mb-4">
//             <div className="p-5 shadow-md bg-white">
//                 <div className="lg:flex">
//                     <div className="lg:w-5/12 xl:w-3/12">
                   
//                       <img src={photography} alt=" imagen usuario " />
//                             <div className="sm:flex sm:-mx-2 pl-2">
                                
//                             </div>
//                             </div>
//                             <div className="lg:w-7/12 xl:w-9/12 pl-5">
//                             <p className="font-bold text-2xl text-yellow-600 mb-4">{identification} </p>
//                             <p className="font-bold text-2xl text-yellow-600 mb-4">{id} </p>
                            
//                             <p className="text-gray-600 mb-4">{name} </p>
//                             <p className="text-gray-600 mb-4">{birthDay} </p>
                            
//                             <p className="text-gray-600 mb-4">monthBirthtDay: {''}
//                             <span className="text-gray-700 font-bold">{monthBirthtDay}</span> 
//                         </p> 

//                             <p className="text-gray-600 mb-4">{address} </p>
//                             <p className="text-gray-600 mb-4">{cellPhone} </p>
//                             <p className="text-gray-600 mb-4">{address} </p>
//                             <p className="text-gray-600 mb-4">{email} </p>
//                             <p className="text-gray-600 mb-4">{password} </p>
//                             <p className="text-gray-600 mb-4">{type} </p>

//                         <button
//                             onClick={ () => borrarUsuarios(usuarios.id)}
//                             type="submit"
//                             className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
//                            > 
//                            Borrar
                           
//                            </button>
                          
//                             <Link to={`/actualizar-usuarios/${usuarios.id}`} className="  bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold">
//                                 Actualizar Usuario
//                             </Link>
                           
                          
//                     </div>
//                 </div>
//             </div>
//         </div>
        
//         </>
        
        
//      );
// }
 
// export default FormularioUsuarios;