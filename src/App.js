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
    </div>
  );
}

export default App;
