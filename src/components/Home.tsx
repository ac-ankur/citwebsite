import { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/swiper-bundle.css";
import styled from "styled-components";

// Import all the logos and icons from your original file
import airtelLogo from "../assets/images/clients/airtel.png";
import hclLogo from "../assets/images/clients/HCL.png";
import incedoLogo from "../assets/images/clients/incedo.png";
import bhartiAxaLogo from "../assets/images/clients/bhartiaxa.png";
import adoritGroupLogo from "../assets/images/clients/adoritgroup.png";
import cstLogo from "../assets/images/clients/Cst.png";
import cyberLogo from "../assets/images/clients/cyber.png";
import firstLogo from "../assets/images/clients/first.png";
import iffcoLogo from "../assets/images/clients/IFFCO.jpg";
import kosmosLogo from "../assets/images/clients/kosmos.png";
import kotakLogo from "../assets/images/clients/kotak.png";
import lifeTreeLogo from "../assets/images/clients/lifetree.png";
import lucentLogo from "../assets/images/clients/lucent.png";
import maxLogo from "../assets/images/clients/max.png";
import nanoSolarLogo from "../assets/images/clients/nanosolar.png";
import prakashLogo from "../assets/images/clients/prakash-removebg-preview.png";
import scubeLogo from "../assets/images/clients/Scube.png";
import stellarLogo from "../assets/images/clients/stellar.png";
import stpLogo from "../assets/images/clients/STP-logo-removebg-preview.png";
import extreiveLogo from "../assets/images/clients/extreive.png";
import companyImage from "../assets/images/cit.jpg";
import managementTeamIcon from "../assets/icons/management (1).gif";
import projectIcon from "../assets/icons/project.gif";
import techIcon from "../assets/icons/coding.gif";
import staffIcon from "../assets/icons/handshake.gif";
import customerIcon from "../assets/icons/customer-care.gif";
import productIcon from "../assets/icons/recommendation.gif";
import supportIcon from "../assets/icons/settings.gif";
import domainIcon from "../assets/icons/smart-contract.gif";

const techImages = [
  techIcon,
  domainIcon,
  supportIcon,
  managementTeamIcon,
  projectIcon,
  productIcon,
  customerIcon,
  staffIcon,
];

const clientLogos = [
  airtelLogo,
  hclLogo,
  incedoLogo,
  bhartiAxaLogo,
  extreiveLogo,
  adoritGroupLogo,
  cstLogo,
  cyberLogo,
  firstLogo,
  iffcoLogo,
  kosmosLogo,
  kotakLogo,
  lifeTreeLogo,
  lucentLogo,
  maxLogo,
  nanoSolarLogo,
  prakashLogo,
  scubeLogo,
  stellarLogo,
  stpLogo,
];

// Modern Glassmorphism Hero Section with Red/Black Theme
const GlassmorphismHero = styled(Box)`
  position: relative;
  height: 100vh;
  max-height: 800px;
  overflow: hidden;
  background: url(${companyImage}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 10, 0.5);
    backdrop-filter: blur(8px);
    z-index: 1;
  }
`;

const HeroContent = styled(Box)`
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  max-width: 1200px;
  padding: 0 2rem;
`;

const AnimatedText = styled(Typography)`
  overflow: hidden;
  margin: 0 auto;
  position: relative;
`;

// Modern Scroll Section with Clip Path - Red/Black theme
const ClipPathSection = styled(Box)`
  position: relative;
  padding: 8rem 2rem;
  background: rgb(91, 59, 59);
  clip-path: polygon(0 0, 100% 5%, 100% 95%, 0 100%);
  margin-top: -5rem;
  z-index: 10;
`;

// Floating Card Effect with Red/Black theme
const FloatingCard = styled(Card)`
  height: 100%;
  background: rgba(18, 18, 18, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.5s cubic-bezier(0.25, 0.75, 0.5, 1.25);
  transform: translateY(0) scale(1);
  position: relative;
  isolation: isolate;
  color: #f0f0f0;

  &:hover {
    transform: translateY(-15px) scale(1.03);
    box-shadow: 0 20px 40px rgba(187, 0, 0, 0.3);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #ff0000, #880000);
    z-index: -1;
  }
`;

// Neon Glow Title with Red theme
const NeonTitle = styled(Typography)`
  position: relative;
  color: transparent;
  background: linear-gradient(90deg, #ff0000, #cc0000);
  background-clip: text;
  -webkit-background-clip: text;
  display: inline-block;
  text-align: center;
  margin-bottom: 3rem;
  filter: drop-shadow(0 0 8px rgba(255, 0, 0, 0.5));
  font-weight: 700;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, #ff0000, #880000);
  }
`;

// Wavy Technology Section with Red/Black theme
const WavySection = styled(Box)`
  position: relative;
  padding: 8rem 2rem;
  background: #0a0a0a;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 120px;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23121212' fill-opacity='1' d='M0,192L60,181.3C120,171,240,149,360,149.3C480,149,600,171,720,165.3C840,160,960,128,1080,117.3C1200,107,1320,117,1380,122.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'%3E%3C/path%3E%3C/svg%3E") no-repeat;
    background-size: cover;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 120px;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23121212' fill-opacity='1' d='M0,224L60,229.3C120,235,240,245,360,240C480,235,600,213,720,192C840,171,960,149,1080,149.3C1200,149,1320,171,1380,181.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'%3E%3C/path%3E%3C/svg%3E") no-repeat;
    background-size: cover;
  }
`;

// Client Logo Hover Effect with Red/Black theme
const ClientLogoContainer = styled(Box)`
  background: rgb(255, 255, 255);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px) rotate(2deg);
    box-shadow: 0 15px 30px rgba(187, 0, 0, 0.2);
    border: 1px solid rgba(255, 0, 0, 0.3);
  }
`;

// Gradient Border Cards with hover effect - Red/Black theme
const GradientBorderCard = styled(Card)`
  position: relative;
  background: rgb(91, 59, 59);
  border-radius: 16px;
  padding: 1rem;
  overflow: hidden;
  transition: all 0.4s ease;
  color: #f0f0f0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    margin: -2px;
    border-radius: inherit;
    background: linear-gradient(135deg, #ff0000, #880000);
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 15px 30px rgba(187, 0, 0, 0.2);
    
    &::before {
      opacity: 1;
    }
  }
`;

// Horizontal Scroll Section with Red/Black theme
const ScrollerSection = styled(Box)`
  padding: 4rem 0;
  background: rgb(91, 59, 59);
  position: relative;
  overflow: hidden;
  
  .client-slider {
    overflow: visible;
    padding: 2rem 0;
  }
  
  .swiper-slide {
    transition: transform 0.4s ease;
    transform-origin: center;
    
    &.swiper-slide-active {
      transform: scale(1.1);
    }
  }
`;

// Parallax Container - Enhanced for proper parallax effects
const ParallaxContainer = styled(Box)<{ scrollOffset: number }>`
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  perspective: 1000px;
  transform: ${props => `translateY(${props.scrollOffset * 0.1}px)`};
  transition: transform 0.1s ease-out;
`;

// Parallax Element - For elements that move at different speeds
const ParallaxElement = styled(Box)<{ scrollSpeed: number; scrollOffset: number }>`
  position: relative;
  transform: ${props => `translateY(${props.scrollOffset * props.scrollSpeed}px)`};
  transition: transform 0.1s ease-out;
`;

// Define a type for the visibility state
interface VisibilityState {
  [key: string]: boolean;
}

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  
  // Fix the type of isVisible
  const [isVisible, setIsVisible] = useState<VisibilityState>({});
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  
  const aboutRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const clientRef = useRef<HTMLDivElement>(null);
  
  const heroTexts = [
    "End-to-End IT Solutions for Global Enterprises",
    "Transforming Businesses Through Technology",
    "Innovative Solutions for Real-World Problems"
  ];
  
  // Typing animation effect
  useEffect(() => {
    const text = heroTexts[textIndex];
    
    if (charIndex < text.length) {
      const typingTimer = setTimeout(() => {
        setCharIndex(charIndex + 1);
      }, 100);
      
      return () => clearTimeout(typingTimer);
    } else {
      const nextTextTimer = setTimeout(() => {
        setTextIndex((textIndex + 1) % heroTexts.length);
        setCharIndex(0);
      }, 3000);
      
      return () => clearTimeout(nextTextTimer);
    }
  }, [textIndex, charIndex]);
  
  // Scroll position effect for parallax - now using the scrollY value
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  // Enhanced Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id) {
            if (entry.isIntersecting) {
              setIsVisible(prev => ({
                ...prev,
                [entry.target.id]: true
              }));
            } else {
              // Reset animation when element leaves viewport for better scroll effects
              setIsVisible(prev => ({
                ...prev,
                [entry.target.id]: false
              }));
            }
          }
        });
      },
      { threshold: 0.15, rootMargin: "-50px" }
    );
    
    const sections = [
      aboutRef.current,
      techRef.current,
      clientRef.current,
      ...Array.from(document.querySelectorAll('.animate-on-scroll'))
    ];
    
    sections.forEach(section => {
      if (section) observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);
  
  return (
    <Box>
      {/* Modern Glassmorphism Hero Section with Red Accent and Parallax */}
      <GlassmorphismHero>
        <ParallaxContainer scrollOffset={scrollY}>
          <HeroContent>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontWeight: 900,
                fontSize: { xs: "2.5rem", md: "4rem" },
                marginBottom: "2rem",
                textTransform: "uppercase",
                letterSpacing: "3px",
                textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                transform: `translateY(${scrollY * -0.05}px)`,
                transition: "transform 0.1s ease-out"
              }}
            >
              ConsultIT Technologies
            </Typography>
            
            <AnimatedText
              variant="h4"
              sx={{
                fontWeight: 300,
                height: "4rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                transform: `translateY(${scrollY * -0.02}px)`,
                transition: "transform 0.1s ease-out"
              }}
            >
              {heroTexts[textIndex].substring(0, charIndex)}
              <Box
                component="span"
                sx={{
                  width: "3px",
                  height: "1.5em",
                  backgroundColor: "white",
                  display: "inline-block",
                  animation: "blink 1s step-end infinite",
                  "@keyframes blink": {
                    "from, to": { opacity: 1 },
                    "50%": { opacity: 0 }
                  }
                }}
              />
            </AnimatedText>
            
            <Box
              sx={{
                marginTop: "3rem",
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
                transform: `translateY(${scrollY * -0.01}px)`,
                transition: "transform 0.1s ease-out"
              }}
            >
              <Box
                sx={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: textIndex === 0 ? "white" : "rgba(255,255,255,0.5)",
                  transition: "all 0.3s ease"
                }}
              />
              <Box
                sx={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: textIndex === 1 ? "white" : "rgba(255,255,255,0.5)",
                  transition: "all 0.3s ease"
                }}
              />
              <Box
                sx={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: textIndex === 2 ? "white" : "rgba(255,255,255,0.5)",
                  transition: "all 0.3s ease"
                }}
              />
            </Box>
          </HeroContent>
        </ParallaxContainer>
      </GlassmorphismHero>

      {/* About Section with Clip Path & Float Card Effect */}
      <ClipPathSection id="about-section" ref={aboutRef}>
        <Box maxWidth="1200px" margin="0 auto">
          <NeonTitle
            variant="h3"
            className="animate-on-scroll"
            id="about-title"
            sx={{
              transform: isVisible["about-title"] 
                ? `translateY(${scrollY * 0.02}px)` 
                : "translateY(50px)",
              opacity: isVisible["about-title"] ? 1 : 0,
              transition: "transform 0.8s ease, opacity 0.8s ease"
            }}
          >
            About Us
          </NeonTitle>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <ParallaxElement scrollSpeed={0.03} scrollOffset={scrollY}>
                <GradientBorderCard
                  className="animate-on-scroll"
                  id="about-card-1"
                  sx={{
                    height: "100%",
                    transform: isVisible["about-card-1"] ? "translateX(0)" : "translateX(-100px)",
                    opacity: isVisible["about-card-1"] ? 1 : 0,
                    transition: "transform 0.8s ease, opacity 0.8s ease"
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: "#ff0000" }}>
                      Who We Are
                    </Typography>
                    <Typography variant="body1" paragraph>
                      ConsultIT Technologies is an end-to-end IT solutions provider with a
                      global customer base. We specialize in the domain verticals of
                      Insurance, Manufacturing, Telecom, and Knowledge Portals. An ISO 9001,
                      22000, and 27001 organization, quality and value for money are our
                      driving forces.
                    </Typography>
                    <Typography variant="body1">
                      Headed by three specialists who have held senior positions globally
                      with over 25 years of leadership experience, they are hands-on
                      technically in the latest technologies and understand multiple
                      business domains. At ConsultIT, we mean business, and we ensure our
                      team of professional and dedicated technology and support resources
                      deliver as per your expectations.
                    </Typography>
                  </CardContent>
                </GradientBorderCard>
              </ParallaxElement>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Grid container spacing={3} height="100%">
                <Grid item xs={12}>
                  <ParallaxElement scrollSpeed={0.05} scrollOffset={scrollY}>
                    <GradientBorderCard
                      className="animate-on-scroll"
                      id="mission-card"
                      sx={{
                        transform: isVisible["mission-card"] ? "translateX(0)" : "translateX(100px)",
                        opacity: isVisible["mission-card"] ? 1 : 0,
                        transition: "transform 0.8s ease 0.2s, opacity 0.8s ease 0.2s"
                      }}
                    >
                      <CardContent>
                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: "#ff0000" }}>
                          Our Mission
                        </Typography>
                        <Typography variant="body1">
                          To become a niche player in the areas of emerging technologies and
                          become the customer's first choice.
                        </Typography>
                      </CardContent>
                    </GradientBorderCard>
                  </ParallaxElement>
                </Grid>
                
                <Grid item xs={12}>
                  <ParallaxElement scrollSpeed={0.07} scrollOffset={scrollY}>
                    <GradientBorderCard
                      className="animate-on-scroll"
                      id="vision-card"
                      sx={{
                        transform: isVisible["vision-card"] ? "translateX(0)" : "translateX(100px)",
                        opacity: isVisible["vision-card"] ? 1 : 0,
                        transition: "transform 0.8s ease 0.4s, opacity 0.8s ease 0.4s"
                      }}
                    >
                      <CardContent>
                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: "#ff0000" }}>
                          Our Vision
                        </Typography>
                        <Typography variant="body1">
                          Complete projects on time with excellent quality, to ensure repeat
                          orders and new customer acquisitions by referrals. To meet up
                          business challenges and fulfill use cases where not many have
                          succeeded.
                        </Typography>
                      </CardContent>
                    </GradientBorderCard>
                  </ParallaxElement>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </ClipPathSection>

      {/* Technology Section with Wavy Background and Parallax */}
      <WavySection id="tech-section" ref={techRef}>
        <ParallaxContainer scrollOffset={-scrollY * 0.3}>
          <Box sx={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto" }}>
            <NeonTitle
              variant="h3"
              className="animate-on-scroll"
              id="tech-title"
              sx={{
                transform: isVisible["tech-title"] ? "translateY(0)" : "translateY(50px)",
                opacity: isVisible["tech-title"] ? 1 : 0,
                transition: "transform 0.8s ease, opacity 0.8s ease"
              }}
            >
              Our Technologies
            </NeonTitle>
            
            <Grid container spacing={4}>
              {[
                "Flawless Project Execution",
                "Domain Verticals/ SME",
                "Software Support Services",
                "Management Team",
                "Project Showcase History",
                "Product Implementation",
                "Customer Speaks",
                "Staff Augmentation Services",
              ].map((title, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <ParallaxElement 
                    scrollSpeed={0.04 + (index % 4) * 0.01} 
                    scrollOffset={scrollY}
                  >
                    <FloatingCard
                      className="animate-on-scroll"
                      id={`tech-card-${index}`}
                      sx={{
                        transform: isVisible[`tech-card-${index}`] ? 
                          "translateY(0) rotate(0deg)" : 
                          `translateY(100px) rotate(${index % 2 === 0 ? -3 : 3}deg)`,
                        opacity: isVisible[`tech-card-${index}`] ? 1 : 0,
                        transition: `transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.1}s, opacity 0.8s ease ${index * 0.1}s`
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="150"
                        image={techImages[index]}
                        alt={title}
                        sx={{
                          objectFit: "contain",
                          padding: "1rem",
                          transition: "transform 0.5s ease",
                          filter: "invert(1) drop-shadow(0 0 2px rgba(255,0,0,0.5))",
                          "&:hover": {
                            transform: "scale(1.1) rotate(5deg)",
                            filter: "invert(1) drop-shadow(0 0 5px rgba(255,0,0,0.8))",
                          },
                        }}
                      />
                      <CardContent>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: "bold",
                            textAlign: "center",
                            background: "linear-gradient(90deg, #ff0000, #cc0000)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                          }}
                        >
                          {title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="#a0a0a0"
                          sx={{ textAlign: "center", mt: 1 }}
                        >
                          {`Description about ${title}. Click "Read more" for details.`}
                        </Typography>
                      </CardContent>
                    </FloatingCard>
                  </ParallaxElement>
                </Grid>
              ))}
            </Grid>
          </Box>
        </ParallaxContainer>
      </WavySection>

      {/* Clients Section with 3D Coverflow Effect and Parallax */}
      <ScrollerSection id="client-section" ref={clientRef}>
        <ParallaxContainer scrollOffset={-scrollY * 0.1}>
          <Box sx={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
            <NeonTitle
              variant="h3"
              className="animate-on-scroll"
              id="clients-title"
              sx={{
                transform: isVisible["clients-title"] ? 
                  `translateY(${scrollY * 0.02}px)` : 
                  "translateY(50px)",
                opacity: isVisible["clients-title"] ? 1 : 0,
                transition: "transform 0.8s ease, opacity 0.8s ease"
              }}
            >
              Our Clients
            </NeonTitle>
          </Box>
          
          <Box
            className="animate-on-scroll"
            id="clients-slider"
            sx={{
              opacity: isVisible["clients-slider"] ? 1 : 0,
              transform: isVisible["clients-slider"] ? "translateY(0)" : "translateY(50px)",
              transition: "opacity 0.8s ease, transform 0.8s ease"
            }}
          >
            <Swiper
              modules={[Autoplay, Pagination, EffectCoverflow]}
              spaceBetween={30}
              slidesPerView={isMobile ? 1 : 3}
              centeredSlides={true}
              loop={true}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              effect="coverflow"
              coverflowEffect={{
                rotate: 20,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: true,
              }}
              className="client-slider"
            >
              {clientLogos.map((logo, index) => (
                <SwiperSlide key={index}>
                  <ClientLogoContainer sx={{ 
                    padding: "2rem", 
                    display: "flex", 
                    justifyContent: "center", 
                    alignItems: "center", 
                    height: "150px",
                    border: "1px solid rgba(255, 0, 0, 0.1)"
                  }}>
                    <Box
                      component="img"
                      src={logo}
                      alt={`Client ${index + 1}`}
                      sx={{
                        maxWidth: "100%",
                        maxHeight: "100%",
                        objectFit: "contain",
                        transition: "transform 0.5s ease, filter 0.3s ease",
                        filter: "brightness(0.9) contrast(1.1)",
                        "&:hover": {
                          transform: "scale(1.1)",
                          filter: "brightness(1.1) contrast(1.2) drop-shadow(0 0 5px rgba(255,0,0,0.5))",
                        },
                      }}
                    />
                  </ClientLogoContainer>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </ParallaxContainer>
      </ScrollerSection>
    </Box>
  );
};

export default HomePage;