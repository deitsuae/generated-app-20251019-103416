import React from 'react';
import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CheckCircle, Settings, FileText, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
const features = [
  { icon: Settings, title: 'All-Inclusive Service', description: 'Our rental plans include toner, maintenance, and support, so you have no hidden costs.' },
  { icon: FileText, title: 'Flexible Plans', description: 'Choose from a range of plans tailored to your printing volume and business needs.' },
  { icon: Truck, title: 'Fast Delivery & Setup', description: 'We provide quick delivery and professional installation to get you started without delay.' },
];
const pricingPlans = [
  { plan: 'Basic Office', monthlyFee: 'AED 250', includedPrints: '2,000 B&W', colorCost: 'AED 0.35', idealFor: 'Small Offices' },
  { plan: 'Business Pro', monthlyFee: 'AED 450', includedPrints: '5,000 B&W', colorCost: 'AED 0.30', idealFor: 'Medium Businesses' },
  { plan: 'Enterprise', monthlyFee: 'AED 750', includedPrints: '10,000 B&W', colorCost: 'AED 0.25', idealFor: 'Large Corporations' },
];
export function PhotocopierRentalPage() {
  return (
    <div>
      <SEO
        title="Affordable Photocopier Rentals in UAE"
        description="Flexible and all-inclusive photocopier rental and lease plans for businesses in Dubai, Abu Dhabi, and Sharjah. Get a free quote today."
        keywords="photocopier rental dubai, office copier rental abu dhabi, copier lease UAE"
      />
      <PageHeader
        title="Affordable Photocopier Rentals in the UAE"
        subtitle="Flexible, all-inclusive copier rental plans for businesses in Dubai, Abu Dhabi, and Sharjah."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24">
          <section className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-semibold">Why Rent a Photocopier with DEITS?</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Save on upfront costs, eliminate maintenance hassles, and get access to the latest technology with our flexible rental solutions.
            </p>
          </section>
          <section className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="text-center p-4">
                  <div className="inline-block bg-deits-blue text-white p-4 rounded-full">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="mt-16 md:mt-24">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-display font-semibold">Our Rental Plans</h2>
              <p className="mt-4 text-muted-foreground">Simple, transparent pricing to fit your budget.</p>
            </div>
            <Card className="mt-8">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Plan</TableHead>
                    <TableHead>Monthly Fee</TableHead>
                    <TableHead>Included Prints</TableHead>
                    <TableHead>Cost Per Color Print</TableHead>
                    <TableHead>Ideal For</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pricingPlans.map((plan) => (
                    <TableRow key={plan.plan}>
                      <TableCell className="font-medium">{plan.plan}</TableCell>
                      <TableCell>{plan.monthlyFee}</TableCell>
                      <TableCell>{plan.includedPrints}</TableCell>
                      <TableCell>{plan.colorCost}</TableCell>
                      <TableCell>{plan.idealFor}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
            <p className="text-center mt-4 text-sm text-muted-foreground">*Prices are indicative. Contact us for a custom quote based on your specific needs.</p>
          </section>
          <section className="mt-16 md:mt-24 bg-muted rounded-lg p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-display font-semibold">Get Your Custom Quote Today</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Ready to find the perfect photocopier solution for your office? Contact our team for a no-obligation consultation and a personalized quote.
              </p>
              <div className="mt-8">
                <Button size="lg" className="bg-deits-gold text-deits-blue hover:bg-deits-gold/90 font-semibold" asChild>
                  <Link to="/contact">Request a Quote</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}