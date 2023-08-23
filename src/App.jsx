import Portfolio from './Portfolio';
import './App.css'

const App = () => {
  const filters = ["All", "Websites", "Flayers", "Business Cards"];

  return (
    <div>
      <Portfolio filters={filters} />
    </div>
  );
}

export default App;
