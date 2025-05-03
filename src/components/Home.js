import React from 'react'
import Intro from './Intro';
import FeaturedLists from './FeaturedLists';

function Home() {
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const scrollTo = params.get("scrollTo");
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <main className='main-container'>
      <Intro />
    </main>
  )
}

export default Home