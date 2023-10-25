import { useState } from 'react'
import './App.css'
import RouterComponent from './Router.jsx';

const App = () => {
  const [items, setItems] = useState({});
  return (
    <>
      <RouterComponent items={items} setItems={setItems} />
    </>
  )
}

export default App;
