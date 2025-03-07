import Card from './components/card/Card';
import Hero from './components/hero/Hero';
import MarvelNavBar from './components/navBar/NavBar';

function App() {
    return (
        <div className="App">
            <MarvelNavBar title="Marvel Hero" />
            <header>
                <Hero />
            </header>
            <main>
                <h1>Marvel App</h1>

                <div
                    id="section-cards"
                    className="section-cards"
                >
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </main>
        </div>
    );
}

export default App;
