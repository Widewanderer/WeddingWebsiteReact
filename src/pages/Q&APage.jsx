import Hero from "../components/Hero";
import QA from "../components/Q&A";

export default function QAPage() {
  return (
    <div>
      <Hero image="/heroPics/Pic1.png" title="FAQ" />
      <QA
        question="When is the RSVP deadline?"
        answer="May 13th (which is also the deadline to book a hotel block room)!"
      />
      <QA
        question="I’m coming from out of town. Where should I stay?
"
        answer="We have 3 hotel blocks. You can find them in the Travel section on the website."
      />
      <QA
      question="Where can I see some Alligators?"
      answer="Huntington Beach Park has some great marshland walkways were alligators can be found pretty easily. Otherwise, Alligator Andventure is a popular zoo/park in the area."
      /> 
      <QA
        question="Is the wedding indoors or outdoors?"
        answer="The ceremony will be inside the Socastee UMC sanctuary and the reception will be outdoors at Outside Alive Farms. "
      />
      <QA
        question="What clothes should I wear?"
        answer="Cocktail attire. Be mindful of the environment. Socastee tends to be hot and humid in June (average temperature at this time of year is in the mid 80s)."
      />
      <QA
        question="What shoes should I wear?"
        answer="The reception is on a working farm. While we will be renting a dance floor, the ground is uneven and bare feet are not allowed on the property. If you are planning to wear heels, we would recommend block or wedge heels over stilettos. If you are anything like the bride and don’t like gravel or sand in your shoes, wear a closed toe. "
      />
      <QA
        question="Is there parking at the ceremony and reception sites?"
        answer="Adequate parking is provided at both sites. There are also Rideshares and Ubers available in Myrtle Beach. "
      />
      <QA
        question="What time should I arrive for the ceremony?"
        answer="Please arrive 15 to 30 minutes before the ceremony start time so you can get situated and enjoy the processional."
      />
      <QA
        question="Can I bring a plus-one?"
        answer="We can only accommodate those on the invitation. Please respect that, and if you have any particular questions you can email trotztobe@gmail.com. "
      />
      <QA
        question="Is there a registry?"
        answer="Yes, we are registered on Zola. There is a link in the website navigation bar. "
      />
      <QA
      question="How can I ask additional questions about the wedding?"
      answer="Send us an email at trotztobe@gmail.com"
      />
    </div>
  );
}
