import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Briefcase, Printer, HardDrive, Cpu, Phone } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { cn } from '@/lib/utils';
const services: { title: string; href: string; description: string, icon: React.ElementType }[] = [
  { title: 'IT Managed Services', href: '/services', description: 'Proactive IT management for your business.', icon: Briefcase },
  { title: 'Photocopier Rental', href: '/photocopier-rental', description: 'Flexible and affordable copier rentals.', icon: Printer },
  { title: 'Toner & Cartridge Supply', href: '/toners-cartridges', description: 'Genuine supplies for all major brands.', icon: HardDrive },
  { title: 'Custom PC Builds', href: '/custom-pcs', description: 'High-performance PCs for professionals.', icon: Cpu },
];
export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/photocopier-rental', label: 'Photocopier Rental' },
    { to: '/toners-cartridges', label: 'Toners & Cartridges' },
    { to: '/custom-pcs', label: 'Custom PCs' },
    { to: '/blog', label: 'Blog' },
  ];
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Logo />
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavLink to="/" className={({ isActive }) => cn(navigationMenuTriggerStyle(), isActive && "bg-accent text-accent-foreground", "font-medium")}>Home</NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavLink to="/about" className={({ isActive }) => cn(navigationMenuTriggerStyle(), isActive && "bg-accent text-accent-foreground", "font-medium")}>About Us</NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {services.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          to={component.href}
                          icon={component.icon}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavLink to="/photocopier-rental" className={({ isActive }) => cn(navigationMenuTriggerStyle(), isActive && "bg-accent text-accent-foreground", "font-medium")}>Photocopier Rental</NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavLink to="/toners-cartridges" className={({ isActive }) => cn(navigationMenuTriggerStyle(), isActive && "bg-accent text-accent-foreground", "font-medium")}>Toners</NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavLink to="/custom-pcs" className={({ isActive }) => cn(navigationMenuTriggerStyle(), isActive && "bg-accent text-accent-foreground", "font-medium")}>Custom PCs</NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavLink to="/blog" className={({ isActive }) => cn(navigationMenuTriggerStyle(), isActive && "bg-accent text-accent-foreground", "font-medium")}>Blog</NavLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
          <div className="hidden md:flex items-center gap-2">
            <Button asChild className="bg-deits-gold text-deits-blue hover:bg-deits-gold/90 font-semibold">
              <Link to="/contact">
                Get a Quote
                <Phone className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs">
                <div className="p-4">
                  <Link to="/" onClick={() => setIsOpen(false)}><Logo /></Link>
                  <nav className="mt-8 flex flex-col space-y-2">
                    {[...navLinks, { to: '/contact', label: 'Contact' }].map((link) => (
                      <NavLink
                        key={link.to}
                        to={link.to}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                          cn(
                            "text-lg font-medium text-foreground/80 transition-colors hover:text-foreground py-2 rounded-md px-2",
                            isActive && "text-deits-blue font-semibold bg-accent"
                          )
                        }
                      >
                        {link.label}
                      </NavLink>
                    ))}
                  </nav>
                  <Button asChild className="mt-8 w-full bg-deits-gold text-deits-blue hover:bg-deits-gold/90 font-semibold">
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                      Get a Quote
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & { icon: React.ElementType, title: string }
>(({ className, title, children, icon: Icon, to, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={to}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            <Icon className="h-5 w-5 text-deits-blue" />
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"