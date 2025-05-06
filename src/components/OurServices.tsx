import React, { useState, useEffect, useRef } from "react";
import "../assets/css/OurServices.css";
import { FaDatabase, FaCloud, FaMobileAlt, FaRobot, FaCogs, FaHeadset, FaShoppingCart } from "react-icons/fa";
import { GiDatabase } from "react-icons/gi";

// Import GSAP properly - make sure these packages are installed
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins with GSAP
gsap.registerPlugin(ScrollTrigger);

// Create a Map outside the component to store our handlers
const handlerMap = new Map<HTMLDivElement, (e: MouseEvent) => void>();

const Services: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  // Use proper typing for refs
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  
  // Initialize refs arrays properly with specific types
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  
  // Define services with unique colors
  const services = [
    { 
      icon: <FaDatabase />, 
      title: "Database Support", 
      description: "Comprehensive database management and optimization solutions",
      color: "#ff3333",
      glowColor: "rgba(255, 51, 51, 0.6)"
    },
    { 
      icon: <FaCloud />, 
      title: "Cloud Support", 
      description: "Seamless cloud integration and maintenance services",
      color: "#33a1ff",
      glowColor: "rgba(51, 161, 255, 0.6)"
    },
    { 
      icon: <FaShoppingCart />, 
      title: "Ecommerce Portals", 
      description: "Custom ecommerce solutions to boost your online business",
      color: "#ff9933",
      glowColor: "rgba(255, 153, 51, 0.6)"
    },
    { 
      icon: <FaMobileAlt />, 
      title: "Mobile Applications", 
      description: "Innovative mobile app development for all platforms",
      color: "#66cc66",
      glowColor: "rgba(102, 204, 102, 0.6)"
    },
    { 
      icon: <FaRobot />, 
      title: "RPA Services", 
      description: "Robotic process automation to streamline your operations",
      color: "#cc66ff",
      glowColor: "rgba(204, 102, 255, 0.6)"
    },
    { 
      icon: <FaCogs />, 
      title: "Custom Applications", 
      description: "Tailored software solutions for your unique business needs",
      color: "#ff6699",
      glowColor: "rgba(255, 102, 153, 0.6)"
    },
    { 
      icon: <FaHeadset />, 
      title: "Complete IT Help Desk", 
      description: "24/7 technical support and IT assistance",
      color: "#ffcc33",
      glowColor: "rgba(255, 204, 51, 0.6)"
    },
    { 
      icon: <GiDatabase />, 
      title: "Oracle Applications", 
      description: "Expert Oracle implementation and consulting services",
      color: "#33cccc",
      glowColor: "rgba(51, 204, 204, 0.6)"
    },
  ];

  // Reset refs when component mounts
  useEffect(() => {
    // Initialize ref arrays to the correct length based on services
    cardsRef.current = Array(services.length).fill(null);
    iconRefs.current = Array(services.length).fill(null);
    titleRefs.current = Array(services.length).fill(null);
  }, []);

  // Create circle path for icons to follow
  // const createCirclePath = () => {
  //   const radius = 20;
  //   const startAngle = -90;
    
  //   const start = {
  //     x: Math.cos((startAngle * Math.PI) / 180) * radius,
  //     y: Math.sin((startAngle * Math.PI) / 180) * radius
  //   };
    
  //   return `M ${start.x},${start.y} A ${radius},${radius} 0 1,1 ${start.x - 0.001},${start.y - 0.001}`;
  // };

  // Create a function to generate unique particle effects for each icon
  const createParticles = (iconElement: HTMLDivElement, color: string) => {
    // Check if iconElement exists before creating particles
    if (!iconElement) return;
    
    // Create 12 particles
    for (let i = 0; i < 12; i++) {
      const particle = document.createElement('div');
      particle.className = 'icon-particle';
      particle.style.position = 'absolute';
      particle.style.width = '6px';
      particle.style.height = '6px';
      particle.style.borderRadius = '50%';
      particle.style.backgroundColor = color;
      particle.style.pointerEvents = 'none';
      
      iconElement.appendChild(particle);
      
      // Animate each particle on a random path
      gsap.to(particle, {
        x: `random(-30, 30)`,
        y: `random(-30, 30)`,
        opacity: 0,
        scale: `random(0.5, 1.5)`,
        duration: `random(1, 2)`,
        ease: "power3.out",
        onComplete: () => {
          if (particle.parentNode === iconElement) {
            particle.remove();
          }
        }
      });
    }
  };

  // Animation for card hover effects using GSAP
  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    setActiveIndex(index);
    
    const card = cardsRef.current[index];
    const iconElement = iconRefs.current[index];
    
    // Safety check for elements
    if (!card || !iconElement) return;
    
    const currentService = services[index];
    
    // Create particles
    createParticles(iconElement, currentService.color);
    
    // Card hover animation
    gsap.to(card, {
      scale: 1.08,
      boxShadow: `0 12px 30px ${currentService.glowColor}`,
      borderColor: currentService.color,
      borderWidth: '2px',
      duration: 0.4,
      ease: "back.out(1.7)"
    });
    
    // Icon animation
    gsap.to(iconElement, {
      color: currentService.color,
      scale: 1.2,
      filter: `drop-shadow(0 0 12px ${currentService.glowColor})`,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)"
    });
    
    // Add mouse move effect - using a properly typed event handler
    const handleMouseMove = (e: MouseEvent) => {
      if (hoveredIndex === index) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xPercent = (x / rect.width) - 0.5;
        const yPercent = (y / rect.height) - 0.5;
        
        gsap.to(card, {
          rotationY: xPercent * 10,
          rotationX: yPercent * -10,
          duration: 0.5,
          ease: "power2.out"
        });
        
        gsap.to(iconElement, {
          x: xPercent * 15,
          y: yPercent * 15,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    };
    
    // Add event listener
    card.addEventListener('mousemove', handleMouseMove);
    
    // Store the function to remove it later
    // Store the function using a type-safe approach
card.dataset.hasMouseHandler = "true";
// Use a Map to store handlers instead of attaching directly to the element
const handlerMap = new Map<HTMLDivElement, (e: MouseEvent) => void>();
handlerMap.set(card, handleMouseMove);
    
    // Create rotating radial glow around icon
    const iconGlow = document.createElement('div');
    iconGlow.className = 'icon-glow';
    iconGlow.style.position = 'absolute';
    iconGlow.style.width = '100%';
    iconGlow.style.height = '100%';
    iconGlow.style.borderRadius = '50%';
    iconGlow.style.background = `radial-gradient(circle, ${currentService.glowColor} 0%, transparent 70%)`;
    iconGlow.style.opacity = '0';
    iconGlow.style.transform = 'scale(1.5)';
    iconElement.appendChild(iconGlow);
    
    gsap.to(iconGlow, {
      opacity: 0.7,
      rotation: 360,
      repeat: -1,
      duration: 3,
      ease: "none"
    });
    
    // Reveal description with typing effect
    const descriptionEl = card.querySelector(".service-description") as HTMLElement;
    if (descriptionEl) {
      gsap.to(descriptionEl, {
        opacity: 1,
        height: "auto",
        duration: 0.3
      });
    }
    
    // Animate title with color change
    const titleEl = card.querySelector(".service-title") as HTMLElement;
    if (titleEl) {
      gsap.to(titleEl, {
        color: currentService.color,
        textShadow: `0 0 5px ${currentService.glowColor}`,
        duration: 0.3
      });
    }
    
    // Card background animation
    const backgroundEl = card.querySelector(".card-background") as HTMLElement;
    if (backgroundEl) {
      gsap.to(backgroundEl, {
        opacity: 1,
        background: `radial-gradient(circle, ${currentService.glowColor} 0%, rgba(26, 26, 26, 0.8) 70%)`,
        duration: 0.5
      });
    }
    
    // Create ripple effect
    const ripple = document.createElement('div');
    ripple.className = 'card-ripple';
    ripple.style.position = 'absolute';
    ripple.style.top = '50%';
    ripple.style.left = '50%';
    ripple.style.transform = 'translate(-50%, -50%)';
    ripple.style.width = '10px';
    ripple.style.height = '10px';
    ripple.style.borderRadius = '50%';
    ripple.style.border = `2px solid ${currentService.color}`;
    ripple.style.pointerEvents = 'none';
    card.appendChild(ripple);
    
    gsap.to(ripple, {
      width: '300px',
      height: '300px',
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      onComplete: () => {
        if (ripple.parentNode === card) {
          ripple.remove();
        }
      }
    });
  };

  const handleMouseLeave = (index: number) => {
    setHoveredIndex(null);
    
    const card = cardsRef.current[index];
    const iconElement = iconRefs.current[index];
    
    // Safety check for elements
    if (!card || !iconElement) return;
    
    // Remove mousemove event listener using our Map approach
    if (card.dataset.hasMouseHandler === "true") {
      const handler = handlerMap.get(card);
      if (handler) {
        card.removeEventListener('mousemove', handler);
        handlerMap.delete(card);
      }
      delete card.dataset.hasMouseHandler;
    }
    
    // Remove dynamic elements
    const iconGlow = iconElement.querySelector('.icon-glow');
    if (iconGlow) iconGlow.remove();
    
    const particles = iconElement.querySelectorAll('.icon-particle');
    particles.forEach(particle => particle.remove());
    
    const ripples = card.querySelectorAll('.card-ripple');
    ripples.forEach(ripple => ripple.remove());
    
    // Reset card
    gsap.to(card, {
      scale: 1,
      rotationY: 0,
      rotationX: 0,
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
      borderColor: "transparent",
      duration: 0.4,
      ease: "power2.inOut"
    });
    
    // Reset icon
    gsap.to(iconElement, {
      x: 0,
      y: 0,
      scale: 1,
      color: "white",
      filter: "none",
      duration: 0.4,
      ease: "power2.inOut"
    });
    
    // Reset description
    const descriptionEl = card.querySelector(".service-description") as HTMLElement;
    if (descriptionEl) {
      gsap.to(descriptionEl, {
        opacity: 0,
        height: 0,
        duration: 0.3,
        ease: "power2.inOut"
      });
    }
    
    // Reset title
    const titleEl = card.querySelector(".service-title") as HTMLElement;
    if (titleEl) {
      gsap.to(titleEl, {
        color: "white",
        textShadow: "none",
        duration: 0.3
      });
    }
    
    // Reset background
    const backgroundEl = card.querySelector(".card-background") as HTMLElement;
    if (backgroundEl) {
      gsap.to(backgroundEl, {
        opacity: 0,
        duration: 0.3
      });
    }
    
    // Add subtle bounce effect
    gsap.fromTo(card, 
      { y: 0 },
      {
        y: -5,
        yoyo: true,
        repeat: 1,
        duration: 0.2,
        ease: "power2.inOut"
      }
    );
  };

  // Initialize animations when component mounts
  useEffect(() => {
    // Ensure window is defined (for SSR)
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }

    // Safety timeout to ensure DOM elements are ready
    const timer = setTimeout(() => {
      try {
        // Basic section animation
        if (sectionRef.current) {
          gsap.from(sectionRef.current, {
            backgroundPosition: "0% 100%",
            opacity: 0,
            duration: 1.5,
            ease: "power3.out"
          });
        }

        // Heading animation
        if (headingRef.current) {
          const headingTL = gsap.timeline();
          
          headingTL
            .from(headingRef.current, {
              y: 80,
              opacity: 0,
              duration: 1,
              ease: "back.out(1.7)"
            });
            
          const servicesTitle = headingRef.current.querySelector(".services-title") as HTMLElement;
          if (servicesTitle) {
            headingTL.to(servicesTitle, {
              backgroundPositionX: "200%",
              duration: 2,
              ease: "sine.inOut"
            });
          }
        }

        // Grid animation
        if (gridRef.current) {
          const masterTL = gsap.timeline({
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top bottom-=100",
              end: "bottom center",
              toggleActions: "play none none none"
            }
          });

          masterTL.fromTo(
            gridRef.current,
            { 
              rotationY: -15,
              rotationX: 10,
              scale: 0.9,
              opacity: 0
            },
            { 
              rotationY: 0,
              rotationX: 0,
              scale: 1, 
              opacity: 1,
              duration: 1.2,
              ease: "power3.out"
            }
          );

          // Card animations
          cardsRef.current.forEach((card, index) => {
            if (card) {
              masterTL.fromTo(
                card,
                { 
                  opacity: 0,
                  y: 50,
                  scale: 0.8
                },
                { 
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  duration: 0.7,
                  ease: "back.out(1.7)"
                },
                `-=0.5`
              );
              
              if (iconRefs.current[index]) {
                masterTL.fromTo(
                  iconRefs.current[index],
                  {
                    filter: "drop-shadow(0 0 0px white)",
                    scale: 0.8
                  },
                  {
                    filter: `drop-shadow(0 0 8px ${services[index].glowColor})`,
                    scale: 1,
                    duration: 1,
                    ease: "elastic.out(1, 0.3)"
                  },
                  `-=0.5`
                );
              }
              
              if (titleRefs.current[index]) {
                masterTL.fromTo(
                  titleRefs.current[index],
                  {
                    opacity: 0
                  },
                  {
                    opacity: 1,
                    duration: 0.4,
                    ease: "power2.inOut"
                  },
                  `-=0.7`
                );
              }
            }
          });
        }
      } catch (error) {
        console.error("GSAP animation error:", error);
      }
    }, 100); // Small delay to ensure refs are populated
    
    // Cleanup all GSAP animations and ScrollTriggers on unmount
    return () => {
      clearTimeout(timer);
      
      // Kill all tweens and timelines
      if (sectionRef.current) gsap.killTweensOf(sectionRef.current);
      if (headingRef.current) gsap.killTweensOf(headingRef.current);
      if (gridRef.current) gsap.killTweensOf(gridRef.current);
      
      cardsRef.current.forEach(card => {
        if (card) {
          gsap.killTweensOf(card);
          
          // Remove event listeners if needed
          if (card.dataset.hasMouseHandler === "true") {
            const handler = handlerMap.get(card);
            if (handler) {
              card.removeEventListener('mousemove', handler);
              handlerMap.delete(card);
            }
            delete card.dataset.hasMouseHandler;
          }
        }
      });
      
      iconRefs.current.forEach(icon => {
        if (icon) gsap.killTweensOf(icon);
      });
      
      titleRefs.current.forEach(title => {
        if (title) gsap.killTweensOf(title);
      });
      
      // Kill all ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Background ambient animations
  useEffect(() => {
    try {
      // Background animation for the section
      if (sectionRef.current) {
        gsap.to(sectionRef.current, {
          backgroundPosition: "100% 0%",
          duration: 20,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }
      
      // Title gradient animation
      if (headingRef.current) {
        const titleElement = headingRef.current.querySelector(".services-title") as HTMLElement;
        if (titleElement) {
          gsap.to(titleElement, {
            backgroundPosition: "200%",
            duration: 8,
            repeat: -1,
            ease: "sine.inOut"
          });
        }
      }
      
      // Subtle animations for icons when not hovered
      iconRefs.current.forEach((icon, index) => {
        if (icon && hoveredIndex !== index) {
          // Random floating effect
          gsap.to(icon, {
            y: gsap.utils.random(-8, 8),
            x: gsap.utils.random(-5, 5),
            rotation: gsap.utils.random(-5, 5),
            duration: gsap.utils.random(3, 6),
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          });
          
          // Subtle pulse effect
          gsap.to(icon, {
            scale: gsap.utils.random(0.95, 1.05),
            filter: `drop-shadow(0 0 ${Math.random() * 5 + 3}px ${services[index].glowColor})`,
            duration: gsap.utils.random(2, 4),
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          });
        }
      });
    } catch (error) {
      console.error("Background animation error:", error);
    }
    
    // Clean up animations on component unmount or when hoveredIndex changes
    return () => {
      iconRefs.current.forEach(icon => {
        if (icon) gsap.killTweensOf(icon);
      });
    };
  }, [hoveredIndex]);

  return (
    <section className="services-section" ref={sectionRef}>
      <div className="services-container">
        {/* Heading with animated underline */}
        <div className="services-heading" ref={headingRef}>
          <h3 className="services-title">Our Services</h3>
        </div>
              
        {/* Services grid */}
        <div className="services-grid" ref={gridRef}>
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card ${hoveredIndex === index ? 'hovered' : ''} ${activeIndex === index ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              ref={el => {
                if (el) cardsRef.current[index] = el;
              }}
            >
              <div className="card-background"></div>
              <div 
                className="service-icon"
                ref={el => {
                  if (el) iconRefs.current[index] = el;
                }}
              >
                {service.icon}
              </div>
              <h3 
                className="service-title"
                ref={el => {
                  if (el) titleRefs.current[index] = el;
                }}
              >
                {service.title}
              </h3>
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