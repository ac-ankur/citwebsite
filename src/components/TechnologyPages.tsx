import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import styled from "styled-components";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

// Import animated icons for each technology
import oracleIcon from "../assets/icons/technologies/oracledb.gif";
import cloudIcon from "../assets/icons/technologies/cloud-computing.gif";
import dataScienceIcon from "../assets/icons/technologies/technology.gif";
import aiIcon from "../assets/icons/technologies/artificial-intelligence.gif";
import bigDataIcon from "../assets/icons/technologies/big-data.gif";
import iotIcon from "../assets/icons/technologies/iot.gif";
import rpaIcon from "../assets/icons/technologies/automation.gif";
import customAppsIcon from "../assets/icons/technologies/customapp.gif";

const techIcons = [
  { icon: oracleIcon, title: "Oracle Application and Apex" },
  { icon: cloudIcon, title: "Cloud Computing" },
  { icon: dataScienceIcon, title: "Data Science" },
  { icon: aiIcon, title: "Artificial Intelligence" },
  { icon: bigDataIcon, title: "Big Data / Traditional DB" },
  { icon: iotIcon, title: "Internet Of Things" },
  { icon: rpaIcon, title: "RPA" },
  { icon: customAppsIcon, title: "Custom Applications" },
];

// Define prop interfaces for styled components
interface MobileAwareProps {
  isMobile?: boolean;
}

// Main container with perspective for 3D effect
const Perspective3DContainer = styled(Box)`
  perspective: 2000px;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #121212;
  position: relative;
  overflow: hidden;
`;

// Animated background gradient
const AnimatedBackground = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, #300 0%, #000 70%);
  opacity: 0.5;
  z-index: 0;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    opacity: 0.05;
    mix-blend-mode: overlay;
  }
`;

// Floating title with neon glow
const FloatingTitle = styled(Typography)`
  position: absolute;
  top: 15%;
  margin-bottom:40px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff0000;
  z-index: 10;
  font-weight: 700;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 40%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #ff0000, transparent);
  }
`;

// 3D stack container
const StackContainer = styled(Box)`
  position: relative;
  width: 90%;
  max-width: 1200px;
  height: 75vh;
  transform-style: preserve-3d;
  z-index: 1;
`;

// Individual stacked card
const StackCard = styled(Box)<MobileAwareProps>`
  position: absolute;
  width: ${props => props.isMobile ? '85%' : '65%'};
  height: ${props => props.isMobile ? '35%' : '60%'};
  border-radius: 20px;
  background: rgba(20, 20, 20, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 0, 0, 0.2);
  overflow: hidden;
  display: flex;
  flex-direction: ${props => props.isMobile ? 'column' : 'row'};
  padding: ${props => props.isMobile ? '1rem' : '2rem'};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), 
              opacity 0.8s ease;
  transform-origin: center;
  transform-style: preserve-3d;
  left: 0;
  right: 0;
  margin: auto;
  top: 0;
  bottom: 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, 
                rgba(255, 0, 0, 0.1) 0%, 
                rgba(0, 0, 0, 0) 60%);
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, transparent, #ff0000, transparent);
  }
`;

// Image container with 3D effect
const ImageContainer = styled(Box)<MobileAwareProps>`
  flex: ${props => props.isMobile ? '1' : '0 0 40%'};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    width: 150%;
    height: 150%;
    background: radial-gradient(circle, rgba(255, 0, 0, 0.2) 0%, transparent 70%);
    animation: pulseGlow 3s infinite alternate;
  }
  
  @keyframes pulseGlow {
    0% {
      opacity: 0.5;
      transform: scale(0.8);
    }
    100% {
      opacity: 0.8;
      transform: scale(1.1);
    }
  }
`;

// Tech image with hover effect
const TechImage = styled.img`
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
  filter: invert(1) drop-shadow(0 0 5px rgba(255, 0, 0, 0.7));
  transform: translateZ(30px);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateZ(50px) scale(1.1);
  }
`;

// Content container
const ContentContainer = styled(Box)<MobileAwareProps>`
  flex: ${props => props.isMobile ? '2' : '0 0 60%'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${props => props.isMobile ? '1rem 0' : '0 2rem'};
`;

// Navigation buttons
const NavButton = styled(IconButton)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(20, 20, 20, 0.7) !important;
  color: #ff0000 !important;
  border: 1px solid rgba(255, 0, 0, 0.3) !important;
  z-index: 100;
  transition: all 0.3s ease !important;
  
  &:hover {
    background-color: rgba(255, 0, 0, 0.2) !important;
    transform: translateY(-50%) scale(1.1) !important;
  }
  
  &.left {
    left: 20px;
  }
  
  &.right {
    right: 20px;
  }
`;

// Progress dots
const ProgressContainer = styled(Box)`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
`;

interface ProgressDotProps {
  active?: boolean;
}

const ProgressDot = styled(Box)<ProgressDotProps>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.active ? '#ff0000' : 'rgba(255, 255, 255, 0.3)'};
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.2);
  }
