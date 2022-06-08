import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LogoDecumanus from "../../assets/Decumanus.png"

export const Login = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [contraseña, setContraseña] = useState('')
  const [msjError, setError] = useState(null)

  // Declaramos variable email
  // Se nos declara una funcion setEmail para actualizar el valor de la variable email
  // Ejemplo de uso de setEmail -> setEmail('leoscalise@gmail.com')

  const handleLogin = (event) => {
    event.preventDefault() // Evento que no permite un refresh en la pagina al activar el boton de Login
    if (email === 'leoscalise@decumanus.com' && contraseña === '12345') {
      navigate('/')
      var usuario = email.split('@')[0]
      localStorage.setItem('estaLogueado', 'true')
      localStorage.setItem('usuario', usuario)
    } else {
      setError('Email y/o contraseña inválidos')
    }
  }

  function handleChange(setValue) {  // Funcion que detecta los cambios caracter por caracter en el input y los va asignando a la variable que se ponga como parámetro
    return (event) => {
      setError(null);
      setValue(event.target.value);
    };
  }


  return (
    <div class="Login">
      <div class="Logincontainer flex items-center justify-center bg-white rounded-xl h-80 w-80 lg:h-96 lg:w-96">
        <div class="min-h-full min-w-full flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
          <div class="max-w-md w-full space-y-8">
            <div>
              <img
                class="mx-auto h-16 w-auto"
                src={LogoDecumanus}
                alt="Workflow"
              />
              <h2 class="mt-2 text-center text-3xl font-extrabold text-gray-900">
                DECUMANUS
              </h2>
            </div>
            <form class="mt-8 space-y-6">
              <input type="hidden" name="remember" defaultValue="true" />
              <div class="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" class="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email"
                    value={email}
                    onChange={handleChange(setEmail)}
                  />
                </div>
                <div>
                  <label htmlFor="password" class="sr-only">
                    Contraseña
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Contraseña"
                    value={contraseña}
                    onChange={handleChange(setContraseña)}
                  />
                </div>
              </div>
              {msjError ? // si msjError no es null, que entre sino que no haga nada
                <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                  <span class="block sm:inline"> {msjError} </span>
                </div>
                :
                null
              }
              <div>
                <button
                  type="submit"
                  onClick={handleLogin} //La función se llama de esta forma ya que no está bindeada, de otra forma, React al renderizar, ejecutaría una sola vez la función obviando el onClick
                  class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                    <svg
                      class="h-5 w-5 text-blue-500 group-hover:text-blue-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  Ingresar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
