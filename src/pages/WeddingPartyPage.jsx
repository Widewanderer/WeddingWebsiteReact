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
            name="Faith Henthorn"
            image="/bridalPartyPics/AnimatedFiona.png"
            title="Maid of Honor"
            text="Here is a little test of the wedding party cards component"
          />
          <WeddingPartyCard
            name="Emily Henthorn"
            image="/bridalPartyPics/AnimatedFiona.png"
            title="Bridesmaid 1"
            text="Here is a little test of the wedding party cards component to see how it behaves with multiple cards"
          />
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-4">
          <WeddingPartyCard
            name="Kate Shackelford"
            image="/bridalPartyPics/AnimatedFiona.png"
            title="Bridesmaid"
            text=""
          />
          <WeddingPartyCard
            name="Angelina Khomenok"
            image="/bridalPartyPics/AnimatedFiona.png"
            title="Bridesmaid"
            text=""
          />
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-4">
          <WeddingPartyCard
            name="Michael Stewart "
            image="../groomsmenPics/AnimatedWanderer.png"
            title="Bridesman"
            text=""
          />
        </div>
        {/* Groomsmen Section */}
        <Title title="The Groomsmen" />
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-4">
          <WeddingPartyCard
            name="Andrew Domingoes"
            image="/groomsmenPics/Andrew.png"
            title="Best Man"
            text="Getting caught in a torrential downpour in Costa Rica on top of a volcano. With nowhere to go, we had to keep hiking and didn't forget to take photos."
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
            text="Deciding to walk to get some ice cream after trying out a new Uzbek restaurant because it “wasn’t that far.” I don’t know if I would have made it if there hadn’t been ice cream at the end of the walk. "
          />
          <WeddingPartyCard
            name="Maxim Yulis"
            image="../groomsmenPics/Maxim.jpg"
            title="Groomsman"
            text="Slava emberassing me on the streets of Tampere (another quiet Finnish city) by loudly singing a Swedish metal song. What a way to get through the Finnish winter!"
          />
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-4">
          <WeddingPartyCard
            name="Anya & Danny Garcia"
            image="/groomsmenPics/AnyaDanny.jpg"
            title="Groomspeople"
            text="One of my favorite memories together is when Slava, Fiona, Danny, and me we talked on Zoom in video call. I have never felt talking to people on video call like we are together in the same room."
          />
        </div>
        <Title title="Lead Artist" />
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-4">
          <WeddingPartyCard
            name="Nolan Trotz"
            image="/otherPics/NolanTrotz.jpg"
            title=""
            text="UUmmm.... coffee. Ya its good"
          />
        </div>
      </div>
    );
    }
    