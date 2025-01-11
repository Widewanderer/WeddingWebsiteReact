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
            image="/bridalPartyPics/Faith.jpg"
            title="Maid of Honor"
            text="I think the memories that I cherish the most are our little hikes. Where we can talk and laugh for hours without ever growing old of the conversation. Well, as long as we aren't having to dodge falling trees that is."
          />
          <WeddingPartyCard
            name="Emily Henthorn"
            image="/bridalPartyPics/AnimatedFiona.png"
            title="Bridesmaid"
            text="Here is a little test of the wedding party cards component to see how it behaves with multiple cards"
          />
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-4">
          <WeddingPartyCard
            name="Kate Shackelford"
            image="/bridalPartyPics/Kate.JPG"
            title="Bridesmaid"
            text="Gallivanting around Eastern Europe with Fiona in 2023. All I have to recount is honey beer, hotel room break ins, really good food, and “America, come! China, stay!"
          />
          <WeddingPartyCard
            name="Angelina Khomenok"
            image="/bridalPartyPics/Lina.jpg"
            title="Bridesmaid"
            text="Seeing Fiona lounging in the backyard of the Eastern European Cultures House at Sewanee on a picnic blanket holding a vintage pink umbrella from the rays of the sun. She looked so calming and charming at the moment that all of my worries and concerns flown away at the sight of my dear friend. "
          />
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-4">
          <WeddingPartyCard
            name="Michael Stewart "
            image="../bridalParty/Michael.jpg"
            title="Bridesman"
            text="Fiona’s parents came to visit Sewanee and she invited me to get dinner with her parents by where they were staying in Manchester. We stumbled across Bites of Europe, which featured a very small market of assorted German products. We discussed many things, including which was the croissant story and Fiona’s sign. "
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
            text="From you performing the handfasting ceremony at my wedding, to being the first person to meet Aurelia, or getting a sneak peek at Fiona's engagement ring—these moments have all been such meaningful parts of my story, and I’m so thankful to have shared them with you."
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
    