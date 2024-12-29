import { Droplet, Flask, Truck, Settings, Wrench, MoreHorizontal } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Water Can",
    description: "Fresh drinking water in convenient cans for home and office use",
    icon: Droplet,
    href: "/services/water-can",
  },
  {
    title: "Water Bottle",
    description: "Premium bottled water in various sizes for all occasions",
    icon: Flask,
    href: "/services/water-bottle",
  },
  {
    title: "Water Tank Lorry",
    description: "Bulk water delivery for large-scale requirements",
    icon: Truck,
    href: "/services/water-tank",
  },
  {
    title: "Purifier Service",
    description: "Professional water purifier maintenance and repair",
    icon: Settings,
    href: "/services/purifier",
  },
  {
    title: "Installation",
    description: "Expert installation of water systems and purifiers",
    icon: Wrench,
    href: "/services/installation",
  },
  {
    title: "More Services",
    description: "Discover our full range of water solutions",
    icon: MoreHorizontal,
    href: "/services",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive water solutions tailored to your needs. From regular water delivery to
            professional installation services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;