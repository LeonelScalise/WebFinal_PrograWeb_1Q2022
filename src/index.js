import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Test1 = (<div>
  <h1>Decumanus</h1>
  <p>Hola React</p>
</div>
);


function Contenido(props) {
  return (
    <div>
      <h1>{props.titulo}</h1>
      <p>{props.contenido}</p>
    </div>
);
}

ReactDOM.render(
  <Contenido titulo="Decumanus atr" contenido="Hola React1" />,
  document.getElementById('root')
);

