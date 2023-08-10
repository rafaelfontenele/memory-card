import { useState, useEffect } from 'react'
import './Portfolio.css'
import { Navbar } from './components/Navbar'
import { Homepage } from './components/Homepage'
import { Projects } from './components/Projects'
import { About } from './components/About'
import { Contact } from './components/Contact'




function Portfolio() {

  const [currentSection, setCurrentSection] = useState('homepage');
  const [currentScrollPos, setCurrentScrollPos] = useState( 0 );
  const [sections, setSections] = useState( {} );
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [currLanguage, setCurrLanguage] = useState('pt-br');


  const updateScrollPosition = () => {
    const newPos = window.scrollY;
    setCurrentScrollPos(prev => {
      return newPos;
    })
  }

  const updateSections = () => {
    const getStartAndFinish = (id) => {
      const element = window.document.querySelector(id)
      const start = element.offsetTop;
      const finish = element.offsetTop + element.offsetHeight;
      return [start, finish];
    }
    setSections( prev => {
      return {
        'homepage': getStartAndFinish('#homepage'),
        'projects': getStartAndFinish('#projects'),
        'about': getStartAndFinish('#about'),
        'contact': getStartAndFinish('#contact'),
      }
    })
  }
  const updateWindowSize = () => {
    const newSize = window.innerWidth;
    setWindowSize(prev => newSize);
  }
  const updateCurrentSection = () => {
    Object.keys(sections).map( section => {
      const pos = sections[section];
      const position = {
        start: pos[0],
        end: pos[1]
      }
      const scrollPos = currentScrollPos + window.innerHeight * 0.5
      if (scrollPos >= position.start && scrollPos <= position.end && currentSection != section) {
          setCurrentSection(section);
      }
    })
  }
  useEffect( () => {

    updateCurrentSection();

  }, [currentScrollPos])

  useEffect(() => {
    window.addEventListener('scroll', updateScrollPosition);
    updateSections();
    updateCurrentSection();

    return () => {
        window.removeEventListener('scroll', updateScrollPosition);
    };
}, []);

    useEffect( () => {
      window.addEventListener('resize', updateWindowSize);

      updateSections();
      updateCurrentSection();

      return () => {
        window.removeEventListener('resize', updateWindowSize);

      }
    }, [windowSize])

  return (

  <div className="wrapper">
    
        <Navbar currLanguage={currLanguage} setCurrLanguage={setCurrLanguage} currentSection={currentSection} sections={sections} setCurrentSection={setCurrentSection}/>

        <Homepage isEnglish={currLanguage == 'en-us'}/>

        <Projects isEnglish={currLanguage == 'en-us'}/>


        <About isEnglish={currLanguage == 'en-us'}/> 

        <Contact isEnglish={currLanguage == 'en-us'}/>


  </div>
      )

}

export default Portfolio
