"use client";

import { ArrowUpRight, CalendarSync } from "lucide-react";
import { useAnimation, useInView, motion } from "motion/react";
import { useEffect, useRef } from "react";

export default function TryItNow() {
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
  const isInView = useInView(ref, { once: true });
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

  const buttonVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="relative -z-20 mt-15 bg-white px-8 md:px-20">
      <div className="bg-light absolute right-0 bottom-0 left-0 -z-10 h-20" />
      <div className="bg-neutral-blue flex flex-col justify-between rounded-lg shadow-xl md:flex-row">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="bg-neutral-blue rounded-lg px-10 py-5 md:p-15"
        >
          <motion.h1
            variants={itemVariants}
            className="text-primary text-center text-xs font-semibold uppercase md:text-start"
          >
            Try it now
          </motion.h1>
          <div className="mt-4 flex flex-col items-start justify-between gap-6">
            <motion.p
              variants={itemVariants}
              className="text-center text-2xl text-white md:text-start md:text-4xl"
            >
              Ready to level up your <span className="hidden md:block" />{" "}
              payment process?
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-center text-sm text-neutral-400 md:text-start"
            >
              Supports samll businessess with simple invoicing, powerful <br />
              integrations and cash flow management tools.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={buttonVariant}
          initial="hidden"
          animate={controls}
          className="flex flex-col items-center justify-center gap-5 rounded-lg p-10 md:flex-row md:p-15"
        >
          <button className="bg-primary rounded-lg px-6 py-2 text-sm text-white">
            Get Started Now
          </button>

          <button className="flex items-center gap-3 rounded-lg border-1 border-neutral-400 px-6 py-2 text-sm text-white">
            <span>Learn More</span>
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
