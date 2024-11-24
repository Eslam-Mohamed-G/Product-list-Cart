import './index.css';
import Cart from './components/Cart';
import Products from './components/Products';
import ShopeCartProvider from './components/context/ShopeCartProvider';

function App() {
  return (
    <ShopeCartProvider> 
    <div className="box-border flex flex-col w-full xl:flex-row xl:p-14 px-5 py-5 bg-[var(--Rose-100)]">
      <div className='box-border xl:w-2/3'>
        <Products/>
      </div>
      <div className='box-border xl:w-1/3'>
        <Cart/>
      </div>
    </div>
    </ShopeCartProvider>
  );
}

export default App;
