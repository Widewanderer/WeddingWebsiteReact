import Hero from '../components/Hero';
import RSVPForm from '../components/Form';
import nolanCrab from '../nolanPics/nolanCrab.svg'
import nolanSeagull from '../nolanPics/nolanSeagull.svg'


export default function RSVPPage() {
    return (
      <div>
        <Hero image="/heroPics/Pic12.png" title="RSVP" />
        <div>
          <img
            src={nolanCrab}
            alt="Nolan Crab"
            className="max-w-72 z-[1000]; absolute top-[75vh] left-10 hidden lg:block"
          />
          <img
            src={nolanSeagull}
            alt="Nolan Sea Gull"
            className="max-w-72 z-[1000]; absolute top-[80vh] right-12 hidden lg:block"
          />
          <RSVPForm />
        </div>
      </div>
    );
    }
    