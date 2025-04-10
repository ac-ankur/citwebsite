import React, { useState ,useEffect} from "react";
import "../assets/css/OurServices.css"
import { FaDatabase, FaCloud, FaMobileAlt, FaRobot, FaCogs, FaHeadset, FaShoppingCart } from "react-icons/fa";
import { GiDatabase } from "react-icons/gi";


interface Service {
  icon: React.ReactNode; 
  title: string;
  description: string;
}

const Services: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const services: Service[] = [
    { icon: <FaDatabase />, title: "Database Support", description: "Comprehensive database management and optimization solutions" },
    { icon: <FaCloud />, title: "Cloud Support", description: "Seamless cloud integration and maintenance services" },
    { icon: <FaShoppingCart />, title: "Ecommerce Portals", description: "Custom ecommerce solutions to boost your online business" },
    { icon: <FaMobileAlt />, title: "Mobile Applications", description: "Innovative mobile app development for all platforms" },
    { icon: <FaRobot />, title: "RPA Services", description: "Robotic process automation to streamline your operations" },
    { icon: <FaCogs />, title: "Custom Applications", description: "Tailored software solutions for your unique business needs" },
    { icon: <FaHeadset />, title: "Complete IT Help Desk", description: "24/7 technical support and IT assistance" },
    { icon: <GiDatabase />, title: "Oracle Applications", description: "Expert Oracle implementation and consulting services" },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
},[]);
  return (
    <section className="services-section">
      <div className="services-container">
        {/* Heading with animated underline */}
        <div className="services-heading">
          <h3 className="services-title">Our Services</h3>
          {/* <div className="animated-underline">
            <div className="underline-glow"></div>
          </div> */}
        </div>
       
        {/* Services grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card ${hoveredIndex === index ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="card-background"></div>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <div className="service-description">
                {service.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;