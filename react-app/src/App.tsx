import Card, { CardBody }from './components/Card';
import List from './components/List';

function App() {
  const list = ['Goku', 'Midoriya', 'Luffy', 'Killua']

  const handleSelect = (elemento: string) => {
    console.log('imprimiendo ' + elemento)
  };

  return (
    <>
      <Card>
        <CardBody title='asdf' text='texto'/>
        <List data={ list } onSelect={handleSelect} />
      </Card>
    </>
  );
}

export default App;
