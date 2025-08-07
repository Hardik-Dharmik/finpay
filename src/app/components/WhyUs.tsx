"use client";

import { useInView, motion } from "motion/react";
import React, { useRef } from "react";
import Container from "./Container";
import { Banknote, Landmark, ArrowLeftRight } from "lucide-react";
import MyLineChart from "./LineChart";

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.6 });

  return (
    <div className="px-10 py-10 md:px-20" ref={ref}>
      <Container className="flex flex-col items-center px-6 md:px-25">
        <motion.span
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-primary text-xs uppercase"
        >
          Why Us
        </motion.span>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-3 text-center text-2xl md:text-4xl"
        >
          Why they prefer Finpay
        </motion.p>
        <div className="mt-10 flex w-full flex-1 flex-col gap-y-4">
          <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-4">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              className="bg-light flex flex-col justify-between gap-y-10 rounded-lg p-6 md:w-1/2 md:p-10"
            >
              <span className="text-primary text-6xl font-semibold md:text-7xl">
                3k+
              </span>
              <span className="text-xl font-semibold">
                Business already running on Finpay
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
              className="bg-light flex flex-col justify-between gap-y-5 rounded-lg p-6 md:w-1/2 md:gap-y-0 md:p-10"
            >
              <span className="text-xl font-semibold md:text-2xl">
                Instant Withdraw your funds at any time
              </span>
              <div className="flex items-center self-center">
                <span className="bg-primary h-10 w-10 rounded-lg p-2 md:h-14 md:w-14">
                  <Banknote className="h-6 w-6 text-white md:h-10 md:w-10" />
                </span>
                <span className="flex w-14 justify-center md:w-28">
                  <ArrowLeftRight className="h-7 w-7 stroke-neutral-500 stroke-[1px] md:h-14 md:w-28" />
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black p-2 md:h-14 md:w-14">
                  <Landmark className="h-6 w-6 text-white md:h-8 md:w-8" />
                </span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.5 }}
            className="bg-light flex flex-1 items-center gap-6 rounded-lg p-6 md:p-10 md:pb-0"
          >
            <div className="md:-mt-8">
              <p className="text-xl font-semibold">No asset volatility</p>
              <p className="text-xs text-neutral-500">
                Generate returns on your cash reserves without making any
                investments.
              </p>
            </div>

            <div className="hidden h-fit w-2/3 md:inline">
              <MyLineChart />
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
