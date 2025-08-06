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
    <div className="relative -z-20 mt-15 bg-white px-20">
      <div className="bg-light absolute right-0 bottom-0 left-0 -z-10 h-20" />
      <div className="bg-neutral-blue flex justify-between rounded-lg shadow-xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="bg-neutral-blue rounded-lg p-15"
        >
          <motion.h1
            variants={itemVariants}
            className="text-primary text-xs font-semibold uppercase"
          >
            Try it now
          </motion.h1>
          <div className="mt-4 flex flex-col items-start justify-between gap-6">
            <motion.p variants={itemVariants} className="text-4xl text-white">
              Ready to level up your <br /> payment process?
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-sm text-neutral-400"
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
          className="flex items-center justify-center gap-5 rounded-lg p-15"
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