`;

const TechnologiesPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const cardsRef = useRef<(React.RefObject<HTMLDivElement>)[]>([]);
  
  // Configure refs for cards
  cardsRef.current = Array(techIcons.length)
    .fill(null)
    .map((_, i) => cardsRef.current[i] || React.createRef<HTMLDivElement>());

  // Initialize card positions on mount
  useEffect(() => {
    updateCardPositions();
    
    // Auto-rotate cards every 5 seconds
    const interval = setInterval(() => {
      if (!isAnimating) {
        handleNext();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeIndex, isAnimating]);

  // Function to calculate and update card positions
  const updateCardPositions = () => {
    techIcons.forEach((_, index) => {
      if (cardsRef.current[index]?.current) {
        const card = cardsRef.current[index].current;
        const diff = index - activeIndex;
        
        // Calculate position based on index difference
        if (diff === 0) {
          // Active card
          card.style.transform = `translateZ(0px) rotateY(0deg)`;
          card.style.opacity = '1';
          card.style.zIndex = `${techIcons.length}`;
        } else if (diff > 0 && diff < 3) {
          // Cards to the right (behind)
          card.style.transform = `translateZ(${-100 * diff}px) translateX(${50 * diff}px) rotateY(${-5 * diff}deg)`;
          card.style.opacity = `${1 - (diff * 0.3)}`;
          card.style.zIndex = `${techIcons.length - diff}`;
        } else if (diff < 0 && diff > -3) {
          // Cards to the left (behind)
          card.style.transform = `translateZ(${100 * diff}px) translateX(${50 * diff}px) rotateY(${-5 * diff}deg)`;
          card.style.opacity = `${1 - (Math.abs(diff) * 0.3)}`;
          card.style.zIndex = `${techIcons.length - Math.abs(diff)}`;
        } else {
          // Hide cards too far away
          card.style.opacity = '0';
          card.style.zIndex = '0';
        }
      }
    });
  };

  // Handle next card
  const handleNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === techIcons.length - 1 ? 0 : prev + 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  };

  // Handle previous card
  const handlePrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? techIcons.length - 1 : prev - 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  };

  // Handle direct navigation via progress dots
  const handleDotClick = (index: number) => {
    if (isAnimating || index === activeIndex) return;
    
    setIsAnimating(true);
    setActiveIndex(index);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  };

  return (
    <Box style={{backgroundColor: "#121212"}}>
    <Perspective3DContainer>
      <AnimatedBackground />
      
      <FloatingTitle variant="h3">Our Technologies</FloatingTitle>
      
      <StackContainer>
        {techIcons.map((tech, index) => (
          <StackCard
            key={index}
            ref={cardsRef.current[index]}
            isMobile={isMobile}
          >
            <ImageContainer isMobile={isMobile}>
              <TechImage src={tech.icon} alt={tech.title} />
            </ImageContainer>
            
            <ContentContainer isMobile={isMobile}>
              <Typography
                variant={isMobile ? "h5" : "h4"}
                sx={{
                  fontWeight: "bold",
                  marginBottom: 2,
                  background: "linear-gradient(90deg, #ff0000, #cc0000)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  textShadow: "0 0 5px rgba(255,0,0,0.2)",
                }}
              >
                {tech.title}
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  color: "#e0e0e0",
                  marginBottom: 3,
                  maxWidth: "90%",
                  lineHeight: 1.6,
                }}
              >
                {`Our advanced ${tech.title} solutions provide cutting-edge capabilities tailored to your business needs. Leverage our expertise to stay ahead of the competition.`}
              </Typography>
              
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {Array(5).fill(null).map((_, i) => (
                  <Box
                    key={i}
                    sx={{
                      width: "30px",
                      height: "4px",
                      backgroundColor: i < 4 ? "#ff0000" : "rgba(255,0,0,0.3)",
                      borderRadius: "2px",
                    }}
                  />
                ))}
                <Typography sx={{ color: "#999", marginLeft: 1, fontSize: "14px" }}>
                  {`${index + 1}/${techIcons.length}`}
                </Typography>
              </Box>
            </ContentContainer>
          </StackCard>
        ))}
      </StackContainer>
      
      <NavButton className="left" onClick={handlePrev}>
        <KeyboardArrowLeftIcon />
      </NavButton>
      
      <NavButton className="right" onClick={handleNext}>
        <KeyboardArrowRightIcon />
      </NavButton>
      
      <ProgressContainer>
        {techIcons.map((_, index) => (
          <ProgressDot
            key={index}
            active={index === activeIndex}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </ProgressContainer>
    </Perspective3DContainer>
    </Box>
  );
};

export default TechnologiesPage;