import { useRef, useState } from 'react';
import Hero from './components/hero/Hero';
import MarvelNavBar from './components/navBar/NavBar';
import MarvelCharacters from './pages/MarvelCharacters';

function App() {
    const [search, setSearch] = useState('');
    const mainRef = useRef(null);

    const handleSearchClick = () => {
        if (mainRef.current) {
            mainRef.current.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };
    return (
        <div className="App">
            <MarvelNavBar title="Marvel Hero" />
            <header>
                <Hero
                    title="Marvel Hero´s"
                    welcomeparagraph="Whith great power comes great responsibility"
                    titlebtn="search for Hero's"
                    setSearch={setSearch}
                    handleSearchClick={
                        handleSearchClick
                    }
                />
            </header>
            <main>
                <MarvelCharacters
                    search={search}
                    setSearch={setSearch}
                    handleSearchClick={
                        handleSearchClick
                    }
                    mainRef={mainRef}
                />
            </main>
        </div>
    );
}

export default App;
