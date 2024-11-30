import Baseball from './components/Baseball';
import Car from './components/Car'
import Football from './components/Football';
import Garage from './components/Garage'
import Goal from './components/Goal'
import Kitchen from './components/Kitchen';
import Garden from './components/Garden'
import Library from './components/Library';
import MyForm from './components/MyForm';
import MyFormManyFields from './components/MyFormManyFields';
import MyFormTextArea from './components/MyFormTextArea';
import MyFormSelect from './components/MyFormSelect';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

function App() {
  const my_cookware = ['Cutting board','Can opener','Measuring spoons', 'Fork'];
  //const my_cookware2 = [];
  return (
    <div className="App">
      <h1>React course summary</h1>

      <h2 style={{backgroundColor:'lightBlue'}}>1. Props</h2>
      <Car carColor="green" brand="Lamborghini"></Car>
      <Garage sizeOfGarage="small"></Garage>

      <h2 style={{backgroundColor:'lightBlue'}}>2. Props with events</h2>
      <Football></Football>
      <Baseball></Baseball>

      <h2 style={{backgroundColor:'lightBlue'}}>3. Props with booleans</h2>
      <Goal isGoal={false}></Goal>   
      <Garden trees={false}></Garden>

      <h2 style={{backgroundColor:'lightBlue'}}>4. Props with arrays</h2>   
      <Kitchen cookware={my_cookware}></Kitchen>

      <h2 style={{backgroundColor:'lightBlue'}}>5. Props with "Javascript objects"</h2> 
      <Library></Library>

      <h2 style={{backgroundColor:'lightBlue'}}>6. useState</h2>
      <MyForm></MyForm>

      <h2 style={{backgroundColor:'lightBlue'}}>7. useState with "Javascript objects"</h2>
      <MyFormManyFields></MyFormManyFields>

      <h2 style={{backgroundColor:'lightBlue'}}>8. useState with other form elements</h2>
      <MyFormSelect></MyFormSelect>
      <MyFormTextArea></MyFormTextArea>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
