import logo from './logo.svg';
import './App.css';
import TestConnectionForm from './components/Form/TestConnectionForm';
import Carousel from './components/Carousel';
import Header from './components/Navigation/Header';

function App() {
    return (
        <div className="">
            <Header />
            {/* <Carousel /> */}
            <TestConnectionForm />
        </div>
    );
}

export default App;
