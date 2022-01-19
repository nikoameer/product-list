import './App.css';
import Product from './Product';

function App () {
  return (
    <div className="App">
      {/* List and reuse Product component */}
      <Product name='iPhone' description='iPhone 11 120GB, black' price={1000} />
      <Product name='MacBook Air' description='14" touch bar, Metal grey' price={1499} />
      <Product name='MacBook Pro' description='16" touch bar, white' price={2000} />
    </div>
  );
}

export default App;
