// import React, {useState} from 'react';
// import { useParams,useNavigate  } from 'react-router-dom';
// import { useFormik } from 'formik';
// // import React from 'react';
// import Swal from 'sweetalert2'; 
// import Sidebar from '../ui/Sidebar';



// const ActualizarUsuarios = () => {
    
//       // Hook para redireccionar
//       const navigate = useNavigate();

//     const {id} = useParams();
  

//     const [ usuariosActualizar, guardarProductosActualizar] = useState([]);

//     fetch(`http://localhost:8080/api/user/${id}`)
//     .then((res) => res.json())
//     .then((data) => {
       
//         guardarProductosActualizar(data);
//     });
    
//     const { identification, name, birthtDay, monthBirthtDay, address, cellPhone, email, password, zone, type, photography } = usuariosActualizar;
   
//     const formik = useFormik({
//         initialValues: {
//             id: id,
//             identification: "",
//             name: "",
//             birthtDay: "",
//             monthBirthtDay: "",
//             address: "",
//             cellPhone: "",
//             email: "",
//             password: "",
//             zone: "",
//             type: "",
//             photography:"",
//         }, 
//         onSubmit: datos => {
//             Swal.fire({
//                 title: 'Quieres actualizar el producto?',
//                 text: "You won't be able to revert this!",
//                 icon: 'warning',
//                 showCancelButton: true,
//                 confirmButtonColor: '#3085d6',
//                 cancelButtonColor: '#d33',
//                 confirmButtonText: 'Yes, delete it!'
//               }).then((result) => {
//                 if (result.isConfirmed) {
//                     try{ console.log(datos);
//                         fetch(`http://localhost:8080/api/user/update`, {
//                             method: "PUT",
//                             body: JSON.stringify(datos),
//                             headers: {
//                                 Accept: "application/json",
//                                 "Content-Type": "application/json",
//                               },
//                             })
//                               .then((res) => res.json())
//                               .then((data) => {
//                                 //console.log(data);             
//                         });
                       
//                   Swal.fire(
//                     'Actualizado!',
//                     'Se actualizo correctamente.',
//                     'success'
                    
                    
//                   );
//                   navigate('/productos');
//                 } catch (error) {
//                     console.log(error)
//                 }
                
//             }
//           })
               
//         }
//      });   
    
//     return( 
//         <>
//                   <div className="md:flex min-h-screen" >
//       <Sidebar />
//       <div className="md:w-2/5 xl:w-4/5 p-6">
//       <h1 className="text-3xl font-light mb-4">Actualizar Usuarios</h1>

// <div className="flex justify-center mt-10">
//      <div className="w-full max-w-3xl">
//          <form
//            onSubmit={formik.handleSubmit}
//          > 
//              <div className="mb-4">
//              <p className="font-bold text-2xl text-yellow-600 mb-4">{id} </p>
//                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">identification</label>
//                  <input 
//                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                      id="identification"
//                      type="numb"
//                      placeholder="identification " 
//                      value={formik.values.identification || identification} 
//                      onChange={formik.handleChange}  
//                  />
//              </div>
 
//              <div className="mb-4">
//                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">name</label>
//                  <input 
//                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                      id="name"
//                      type="text"
//                      placeholder="name"
//                      value={formik.values.name || name}
//                      onChange={formik.handleChange} 
//                  />
//              </div>
     
//              <div className="mb-4">
//                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">birthtDay</label>
//                  <input 
//                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                      id="birthtDay"
//                      type="text"
//                      placeholder="birthtDay"
//                      value={formik.values.birthtDay || birthtDay}
//                      onChange={formik.handleChange}   
//                  />
//              </div>
      
//              <div className="mb-4">
//                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">monthBirthtDay</label>
//                  <input 
//                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                      id="monthBirthtDay"
//                      type="text"
//                      placeholder="monthBirthtDay" 
//                      value={formik.values.monthBirthtDay || monthBirthtDay}
//                      onChange={formik.handleChange}   
//                  />
//              </div>

//              <div className="mb-4">
//                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">address</label>
//                  <input 
//                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                      id="address"
//                      type="text"
//                      placeholder="address" 
//                      value={formik.values.address || address}
//                      onChange={formik.handleChange}   
//                  />
//              </div>
        

//              <div className="mb-4">
//                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">cellPhone</label>
//                  <input 
//                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                      id="cellPhone"
//                      type="number"
//                      placeholder="cellPhone"
//                      value={formik.values.cellPhone || cellPhone}
//                      onChange={formik.handleChange}
//                  />
//              </div>

//              <div className="mb-4">
//                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">email</label>
//                  <input 
//                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                      id="email"
//                      type="text"
//                      placeholder="email"
//                      value={formik.values.email || email}
//                      onChange={formik.handleChange}
//                  />
//              </div>

//              <div className="mb-4">
//                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">password</label>
//                  <input 
//                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                      id="password"
//                      type="text"
//                      placeholder="email"
//                      value={formik.values.password || password}
//                      onChange={formik.handleChange}
//                  />
//              </div>

//              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Zone</label>
//              <select 
//                  className="bg-white shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline  "
//                  id="zone"   
//                  value={formik.values.zone}
//                  onChange={formik.handleChange}        
//                  >
//                  <option value="true">Disponible</option>
//                  <option value="false">No Disponible</option>
//              </select>


//              <div className="mb-4">
//                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">type</label>
//                  <input 
//                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                      id="type"
//                      type="text"
//                      placeholder="type"
//                      value={formik.values.type || type}
//                      onChange={formik.handleChange}                          
//                  />
//              </div>
     
//          <div className="mb-4">
//                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">FOTOGRAFIA</label>
//                  <input 
//                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                      id="photography"
//                      type="text"
//                      placeholder="Fotografia"
//                      value={formik.values.photography || photography}
//                      onChange={formik.handleChange}
//                  />
//              </div>
//         <input
//                  type="submit"
//                  className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
//                  value="Actualizar Producto"
//              />
//          </form>
//      </div>
//  </div>
    
//     </div>
//     </div>
          
       
//         </>
//      );
// }
 
// export default ActualizarUsuarios;