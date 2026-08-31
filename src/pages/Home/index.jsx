import Hero from '../../components/Hero';
import About from '../../components/About';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects'

function Home() {
    return (
        <div className='home-page'>
            <Hero />
            <About />
            <Skills />
            <Projects />
        </div>
    );
}

export default Home