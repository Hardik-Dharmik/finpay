"use client";

import React, { useEffect, useRef } from "react";
import Container from "./Container";
import { FacebookIcon, LinkedinIcon, Twitter } from "lucide-react";
import { useAnimation, useInView, motion } from "motion/react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  return (
    <div className="bg-light" ref={ref}>
      <Container className="p-10 pb-5 md:p-20 md:pb-2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-col justify-between gap-6 border-b border-neutral-500 pb-5 text-center md:flex-row md:items-start md:gap-0">
            <h1 className="text-neutral-blue text-xl font-bold">Finpay</h1>

            <div className="flex flex-col gap-7 md:flex-row md:gap-15">
              <div className="flex flex-col">
                <p className="text-neutral-blue mb-3 md:mb-5">Solutions</p>
                <p className="my-2 text-sm text-neutral-500">Small Business</p>
                <p className="my-2 text-sm text-neutral-500">Small Business</p>
                <p className="my-2 text-sm text-neutral-500">Small Business</p>
                <p className="my-2 text-sm text-neutral-500">Small Business</p>
              </div>
              <div className="flex flex-col">
                <p className="text-neutral-blue mb-3 md:mb-5">Solutions</p>
                <p className="my-2 text-sm text-neutral-500">Small Business</p>
                <p className="my-2 text-sm text-neutral-500">Small Business</p>
                <p className="my-2 text-sm text-neutral-500">Small Business</p>
                <p className="my-2 text-sm text-neutral-500">Small Business</p>
              </div>
              <div className="flex flex-col">
                <p className="text-neutral-blue mb-3 md:mb-5">Solutions</p>
                <p className="my-2 text-sm text-neutral-500">Small Business</p>
                <p className="my-2 text-sm text-neutral-500">Small Business</p>
                <p className="my-2 text-sm text-neutral-500">Small Business</p>
                <p className="my-2 text-sm text-neutral-500">Small Business</p>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <p className="text-primary mb-2 text-sm">Follow us on</p>
              <div className="flex gap-1">
                <Twitter />
                <LinkedinIcon className="ms-1" />
                <FacebookIcon />
              </div>
            </div>
          </div>

          <p className="text-neutral-blue p-4 text-center">
            &copy; Finpay 2025. All Rights Reserved.
          </p>
        </motion.div>
      </Container>
    </div>
  );
}
