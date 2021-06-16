import React from 'react';
// import Form from './form/Form';
import "./App.css";
import  FormWithreduxForm  from './form/FormWithreduxForm';
import FormWithStore from './form/FormWithStore';

function App() {
  return (
    <div className="App">
    {/* <Form /> */}
    {/* <FormWithStore /> */}
    <FormWithreduxForm />
    </div>
  )
}

export default App
