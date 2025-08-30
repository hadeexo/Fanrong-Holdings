import { assets } from "../assets/assets";

const AboutHero = () => {
  return (
    <section className="relative py-20 px-6 md:px-12 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${assets.abt_img})` }}
      />

      <div className="mt-10 relative max-w-6xl mx-auto space-y-32 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative flex justify-center">
            <img
              src={assets.one}
              alt="About Us"
              className="rounded-l-full shadow-lg object-cover w-full md:w-[500px] h-[350px] md:h-[400px]"
            />
          </div>

          <div className="bg-[#3A3B98] text-white rounded-lg shadow-xl p-8">
            <h3 className="text-xl font-bold mb-4">Our History</h3>
            <p className="text-sm leading-relaxed mb-4 text-white/90">
              For over 10 years, Fanrong Holdings has been shaping futures
              across real estate, education, and financial services. From
              affordable housing projects to community-first educational
              initiatives, our journey has been defined by trust, innovation,
              and a commitment to sustainable value.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 bg-[#3A3B98] text-white rounded-lg shadow-xl p-8">
            <h3 className="text-xl font-bold mb-4">Our Vision</h3>
            <p className="text-sm leading-relaxed mb-4 text-white/90">
              We envision a world where innovation meets investment for the
              greater good. Guided by a mission to drive sustainable growth,
              Fanrong Holdings invests in pioneering solutions that empower
              communities, nurture talent, and build infrastructure for a
              brighter tomorrow.
            </p>
          </div>

          <div className="order-1 md:order-2 relative flex justify-center">
            <img
              src={assets.idea}
              alt="Our Vision"
              className="rounded-r-full shadow-lg object-cover w-full md:w-[500px] h-[350px] md:h-[400px]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative flex justify-center">
            <img
              src={assets.value}
              alt="About Us"
              className="rounded-l-full shadow-lg object-cover w-full md:w-[500px] h-[350px] md:h-[400px]"
            />
          </div>

          <div className="bg-[#3A3B98] text-white rounded-lg shadow-xl p-8">
            <h3 className="text-xl font-bold mb-4">Our Values</h3>
            <p className="text-sm leading-relaxed mb-4 text-white/90">
              At Fanrong Holdings, we stand on pillars of integrity, excellence,
              and partnership. Our values guide every decision—from nurturing
              local economies to fostering authentic stakeholder
              relationships—because real success comes from building together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
