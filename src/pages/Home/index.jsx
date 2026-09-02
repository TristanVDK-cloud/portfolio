import Hero from '../../components/Hero';
import About from '../../components/About';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects'
import Timeline from '../../components/Timeline';

function Home() {
    return (
        <div className='home-page'>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Timeline />
        </div>
    );
}

export default Home