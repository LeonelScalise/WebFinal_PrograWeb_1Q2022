import React from "react";

export function Footer() {
  return (
    <footer class="mt-20 bottom-0 px-2 py-4 w-full shadow bg-gray-800 font-sans">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a href="/" class="flex items-center mb-4 sm:mb-0">
          <span class="self-center text-xl font-semibold text-white">
            Grupo DECUMANUS
          </span>
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-400 sm:mb-0">
          <li>
            <a href="/about" class="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="/" class="mr-4 hover:underline md:mr-6">
              Política de privacidad
            </a>
          </li>
          <li>
            <a href="/contacto" class="hover:underline">
              Contacto
            </a>
          </li>
        </ul>
      </div>
      <hr class="my-4 border-gray-200 sm:mx-auto border-gray-700" />
      <span class="block text-sm sm:text-center text-gray-400">
        © 2022{" "}
        <a href="/" class="hover:underline">
          Decumanus™
        </a>
        . Todos los derechos reservados.
      </span>
    </footer>
  );
}
