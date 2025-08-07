"use client";

import { useInView, motion } from "motion/react";
import React, { useRef } from "react";
import Container from "./Container";
import { Banknote, Landmark, ArrowLeftRight, ArrowUpRight } from "lucide-react";
import MyLineChart from "./LineChart";

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.6 });

  return (
    <div className="py-10 md:px-20" ref={ref}>
      <Container className="flex flex-col items-center px-10 md:px-25">
        <motion.span
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-primary text-xs uppercase"
        >
          Our Mission
        </motion.span>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-3 text-center text-3xl font-semibold md:text-4xl/normal"
        >
          We've helped <span className="hidden md:block" />
          innovative companies.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-3 text-center text-sm text-neutral-500"
        >
          Hundreds of all sizes and across all industries <br /> have made a big
          improvements with us.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mt-10 flex flex-col gap-8 md:flex-row md:gap-14"
        >
          <div className="flex flex-col items-center justify-around gap-3">
            <span className="text-5xl font-semibold">24%</span>
            <span className="text-primary">Revenue business</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <span className="text-5xl font-semibold">180k</span>
            <span className="text-primary">In annual revenue</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <span className="text-5xl font-semibold">10+</span>
            <span className="text-primary">Months of runway</span>
          </div>
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-primary mt-8 text-base uppercase md:text-xs"
        >
          Choose Plan
        </motion.span>

        <div className="mt-10 flex w-full flex-1 flex-col gap-y-4">
          <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-4">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              className="bg-light text-neutral-blue flex flex-col justify-between gap-y-10 rounded-lg p-10 md:w-1/2"
            >
              <span className="text-3xl font-semibold">Plus</span>
              <p className="flex items-center justify-between text-xl font-semibold">
                <span>$2.99/month</span>
                <span>
                  <ArrowUpRight />
                </span>
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
              className="bg-primary flex flex-col justify-between gap-y-10 rounded-lg p-10 text-white md:w-1/2"
            >
              <span className="text-3xl font-semibold">Premium</span>
              <p className="flex items-center justify-between text-xl font-semibold">
                <span>$6.99/month</span>
                <span>
                  <ArrowUpRight />
                </span>
              </p>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
}
