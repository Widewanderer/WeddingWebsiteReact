import Hero from "../components/Hero";
import Title from "../components/Title";
import TravelCard from "../components/TravelCard";

export default function TravelPage() {
  return (
    <div>
      <Hero image="/heroPics/Pic10.png" title="Travel Information" />
      <div>
        <Title title="Lodging" />
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-4">
          <TravelCard
            name="Super 8 Market Commons"
            description='Located just 5 minutes from the reception venue at Outside and Alive Farms and near the airport. 10 rooms have been set aside at discount rates for June 13th through 15th for a total cost of $307.06 ($136 plus tax/nightly). You 1-843-293-6100 (No Online booking) and ask for the "Sheila Kelly Block" in order to get the special rate.'
            link="https://www.wyndhamhotels.com/super-8/myrtle-beach-south-carolina/super-8-myrtle-beach-market-common-area/overview?CID=LC:yytq4fvvehxh7se:03849&iata=00093796"
            address="3450 Highway 17 Bypass South, Myrtle Beach, SC, US"
          />
          <TravelCard
            name="Choice Hotels"
            description="Located just 5 minutes from the reception venue at Outside and Alive Farms. King and double Queen rooms available at $397 for two nights. Pool and workout room.  "
            link="https://www.choicehotels.com/reservations/groups/vi33h5"
            address="3516 Waccamaw Blvd, Myrtle Beach, SC 29579"
          />
          <TravelCard
            name="Holiday Inn Resort"
            description="Get your toes in the sand at the Holiday Inn Resort at Surfside. Beach front property 20 minutes from Socastee. Link below will take you to the wedding rooms blocked off. The group code is KTW and the dates are 6/13/25 - 6/15/25. Dates can be extended if needed. Two night minimum stay requirement.However the discount does not display until after you hit select. Additionally, the AAA rate is cheaper so you may prefer to use that if you have AAA."
            link="https://www.ihg.com/holidayinnresorts/hotels/us/en/find-hotels/select-roomrate?fromRedirect=true&qSrt=sBR&qIta=99801505&icdv=99801505&qSlH=MYRSB&qCiD=13&qCiMy=052025&qCoD=15&qCoMy=052025&qGrpCd=KTW&qAAR=6CBARC&qRtP=6CBARC&setPMCookies=true&qSHBrC=HI&qDest=1601%20N%20Ocean%20Blvd,%20Surfside%20Beach,%20SC,%20US&srb_u=1&qRmFltr="
            address="1601 N Ocean Blvd, Surfside Beach, SC, US"
          />
        </div>
        <Title title="Restaurants" />
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-4">
          <TravelCard
            name="Driftwoods Seafood & Steak Restaurant"
            description="Great place to get some tasty and resonably priced seafood while you're down in SC!"
            link="https://driftwoodsseafoodandsteak.com/"
            address="10799 SC-707, Murrells Inlet, SC 29576"
          />
          <TravelCard
            name="Old Town Crapes"
            description="Have a taste of the old country! Eastern European fair specializing in breakfast foods and delicious blini. If you've never tried Georgian Khachapury be sure to get an order!"
            link="https://oldtowncrepes.com/"
            address="4205 N King’s Hwy
Myrtle Beach, SC, 29577"
          />
          <TravelCard
            name="Miyabi"
            description="A delicious Tappenyaki style (hibachi) gill. Come hungry because you will definately have leftovers."
            link="https://miyabi.life/"
            address="9732 N Kings Hwy, Myrtle Beach, SC 29572"
          />
        </div>
      </div>
    </div>
  );
}
