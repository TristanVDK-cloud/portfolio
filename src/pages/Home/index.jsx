import Hero from '../../components/Hero';
import About from '../../components/About';
import Skills from '../../components/Skills';

function Home() {
    return (
        <div className='home-page'>
            <Hero />
            <About />
            <Skills />
        </div>
    );
}

export default Home