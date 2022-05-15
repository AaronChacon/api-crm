import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const VerCliente = () => {
  const [cliente, setCliente] = useState({});
  const [cargando, setCargando] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const obtenerClienteAPI = async () => {
      try {
        const url = `http://localhost:4000/clientes/${id}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setCliente(resultado);
      } catch (error) {
        console.log(error);
      }
      setTimeout(() => {
        setCargando(!cargando);
      }, 2000);
    };

    obtenerClienteAPI();
  }, []);

  const { nombre, email, empresa, telefono, notas } = cliente;

  return (
    <div>
      {cargando ? (
        <Spinner />
      ) : Object.keys(cliente).length === 0 ? (
        <p>No hay Resultados</p>
      ) : (
        <>
          <h1 className="font-black text-4xl text-blue-900 ">
            Ver Cliente: {nombre}
          </h1>
          <p className="mt-3 mb-5">Informacion del cliente</p>

          {nombre && (
            <p className="text-3xl text-gray-700">
              <span className="text-gray-700 uppercase font-bold">
                {" "}
                Cliente:{" "}
              </span>
              {nombre}
            </p>
          )}
          {empresa && (
            <p className="text-2xl text-gray-600 mt-4">
              <span className="text-gray-700 uppercase font-bold">
                {" "}
                Empresa:{" "}
              </span>
              {empresa}
            </p>
          )}
          {email && (
            <p className="text-2xl text-gray-600 mt-4">
              <span className="text-gray-700 uppercase font-bold">
                {" "}
                Email:{" "}
              </span>
              {email}
            </p>
          )}
          {telefono && (
            <p className="text-2xl text-gray-600 mt-4">
              <span className="text-gray-700 uppercase font-bold">
                {" "}
                telefono:{" "}
              </span>
              {telefono}
            </p>
          )}
          {notas && (
            <p className="text-2xl text-gray-600 mt-4">
              <span className="text-gray-700 uppercase font-bold">
                {" "}
                notas:{" "}
              </span>
              {notas}
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default VerCliente;
