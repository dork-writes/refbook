import { useState } from 'react';
import Header from './components/Header';
import RefForm from './components/RefForm/AddForm';
import References from './components/References/References';

function App() {

  const [showForm, setForm] = useState(false);
  const toggleForm = () => setForm(!showForm);

  return (
    <div className={`${ showForm ? 'overflow-hidden h-[100vh]' : ''}`}>
      <RefForm showForm={ showForm } setForm = { toggleForm } />
      <div className={`min-h-screen bg-neutral-700 text-neutral-200`}>
        <Header setForm={ toggleForm } />
        <References />
      </div>
    </div>
  );
}

export default App;
