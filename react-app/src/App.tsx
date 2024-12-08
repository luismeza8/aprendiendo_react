import Card, { CardBody }from './components/Card';
import List from './components/List';
import Boton from './components/Boton';
import { useState } from 'react';

function App() {
  const [listMinion, setListMinion] = useState(['Goku', 'Killua']);

  const handleButtonAgregarClick = () => {
    setListMinion([...listMinion, 'Minion'])
  }

  const handleButtonEliminarClick = () => {
    setListMinion(listMinion.slice(0, -1))
  }

  const handleSelect = (elemento: string) => {
    console.log('imprimiendo ' + elemento)
  };

  return (
    <>
      <Card>
        <CardBody title='Minions' />
        {listMinion.length ? <List data={ listMinion } onSelect={handleSelect} /> : 'no hay contenido'}       
        <Boton onClick={handleButtonAgregarClick}>
          Agregar
        </Boton>
        <Boton onClick={handleButtonEliminarClick}>
          Eliminar
        </Boton>
      </Card>
    </>
  );
}

export default App;
