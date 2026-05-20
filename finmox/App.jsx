import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import './styles.css'; // Keep your existing CSS completely intact!

const App = () => {
    return (
        <LanguageProvider>
            <Header />
            
            <main>
                {/* Future Components will go here */}
                {/* <Hero /> */}
                {/* <Metrics /> */}
                {/* <About /> */}
                {/* <Services /> */}
                {/* <Contact /> */}
            </main>
            
        </LanguageProvider>
    );
};

export default App;