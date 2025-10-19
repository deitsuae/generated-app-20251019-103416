import React from 'react';
import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { SEO } from '@/components/SEO';
const tonerProducts = [
  { name: 'HP 85A Black Toner', brand: 'HP', price: 'AED 250', img: 'https://placehold.co/400x400/0b3d91/ffffff?text=HP+Toner' },
  { name: 'Canon 055 Black Toner', brand: 'Canon', price: 'AED 350', img: 'https://placehold.co/400x400/0b3d91/ffffff?text=Canon+Toner' },
  { name: 'Epson T502 Black Ink', brand: 'Epson', price: 'AED 60', img: 'https://placehold.co/400x400/0b3d91/ffffff?text=Epson+Ink' },
  { name: 'HP 83A Black Toner', brand: 'HP', price: 'AED 270', img: 'https://placehold.co/400x400/0b3d91/ffffff?text=HP+Toner' },
  { name: 'Canon 057 Toner', brand: 'Canon', price: 'AED 400', img: 'https://placehold.co/400x400/0b3d91/ffffff?text=Canon+Toner' },
  { name: 'Epson T252XL Black Ink', brand: 'Epson', price: 'AED 150', img: 'https://placehold.co/400x400/0b3d91/ffffff?text=Epson+Ink' },
  { name: 'HP 12A Black Toner', brand: 'HP', price: 'AED 220', img: 'https://placehold.co/400x400/0b3d91/ffffff?text=HP+Toner' },
  { name: 'Canon 137 Toner', brand: 'Canon', price: 'AED 300', img: 'https://placehold.co/400x400/0b3d91/ffffff?text=Canon+Toner' },
];
export function TonerCartridgePage() {
  return (
    <div>
      <SEO
        title="Toner & Cartridge Supply in UAE"
        description="Buy genuine and compatible toner cartridges for HP, Canon, Epson, and other major printer brands. Fast delivery across Dubai and the UAE."
        keywords="buy toner cartridge online UAE, HP toner dubai, Canon toner abu dhabi, printer supplies UAE"
      />
      <PageHeader
        title="Toner & Cartridge Supply"
        subtitle="Genuine and compatible toners for all major printer brands. Fast delivery across the UAE."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {tonerProducts.map((product) => (
              <Card key={product.name} className="flex flex-col overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                <img
                  src={product.img}
                  alt={product.name}
                  className="aspect-square w-full object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{product.brand}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-2xl font-semibold text-deits-blue">{product.price}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-deits-gold text-deits-blue hover:bg-deits-gold/90" asChild>
                    <Link to="/contact">Request Quote</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}