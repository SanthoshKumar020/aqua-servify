import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

const ServiceCard = ({ title, description, icon: Icon, href }: ServiceCardProps) => {
  return (
    <Link to={href}>
      <motion.div
        whileHover={{ y: -5 }}
        className="p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
      >
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </motion.div>
    </Link>
  );
};

export default ServiceCard;