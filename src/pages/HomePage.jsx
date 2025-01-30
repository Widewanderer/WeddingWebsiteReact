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
            event="16:00 Event 1"
            discription="More information about the wedding schedule will be coming soon. Stay tuned!"
          />
          <Schedule
            event="17:00 Event 2"
            discription="More information about the wedding schedule will be coming soon. Stay tuned!"
          />
        </div>
        <Carousel />
        <div>
          <img
            src={nolanRusHouse}
            alt="Nolan Russian House"
            className="max-w-72 z-index: 1000; absolute bottom-[16vh] left-2 hidden md:block"
          />
          <Title title="Manitoba, Canada" />
          <Schedule
            event="17:00 First Event"
            discription="More information about the wedding schedule will be coming soon. Stay tuned!"
          />
        </div>
      </div>
    );
    }