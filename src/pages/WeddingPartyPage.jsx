import Hero from '../components/Hero';
import WeddingPartyCard from '../components/WeddingPartyCard';

export default function WeddingPartyPage() {
    return (
      <div>
        <Hero image="/heroPics/Pic2.png" title="Wedding Party" />
        <WeddingPartyCard
          image="/galleryPics/AnimatedFiona.png"
          title="Test Image"
          text="Here is a little test of the wedding party cards component"
        />
      </div>
    );
    }
    