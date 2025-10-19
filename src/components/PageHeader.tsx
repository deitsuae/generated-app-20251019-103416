import React from 'react';
import { motion } from 'framer-motion';
interface PageHeaderProps {
  title: string;
  subtitle: string;
}
export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-hero-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-display font-bold text-balance"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 max-w-2xl mx-auto text-lg text-white/80 text-pretty"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}