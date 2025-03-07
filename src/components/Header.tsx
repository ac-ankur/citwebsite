import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Main container
const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0 24px;
`;

// Glass panel effect
const GlassPanel = styled(motion.div)<{ $scrolled: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 16px auto;
  padding: ${props => props.$scrolled ? "10px 24px" : "16px 24px"};
  background: ${props => props.$scrolled 
    ? "rgba(0, 0, 0, 0.8)" 
    : "linear-gradient(90deg, rgba(0, 0, 0, 0.3), rgba(20, 0, 0, 0.4))"};
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 0, 0, 0.1);
  box-shadow: ${props => props.$scrolled 
    ? "0 10px 30px -10px rgba(180, 0, 0, 0.3)" 
    : "0 20px 80px -20px rgba(180, 0, 0, 0.15)"};
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent 0%, 
      rgba(255, 0, 0, 0.3) 20%, 
      rgba(255, 0, 0, 0.8) 50%,
      rgba(255, 0, 0, 0.3) 80%,
      transparent 100%);
  }
`;

// Animated logo
const LogoContainer = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 10;
`;

const LogoSymbol = styled(motion.div)`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #ff0000, #990000);
  border-radius: 8px;
  transform: rotate(45deg);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 20px rgba(255, 0, 0, 0.3);
  
  &::before {
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 4px;
    background: black;
    border: 2px solid rgba(255, 255, 255, 0.8);
  }
`;

const LogoText = styled(motion.div)`
  font-size: 26px;
  font-weight: 800;
  background: linear-gradient(to right, #ffffff, #ff9999);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 1px;
`;

// Navigation
const NavLinks = styled(motion.div)`
  display: flex;
  gap: 40px;
  align-items: center;
  
  @media (max-width: 900px) {
    display: none;
  }
`;

const NavItem = styled(motion.div)`
  position: relative;
  cursor: pointer;
`;

const NavText = styled(motion.span)`
  font-size: 16px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: 0.5px;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ff3333;
  }
`;

const NavIndicator = styled(motion.div)`
  position: absolute;
  bottom: -6px;
  left: 0;
  right: 0;
  height: 2px;
  background: #ff0000;
  border-radius: 4px;
  box-shadow: 0 0 10px #ff0000;
`;

// Action button
const ActionButton = styled(motion.button)`
  position: relative;
  background: transparent;
  color: white;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
  padding: 10px 28px;
  border: none;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #ff3333, #990000);
    border-radius: 30px;
    transform: scaleX(1);
  }
  
  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background: linear-gradient(135deg, #990000, #ff3333);
    border-radius: 28px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::after {
    opacity: 1;
  }
`;

// Mobile menu elements
const MobileMenuButton = styled(motion.button)`
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 2000;
  
  @media (max-width: 900px) {
    display: block;
  }
`;

const BurgerIcon = styled(motion.div)`
  width: 32px;
  height: 20px;
  position: relative;
  
  span {
    position: absolute;
    width: 100%;
    height: 2px;
    background: white;
    border-radius: 2px;
    transition: all 0.3s ease;
    left: 0;
    
    &:nth-child(1) {
      top: 0;
    }
    
    &:nth-child(2) {
      top: 9px;
      width: 80%;
    }
    
    &:nth-child(3) {
      bottom: 0;
    }
  }
`;

const MobileMenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const MobileNavItem = styled(motion.div)`
  margin: 16px 0;
  font-size: 24px;
  font-weight: 600;
  color: white;
  cursor: pointer;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: -20px;
    right: -20px;
    height: 2px;
    background: linear-gradient(90deg, 
      transparent 0%, 
      rgba(255, 0, 0, 0.4) 20%, 
      rgba(255, 0, 0, 0.8) 50%,
      rgba(255, 0, 0, 0.4) 80%,
      transparent 100%);
    bottom: -8px;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease;
  }
  
  &:hover::after {
    transform: scaleX(1);
  }
`;

const RadialBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  
  &::before {
    content: '';
    position: absolute;
    top: -100px;
    right: -100px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 0, 0, 0.2) 0%, transparent 70%);
    filter: blur(30px);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -150px;
    left: -100px;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(80, 0, 0, 0.15) 0%, transparent 70%);
    filter: blur(40px);
  }
`;

// Header component
const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0.95]);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Technologies", path: "/technologies" },
    { name: "Domain Verticals", path: "/domainvertical" },
    { name: "Services", path: "/services" },
  
  
    { name: "Team", path: "/team" },
  ];  
  
  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.25, 1, 0.5, 1]
      }
    })
  };
  
  const mobileMenuVariants = {
    closed: { 
      opacity: 0,
      clipPath: "circle(0% at calc(100% - 40px) 40px)"
    },
    open: { 
      opacity: 1,
      clipPath: "circle(150% at calc(100% - 40px) 40px)",
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <HeaderContainer ref={headerRef} style={{ opacity }}>
      <GlassPanel 
        $scrolled={scrolled}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
      >
        <RadialBackground />
        
        <LogoContainer>
          <LogoSymbol 
            whileHover={{ rotate: 225, transition: { duration: 0.5 } }} 
            whileTap={{ scale: 0.9 }}
          />
          <LogoText>ConsultIT</LogoText>
        </LogoContainer>
        
        <NavLinks>
          {navItems.map((item, i) => (
            <NavItem 
              key={item}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={variants}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
                <Link to={item.path} style={{ textDecoration: "none" }}>
                <NavText>{item.name}</NavText>
              </Link>
              <AnimatePresence>
                {hoveredIndex === i && (
                  <NavIndicator
                    layoutId="navIndicator"
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    exit={{ scaleX: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>
            </NavItem>
          ))}
          
          <ActionButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Contact Us
          </ActionButton>
        </NavLinks>
        
        <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
          <BurgerIcon>
            <motion.span 
              animate={isOpen ? { top: "9px", rotate: 45 } : { top: "0px", rotate: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span 
              animate={isOpen ? { opacity: 0, width: "0%" } : { opacity: 1, width: "80%" }}
              transition={{ duration: 0.3 }}
            />
            <motion.span 
              animate={isOpen ? { bottom: "9px", rotate: -45 } : { bottom: "0px", rotate: 0 }}
              transition={{ duration: 0.3 }}
            />
          </BurgerIcon>
        </MobileMenuButton>
      </GlassPanel>
      
      <AnimatePresence>
        {isOpen && (
          <MobileMenuOverlay
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {navItems.map((item, i) => (
              <MobileNavItem
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ 
                  delay: i * 0.1,
                  duration: 0.4
                }}
                whileHover={{ scale: 1.05, color: "#ff3333" }}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </MobileNavItem>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: navItems.length * 0.1, duration: 0.4 }}
            >
              <ActionButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ marginTop: 30 }}
              >
                Contact Us
              </ActionButton>
            </motion.div>
          </MobileMenuOverlay>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header;