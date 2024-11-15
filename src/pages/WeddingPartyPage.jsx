import Hero from '../components/Hero';
import Title from '../components/Title';
import WeddingPartyCard from '../components/WeddingPartyCard';

export default function WeddingPartyPage() {
    return (
      <div>
        <Hero image="/heroPics/Pic2.png" title="Wedding Party" />
        <Title title="The Bridal Party" />
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-4">
          <WeddingPartyCard
            image="/bridalPartyPics/AnimatedFiona.png"
            title="Maid of Honor"
            text="Here is a little test of the wedding party cards component"
          />
          <WeddingPartyCard
            image="/bridalPartyPics/AnimatedFiona.png"
            title="Bridesmaid 1"
            text="Here is a little test of the wedding party cards component to see how it behaves with multiple cards"
          />
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-4">
          <WeddingPartyCard
            image="/bridalPartyPics/AnimatedFiona.png"
            title=""
            text=""
          />
          <WeddingPartyCard
            image="/bridalPartyPics/AnimatedFiona.png"
            title=""
            text=""
          />
        </div>
        {/* Groomsmen Section */}
        <Title title="The Groomsmen" />
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-4">
          <WeddingPartyCard
            name="Andrew Domingoes"
            image="/groomsmenPics/Andrew.png"
            title="Andrew Domingoes"
            text="Going down to Costa Rica and trying to coordinate moving across the country without a cell phone"
          />
          <WeddingPartyCard
            name="Lebraun Premo"
            image="../groomsmenPics/AnimatedWanderer.png"
            title="Groomsman"
            text=""
          />
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-4">
          <WeddingPartyCard
            name="Peyton Looper"
            image="../groomsmenPics/Peyton.png"
            title="Groomsman"
            text=""
          />
          <WeddingPartyCard
            name="Maxim Yulis"
            image="../groomsmenPics/Maxim.jpg"
            title="Groomsman"
            text="Slava emberassing me on the streets of Tampere (another quiet Finnish city) by loudly singing a Swedish metal song. What a way to get through the Finnish winter!"
          />
        </div>
      </div>
    );
    }
    