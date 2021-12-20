import React from 'react';
import { NavLink } from 'react-router-dom';




const Sidebar = () => {
       return( 
        <div className="md:w-2/6 xl:w-1/5 bg-green-800">
            

            {/* //se coloca imagen de logo */}
            <div className="p-6">
                <p className="uppercase text-white text-2xl tracking-wide text-center font-bold">MADRESELVA</p>

                <p className="mt-3 text-green-600">Productos Cosmeticos para el Cuidado de la Piel</p>

                <nav className="mt-10">
                    <NavLink className="p-1 text-black-400 block hover:bg-white-500 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to="/">Login</NavLink>
                    <NavLink className="p-1 text-black-400 block hover:bg-white-500 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to="/ordenes">Ordenes</NavLink>
                    <NavLink className="p-1 text-black-400 block hover:bg-white-500 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to="/productos">Productos</NavLink>
                    <NavLink className="p-1 text-black-400 block hover:bg-white-500 hover:text-gray-900" activeClassName="text-yellow-500" exact="true" to="/usuarios">Usuarios</NavLink>
                </nav>
            </div>
        </div>

     );
}
 
export default Sidebar;