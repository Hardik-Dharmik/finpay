"use client";

import { CalendarSync, Landmark, Shield, ShieldHalf } from "lucide-react";
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
      logo: <Landmark className="h-12 w-12 stroke-[1.5px]" />,
      text: "Multiple account",
      description:
        "Run your operations with cash from your account and generate yield on funds stored in your account.",
    },
    {
      logo: <ShieldHalf className="h-12 w-12 stroke-[1.5px]" />,
      text: "Unmatched security",
      description:
        "Securely manage your finances with organization-wide MFA, card-locking and account-level controls.",
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
    <div className="relative -z-20 min-h-[80vh] bg-white px-5 md:px-20">
      <div className="bg-light absolute top-0 right-0 left-0 -z-10 h-20"></div>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="rounded-lg bg-white p-10 shadow-xl md:p-15"
      >
        <motion.h1
          variants={itemVariants}
          className="text-primary text-center text-xs font-semibold uppercase md:text-start"
        >
          Future Payment
        </motion.h1>
        <div className="mt-4 flex flex-col items-center justify-between gap-5 md:flex-row md:gap-0">
          <motion.p
            variants={itemVariants}
            className="text-center text-2xl md:text-start md:text-4xl"
          >
            Experience that grows <span className="hidden md:block" /> with your
            scale.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-center text-sm text-neutral-400 md:w-2/6 md:text-start"
          >
            Design a financial operating system that works for your business and
            streamlined cash flow management.
          </motion.p>
        </div>

        <div className="mt-9 grid gap-8 md:mt-14 md:grid-cols-3 md:gap-4">
          {experiences.map((experience, index) => (
            <motion.div
              variants={girdItemVariants}
              className="flex flex-col items-center space-y-4 md:inline"
              key={index}
            >
              <p>{experience.logo}</p>
              <p className="mt-2 text-lg font-semibold md:mt-4">
                {experience.text}
              </p>
              <p className="text-center text-sm text-neutral-500 md:text-start">
                {experience.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
