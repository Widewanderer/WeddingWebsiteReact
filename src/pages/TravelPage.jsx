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
            name="Hotel Transylvania"
            description="A place where any monster can relax and enjoy a vacation safe from the squishy, but murderous hands of humans."
            address="2836 Beheading Blvd. Transylvania, Romania"
          />
          <TravelCard
            name="The Prancing Pony"
            description="A bustling inn at the crossroads of Bree. Renowned for its warm hospitality, lively atmosphere, and mysterious travelers."
            address="1 Bree Street, Bree, Middle-earth"
          />
          <TravelCard
            name="Holiday Inn Resort at Surfside Beach"
            description="A historic mountain retreat with breathtaking views and a mysterious charm. Known for its grand ballroom and long hallways."
            address="Sidewinder Pass, Colorado"
          />
        </div>
        <Title title="Restaurants" />
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-4">
          <TravelCard
            name="Gusteau's"
            description="A 4 star restaurant with a ratatouille that is to die for. Made by a mysterious young chef with unorthodox methods"
            address="1673 Rattertonne St. Paris, France"
          />
          <TravelCard
            name="The Green Dragon"
            description="A cozy pub nestled in the heart of the Shire. Known for its hearty meals, hospitalable Hobbits, and having the only brew for the brave and true."
            address="Bywater, Hobbiton, The Shire, Middle-earth"
          />
          <TravelCard
            name="The Three Broomsticks"
            description="A charming tavern in Hogsmeade Village, famous for its buttery Butterbeer and a welcoming atmosphere for wizards and witches alike."
            address="High Street, Hogsmeade, Scotland"
          />
        </div>
      </div>
    </div>
  );
}
