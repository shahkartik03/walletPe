import { TransactionProvider } from './context/TransactionContext';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  return (
    <TransactionProvider>
      <div className="flex flex-col justify-between App">
        <Header />
        <Main />
        <Footer />
      </div>
    </TransactionProvider>
  )
}

export default App;
