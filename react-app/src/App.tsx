import Card, { CardBody }from './components/Card';
import List from './components/List';
import Boton from './components/Boton';
import { useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const list: string[] = ['Goku', 'Killua']

  const handleSelect = (elemento: string) => {
    console.log('imprimiendo ' + elemento)
  };

  const handleButtonClick = () => {
    setIsLoading(!isLoading)
  }

  return (
    <>
      <Card>
        <CardBody title='asdf' text='texto'/>
        {list.length ? <List data={ list } onSelect={handleSelect} /> : 'no hay contenido'}       
        <Boton onClick={handleButtonClick} isLoading={isLoading}>
          Hola mundo
        </Boton>
      </Card>
    </>
  );
}

export default App;
