
import Task2 from './components/Task2'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Props Overview – children demo</h1>

      <Task2
        firstName="Konstantin"
        lastName="Kuzmov"
        title="Software Engineer"
        image={reactLogo}
      >
        This is the "children" prop
      </Task2>
    </div>
  )
}

export default App
