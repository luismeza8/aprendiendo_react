import Card, { CardBody }from './components/Card';
import List from './components/List';

function App() {
  const list = ['Goku', 'Midoriya', 'Luffy', 'Killua']
  return (
    <>
      <Card>
        <CardBody title='asdf' text='texto'/>
        <List data={ list } />
      </Card>
    </>
  );
}

export default App;
