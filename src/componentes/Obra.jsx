
export const Obra = ({id, titulo, descripcion, imagen}) => {
    return (
        <div className='flex gap-48 justify-between border-2 border-gray-400 my-3 mx-auto w-9/12 p-4'>
            <img src={imagen} className="w-1/4 h-64 border-2 border-black" alt='imagen-de-una-obra.png'/>
            <div className="border-2 border-black w-full p-2">
                <h1 className="text-xl font-bold">{titulo}</h1>
                <p className="mt-5">{descripcion}</p>
            </div>
      </div>
        
    )
}