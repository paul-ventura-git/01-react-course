import Baseball from './components/Baseball';
import Car from './components/Car'
import Football from './components/Football';
import Garage from './components/Garage'
import Goal from './components/Goal'
import Kitchen from './components/Kitchen';

function App() {
  const my_cookware = ['Cutting board','Can opener','Measuring spoons'];
  console.log(my_cookware.length);
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Car my_xyz_property="red"></Car>
      <Garage sizeOfGarage="big"></Garage>
      <Football></Football>
      <Baseball></Baseball>
      <Goal isGoal="false"></Goal>
      <Kitchen cookware={my_cookware}></Kitchen>
    </div>
  );
}

export default App;
