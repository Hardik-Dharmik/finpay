"use client";

import { CalendarSync } from "lucide-react";
import { useAnimation, useInView, motion } from "motion/react";
import { useEffect, useRef } from "react";

export default function Step() {
  const experiences = [
    {
      text: "Free transfers",
      description:
        "Create a financial experience and automate repeat purchases by scheduling recurring payments.",
    },
    {
      text: "Free transfers",
      description:
        "Create a financial experience and automate repeat purchases by scheduling recurring payments.",
    },
    {
      text: "Free transfers",
      description:
        "Create a financial experience and automate repeat purchases by scheduling recurring payments.",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.7,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const girdItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-neutral-blue md:px-20">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="rounded-lg p-15"
      >
        <motion.h1
          variants={itemVariants}
          className="text-primary text-xs font-semibold uppercase"
        >
          Step
        </motion.h1>
        <div className="mt-4 flex items-center justify-between">
          <motion.p variants={itemVariants} className="text-4xl text-white">
            Maximize your returns with a <br /> Reserve account that generates.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-6 text-white md:grid-cols-3">
          {experiences.map((experience, index) => (
            <motion.div
              variants={girdItemVariants}
              className="space-y-4 rounded-lg bg-[#205265] p-8"
              key={index}
            >
              <p className="bg-gradient-to-b from-white to-[#205265] to-80% bg-clip-text text-7xl font-bold text-transparent">
                {index + 1}
              </p>
              <p className="mt-4 text-lg font-semibold">{experience.text}</p>
              <p className="text-sm text-neutral-300">
                {experience.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
