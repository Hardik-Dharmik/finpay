"use client";

import React, { useEffect } from "react";
import Container from "./Container";
import Image from "next/image";
import { CreditCard, Landmark, MoveUpRight, Wifi } from "lucide-react";
import { useAnimate, motion, stagger } from "motion/react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-light min-h-screen px-5 md:px-20">
      <Container className="flex h-full pt-10 pb-15 md:pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-y-10 md:flex-row md:gap-0"
        >
          <div className="flex w-full flex-col items-center justify-between gap-5 md:w-1/2 md:items-start">
            <motion.h1
              variants={itemVariants}
              className="hero-animate text-center text-4xl/tight md:text-start md:text-6xl/tight"
            >
              <span className="font-semibold">
                Get paid early <br />
              </span>{" "}
              save automatically all your pay.{" "}
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="hero-animate text-center text-neutral-500 md:w-[80%] md:text-start"
            >
              Supports small businessess with simple invoicing, powerful
              integrations and cash flow management tools.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="hero-animate flex rounded-lg border border-neutral-300 bg-white p-1"
            >
              <input
                type="text"
                className="overflow-hidden px-2 text-sm outline-0"
                placeholder="Your businessess email"
              />
              <button className="bg-primary flex items-center gap-2 rounded-lg px-6 py-2 text-sm text-white">
                <span className="min-w-fit">Get Started</span>
                <MoveUpRight className="hidden md:inline md:h-4 md:w-4" />
              </button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex items-center gap-6"
            >
              <Image
                src="/klrana.png"
                alt="Klarana"
                className="h-20 w-20 object-contain"
                height={100}
                width={100}
              />
              <Image
                src="/coinbase.png"
                alt="Klarana"
                className="h-22 w-22 object-contain"
                height={100}
                width={100}
              />
              <Image
                src="/instacart.png"
                alt="Klarana"
                className="h-24 w-24 object-contain"
                height={200}
                width={200}
              />
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="flex w-1/2 -translate-x-5 items-center justify-center md:translate-x-0"
          >
            <PaymentCard />
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}

function PaymentCard() {
  return (
    <div className="hero-animate relative h-[23rem] w-[21rem] rounded-lg bg-white p-8">
      <div className="flex gap-3">
        <div className="h-10 w-10">
          <Image src="/favicon.ico" alt="Logo" height={100} width={100} />
        </div>
        <div className="flex flex-col">
          <p className="font-bold">Dipa Inhouse</p>
          <p className="text-xs">dipainhouse@gmail.com</p>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <div className="space-y-2 rounded-lg border border-neutral-500 p-3">
          <p className="text-xs text-neutral-600">Invoice</p>
          <p className="text-2xl font-semibold">$1,876,580</p>
          <p className="text-xs text-neutral-600">April 21, 2024</p>
        </div>

        <div className="border-primary flex justify-between rounded-lg border-2 p-3">
          <div className="flex gap-2">
            <CreditCard className="h-5 w-5" />
            <span className="text-sm">Credit Card</span>
          </div>
          <input type="radio" readOnly checked className="accent-primary" />
        </div>

        <div className="flex justify-between rounded-lg border border-neutral-500 p-3">
          <div className="flex gap-2">
            <Landmark className="h-5 w-5" />
            <span className="text-sm">Bank Account</span>
          </div>
          <input type="radio" className="accent-primary" />
        </div>

        <button className="bg-neutral-blue rounded-lg px-6 py-2 text-sm text-white">
          Pay
        </button>
      </div>

      <div className="hero-animate absolute -top-10 -right-14">
        <HeroCreditCard />
      </div>
    </div>
  );
}

function HeroCreditCard() {
  return (
    <div className="bg-primary flex h-50 w-40 flex-col justify-between overflow-hidden rounded-lg text-white md:h-60 md:w-50">
      <div className="p-6">
        <p className="text-xs text-neutral-300">Credit Card</p>
        <p>2341 **** ****</p>
      </div>

      <div className="bg-neutral-blue flex items-center justify-between px-6 py-4">
        <span>
          <Image
            src="/visa.webp"
            alt="Visa"
            className="h-3 w-8 object-contain"
            height={100}
            width={100}
          />
        </span>
        <span>
          <Wifi className="rotate-90" />
        </span>
      </div>
    </div>
  );
}
