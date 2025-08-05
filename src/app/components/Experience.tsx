"use client";

import { CalendarSync } from "lucide-react";
import { useAnimation, useInView, motion } from "motion/react";
import { useEffect, useRef } from "react";

export default function Experience() {
  const experiences = [
    {
      logo: <CalendarSync className="h-12 w-12 stroke-[1.5px]" />,
      text: "Free transfers",
      description:
        "Create a financial experience and automate repeat purchases by scheduling recurring payments.",
    },
    {
      logo: <CalendarSync className="h-12 w-12 stroke-[1.5px]" />,
      text: "Free transfers",
      description:
        "Create a financial experience and automate repeat purchases by scheduling recurring payments.",
    },
    {
      logo: <CalendarSync className="h-12 w-12 stroke-[1.5px]" />,
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
    <div className="relative -z-20 min-h-[80vh] bg-white px-20">
      <div className="bg-light absolute top-0 right-0 left-0 -z-10 h-20"></div>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="rounded-lg bg-white p-15 shadow-xl"
      >
        <motion.h1
          variants={itemVariants}
          className="text-primary text-xs font-semibold uppercase"
        >
          Future Payment
        </motion.h1>
        <div className="mt-4 flex items-center justify-between">
          <motion.p variants={itemVariants} className="text-4xl">
            Experience that grows <br /> with your scale.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="w-2/6 text-sm text-neutral-400"
          >
            Design a financial operating system that works for your business and
            streamlined cash flow management.
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-3 gap-4">
          {experiences.map((experience, index) => (
            <motion.div
              variants={girdItemVariants}
              className="space-y-4"
              key={index}
            >
              <p>{experience.logo}</p>
              <p className="mt-4 text-lg font-semibold">{experience.text}</p>
              <p className="text-sm text-neutral-500">
                {experience.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
