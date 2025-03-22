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
            event="Friday Hangout Time"
            discription="We will have a time and place were we will plan to be friday before the wedding. Anyone who wants to will be welcome to swing by and socialize Will update this page when we decide the details"
          />
          <Schedule
            event="Saterday Wedding Ceremony"
            discription="The wedding ceremony will be at the Socastee United Methodist Church located at the unfortunately named 5575 Dick Pond Road, Myrtle Beach, SC . This church is on special significance as Fiona's parents, grandparents, and great-grandparents where all married here."
          />
          <Schedule
            event="18:30 Cocktail Hour"
            discription="Cocktail hour and reception will take place at Outside Alive Farms 6791 SC-707, Myrtle Beach, SC 29588. The farm was previously part of the larger McCormick property until Fiona's grandmother eventually sold it to Jason. It was very important to her that the new owner would be someone who truely cared for the land and Jason was the perfect fit. "
          />
          <Schedule 
            event="18:00 Grand Entrance Reception" 
            discription="Here come the newly weds!" 
          />
          <Schedule 
            event="18:15 Reception Dinner" 
            discription="Eat, Drink, and be Merry!" 
          />
           <Schedule 
            event="21:50 The Grand Send Off" 
            discription="Wish us well as we sail off into the distance! Music needs to be off at 22:00 so party will be ending." 
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