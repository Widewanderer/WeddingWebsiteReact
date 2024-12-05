import Hero from '../components/Hero';
import Schedule from '../components/schedule';
import Title from '../components/Title';
import Carousel from '../components/Carousel';
import nolanCat from '../nolanPics/nolanCat.svg'
import nolanTree from '../nolanPics/nolanTree.svg'
import nolanRusHouse from '../nolanPics/nolanRusHouse.svg'


export default function HomePage() {
    return (
      <div>
        <Hero image="/heroPics/Pic7.png" title="Slava & Fiona" />
        <div>
          <img
            src={nolanCat}
            alt="Nolan Cat"
            className="max-w-72 z-index: 1000; absolute top-[60vh] right-0 hidden md:block"
          />
          <img
            src={nolanTree}
            alt="Nolan Tree"
            className="max-w-72 z-index: 1000; absolute top-[80vh] right-15 hidden md:block"
          />
          <Title title="Socastee, South Carolina" />
          <Schedule
            event="21:00 Test Event"
            discription="Test run of schedule component to see if it works. Now I will extend the text to see how it looks with more text."
          />
          <Schedule
            event="22:00 Test Event 2"
            discription="Test run of schedule component to see how it looks with multiple scheduled events."
          />
        </div>
        <Carousel />
        <div>
          <img
            src={nolanRusHouse}
            alt="Nolan Russian House"
            className="max-w-72 z-index: 1000; absolute bottom-[18vh] left-2 hidden md:block"
          />
          <Title title="Dauphin, Manitoba" />
          <Schedule
            event="17:00 First Event"
            discription="More information about the first event will be coming soon. Stay tuned!"
          />
        </div>
      </div>
    );
    }