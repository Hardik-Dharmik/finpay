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
    <div className="px-20 py-10" ref={ref}>
      <Container className="flex flex-col items-center px-25">
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
          className="mt-3 text-4xl"
        >
          Why they prefer Finpay
        </motion.p>
        <div className="mt-10 flex w-full flex-1 flex-col gap-y-4">
          <div className="flex gap-x-4">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              className="bg-light flex w-1/2 flex-col justify-between gap-y-10 rounded-lg p-10"
            >
              <span className="text-primary text-7xl font-semibold">3k+</span>
              <span className="text-xl font-semibold">
                Business already running on Finpay
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
              className="bg-light flex w-1/2 flex-col justify-between rounded-lg p-10"
            >
              <span className="text-2xl font-semibold">
                Business already running on Finpay
              </span>
              <div className="flex items-center self-center">
                <span className="bg-primary h-14 w-14 rounded-lg p-2">
                  <Banknote className="h-10 w-10 text-white" />
                </span>
                <span className="w-28">
                  <ArrowLeftRight className="h-14 w-28 stroke-neutral-500 stroke-[1px]" />
                </span>

                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black p-2">
                  <Landmark className="h-8 w-8 text-white" />
                </span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.5 }}
            className="bg-light flex flex-1 items-center gap-6 rounded-lg p-10 pb-0"
          >
            <div className="-mt-8">
              <p className="text-xl font-semibold">
                Business already running on Finpay
              </p>
              <p className="text-xs text-neutral-500">
                Generate returns on your cash reserves without making any
                investment
              </p>
            </div>

            <div className="h-fit w-2/3">
              <MyLineChart />
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
