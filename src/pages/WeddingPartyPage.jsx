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
            title="Bridesmaid 1"
            text="Here is a little test of the wedding party cards component"
          />
          <WeddingPartyCard
            image="/bridalPartyPics/AnimatedFiona.png"
            title="Bridesmaid 2"
            text="Here is a little test of the wedding party cards component to see how it behaves with multiple cards"
          />
        </div>
        <Title title="The Groomsmen" />
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-4">
          <WeddingPartyCard
            image="/groomsmenPics/AnimatedWanderer.png"
            title="GroomsMan 1"
            text="Here we have a wild groomsman in his natural habitat.He’s ready to jump into action the moment he’s needed, loyal as they come. Just like a pack animal, he’s here to support the big guy, the groom, standing by his side for the most important day of his life. Absolutely magnificent! "
          />
        </div>
      </div>
    );
    }
    