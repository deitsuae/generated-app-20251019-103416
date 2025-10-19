import React from 'react';
import { PageHeader } from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Gamepad2, DraftingCompass, Building2, Cpu } from 'lucide-react';
import { SEO } from '@/components/SEO';
const pcBuilds = [
  {
    icon: DraftingCompass,
    title: 'Architect & Draftsman PC',
    description: 'Optimized for AutoCAD, Revit, and other demanding design software. Powered by high-frequency CPUs and professional GPUs for smooth 2D and 3D workflows.',
    specs: ['Intel Core i7/i9', 'NVIDIA Quadro/RTX', '32GB+ DDR5 RAM', 'NVMe SSD Storage']
  },
  {
    icon: Building2,
    title: '3D Design & Rendering PC',
    description: 'Built for 3D artists and animators using Blender, 3ds Max, and V-Ray. Maximum core counts and powerful GPUs to slash rendering times.',
    specs: ['AMD Ryzen 9 / Threadripper', 'NVIDIA GeForce RTX 40 Series', '64GB+ DDR5 RAM', 'High-Speed NVMe SSDs']
  },
  {
    icon: Gamepad2,
    title: 'Elite Gaming PC',
    description: 'Experience ultimate gaming performance with builds designed for high frame rates at 4K resolution. Top-tier components for a competitive edge.',
    specs: ['Intel Core i9 / AMD Ryzen 7 X3D', 'NVIDIA GeForce RTX 4080/4090', '32GB DDR5 RGB RAM', 'Gen4 NVMe SSD']
  },
  {
    icon: Cpu,
    title: 'Office Workstation',
    description: 'A reliable and powerful PC for demanding office tasks, multitasking, and business applications. Built for stability and productivity.',
    specs: ['Intel Core i5 / AMD Ryzen 5', 'Integrated or Entry-level GPU', '16GB DDR4/DDR5 RAM', 'SATA/NVMe SSD']
  }
];
export function CustomPcBuildsPage() {
  return (
    <div>
      <SEO
        title="High-Performance Custom PC Builds"
        description="Custom-built PCs engineered for architects, designers, gamers, and power users in the UAE. Get a quote for your perfect high-performance workstation."
        keywords="custom pc build dubai, gaming pc UAE, workstation pc for designers, architect pc build"
      />
      <PageHeader
        title="High-Performance Custom PC Builds"
        subtitle="PCs engineered for professionals. Tailored for architects, designers, gamers, and power users."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pcBuilds.map((build) => (
              <Card key={build.title} className="flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex-row items-start gap-4">
                  <div className="bg-deits-blue text-white p-3 rounded-lg mt-1">
                    <build.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-semibold">{build.title}</CardTitle>
                    <CardDescription className="mt-1">{build.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <h4 className="font-semibold mb-2">Key Components:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {build.specs.map(spec => <li key={spec} className="flex items-center gap-2">✓ {spec}</li>)}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/contact">Configure & Quote</Link>
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