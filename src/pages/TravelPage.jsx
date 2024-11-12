import Hero from "../components/Hero";
import Title from "../components/Title";
import TravelCard from "../components/TravelCard"

export default function TravelPage() {
  return (
    <div>
      <Hero image="/heroPics/Pic10.png" title="Travel Information" />
      <div>
        <Title title="Lodging" />
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-4">
          <TravelCard
            name="Hotel"
            description="A place to stay while you're in town. I Should also check the functionality of this card when it has a lot of information in it."
            address="1234 Main St. Anytown, USA"
          />
          <TravelCard
            name="Hotel Transylvania"
            description="A place where any monster can relax and enjoy a vacation safe from the squishy, but murderous hands of humans."
            address="2836 Beheading Blvd. Transylvania, Romania"
          />
          <TravelCard
            name="Hotel Transylvania 2"
            description="A place where any monster can relax and enjoy a vacation safe from the squishy, but murderous hands of humans."
            address="2836 Beheading Blvd. Transylvania, Romania"
          />
        </div>
        <Title title="Restaurants" />
      </div>
    </div>
  );
}
