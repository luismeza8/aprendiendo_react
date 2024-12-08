import Card, { CardBody }from './components/Card';
import List from './components/List';

function App() {
  const list: string[] = ['Goku', 'Killua']

  const handleSelect = (elemento: string) => {
    console.log('imprimiendo ' + elemento)
  };

  return (
    <>
      <Card>
        <CardBody title='asdf' text='texto'/>
        {list.length ? <List data={ list } onSelect={handleSelect} /> : 'no hay contenido'}       
      </Card>
    </>
  );
}

export default App;
