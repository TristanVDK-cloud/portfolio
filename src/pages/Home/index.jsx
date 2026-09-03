import Hero from '../../components/Hero';
import About from '../../components/About';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects'
import Timeline from '../../components/Timeline';
import Contact from '../../components/Contact';

function Home() {
    return (
        <div className='home-page'>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Timeline />
            <Contact />
        </div>
    );
}

export default Home