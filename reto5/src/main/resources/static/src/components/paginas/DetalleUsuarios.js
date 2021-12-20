// import React, {useState} from 'react';
// import { Link, useParams,useNavigate  } from 'react-router-dom';
// import { useFormik } from 'formik';
// import * as Yup from 'yup'
// import Sidebar from '../ui/Sidebar';


// const DetalleUsuarios = ( ) => {
    
//     const navigate = useNavigate();
 
//    // validación y leer los datos del formulario
//  const formik = useFormik({
//    initialValues: {
//       id:'', 
//       identification:'',
//       name: '',
//       birthtDay: '',
//       mes: '',
//       address: '',
//       cellPhone: '',
//       email: '',
//       password: '',
//       zone: '',
//       type: '',
//       photography:"",
//    }, 
//    validationSchema: Yup.object({
//       id: Yup.number()
//                .min(1, 'Debes agregar un número')
//                .required('El id es obligatorio'),
//       identificacion: Yup.number()
//                .min(1, 'Debes agregar un número')
//                .required('la identificacion es obligatoria'),
//    name: Yup.string()
//                .min(3,'Debes agregar un nombre')
//                .required('elo nombre es obligatorio'), 
                   
//    }),

//    onSubmit: datos => {
//     Swal.fire({
//         title: 'Quieres crear el producto?',
//         text: "You won't be able to revert this!",
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#3085d6',
//         cancelButtonColor: '#d33',
//         confirmButtonText: 'Yes, delete it!'
//       }).then((result) => {
//         if (result.isConfirmed) {
//             try{ console.log(datos);
//                 fetch(`http://localhost:8080/api/user/new`, {
//                     method: "POST",
//                     body: JSON.stringify(datos),
//                     headers: {
//                         Accept: "application/json",
//                         "Content-Type": "application/json",
//                       },
//                     })
//                       .then((res) => res.json())
//                       .then((data) => {
//                         //console.log(data);             
//                 });
               
//           Swal.fire(
            
//             'Se creo correctamente.',
//             'success'
            
            
//           );
//           navigate('/usuarios');
//         } catch (error) {
//             console.log(error)
//         }
        
//     }
//   })
       
// }
// }); 


//        return( 
//         <>
//                <div className="md:flex min-h-screen" >
//       <Sidebar />
//       <div className="md:w-2/5 xl:w-4/5 p-6">
//       <h1 className="text-3xl font-light mb-4">Detalle usuarios</h1>
        
//         <div className="flex justify-center mt-10">
//              <div className="w-full max-w-3xl">
//                  <form
//                    onSubmit={formik.handleSubmit}
//                  >
//                      <div className="mb-4">
//                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">ID</label>
//                          <input 
//                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                              id="id"
//                              type="number"
//                              placeholder="id "  
//                              value={formik.values.id}
//                              onChange={formik.handleChange}
//                              onBlur={formik.handleBlur} 
//                          />
//                      </div>
//                      { formik.touched.id && formik.errors.id ? (
//                          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
//                              <p className="font-bold">Hubo un error:</p>
//                              <p>{formik.errors.id} </p>
//                          </div>
//                      ) : null }



//                      <div className="mb-4">
//                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Identificacion</label>
//                          <input 
//                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                              id="identificacion"
//                              type="number"
//                              placeholder="identificacion " 
//                              value={formik.values.identificacion}
//                              onChange={formik.handleChange}
//                              onBlur={formik.handleBlur}   
//                          />
//                      </div>
//                      { formik.touched.identificacion && formik.errors.identificacion ? (
//                          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
//                              <p className="font-bold">Hubo un error:</p>
//                              <p>{formik.errors.identificacion} </p>
//                          </div>
//                      ) : null }

//                      <div className="mb-4">
//                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Name</label>
//                          <input 
//                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                              id="name"
//                              type="text"
//                              placeholder="name "
//                              value={formik.values.name}
//                              onChange={formik.handleChange}
//                              onBlur={formik.handleBlur} 
                          
//                          />
//                      </div>
//                      { formik.touched.nombre && formik.errors.nombre ? (
//                          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
//                              <p className="font-bold">Hubo un error:</p>
//                              <p>{formik.errors.nombre} </p>
//                          </div>
//                      ) : null }

//                         <div className="mb-4">
//                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">birthtDay</label>
//                          <input 
//                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                              id="birthtDay"
//                              type="text"
//                              placeholder="birthtDay "
//                              value={formik.values.birthtDay}
//                              onChange={formik.handleChange}
//                              onBlur={formik.handleBlur} 
                          
//                          />
//                      </div>
//                      { formik.touched.nombre && formik.errors.nombre ? (
//                          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
//                              <p className="font-bold">Hubo un error:</p>
//                              <p>{formik.errors.nombre} </p>
//                          </div>
//                      ) : null }


//                      <div className="mb-4">
//                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">monthBirthtDay</label>
//                          <input 
//                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                              id="monthBirthtDay"
//                              type="date"
//                              placeholder="monthBirthtDay"
//                          />
//                      </div>

//                      <div className="mb-4">
//                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">address</label>
//                          <input 
//                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                              id="address"
//                              type="text"
//                              placeholder="address"   
//                          />
//                      </div>

//                      <div className="mb-4">
//                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Dirección</label>
//                          <input 
//                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                              id="direccion"
//                              type="text"
//                              placeholder="direccion"
                          
//                          />
//                      </div>

//                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">cellPhone</label>
//                          <input
//                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                              id="cellPhone"
//                              type="number"
//                              placeholder="cellPhone"
//                          />
//                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">E-mail</label>
//                          <input
//                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                              id="email"
//                              type="text"
//                              placeholder="email"
//                          />
//                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">password</label>
//                          <input
//                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                              id="password"
//                              type="text"
//                              placeholder="password"
//                          />
//                          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Zona</label>
//                          <input
//                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                              id="zona"
//                              type="text"
//                              placeholder="Zona"
//                          />

//                         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">type</label>
//                          <input
//                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                              id="type"
//                              type="text"
//                              placeholder="type"
//                          />


//                      <input
//                          type="submit"
//                          className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
//                          value="Agregar usuario"
//                      />
//                  </form>
//              </div>
//          </div>
    
//     </div>
//     </div>

          
//         </>
//      );
// }
 
// export default DetalleUsuarios;