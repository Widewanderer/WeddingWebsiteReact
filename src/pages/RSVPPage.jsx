import Hero from '../components/Hero';
import RSVPForm from '../components/Form';
import nolanTree from '../nolanPics/nolanTree.svg'
import nolanCrab from '../nolanPics/nolanCrab.svg'


export default function RSVPPage() {
    return (
      <div>
        <Hero image="/heroPics/Pic12.png" title="RSVP" />
        <div>
          <img
            src={nolanCrab}
            alt="Nolan Crab"
            className="max-w-72 z-index: 1000; absolute top-[80vh] right-18 hidden lg:block"
          />
          <RSVPForm />
        </div>
      </div>
    );
    }
    