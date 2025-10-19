import React from 'react';
import { PageHeader } from '@/components/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Server, Lock, Cloud, Wifi, Printer, HardDrive, Cpu, Phone, Video,
  Network, Shield, Laptop, Building, Globe
} from 'lucide-react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
const allServices = [
  { icon: Server, title: 'IT Managed Services', description: 'Proactive monitoring, management, and support for your entire IT infrastructure.' },
  { icon: Shield, title: 'IT Support & AMC', description: 'Reliable IT support and Annual Maintenance Contracts to keep your systems running.' },
  { icon: Building, title: 'IT Licensing & Consultancy', description: 'Expert guidance on software licensing and IT strategy to optimize your investments.' },
  { icon: Lock, title: 'IT & Cyber Security', description: 'Comprehensive security solutions to protect your business from digital threats.' },
  { icon: Cloud, title: 'Cloud Computing & Backup', description: 'Scalable cloud services and robust data backup solutions for business continuity.' },
  { icon: Laptop, title: 'Laptop & PC Repair', description: 'Fast and efficient repair services for all your computing devices.' },
  { icon: Video, title: 'CCTV & Access Control', description: 'Advanced surveillance and access control systems for physical security.' },
  { icon: Phone, title: 'PABX & VOIP Telephony', description: 'Modern business communication systems for seamless connectivity.' },
  { icon: Network, title: 'Structured Cabling', description: 'Professional network cabling for a reliable and organized infrastructure.' },
  { icon: Globe, title: 'Web Design & Development', description: 'Custom website design and development to build your online presence.' },
  { icon: Printer, title: 'Photocopier Rental', description: 'Cost-effective and flexible rental plans for office photocopiers.' },
  { icon: HardDrive, title: 'Toner & Cartridge Supply', description: 'A wide range of genuine toners and cartridges for all major printer brands.' },
  { icon: Cpu, title: 'Custom PC Builds', description: 'High-performance PCs tailored for designers, architects, and gamers.' },
];
export function ServicesPage() {
  return (
    <div>
      <SEO
        title="Comprehensive IT Services"
        description="Explore our full range of IT services, including managed IT, cybersecurity, cloud solutions, hardware supply, and more for businesses in the UAE."
      />
      <PageHeader
        title="Our Comprehensive IT Services"
        subtitle="End-to-end technology solutions to support and elevate your business operations."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="text-center p-6 h-full shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="inline-block bg-deits-gold text-deits-blue p-3 rounded-lg">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <CardHeader>
                    <CardTitle className="mt-2 text-xl font-semibold">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}