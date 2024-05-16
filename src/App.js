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
  const my_cookware = ['Cutting board','Can opener','Measuring spoons'];
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Car my_xyz_property="red"></Car>
      <Garage sizeOfGarage="big"></Garage>
      <Football></Football>
      <Baseball></Baseball>
      <Goal isGoal="false"></Goal>
      <Kitchen cookware={my_cookware}></Kitchen>
      <Garden trees={false}></Garden>
      <Library></Library>
      <MyForm></MyForm>
      <MyFormManyFields></MyFormManyFields>
      <MyFormTextArea></MyFormTextArea>
      <MyFormSelect></MyFormSelect>
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
