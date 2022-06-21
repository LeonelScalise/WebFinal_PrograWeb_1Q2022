
// Obras por defecto. Se setean como clave en LocalStorage al inicializar la aplicación.
const obrasPorDefecto = [
    {'id': 1,
     'titulo': 'Obra en CABA',
     'descripcion': 'Prueba de obra 1',
     'imagen': 'https://www.telam.com.ar/thumbs/bluesteel/advf/imagenes/2019/08/5d52dce05cb0c_900.jpg',
     'fechaDeFin': '2022-08-13'},
     {'id': 2,
     'titulo': 'Obra en Mataderos',
     'descripcion': 'Prueba de obra 2',
     'imagen': 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/VTVLSQKMGZC3JA2RR7QEMQLTZE.jpg',
     'fechaDeFin': '2022-09-13'}
  ]

//

// Setea las obras por defecto como obras de la aplicacion si no esta la clave 'obras' registrada en LocalStorage
function inicializarObrasSiNoEstaLaClaveEnLocalStorage() {
    if (!localStorage.getItem('obras'))  {
        setearComoObras(obrasPorDefecto)
        localStorage.setItem('IdNuevaObra', 3)
      }
}

// Retorna las obras parseadas como JSON
function obrasAlmacenadas() {
    return JSON.parse(localStorage.getItem('obras'))
}

// Retorna el ID para crear la siguiente obra.
function idDisponibleParaSiguienteObra() {
    return parseInt(localStorage.getItem('IdNuevaObra'), 10)
}

function borrarObraQueTieneID(unIdDeObraABorrar) {
    // De las obras almacenadas, filtrar las obras que tengan ID distinto al ID de la obra a borrar. Es como un forEach
    // Despues, lo guardamos como nueva lista de obras sin la obra que se borro.
    const obrasFiltradas = obrasAlmacenadas().filter(obra => obra.id !== unIdDeObraABorrar) 
    
    setearComoObras(obrasFiltradas)
}

// Se crea una obra JSON con los atributos/parametros recibidos.
// Agrega la obra creada a la lista de obras que ya tenia almacenada.
// Guarda como obras la lista con la nueva obra creada.
function crearNuevaObraCon(unTitulo, unaDescripcion, unaImagen, unaFechaDeFin) {
    const nuevaObra = {
        'id': idDisponibleParaSiguienteObra(),
        'titulo': unTitulo,
        'descripcion': unaDescripcion,
        'imagen': unaImagen,
        'fechaDeFin': unaFechaDeFin
    }
    const obrasGuardadas = obrasAlmacenadas()
    obrasGuardadas.push(nuevaObra)
    localStorage.setItem('IdNuevaObra', idDisponibleParaSiguienteObra() + 1)
    setearComoObras(obrasGuardadas)
}

// Parsea a String las obras recibidas y las guarda.
function setearComoObras(unaListaDeObras) {
    localStorage.setItem('obras', JSON.stringify(unaListaDeObras))
}

export {inicializarObrasSiNoEstaLaClaveEnLocalStorage, obrasAlmacenadas, borrarObraQueTieneID, crearNuevaObraCon}