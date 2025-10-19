import React from 'react';
import { PageHeader } from '@/components/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, Heart, ShieldCheck, Cpu, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
const values = [
  { icon: Target, title: 'Our Mission', description: 'To provide reliable, innovative, and comprehensive IT solutions that empower businesses across the UAE to achieve their full potential through technology.' },
  { icon: Eye, title: 'Our Vision', description: 'To be the most trusted and sought-after IT partner in the UAE, renowned for our technical expertise, exceptional customer service, and commitment to client success.' },
  { icon: Heart, title: 'Our Values', description: 'Integrity, Customer-Centricity, Excellence, and Innovation are the pillars that guide every decision we make and every solution we deliver.' },
];
const whyChooseUs = [
  { icon: ShieldCheck, title: 'Reliable & Trusted', description: 'We are committed to providing dependable IT services that you can count on, ensuring your business runs smoothly.' },
  { icon: Cpu, title: 'Expert Technicians', description: 'Our team consists of certified and experienced professionals dedicated to solving your IT challenges efficiently.' },
  { icon: Users, title: 'Customer-Centric', description: 'We prioritize your needs, offering personalized solutions and exceptional support to help your business succeed.' },
];
export function AboutPage() {
  return (
    <div>
      <SEO
        title="About Us"
        description="Learn about Dune Emirates IT Solutions, our mission, vision, and values. We are your trusted partner for comprehensive IT services in Dubai, Abu Dhabi, and Sharjah."
      />
      <PageHeader
        title="About Dune Emirates IT Solutions"
        subtitle="Your trusted partner for comprehensive IT services in Dubai, Abu Dhabi, and Sharjah."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24">
          <section className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-semibold">Who We Are</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Dune Emirates IT Solutions (DEITS) is a leading provider of IT support and technology solutions in the United Arab Emirates. Founded on the principle of delivering excellence, we help businesses leverage technology to drive growth, efficiency, and security.
            </p>
          </section>
          <section className="mt-16 md:mt-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center h-full p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <div className="inline-block bg-deits-gold text-deits-blue p-4 rounded-full">
                      <value.icon className="h-8 w-8" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl font-semibold">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
          <section className="mt-16 md:mt-24">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-display font-semibold">Why Choose DEITS?</h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                We are more than just an IT provider; we are your partner in success.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="text-center p-4">
                  <div className="inline-block bg-deits-blue text-white p-4 rounded-full">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}