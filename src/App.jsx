import Baseball from './components/Baseball.jsx';
import Car from './components/Car.jsx'
import Football from './components/Football.jsx';
import Garage from './components/Garage.jsx'
import Goal from './components/Goal.jsx'
import Kitchen from './components/Kitchen.jsx';
import Garden from './components/Garden.jsx'
import Library from './components/Library.jsx';
import MyForm from './components/MyForm.jsx';
import MyFormManyFields from './components/MyFormManyFields.jsx';
import MyFormTextArea from './components/MyFormTextArea.jsx';
import MyFormSelect from './components/MyFormSelect.jsx';
import Timer from './components/Timer.jsx';
import Counter from './components/Counter.jsx';
import ShowData from './components/ShowData.jsx';
import ShowDataCharacters from './components/ShowDataCharacters.jsx';
import ShowDataInCards from './components/ShowDataInCards.jsx'
import ShowDataInTable from './components/ShowDataInTable.jsx';

function App() {
  const my_cookware = ['Cutting board','Can opener','Measuring spoons', 'Fork'];
  //const my_cookware2 = [];
  return (
    <div className="App container">
      <h1 style={{textAlign:"center"}}>React course summary (Essentials)</h1>

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

      <h2 style={{backgroundColor:'lightBlue'}}>8. useState with other form elements...</h2>
      <MyFormSelect></MyFormSelect>
      <MyFormTextArea></MyFormTextArea>
      
      <h2 style={{backgroundColor:'plum'}}>9. useEffect: on initial render</h2>
      <Timer></Timer>

      <h2 style={{backgroundColor:'plum'}}>10. useEffect: dependent on a variable</h2>
      <Counter></Counter>

      <h2 style={{backgroundColor:'plum'}}>11. useEffect: api calling</h2>
      <ShowData></ShowData>
      <ShowDataCharacters></ShowDataCharacters>

      <h2 style={{backgroundColor:'plum'}}>12. Rendering API data</h2>
      <ShowDataInTable></ShowDataInTable>
      <ShowDataInCards></ShowDataInCards>

    </div>
  );
}

export default App;
