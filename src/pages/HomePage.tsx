import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, ShieldCheck, Cpu, Users, Printer, HardDrive, Server, Wifi, Cloud, Lock, Globe, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
const services = [
  { icon: Server, title: 'IT Managed Services', description: 'Proactive monitoring and management.' },
  { icon: Lock, title: 'Cyber Security', description: 'Protecting your digital assets.' },
  { icon: Printer, title: 'Photocopier Rental', description: 'Cost-effective office printing.' },
  { icon: HardDrive, title: 'Toner & Cartridges', description: 'Genuine supplies for all brands.' },
  { icon: Cloud, title: 'Cloud Solutions', description: 'Scalable and secure cloud infrastructure.' },
  { icon: Wifi, title: 'Network Setup', description: 'Reliable and fast network solutions.' },
  { icon: Globe, title: 'Web Design', description: 'Modern and responsive websites.' },
  { icon: Briefcase, title: 'IT Support & Setup', description: 'New office infrastructure setup.' },
];
const priorityServices = [
  {
    icon: Printer,
    title: 'Photocopier Rental',
    description: 'Flexible rental plans for businesses of all sizes.',
    link: '/photocopier-rental',
    linkLabel: 'Learn More'
  },
  {
    icon: HardDrive,
    title: 'Toner & Cartridge Supply',
    description: 'Genuine HP, Canon, Epson toners and more.',
    link: '/toners-cartridges',
    linkLabel: 'Shop Now'
  },
  {
    icon: Globe,
    title: 'Web Design',
    description: 'Modern and responsive websites for your brand.',
    link: '/services',
    linkLabel: 'Explore Designs'
  },
  {
    icon: Briefcase,
    title: 'IT Support & Setup',
    description: 'Expert support and new office infrastructure setup.',
    link: '/services',
    linkLabel: 'Get Support'
  }
];
const whyChooseUs = [
  { icon: ShieldCheck, title: 'Reliable & Trusted', description: 'We are committed to providing dependable IT services that you can count on, ensuring your business runs smoothly.' },
  { icon: Cpu, title: 'Expert Technicians', description: 'Our team consists of certified and experienced professionals dedicated to solving your IT challenges efficiently.' },
  { icon: Users, title: 'Customer-Centric', description: 'We prioritize your needs, offering personalized solutions and exceptional support to help your business succeed.' },
];
export function HomePage() {
  return (
    <div className="bg-background text-foreground">
      <SEO
        title="Your Reliable IT Partner in the UAE"
        description="Dune Emirates IT Solutions offers comprehensive IT support, managed services, and technology solutions for businesses in Dubai, Abu Dhabi, and Sharjah."
      />
      {/* Hero Section */}
      <section className="relative bg-hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-display font-bold text-balance"
          >
            Your Reliable IT Partner in the <span className="text-deits-gold">UAE</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/80 text-pretty"
          >
            Comprehensive IT support, managed services, and technology solutions for businesses in Dubai, Abu Dhabi, and Sharjah.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-deits-gold text-deits-blue hover:bg-deits-gold/90 font-semibold" asChild>
              <Link to="/contact">Get a Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-deits-blue" asChild>
              <Link to="/services">Explore Services</Link>
            </Button>
          </motion.div>
        </div>
      </section>
      {/* Featured Services Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-semibold">Priority IT Solutions</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              Fast, reliable, and cost-effective solutions for your most common office needs.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {priorityServices.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full shadow-sm hover:shadow-lg transition-shadow">
                  <CardHeader className="flex-row items-start gap-4">
                    <div className="bg-deits-blue text-white p-3 rounded-lg">
                      <service.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-semibold">{service.title}</CardTitle>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="link" className="p-0 h-auto text-deits-blue">
                      <Link to={service.link}>{service.linkLabel} <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* All Services Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-semibold">Our Comprehensive IT Services</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              From infrastructure to security, we've got your technology needs covered.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                <Card className="text-center p-6 h-full">
                  <div className="inline-block bg-deits-gold text-deits-blue p-3 rounded-lg">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
                  <p className="mt-2 text-muted-foreground">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-semibold">Why Choose DEITS?</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              We are more than just an IT provider; we are your partner in success.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-block bg-deits-blue text-white p-4 rounded-full">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Final CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold">Ready to Elevate Your IT Infrastructure?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Let's discuss how Dune Emirates IT Solutions can help your business thrive with our expert IT services.
          </p>
          <div className="mt-8">
            <Button size="lg" className="bg-deits-gold text-deits-blue hover:bg-deits-gold/90 font-semibold" asChild>
              <Link to="/contact">Request a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}