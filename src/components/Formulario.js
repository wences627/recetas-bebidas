import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../context/CategoriasContext';

const Formulario = () => {

    const {categorias} = useContext(CategoriasContext)

    const [busqueda, setBusqueda] = useState({
        nombre:'',
        categoria:''
    })

    //Funcion para leer los contenidos
    const obtenerDatosReceta = (e) =>{
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form
            className='col-12'
        >
            <fieldset className='text-center'>
                <legend>
                    Busca Bebidas por Categoria o Ingredientes
                </legend>
            </fieldset>

            <div className="row mt-4">
                <div className='col-md-4'>
                    <input 
                        type='text'
                        className='form-control'
                        name='nombre'
                        placeholder='Buscar por Ingrediente'    
                        onChange={obtenerDatosReceta}
                    />
                        
                </div>

                <div className="col-md-4">
                    <select 
                        className='form-control'
                        name='categoria' 
                        onChange={obtenerDatosReceta}
                    >
                        <option value="">--Selecciona Categoria--</option>
                        {categorias.map( categoria =>(
                            <option 
                                key={categoria.strCategory}
                                value={categoria.strCategory}
                            >
                                {categoria.strCategory}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="col-md-4">
                    <input
                        type='submit'
                        className='btn btn-primary btn-block'
                        value='Buscar Bebidas'
                    />
                </div>
            </div>
        </form>
    );
};

export default Formulario;