import './App.css';
import Menu from './Menu';
import Body from './Body';

function App() {
   return (
      <div className="App">
         <header className="App-header">
            <h1 className="App-header-text">Hello from our chat</h1>
            <Menu />
         </header>
         {/* <body className="App-body"></body> */}
         <Body />
      </div>
   );
}

export default App;