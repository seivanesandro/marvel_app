import Hero from './components/hero/Hero';
//import Modal from './components/modal/Modal';
import MarvelNavBar from './components/navBar/NavBar';
import MarvelCharacters from './pages/MarvelCharacters';

function App() {
    return (
        <div className="App">
            <MarvelNavBar title="Marvel Hero" />
            <header>
                <Hero />
            </header>
            <main>
                <MarvelCharacters />
                {/* <Modal /> */}
            </main>
        </div>
    );
}

export default App;
