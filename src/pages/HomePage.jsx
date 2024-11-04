import Hero from '../components/Hero';
import Schedule from '../components/schedule';
import Title from '../components/Title';
import Carousel from '../components/Carousel';



export default function HomePage() {
    return (
      <div>
        <Hero image="/heroPics/Pic7.png" title="Slava & Fiona" />
        <Title
        title="Socastee, South Carolina"
        />
        <Schedule
          event="21:00 Test Event"
          discription="Test run of schedule component to see if it works. Now I will extend the text to see how it looks with more text."
        />
        <Schedule
          event="22:00 Test Event 2"
          discription="Test run of schedule component to see how it looks with multiple scheduled events."
        />
        <Carousel />
        <Title 
        title="Dauphin, Manitoba"
        />
        <Schedule
        event="17:00 First Event"
        discription="More information about the first event will be coming soon. Stay tuned!"
        />
      </div>
    );
    }