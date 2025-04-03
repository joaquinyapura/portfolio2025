import { HeroSection } from "../Components/HeroSection";

import { motion } from "framer-motion";

export const Index = () => {
  return (
    <section className="container mt-6 mx-auto">
      <HeroSection />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="w-40 h-40 bg-blue-500 flex items-center justify-center text-white text-lg"
      >
        Holamundo
      </motion.div>
    </section>
  );
};
