import Hero from '../components/Hero';
import Title from '../components/Title';
import WeddingPartyCard from '../components/WeddingPartyCard';

export default function WeddingPartyPage() {
    return (
      <div>
        <Hero image="/heroPics/Pic2.png" title="Wedding Party" />
        <Title title="Wedding Party" />
        <WeddingPartyCard
          image="/galleryPics/AnimatedFiona.png"
          title="Test Image"
          text="Here is a little test of the wedding party cards component"
        />
        <WeddingPartyCard
          image="/galleryPics/AnimatedFiona.png"
          title="Test Image 2"
          text="Here is a little test of the wedding party cards component to see how it behaves with multiple cards"
        />
      </div>
    );
    }
    