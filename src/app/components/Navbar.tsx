"use client";

import React, { useState } from "react";
import Container from "./Container";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-light sticky top-0 right-0 left-0 z-50 px-4 text-sm shadow">
      <Container className="py-4">
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between"
        >
          <div className="flex w-full items-center justify-between md:w-auto">
            <h1 className="text-neutral-blue text-xl font-bold">Finpay</h1>

            <button
              onClick={toggleMenu}
              className="text-neutral-blue focus:outline-none md:hidden"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <ul className="text-neutral-blue hidden gap-6 font-semibold md:flex">
            <li className="cursor-pointer">Products</li>
            <li className="cursor-pointer">Customers</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Learn</li>
          </ul>

          <div className="hidden gap-3 md:flex">
            <button className="text-dark rounded-lg border border-neutral-400 px-6 py-2 text-sm">
              Login
            </button>
            <button className="bg-primary rounded-lg px-6 py-2 text-sm text-white">
              Sign Up
            </button>
          </div>
        </motion.div>

        {isOpen && (
          <div className="text-neutral-blue mt-4 space-y-4 md:hidden">
            <ul className="flex flex-col gap-3 font-semibold">
              <li className="cursor-pointer">Products</li>
              <li className="cursor-pointer">Customers</li>
              <li className="cursor-pointer">Pricing</li>
              <li className="cursor-pointer">Learn</li>
            </ul>
            <div className="flex flex-col gap-2">
              <button className="text-dark rounded-lg border border-neutral-400 px-6 py-2 text-sm">
                Login
              </button>
              <button className="bg-primary rounded-lg px-6 py-2 text-sm text-white">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
