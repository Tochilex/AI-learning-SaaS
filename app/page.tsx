import CompanionCards from "@/components/CompanionCards";
import CompanionLists from "@/components/CompanionLists";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";


const Page = () => {
  return (
    <main>
      <h1 className="text-2xl">Popular Companions</h1>

      <section className="home-section">
        <CompanionCards
          id="123"
          name="Neura the brainy explorer"
          topic="Neural network of the brain"
          subject="Science"
          duration={45}
          color="#ffda6e"
        />

        <CompanionCards
          id="456"
          name="Countsy the number wizard"
          topic="Derivatives and integrals"
          subject="Maths"
          duration={30}
          color="#e5d0ff"
        />

        <CompanionCards
          id="789"
          name="Verba the vocabulary builder"
          topic="Language"
          subject="English literature"
          duration={30}
          color="#bde7ff"
        />
      </section>

      <section className="home-section">
        <CompanionLists 
          tittle="Recently completed sessions"
          companions={recentSessions}
          className="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
