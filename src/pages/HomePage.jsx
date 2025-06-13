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
            date="June 13, 2025"
            event="Friday Hangout Time"
            time="15:30-17:30"
            location="Socastee United Methodist Old Church"
            address="5575 Dick Pond Road, Myrtle Beach, SC 29588"
            discription="All are welcome to drop by and spend some time with us before the big day! The location has been moved inside due to the rain. Drop by anytime between 15:30 and 17:30. We’ll be at the 1875 Church. It is the old small church in front of the cemetery next to the Church where the ceremony will be held tomorrow."
          />
          <Schedule
            date="June 14, 2025"
            event="Ceremony"
            time="14:30 pm"
            location="Socastee United Methodist Church"
            address="5575 Dick Pond Road, Myrtle Beach, SC 29588"
            discription="This church holds a special place in our hearts—it's where Fiona’s parents and grandparents were married, making it even more meaningful as we begin our own journey together."
          />
          <Schedule
            event="Cocktail Hour"
            time="16:30"
            location="Outside Alive Farms"
            address="6791 SC-707, Myrtle Beach, SC 29588"
            discription="This property has a rich family history. Originally part of the larger McCormick property, it was eventually sold by Fiona’s grandmother and passed into the care of Jason Burzler. It was very important to her that the property would be cared for by someone who truly appreciated the land, and Jason has been the perfect steward of it ever since. We’re thrilled to celebrate our cocktail hour and reception here, where generations of memories have been made."
          />
          <Schedule
            event="Reception"
            location="Outside Alive Farms"
            address="6791 SC-707, Myrtle Beach, SC 29588"
            time="18:00"
            discription="Eat, Drink, and be Merry!"
          />
          <Schedule
            event="The Grand Farewell"
            time="21:50"
            discription="Wish us well as we start this new chapter! Please note that music will end at 10:00 PM, and the party will come to a close shortly after."
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
            event="Coming Soon"
            discription="More information about the wedding schedule will be coming soon. Stay tuned!"
          />
        </div>
      </div>
    );
    }