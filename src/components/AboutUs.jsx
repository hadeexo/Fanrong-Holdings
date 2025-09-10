import { assets } from "../assets/assets";

export function AboutUs() {
  return (
    <section className="relative py-26 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <img
            src={assets.sky}
            alt="About Fanrong Holdings"
            className="rounded-2xl shadow-lg object-cover object-center w-full md:w-[90%] h-[350px] md:h-[450px]"
          />
        </div>

        <div className="space-y-6 text-gray-700">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About <span className="text-[#3B2D85]">Fanrong Holdings</span>
          </h2>
          <div className="text-justify">
            <p>
              Fanrong Holdings is a dynamic principal investment company
              headquartered in Nigeria, with strategic interests in finance,
              education, and real estate—three critical sectors shaping the
              nation’s economic growth. Established with a vision to create
              long-term value, Fanrong Holdings leverages innovation, expertise,
              and partnerships to drive sustainable returns while contributing
              meaningfully to national development.
            </p>

            <p>
              In the finance sector, the company provides capital, advisory, and
              strategic investment solutions designed to empower businesses and
              foster economic inclusion. Its approach focuses on unlocking
              opportunities in emerging markets and supporting enterprises that
              deliver measurable impact.
            </p>

            <p>
              Through its education investments, Fanrong Holdings is committed
              to transforming learning environments, bridging skill gaps, and
              equipping future leaders with the knowledge and competencies
              required to thrive in a competitive global economy.
            </p>

            <p>
              In real estate, the company develops and manages residential,
              commercial, and mixed-use properties that meet international
              standards, address housing deficits, and stimulate urban renewal.
              Its projects combine functionality, affordability, and
              sustainability to create long-lasting value for communities and
              stakeholders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
