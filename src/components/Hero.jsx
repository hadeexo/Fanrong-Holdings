import { TrendingUp, Shield, Trophy, Headset } from "lucide-react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 mt-10 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${assets.hero_img})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#00AEEF]/20 to-[#3B2D85]/20 z-0" />

      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-8 lg:order-2 text-right pr-8"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center justify-end space-x-2 text-primary"
            >
              <TrendingUp size={20} className="text-[#3A3B98]" />
              <span className="text-sm text-[#3A3B98] uppercase tracking-wide">
                Wealth Strategies
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-6xl font-bold leading-tight uppercase"
            >
              Fanrong <span className="text-[#3A3B98]">Holdings</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-lg lg:text-xl text-muted-foreground max-w-xl ml-auto leading-relaxed"
            >
              We’re more than an investment firm—we’re builders of dreams.
              Whether it’s creating affordable housing, empowering education, or
              securing financial futures, Fanrong Holdings is committed to
              shaping a better tomorrow.
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 },
                },
              }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-end"
            >
              <motion.button
                variants={{
                  hidden: { opacity: 0, x: 30 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.6 }}
                className="h-10 rounded-md px-6 bg-[#3A3B98] text-white hover:bg-[#2a2975]"
                onClick={() => navigate("/service")}
              >
                Start Investing
              </motion.button>

              <motion.button
                variants={{
                  hidden: { opacity: 0, x: -30 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.6 }}
                className="border border-black text-black hover:bg-[#3A3B98] hover:text-white h-10 rounded-md px-6"
                onClick={() => navigate("/about")}
              >
                Learn More
              </motion.button>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.3 } },
              }}
              viewport={{ once: true }}
              className="flex gap-6 pt-8 max-w-xl ml-auto justify-end"
            >
              {[
                {
                  icon: <Trophy className="h-6 w-6" />,
                  text: "10+ Years of Experience",
                },
                {
                  icon: <Shield className="h-6 w-6" />,
                  text: "Trusted Services",
                },
                { icon: <Headset className="h-6 w-6" />, text: "Best Support" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.6 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-white/90 rounded-lg mx-auto mb-2 hover:scale-110 hover:shadow-lg transition">
                    {item.icon}
                  </div>
                  <p className="text-sm font-semibold">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <div className="relative lg:order-1"></div>
        </div>
      </div>
    </section>
  );
}
