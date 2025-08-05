"use client";

import React from "react";
import Container from "./Container";
import { motion } from "motion/react";

export default function Navbar() {
  return (
    <nav className="bg-light px-15 text-sm">
      <Container className="py-4">
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-30">
            <h1 className="text-neutral-blue text-xl font-bold">Finpay</h1>
            <ul className="text-neutral-blue flex gap-3 font-semibold">
              <li>Products</li>
              <li>Customers</li>
              <li>Pricing</li>
              <li>Learn</li>
            </ul>
          </div>

          <div className="flex gap-2">
            <button className="text-dark rounded-lg border-1 border-neutral-400 px-6 py-2 text-sm">
              Login
            </button>
            <button className="bg-primary rounded-lg px-6 py-2 text-sm text-white">
              Sign Up
            </button>
          </div>
        </motion.div>
      </Container>
    </nav>
  );
}
