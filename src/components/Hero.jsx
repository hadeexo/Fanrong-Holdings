import { TrendingUp, Shield, Trophy, Headset } from "lucide-react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 mt-10">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${assets.hero_img})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#00AEEF]/20 to-[#3B2D85]/20 z-0" />

      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 lg:order-2 text-right pr-8">
            {" "}
            <div className="space-y-4">
              <div className="flex items-center justify-end space-x-2 text-primary">
                <TrendingUp size={20} className="text-[#3A3B98]" />
                <span className="text-sm text-[#3A3B98] uppercase tracking-wide">
                  Wealth Strategies
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold leading-tight uppercase">
                Fanrong
                <span className="text-[#3A3B98]"> Holdings</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground max-w-xl ml-auto leading-relaxed">
                We’re more than an investment firm—we’re builders of dreams.
                Whether it’s creating affordable housing, empowering education,
                or securing financial futures, Fanrong Holdings is committed to
                shaping a better tomorrow.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <button
                className="h-10 rounded-md px-6 bg-[#3A3B98] text-white hover:bg-[#2a2975]"
                onClick={() => navigate("/service")}
              >
                Start Investing
              </button>
              <button
                className="border border-black text-black hover:bg-[#3A3B98] hover:text-white h-10 rounded-md px-6"
                onClick={() => navigate("/about")}
              >
                Learn More
              </button>
            </div>
            <div className="flex gap-6 pt-8 max-w-xl ml-auto justify-end">
              <div className="flex gap-10 pt-8">
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-white/90 rounded-lg mx-auto mb-2 hover:scale-110 hover:shadow-lg transition">
                    <Trophy className="h-6 w-6" />
                  </div>

                  <p className="text-sm font-semibold">
                    10+ Years of Experience
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-white/90 rounded-lg mx-auto mb-2 hover:scale-110 hover:shadow-lg transition">
                    <Shield className="h-6 w-6" />
                  </div>
                  <p className="text-sm font-semibold">Trusted Services</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-white/90 rounded-lg mx-auto mb-2 hover:scale-110 hover:shadow-lg transition">
                    <Headset className="h-6 w-6" />
                  </div>
                  <p className="text-sm font-semibold">Best Support</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative lg:order-1"></div>
        </div>
      </div>
      {/* </motion.div> */}
    </section>
  );
}
