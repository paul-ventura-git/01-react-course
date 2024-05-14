import Car from './components/Car'
import Garage from './components/Garage'

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Car my_xyz_property="red"></Car>
      <Garage sizeOfGarage="big"></Garage>
    </div>
  );
}

export default App;
