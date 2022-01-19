import Product from './Product';
import styles from './App.module.css'

function App () {
  return (
    <div className={styles.app}>
      <h1>APPLE Products</h1>
      <p className={styles.error}> Error! </p>
      {/* List and reuse Product component. Pass different props to each */}
      <Product name='iPhone' description='iPhone 11 120GB, black' price={1000} />
      <Product name='MacBook Air' description='14" touch bar, Metal grey' price={1499} />
      <Product name='MacBook Pro' description='16" touch bar, white' price={2000} />
    </div>
  );
}

export default App;
