import  { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  useTheme,
  useMediaQuery,
  Container,
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
  min-height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  background: url(${companyImage}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    min-height: 70vh;
  }

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
  width: 100%;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;

const AnimatedText = styled(Typography)`
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  min-height: 3rem;

  @media (min-width: 768px) {
    min-height: 4rem;
  }
`;
// Modern Scroll Section with Clip Path - Red/Black theme
const ClipPathSection = styled(Box)`
  position: relative;
  padding: 4rem 1rem;
  background: rgb(0, 0, 0);
  clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 100%);
  margin-top: -3rem;
  z-index: 10;

  @media (min-width: 768px) {
    padding: 6rem 2rem;
    margin-top: -4rem;
  }

  @media (min-width: 1024px) {
    padding: 8rem 2rem;
    margin-top: -5rem;
  }
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
  padding: 4rem 1rem;
  background: #0a0a0a;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 6rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 8rem 2rem;
  }
`;

// Client Logo Hover Effect with Red/Black theme
const ClientLogoContainer = styled(Box)`
  background:rgb(255, 255, 255);
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
  background:rgb(250, 108, 108);
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
    background: linear-gradient(135deg,rgb(255, 167, 167),rgb(245, 108, 108));
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
  padding: 3rem 0;
  background: rgb(91, 59, 59);
  position: relative;
  overflow: hidden;
  
  @media (min-width: 768px) {
    padding: 4rem 0;
  }
  
  .client-slider {
    overflow: visible;
    padding: 1rem 0;
    
    @media (min-width: 768px) {
      padding: 2rem 0;
    }
  }
  
  .swiper-slide {
    transition: transform 0.4s ease;
    transform-origin: center;
    
    &.swiper-slide-active {
      transform: scale(1.05);
      
      @media (min-width: 768px) {
        transform: scale(1.1);
      }
    }
  }
`;

// interface VisibilityState {
//   [key: string]: boolean;
// }

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  // const isLaptop = useMediaQuery(theme.breakpoints.between("md", "lg"));
  
  // States and refs (unchanged)
  const [isVisible, setIsVisible] = useState({});
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  
  const aboutRef = useRef(null);
  const techRef = useRef(null);
  const clientRef = useRef(null);
  
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
      {/* Responsive Hero Section */}
      <GlassmorphismHero>
        <Container maxWidth="xl">
          <HeroContent>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontWeight: 900,
                fontSize: { 
                  xs: "1.8rem", 
                  sm: "2.5rem", 
                  md: "3.5rem", 
                  lg: "4rem" 
                },
                marginBottom: { xs: "1rem", sm: "1.5rem", md: "2rem" },
                textTransform: "uppercase",
                letterSpacing: { xs: "1px", md: "3px" },
                textShadow: "0 2px 10px rgba(0,0,0,0.3)"
              }}
            >
              ConsultIT Technologies
            </Typography>
            
            <AnimatedText
              variant="h4"
              sx={{
                fontWeight: 300,
                fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative"
              }}
            >
              {heroTexts[textIndex].substring(0, charIndex)}
              <Box
                component="span"
                sx={{
                  width: { xs: "2px", md: "3px" },
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
                marginTop: { xs: "1.5rem", md: "3rem" },
                display: "flex",
                justifyContent: "center",
                gap: "1rem"
              }}
            >
              {/* Indicator dots (unchanged) */}
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
        </Container>
      </GlassmorphismHero>

      {/* About Section with Responsive Grid */}
      <ClipPathSection id="about-section" ref={aboutRef}>
        <Container maxWidth="lg">
          <NeonTitle
            variant="h3"
            className="animate-on-scroll"
            id="about-title"
            sx={{
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
              transform: isVisible? "translateY(0)" : "translateY(50px)",
              opacity: isVisible ? 1 : 0,
              transition: "transform 0.8s ease, opacity 0.8s ease",
              marginBottom:'2rem'
            }}
          >
            About Us
          </NeonTitle>
          
          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
            <Grid item xs={12} md={6}>
              <GradientBorderCard
                className="animate-on-scroll"
                id="about-card-1"
                sx={{
                  height: "100%",
                  transform: isVisible ? "translateX(0)" : "translateX(-100px)",
                  opacity: isVisible ? 1 : 0,
                  transition: "transform 0.8s ease, opacity 0.8s ease"
                }}
              >
                <CardContent>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 600, 
                      mb: 2, 
                      color: "#ff0000",
                      fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.5rem" } 
                    }}
                  >
                    Who We Are
                  </Typography>
                  <Typography 
                    variant="body1" 
                    paragraph
                    sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
                  >
                    ConsultIT Technologies is an end-to-end IT solutions provider with a
                    global customer base. We specialize in the domain verticals of
                    Insurance, Manufacturing, Telecom, and Knowledge Portals. An ISO 9001,
                    22000, and 27001 organization, quality and value for money are our
                    driving forces.
                  </Typography>
                  <Typography 
                    variant="body1"
                    sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
                  >
                    Headed by three specialists who have held senior positions globally
                    with over 25 years of leadership experience, they are hands-on
                    technically in the latest technologies and understand multiple
                    business domains. At ConsultIT, we mean business, and we ensure our
                    team of professional and dedicated technology and support resources
                    deliver as per your expectations.
                  </Typography>
                </CardContent>
              </GradientBorderCard>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Grid container spacing={{ xs: 2, sm: 3 }} height="100%">
                <Grid item xs={12}>
                  <GradientBorderCard
                    className="animate-on-scroll"
                    id="mission-card"
                    sx={{
                      // transform: isVisible["mission-card"] ? "translateX(0)" : "translateX(100px)",
                      // opacity: isVisible["mission-card"] ? 1 : 0,
                      transition: "transform 0.8s ease 0.2s, opacity 0.8s ease 0.2s"
                    }}
                  >
                    <CardContent>
                      <Typography 
                        variant="h5" 
                        sx={{ 
                          fontWeight: 600, 
                          mb: 2, 
                          color: "#ff0000",
                          fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.5rem" } 
                        }}
                      >
                        Our Mission
                      </Typography>
                      <Typography 
                        variant="body1"
                        sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
                      >
                        To become a niche player in the areas of emerging technologies and
                        become the customer's first choice.
                      </Typography>
                    </CardContent>
                  </GradientBorderCard>
                </Grid>
                
                <Grid item xs={12}>
                  <GradientBorderCard
                    className="animate-on-scroll"
                    id="vision-card"
                    sx={{
                      transform: isVisible ? "translateX(0)" : "translateX(100px)",
                      opacity: isVisible? 1 : 0,
                      transition: "transform 0.8s ease 0.4s, opacity 0.8s ease 0.4s"
                    }}
                  >
                    <CardContent>
                      <Typography 
                        variant="h5" 
                        sx={{ 
                          fontWeight: 600, 
                          mb: 2, 
                          color: "#ff0000",
                          fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.5rem" } 
                        }}
                      >
                        Our Vision
                      </Typography>
                      <Typography 
                        variant="body1"
                        sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
                      >
                        Complete projects on time with excellent quality, to ensure repeat
                        orders and new customer acquisitions by referrals. To meet up
                        business challenges and fulfill use cases where not many have
                        succeeded.
                      </Typography>
                    </CardContent>
                  </GradientBorderCard>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </ClipPathSection>

      {/* Technology Section with Responsive Grid */}
      <WavySection id="tech-section" ref={techRef}>
        <Container maxWidth="lg">
          <NeonTitle
            variant="h3"
            className="animate-on-scroll"
            id="tech-title"
            sx={{
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
              transform: isVisible ? "translateY(0)" : "translateY(50px)",
              opacity: isVisible ? 1 : 0,
              transition: "transform 0.8s ease, opacity 0.8s ease",
              marginBottom:'2rem'

            }}
          >
            Our Technologies
          </NeonTitle>
          
          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
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
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <FloatingCard
                  className="animate-on-scroll"
                  id={`tech-card-${index}`}
                  sx={{
                    height: "100%",
                    transform: isVisible? 
                      "translateY(0) rotate(0deg)" : 
                      `translateY(100px) rotate(${index % 2 === 0 ? -3 : 3}deg)`,
                    opacity: isVisible? 1 : 0,
                    transition: `transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.1}s, opacity 0.8s ease ${index * 0.1}s`
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      height: { xs: "120px", sm: "150px" },
                      objectFit: "contain",
                      padding: "1rem",
                      transition: "transform 0.5s ease",
                      filter: "invert(1) drop-shadow(0 0 2px rgba(255,0,0,0.5))",
                      "&:hover": {
                        transform: "scale(1.1) rotate(5deg)",
                        filter: "invert(1) drop-shadow(0 0 5px rgba(255,0,0,0.8))",
                      },
                    }}
                    image={techImages[index]}
                    alt={title}
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
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
                      sx={{ 
                        textAlign: "center", 
                        mt: 1,
                        fontSize: { xs: "0.8rem", md: "0.875rem" }
                      }}
                    >
                      {`Description about ${title}. Click "Read more" for details.`}
                    </Typography>
                  </CardContent>
                </FloatingCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </WavySection>

      {/* Clients Section with Responsive Swiper */}
      <ScrollerSection id="client-section" ref={clientRef}>
        <Container maxWidth="lg">
          <NeonTitle
            variant="h3"
            className="animate-on-scroll"
            id="clients-title"
            sx={{
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
              transform: isVisible ? "translateY(0)" : "translateY(50px)",
              opacity: isVisible? 1 : 0,
              transition: "transform 0.8s ease, opacity 0.8s ease"
            }}
          >
            Our Clients
          </NeonTitle>
        </Container>
        
        <Box
          className="animate-on-scroll"
          id="clients-slider"
          sx={{
            opacity: isVisible? 1 : 0,
            transform: isVisible? "translateY(0)" : "translateY(50px)",
            transition: "opacity 0.8s ease, transform 0.8s ease"
          }}
        >
          <Swiper
            modules={[Autoplay, Pagination, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={isMobile ? 1 : isTablet ? 2 : 3}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            effect={isMobile ? "slide" : "coverflow"} // Simpler effect on mobile
            coverflowEffect={{
              rotate: isMobile ? 10 : 20,
              stretch: 0,
              depth: isMobile ? 100 : 200,
              modifier: 1,
              slideShadows: !isMobile,
            }}
            className="client-slider"
          >
            {clientLogos.map((logo, index) => (
              <SwiperSlide key={index}>
                <ClientLogoContainer sx={{ 
                  padding: { xs: "1rem", md: "2rem" },
                  display: "flex", 
                  justifyContent: "center", 
                  alignItems: "center", 
                  height: { xs: "100px", sm: "120px", md: "150px" },
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
      </ScrollerSection>
    </Box>
  );
};

export default HomePage;




// import  { useState, useEffect, useRef } from "react";
// import {
//   Box,
//   Typography,
//   Card,
//   CardContent,
//   CardMedia,
//   useTheme,
//   useMediaQuery,
// } from "@mui/material";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
// import "swiper/swiper-bundle.css";
// import styled from "styled-components";
// import Grid from "@mui/material/Grid";

// // Import all the logos and icons from your original file
// import airtelLogo from "../assets/images/clients/airtel.png";
// import hclLogo from "../assets/images/clients/HCL.png";
// import incedoLogo from "../assets/images/clients/incedo.png";
// import bhartiAxaLogo from "../assets/images/clients/bhartiaxa.png";
// import adoritGroupLogo from "../assets/images/clients/adoritgroup.png";
// import cstLogo from "../assets/images/clients/Cst.png";
// import cyberLogo from "../assets/images/clients/cyber.png";
// import firstLogo from "../assets/images/clients/first.png";
// import iffcoLogo from "../assets/images/clients/IFFCO.jpg";
// import kosmosLogo from "../assets/images/clients/kosmos.png";
// import kotakLogo from "../assets/images/clients/kotak.png";
// import lifeTreeLogo from "../assets/images/clients/lifetree.png";
// import lucentLogo from "../assets/images/clients/lucent.png";
// import maxLogo from "../assets/images/clients/max.png";
// import nanoSolarLogo from "../assets/images/clients/nanosolar.png";
// import prakashLogo from "../assets/images/clients/prakash-removebg-preview.png";
// import scubeLogo from "../assets/images/clients/Scube.png";
// import stellarLogo from "../assets/images/clients/stellar.png";
// import stpLogo from "../assets/images/clients/STP-logo-removebg-preview.png";
// import extreiveLogo from "../assets/images/clients/extreive.png";
// import companyImage from "../assets/images/cit.jpg";
// import managementTeamIcon from "../assets/icons/management (1).gif";
// import projectIcon from "../assets/icons/project.gif";
// import techIcon from "../assets/icons/coding.gif";
// import staffIcon from "../assets/icons/handshake.gif";
// import customerIcon from "../assets/icons/customer-care.gif";
// import productIcon from "../assets/icons/recommendation.gif";
// import supportIcon from "../assets/icons/settings.gif";
// import domainIcon from "../assets/icons/smart-contract.gif";

// const techImages = [
//   techIcon,
//   domainIcon,
//   supportIcon,
//   managementTeamIcon,
//   projectIcon,
//   productIcon,
//   customerIcon,
//   staffIcon,
// ];

// const clientLogos = [
//   airtelLogo,
//   hclLogo,
//   incedoLogo,
//   bhartiAxaLogo,
//   extreiveLogo,
//   adoritGroupLogo,
//   cstLogo,
//   cyberLogo,
//   firstLogo,
//   iffcoLogo,
//   kosmosLogo,
//   kotakLogo,
//   lifeTreeLogo,
//   lucentLogo,
//   maxLogo,
//   nanoSolarLogo,
//   prakashLogo,
//   scubeLogo,
//   stellarLogo,
//   stpLogo,
// ];

// // Modern Glassmorphism Hero Section with Red/Black Theme
// const GlassmorphismHero = styled(Box)`
//   position: relative;
//   height: 100vh;
//   min-height: 500px;  // Prevents collapse on mobile
//   max-height: 1200px; // Limits on large screens
//   overflow: hidden;
//   background: url(${companyImage}) center/cover no-repeat;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   @media (orientation: landscape) and (max-height: 500px) {
//     height: auto;
//     min-height: 100vh;
//   }
// `;

// const HeroContent = styled(Box)`
//   position: relative;
//   z-index: 2;
//   text-align: center;
//   color: white;
//   max-width: 90vw; // Better for mobile
//   padding: 0 1rem;

//   @media (min-width: 600px) {
//     max-width: 1200px;
//     padding: 0 2rem;
//   }
// `;
// const AnimatedText = styled(Typography)`
//   overflow: hidden;
//   margin: 0 auto;
//   position: relative;
// `;

// // Modern Scroll Section with Clip Path - Red/Black theme
// const ClipPathSection = styled(Box)`
//   position: relative;
//   padding: 8rem 2rem;
//   background:rgb(0, 0, 0);
//   clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 100%);
//   margin-top: -5rem;
//   z-index: 10;
// `;

// // Floating Card Effect with Red/Black theme
// const FloatingCard = styled(Card)`
//   height: 100%;
//   background: rgba(18, 18, 18, 0.9);
//   backdrop-filter: blur(10px);
//   border-radius: 16px;
//   overflow: hidden;
//   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
//   transition: all 0.5s cubic-bezier(0.25, 0.75, 0.5, 1.25);
//   transform: translateY(0) scale(1);
//   position: relative;
//   isolation: isolate;
//   color: #f0f0f0;

//   &:hover {
//     transform: translateY(-15px) scale(1.03);
//     box-shadow: 0 20px 40px rgba(187, 0, 0, 0.3);
//   }

//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 4px;
//     background: linear-gradient(90deg, #ff0000, #880000);
//     z-index: -1;
//   }
// `;

// // Neon Glow Title with Red theme
// const NeonTitle = styled(Typography)`
//   position: relative;
//   color: transparent;
//   background: linear-gradient(90deg, #ff0000, #cc0000);
//   background-clip: text;
//   -webkit-background-clip: text;
//   display: inline-block;
//   text-align: center;
//   margin-bottom: 3rem;
//   filter: drop-shadow(0 0 8px rgba(255, 0, 0, 0.5));
//   font-weight: 700;
  
//   &::after {
//     content: '';
//     position: absolute;
//     bottom: -10px;
//     left: 50%;
//     transform: translateX(-50%);
//     width: 100px;
//     height: 3px;
//     background: linear-gradient(90deg, #ff0000, #880000);
//   }
// `;

// // Wavy Technology Section with Red/Black theme
// const WavySection = styled(Box)`
//   position: relative;
//   padding: 8rem 2rem;
//   background: #0a0a0a;
//   overflow: hidden;

//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     height: 120px;
//     // background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23121212' fill-opacity='1' d='M0,192L60,181.3C120,171,240,149,360,149.3C480,149,600,171,720,165.3C840,160,960,128,1080,117.3C1200,107,1320,117,1380,122.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z'%3E%3C/path%3E%3C/svg%3E") no-repeat;
//     background-size: cover;
//   }

//   &::after {
//     content: '';
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     height: 120px;
//     // background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23121212' fill-opacity='1' d='M0,224L60,229.3C120,235,240,245,360,240C480,235,600,213,720,192C840,171,960,149,1080,149.3C1200,149,1320,171,1380,181.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'%3E%3C/path%3E%3C/svg%3E") no-repeat;
//     background-size: cover;
//   }
// `;

// // Client Logo Hover Effect with Red/Black theme
// const ClientLogoContainer = styled(Box)`
//   background:rgb(255, 255, 255);
//   border-radius: 16px;
//   overflow: hidden;
//   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
//   transition: transform 0.3s ease, box-shadow 0.3s ease;
  
//   &:hover {
//     transform: translateY(-10px) rotate(2deg);
//     box-shadow: 0 15px 30px rgba(187, 0, 0, 0.2);
//     border: 1px solid rgba(255, 0, 0, 0.3);
//   }
// `;

// // Gradient Border Cards with hover effect - Red/Black theme
// const GradientBorderCard = styled(Card)`
//   position: relative;
//   background:rgb(250, 108, 108);
//   border-radius: 16px;
//   padding: 1rem;
//   overflow: hidden;
//   transition: all 0.4s ease;
//   color: #f0f0f0;
  
//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     z-index: -1;
//     margin: -2px;
//     border-radius: inherit;
//     background: linear-gradient(135deg,rgb(255, 167, 167),rgb(245, 108, 108));
//     opacity: 0;
//     transition: opacity 0.4s ease;
//   }
  
//   &:hover {
//     transform: translateY(-10px) scale(1.02);
//     box-shadow: 0 15px 30px rgba(187, 0, 0, 0.2);
    
//     &::before {
//       opacity: 1;
//     }
//   }
// `;

// // Horizontal Scroll Section with Red/Black theme
// const ScrollerSection = styled(Box)`
//   padding: 4rem 0;
//   background:rgb(91, 59, 59);
//   position: relative;
//   overflow: hidden;
  
//   .client-slider {
//     overflow: visible;
//     padding: 2rem 0;
//   }
  
//   .swiper-slide {
//     transition: transform 0.4s ease;
//     transform-origin: center;
    
//     &.swiper-slide-active {
//       transform: scale(1.1);
//     }
//   }
// `;


// interface VisibilityState {
//   [key: string]: boolean;
// }

// const HomePage = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  
//   // Fix the type of isVisible
//   const [isVisible, setIsVisible] = useState<VisibilityState>({});
//   const [textIndex, setTextIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);
//   // const [scrollY, setScrollY] = useState(0);
  
//   const aboutRef = useRef<HTMLDivElement>(null);
//   const techRef = useRef<HTMLDivElement>(null);
//   const clientRef = useRef<HTMLDivElement>(null);
  
//   const heroTexts = [
//     "End-to-End IT Solutions for Global Enterprises",
//     "Transforming Businesses Through Technology",
//     "Innovative Solutions for Real-World Problems"
//   ];
  
//   // Typing animation effect
//   useEffect(() => {
//     const text = heroTexts[textIndex];
    
//     if (charIndex < text.length) {
//       const typingTimer = setTimeout(() => {
//         setCharIndex(charIndex + 1);
//       }, 100);
      
//       return () => clearTimeout(typingTimer);
//     } else {
//       const nextTextTimer = setTimeout(() => {
//         setTextIndex((textIndex + 1) % heroTexts.length);
//         setCharIndex(0);
//       }, 3000);
      
//       return () => clearTimeout(nextTextTimer);
//     }
//   }, [textIndex, charIndex]);
  
 
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.target.id) {
//             if (entry.isIntersecting) {
//               setIsVisible(prev => ({
//                 ...prev,
//                 [entry.target.id]: true
//               }));
//             } else {
//               // Reset animation when element leaves viewport for better scroll effects
//               setIsVisible(prev => ({
//                 ...prev,
//                 [entry.target.id]: false
//               }));
//             }
//           }
//         });
//       },
//       { threshold: 0.15, rootMargin: "-50px" }
//     );
    
//     const sections = [
//       aboutRef.current,
//       techRef.current,
//       clientRef.current,
//       ...Array.from(document.querySelectorAll('.animate-on-scroll'))
//     ];
    
//     sections.forEach(section => {
//       if (section) observer.observe(section);
//     });
    
//     return () => {
//       sections.forEach(section => {
//         if (section) observer.unobserve(section);
//       });
//     };
//   }, []);
  
//   return (
//     <Box>
//       {/* Modern Glassmorphism Hero Section with Red Accent */}
//       <GlassmorphismHero>
//         <HeroContent>
//         <Typography
//   variant="h1"
//   sx={{
//     fontWeight: 900,
//     fontSize: { 
//       xs: "2rem",    // Mobile
//       sm: "3rem",    // Small tablets
//       md: "3.5rem",  // Tablets
//       lg: "4rem"     // Desktops
//     },
//     marginBottom: { xs: "1rem", md: "2rem" },
//     lineHeight: 1.2,  // Better text wrapping
//     px: 1            // Prevents edge touching
//   }}
// >
//   ConsultIT Technologies
// </Typography>
          
// <AnimatedText
//   variant="h4"
//   sx={{
//     fontWeight: 300,
//     height: { 
//       xs: "3.5rem",  // Mobile
//       sm: "4rem",    // Tablets+
//     },
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     position: "relative",
//     fontSize: {
//       xs: "1.25rem",
//       sm: "1.5rem",
//       md: "1.75rem"
//     },
//     px: 2  // Padding to prevent edge touching
//   }}
// >
//   {heroTexts[textIndex].substring(0, charIndex)}
//   <Box
//     component="span"
//     sx={{
//       width: "2px",
//       height: "1.2em",
//       marginLeft: "0.25rem",
//       backgroundColor: "white",
//       display: "inline-block",
//       animation: "blink 1s step-end infinite",
//       "@keyframes blink": {
//         "from, to": { opacity: 1 },
//         "50%": { opacity: 0 }
//       }
//     }}
//   />
// </AnimatedText>
          
//           <Box
//             sx={{
//               marginTop: "3rem",
//               display: "flex",
//               justifyContent: "center",
//               gap: "1rem"
//             }}
//           >
//             <Box
//               sx={{
//                 width: "10px",
//                 height: "10px",
//                 borderRadius: "50%",
//                 background: textIndex === 0 ? "white" : "rgba(255,255,255,0.5)",
//                 transition: "all 0.3s ease"
//               }}
//             />
//             <Box
//               sx={{
//                 width: "10px",
//                 height: "10px",
//                 borderRadius: "50%",
//                 background: textIndex === 1 ? "white" : "rgba(255,255,255,0.5)",
//                 transition: "all 0.3s ease"
//               }}
//             />
//             <Box
//               sx={{
//                 width: "10px",
//                 height: "10px",
//                 borderRadius: "50%",
//                 background: textIndex === 2 ? "white" : "rgba(255,255,255,0.5)",
//                 transition: "all 0.3s ease"
//               }}
//             />
//           </Box>
//         </HeroContent>
//       </GlassmorphismHero>

//       {/* About Section with Clip Path & Float Card Effect */}
//       <ClipPathSection id="about-section" ref={aboutRef}>
//         <Box maxWidth="1200px" margin="0 auto">
//           <NeonTitle
//             variant="h3"
            
//             className="animate-on-scroll"
//             id="about-title"
//             sx={{
//               transform: isVisible["about-title"] ? "translateY(0)" : "translateY(50px)",
//               opacity: isVisible["about-title"] ? 1 : 0,
//               transition: "transform 0.8s ease, opacity 0.8s ease"
//             }}
//           >
//             About Us
//           </NeonTitle>
          
//           <Grid container spacing={4}>
//             <Grid item xs={12} md={6}>
//               <GradientBorderCard
//                 className="animate-on-scroll"
//                 id="about-card-1"
//                 sx={{
//                   height: "100%",
//                   transform: isVisible["about-card-1"] ? "translateX(0)" : "translateX(-100px)",
//                   opacity: isVisible["about-card-1"] ? 1 : 0,
//                   transition: "transform 0.8s ease, opacity 0.8s ease"
//                 }}
//               >
//                 <CardContent>
//                   <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: "#ff0000" }}>
//                     Who We Are
//                   </Typography>
//                   <Typography variant="body1" paragraph>
//                     ConsultIT Technologies is an end-to-end IT solutions provider with a
//                     global customer base. We specialize in the domain verticals of
//                     Insurance, Manufacturing, Telecom, and Knowledge Portals. An ISO 9001,
//                     22000, and 27001 organization, quality and value for money are our
//                     driving forces.
//                   </Typography>
//                   <Typography variant="body1">
//                     Headed by three specialists who have held senior positions globally
//                     with over 25 years of leadership experience, they are hands-on
//                     technically in the latest technologies and understand multiple
//                     business domains. At ConsultIT, we mean business, and we ensure our
//                     team of professional and dedicated technology and support resources
//                     deliver as per your expectations.
//                   </Typography>
//                 </CardContent>
//               </GradientBorderCard>
//             </Grid>
            
//             <Grid item xs={12} md={6}>
//               <Grid container spacing={3} height="100%">
//                 <Grid item xs={12}>
//                   <GradientBorderCard
//                     className="animate-on-scroll"
//                     id="mission-card"
//                     sx={{
//                       transform: isVisible["mission-card"] ? "translateX(0)" : "translateX(100px)",
//                       opacity: isVisible["mission-card"] ? 1 : 0,
//                       transition: "transform 0.8s ease 0.2s, opacity 0.8s ease 0.2s"
//                     }}
//                   >
//                     <CardContent>
//                       <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: "#ff0000" }}>
//                         Our Mission
//                       </Typography>
//                       <Typography variant="body1">
//                         To become a niche player in the areas of emerging technologies and
//                         become the customer's first choice.
//                       </Typography>
//                     </CardContent>
//                   </GradientBorderCard>
//                 </Grid>
                
//                 <Grid item xs={12}>
//                   <GradientBorderCard
//                     className="animate-on-scroll"
//                     id="vision-card"
//                     sx={{
//                       transform: isVisible["vision-card"] ? "translateX(0)" : "translateX(100px)",
//                       opacity: isVisible["vision-card"] ? 1 : 0,
//                       transition: "transform 0.8s ease 0.4s, opacity 0.8s ease 0.4s"
//                     }}
//                   >
//                     <CardContent>
//                       <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: "#ff0000" }}>
//                         Our Vision
//                       </Typography>
//                       <Typography variant="body1">
//                         Complete projects on time with excellent quality, to ensure repeat
//                         orders and new customer acquisitions by referrals. To meet up
//                         business challenges and fulfill use cases where not many have
//                         succeeded.
//                       </Typography>
//                     </CardContent>
//                   </GradientBorderCard>
//                 </Grid>
//               </Grid>
//             </Grid>
//           </Grid>
//         </Box>
//       </ClipPathSection>

//       {/* Technology Section with Wavy Background */}
//       <WavySection id="tech-section" ref={techRef}>
//         <Box sx={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto" }}>
//           <NeonTitle
//             variant="h3"
//             // component="h2"
//             className="animate-on-scroll"
//             id="tech-title"
//             sx={{
//               transform: isVisible["tech-title"] ? "translateY(0)" : "translateY(50px)",
//               opacity: isVisible["tech-title"] ? 1 : 0,
//               transition: "transform 0.8s ease, opacity 0.8s ease"
//             }}
//           >
//             Our Technologies
//           </NeonTitle>
          
//           <Grid container spacing={{ xs: 2, md: 3 }}>
//             {[
//               "Flawless Project Execution",
//               "Domain Verticals/ SME",
//               "Software Support Services",
//               "Management Team",
//               "Project Showcase History",
//               "Product Implementation",
//               "Customer Speaks",
//               "Staff Augmentation Services",
//             ].map((title, index) => (
//               <Grid 
//       item 
//       xs={12}  // Full width on mobile
//       sm={6}   // 2 columns on small tablets
//       md={4}   // 3 columns on tablets
//       lg={3}   // 4 columns on desktop
//       key={index}
//     >
//                 <FloatingCard
//                   className="animate-on-scroll"
//                   id={`tech-card-${index}`}
//                   sx={{
//                     transform: isVisible[`tech-card-${index}`] ? 
//                       "translateY(0) rotate(0deg)" : 
//                       `translateY(100px) rotate(${index % 2 === 0 ? -3 : 3}deg)`,
//                     opacity: isVisible[`tech-card-${index}`] ? 1 : 0,
//                     transition: `transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.1}s, opacity 0.8s ease ${index * 0.1}s`
//                   }}
//                 >
//                   <CardMedia
//                     component="img"
//                     height="150"
//                     image={techImages[index]}
//                     alt={title}
//                     sx={{  width: "100%",
//                       height: { 
//                         xs: "120px", 
//                         md: "150px" 
//                       },
//                       objectFit: "contain",
//                       p: { xs: 1, md: 2 },
                     
//                       padding: "1rem",
//                       transition: "transform 0.5s ease",
//                       filter: "invert(1) drop-shadow(0 0 2px rgba(255,0,0,0.5))",
//                       "&:hover": {
//                         transform: "scale(1.1) rotate(5deg)",
//                         filter: "invert(1) drop-shadow(0 0 5px rgba(255,0,0,0.8))",
//                       },
//                     }}
//                   />
//                   <CardContent>
//                     <Typography
//                       variant="h6"
//                       sx={{
//                         fontWeight: "bold",
//                         textAlign: "center",
//                         background: "linear-gradient(90deg, #ff0000, #cc0000)",
//                         backgroundClip: "text",
//                         WebkitBackgroundClip: "text",
//                         color: "transparent",
                        
//                       }}
//                     >
//                       {title}
//                     </Typography>
//                     <Typography
//                       variant="body2"
//                       color="#a0a0a0"
//                       sx={{ textAlign: "center", mt: 1 }}
//                     >
//                       {`Description about ${title}. Click "Read more" for details.`}
//                     </Typography>
//                   </CardContent>
//                 </FloatingCard>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       </WavySection>

//       {/* Clients Section with 3D Coverflow Effect */}
//       <ScrollerSection id="client-section" ref={clientRef}>
//         <Box sx={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
//           <NeonTitle
//             variant="h3"
//             // component="h2"
//             className="animate-on-scroll"
//             id="clients-title"
//             sx={{
//               transform: isVisible["clients-title"] ? "translateY(0)" : "translateY(50px)",
//               opacity: isVisible["clients-title"] ? 1 : 0,
//               transition: "transform 0.8s ease, opacity 0.8s ease"
//             }}
//           >
//             Our Clients
//           </NeonTitle>
//         </Box>
        
//         <Box
//           className="animate-on-scroll"
//           id="clients-slider"
//           sx={{
//             opacity: isVisible["clients-slider"] ? 1 : 0,
//             transform: isVisible["clients-slider"] ? "translateY(0)" : "translateY(50px)",
//             transition: "opacity 0.8s ease, transform 0.8s ease"
//           }}
//         >
//           <Swiper
//             modules={[Autoplay, Pagination, EffectCoverflow]}
//             spaceBetween={30}
//             slidesPerView={isMobile ? 1 : 3}
//             centeredSlides={true}
//             loop={true}
//             autoplay={{ delay: 2000, disableOnInteraction: false }}
//             effect="coverflow"
//             coverflowEffect={{
//               rotate: 20,
//               stretch: 0,
//               depth: 200,
//               modifier: 1,
//               slideShadows: true,
//             }}
//             className="client-slider"
//           >
//             {clientLogos.map((logo, index) => (
//               <SwiperSlide key={index}>
//                 <ClientLogoContainer sx={{ 
//                   padding: "2rem", 
//                   display: "flex", 
//                   justifyContent: "center", 
//                   alignItems: "center", 
//                   height: "150px",
//                   border: "1px solid rgba(255, 0, 0, 0.1)"
//                 }}>
//                   <Box
//                     component="img"
//                     src={logo}
//                     alt={`Client ${index + 1}`}
//                     sx={{
//                       maxWidth: "100%",
//                       maxHeight: "100%",
//                       objectFit: "contain",
//                       transition: "transform 0.5s ease, filter 0.3s ease",
//                       filter: "brightness(0.9) contrast(1.1)",
//                       "&:hover": {
//                         transform: "scale(1.1)",
//                         filter: "brightness(1.1) contrast(1.2) drop-shadow(0 0 5px rgba(255,0,0,0.5))",
//                       },
//                     }}
//                   />
//                 </ClientLogoContainer>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </Box>
//       </ScrollerSection>
//     </Box>
//   );
// };

// export default HomePage;