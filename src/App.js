import Hero from './components/hero/Hero';
import Loading from './components/load/Loading';
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
                <Loading />
                <MarvelCharacters />
            </main>
        </div>
    );
}

export default App;
