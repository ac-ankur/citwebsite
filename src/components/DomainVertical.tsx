import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import styled from "styled-components";
import manufacturingIcon from "../assets/icons/domainVerticals/conveyor-belt.gif";
import insurance from "../assets/icons/domainVerticals/protection.gif";
import telecom from "../assets/icons/domainVerticals/phone.gif";
import healthcare from "../assets/icons/domainVerticals/medicine.gif";
import fund from "../assets/icons/domainVerticals/money-bag.gif";
import ecommerece from "../assets/icons/domainVerticals/online-supermarket.gif";
import logistics from "../assets/icons/domainVerticals/truck.gif";
import claim from "../assets/icons/domainVerticals/insurance.gif";
import "../assets/css/DomainVertical.css";
// Define TypeScript interfaces for the section data
interface SectionContent {
  heading: string;
  content: React.ReactNode;
  gifUrl: string;
}

// Enhanced data structure with complete content for all sections
const sectionData: SectionContent[] = [
  {
    heading: "Manufacturing",
    content: (
      <p style={{ color: "black" }}>
        Manufacturers are streamlining the information flow both across the
        organization and through tiers of the supply chain to reduce cycle time
        and adapt quickly to market changes.
        <br />
        The organization has to review various metrics and such insights require
        data at a granular level from internal systems and external sources,
        which is then analyzed within the specific business context and is
        subject to causal analysis. This helps manufacturers glean actionable
        insights in near real-time and make smart business decisions.
        <h4 style={{ color: "red" }}>Our Manufacturing Projects are:</h4>
        <ul>
          <li>Kent RO</li>
          <li>Sukam</li>
        </ul>
      </p>
    ),
    gifUrl: manufacturingIcon,
  },
  {
    heading: "Insurance",
    content: (
      <p style={{ color: "black" }}>
        Insurance is a contract, represented by a policy, in which a
        policyholder receives financial protection or reimbursement against
        losses from an insurance company. The company pools client's risks to
        make payments more affordable for the insured. Most people have some
        insurance: for their car, their house, their healthcare, or their life.
        <h4 style={{ color: "red" }}>Our Insurance Projects are:</h4>
        <ul>
          <li>Reliance Life</li>
          <li>Future Generali</li>
          <li>Kotak Life</li>
          <li>PNB Metlife</li>
          <li>India First Life</li>
          <li>Canara HSBC</li>
          <li>Bharati AXA</li>
        </ul>
      </p>
    ),
    gifUrl: insurance,
  },
  {
    heading: "Telecom",
    content: (
      <p style={{ color: "black" }}>
        Telecommunications, also known as telecom, is the exchange of
        information over large distances. It's a broad term that includes
        various sectors, but all include a transmitter and a receiver. The
        medium of signal transference can be via various means—fiber,
        electromagnetic fields, light, cable, etc.
        <h4 style={{ color: "red" }}>Our Telecom Projects are:</h4>
        <ul>
          <li>Estel</li>
          <li>Giesecke & Devrient</li>
        </ul>
      </p>
    ),
    gifUrl: telecom,
  },
  {
    heading: "Healthcare",
    content: (
      <p style={{ color: "black" }}>
        Healthcare technology is any technology, including medical devices, IT
        systems, algorithms, artificial intelligence (AI), cloud and blockchain,
        designed to support healthcare organizations.
        <h4 style={{ color: "red" }}>Our Healthcare Projects are:</h4>
        <ul>
          <li>Our PhoneMD , US</li>
          <li>Melbourne Health*</li>
          <li>Dr Lal Path Labs</li>
        </ul>
      </p>
    ),
    gifUrl: healthcare,
  },
  {
    heading: "Fund Management",
    content: (
      <p style={{ color: "black" }}>
        Funds management is the overseeing and handling of a financial
        institution's cash flow. The fund manager ensures that the maturity
        schedules of the deposits coincide with the demand for loans. To do
        this, the manager looks at both the liabilities and the assets that
        influence the bank's ability to issue credit.
        <h4 style={{ color: "red" }}>Our Fund Management Projects are:</h4>
        <ul>
          <li>Jubilee Holdings,Kenya</li>
          <li>MyGuardian Trinidad</li>
        </ul>
      </p>
    ),
    gifUrl: fund,
  },
  {
    heading: "E-commerce",
    content: (
      <p style={{ color: "black" }}>
        E-commerce is buying and selling goods using the internet, and
        transferring money and data to complete those transactions. All stores
        that sell products online can be classified as e-commerce. This could be
        anything from online marketplaces like Amazon and Etsy, to food delivery
        platforms and B2B services.
        <h4 style={{ color: "red" }}>Our E-commerce Projects are:</h4>
        <ul>
          <li>RNIS College</li>
          <li>Raksha Universal</li>
          <li>IITD</li>
          <li>RechargeitNow</li>
          <li>Bihar IPRD, Government</li>
        </ul>
      </p>
    ),
    gifUrl: ecommerece,
  },
  {
    heading: "Logistics",
    content: (
      <p style={{ color: "black" }}>
        Logistics refers to the overall process of managing how resources are
        acquired, stored, and transported to their final destination. Logistics
        management involves identifying prospective distributors and suppliers
        and determining their effectiveness and accessibility. Logistics
        managers are referred to as logisticians.
        <h4 style={{ color: "red" }}>Our logistics Projects are:</h4>
        <ul>
          <li>Safepress</li>
        </ul>
      </p>
    ),
    gifUrl: logistics,
  },
  {
    heading: "Claim Processing",
    content: (
      <p style={{ color: "black" }}>
        Claims processing begins when a healthcare provider has submitted a
        claim request to the insurance company. Sometimes, claim requests are
        directly submitted by medical billers in the healthcare facility and
        sometimes, it is done through a clearing house.
        <h4 style={{ color: "red" }}>Our Claim Processing Projects are:</h4>
        <ul>
          <li>Raksha TPA</li>
        </ul>
      </p>
    ),
    gifUrl: claim,
  },
];

// Refined Glassmorphism Section with improved depth and gradient
const GlassmorphismSection = styled(Box)`
  position: relative;
  padding: 6rem 2rem;
  background: #0e0e0e
  backdrop-filter: blur(15px);
  border-radius: 16px;
  overflow: hidden;
  
  margin: 2rem;
 

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 0, 0, 0.3),
      transparent
    );
  }
`;

// Refined Neon Title with improved text effects and smaller size
const NeonTitle = styled(Typography)`
  position: relative;
  color: transparent;
  background: linear-gradient(90deg, #ff3333, #cc0000);
  background-clip: text;
  -webkit-background-clip: text;
  display: inline-block;
  text-align: center;
  margin-bottom: 3rem;
  filter: drop-shadow(0 0 8px rgba(255, 0, 0, 0.5));
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-size: 2.2rem;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #ff0000, transparent);
    animation: glow 2s infinite;
  }

  @keyframes glow {
    0%,
    100% {
      opacity: 0.6;
    }
    50% {
      opacity: 1;
    }
  }
`;

// Refined IconCard with improved proportions - removed hover color change
const IconCard = styled(Card)`
  height: 60%;
  background: rgba(231, 227, 227, 0.95);
  backdrop-filter: blur(15px);
  border-radius: 14px;
  width: fit-content;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transform: translateY(0) scale(1);
  position: relative;
  isolation: isolate;
  color: #f0f0f0;
  border: 1px solid rgba(255, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    transition: 0.3s;
    transform: translateY(-15px) scale(1.03);
    box-shadow: 0 20px 40px rgba(187, 0, 0, 0.3);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #ff0000, #880000);
    z-index: -1;
  }
`;

// Refined FloatingCard with improved dimensions - removed hover color change
const FloatingCard = styled(Card)`
  height: 100%;
  background: rgba(231, 227, 227, 0.95);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  transform: translateY(0) scale(1);
  position: relative;
  isolation: isolate;
  color: black;
  border: 1px solid rgba(255, 0, 0, 0.15);

  &:hover {
    transition: 0.3s;
    transform: translateY(-15px) scale(1.03);
    box-shadow: 0 20px 40px rgba(187, 0, 0, 0.3);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #ff0000, #880000);
    z-index: -1;
  }
`;

// Refined GIF with smaller size
const GlowingGif = styled.img`
  transition: all 0.6s ease;
  max-width: 40%;
  height: auto;
filter: invert(1) drop-shadow(0 0 2px rgba(255, 0, 0, 0.5));

  ${IconCard}:hover & {
    transition: "0.3s";
    transform: scale(1.05);
    filter: invert(1) drop-shadow(0 0 2px rgba(255, 0, 0, 0.5));
  }
`;

// Refined ZigZag Container with better spacing
const ZigZagContainer = styled(Box)`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
`;

// Refined ContentSection with better spacing
const ContentSection = styled(Box)`
  position: relative;
  margin-bottom: 90px;
  width: 100%;
  display: flex;
  justify-content: center;

  &:last-child {
    margin-bottom: 30px;
  }
`;

const TrueZigZagLayout: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
  const sectionRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Configure refs for sections
  sectionRefs.current = Array(sectionData.length)
    .fill(null)
    .map((_, i) => sectionRefs.current[i] || React.createRef<HTMLDivElement>());

  useEffect(() => {
    // Observer for the sections with improved threshold for better animations
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            setVisibleSections((prev) => {
              if (!prev.includes(sectionIndex)) {
                return [...prev, sectionIndex];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.2, rootMargin: "-40px" }
    );

    // Observe each section
    sectionRefs.current.forEach((ref) => {
      if (ref.current) {
        sectionObserver.observe(ref.current);
      }
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref.current) {
          sectionObserver.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <Box style={{ width: "100%", backgroundColor: "#0e0e0e" }}>
      <GlassmorphismSection>
        <ZigZagContainer ref={containerRef}>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <NeonTitle variant="h3" >
              Our Services
            </NeonTitle>
          </Box>

          {/* Sections with improved zigzag layout */}
          {sectionData.map((section, index) => (
            <ContentSection
              key={index}
              ref={sectionRefs.current[index]}
              data-index={index}
              sx={{
                opacity: visibleSections.includes(index) ? 1 : 0,
                transition: `opacity 0.8s ease ${index * 0.1}s`,
              }}
            >
              {/* For desktop view: improved zigzag layout */}
              {!isMobile && (
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                    gap: 4,
                  }}
                >
                  <Box
                    sx={{
                      width: "25%",
                      transform: visibleSections.includes(index)
                        ? "translateX(0)"
                        : `translateX(${index % 2 === 0 ? "-100px" : "100px"})`,
                      transition: `transform 0.8s cubic-bezier(0.25, 0.75, 0.5, 1.25) ${
                        index * 0.1 + 0.2
                      }s`,
                    }}
                  >
                    <IconCard>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          textAlign: "center",
                          padding: "1.2rem",
                        }}
                      >
                        {/* Smaller Icon */}
                        <GlowingGif
                          src={section.gifUrl}
                          alt={section.heading}
                        />

                        {/* Smaller Heading */}
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: "bold",
                            mt: 2,
                            background:
                              "linear-gradient(90deg, #ff3333, #cc0000)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                            textAlign: "center",
                            fontSize: "1.2rem",
                          }}
                        >
                          {section.heading}
                        </Typography>
                      </Box>
                    </IconCard>
                  </Box>

                  <Box
                    sx={{
                      width: "70%",
                      transform: visibleSections.includes(index)
                        ? "translateX(0)"
                        : `translateX(${index % 2 === 0 ? "100px" : "-100px"})`,
                      transition: `transform 0.8s cubic-bezier(0.25, 0.75, 0.5, 1.25) ${
                        index * 0.1 + 0.4
                      }s`,
                    }}
                  >
                    <FloatingCard>
                      <CardContent sx={{ p: 3.5 }}>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: "bold",
                            mb: 2,
                            background:
                              "linear-gradient(90deg, #ff3333, #cc0000)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                            textAlign: index % 2 === 0 ? "left" : "left",
                            fontSize: "1.3rem",
                          }}
                        >
                          {section.heading}
                        </Typography>
                        <Typography
                          variant="body1"
                          color="#b8b8b8"
                          sx={{
                            lineHeight: 1.8,
                            textAlign: index % 2 === 0 ? "left" : "left",
                            fontSize: "0.95rem",
                          }}
                        >
                          {section.content}
                        </Typography>
                      </CardContent>
                    </FloatingCard>
                  </Box>
                </Box>
              )}

              {/* For tablet view: adjusted layout */}
              {isTablet && (
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      width: "100%",
                      justifyContent: "center",
                      transform: visibleSections.includes(index)
                        ? "translateY(0)"
                        : "translateY(50px)",
                      transition: `transform 0.8s cubic-bezier(0.25, 0.75, 0.5, 1.25) ${
                        index * 0.1
                      }s`,
                    }}
                  >
                    <IconCard sx={{ width: "40%" }}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          padding: "1rem",
                          justifyContent: "space-between",
                        }}
                      >
                        <GlowingGif
                          src={section.gifUrl}
                          alt={section.heading}
                          style={{ maxWidth: "30%" }}
                        />
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: "bold",
                            background:
                              "linear-gradient(90deg, #ff3333, #cc0000)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                            fontSize: "1.1rem",
                          }}
                        >
                          {section.heading}
                        </Typography>
                      </Box>
                    </IconCard>
                  </Box>

                  <Box
                    sx={{
                      width: "100%",
                      transform: visibleSections.includes(index)
                        ? "translateY(0)"
                        : "translateY(50px)",
                      transition: `transform 0.8s cubic-bezier(0.25, 0.75, 0.5, 1.25) ${
                        index * 0.1 + 0.2
                      }s`,
                    }}
                  >
                    <FloatingCard>
                      <CardContent sx={{ p: 3 }}>
                        <Typography
                          variant="body1"
                          color="#b8b8b8"
                          sx={{
                            lineHeight: 1.8,
                            fontSize: "0.95rem",
                          }}
                        >
                          {section.content}
                        </Typography>
                      </CardContent>
                    </FloatingCard>
                  </Box>
                </Box>
              )}

              {/* For mobile view: stacked layout */}
              {isMobile && !isTablet && (
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      transform: visibleSections.includes(index)
                        ? "translateY(0)"
                        : "translateY(50px)",
                      transition: `transform 0.8s cubic-bezier(0.25, 0.75, 0.5, 1.25) ${
                        index * 0.1
                      }s`,
                    }}
                  >
                    <IconCard sx={{ width: "100%" }}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          padding: "0.8rem",
                          justifyContent: "flex-start",
                          gap: 2,
                        }}
                      >
                        <GlowingGif
                          src={section.gifUrl}
                          alt={section.heading}
                          style={{ maxWidth: "15%" }}
                        />
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: "bold",
                            background:
                              "linear-gradient(90deg, #ff3333, #cc0000)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                            fontSize: "1rem",
                          }}
                        >
                          {section.heading}
                        </Typography>
                      </Box>
                    </IconCard>
                  </Box>

                  <Box
                    sx={{
                      width: "100%",
                      transform: visibleSections.includes(index)
                        ? "translateY(0)"
                        : "translateY(50px)",
                      transition: `transform 0.8s cubic-bezier(0.25, 0.75, 0.5, 1.25) ${
                        index * 0.1 + 0.2
                      }s`,
                    }}
                  >
                    <FloatingCard>
                      <CardContent sx={{ p: 2.5 }}>
                        <Typography
                          variant="body2"
                          color="#b8b8b8"
                          sx={{
                            lineHeight: 1.7,
                            fontSize: "0.9rem",
                          }}
                        >
                          {section.content}
                        </Typography>
                      </CardContent>
                    </FloatingCard>
                  </Box>
                </Box>
              )}
            </ContentSection>
          ))}
        </ZigZagContainer>
      </GlassmorphismSection>
    </Box>
  );
};

export default TrueZigZagLayout;

// import React, { useState, useEffect, useRef } from "react";
// import {
//   Box,
//   Typography,
//   Card,
//   CardContent,
//   useTheme,
//   useMediaQuery,
// } from "@mui/material";
// import styled from "styled-components";

// // Sample data structure for each section
// const sectionData = [
//   {
//     heading: "Heading 1",
//     content: "Detailed content for section 1. This describes the features, benefits, and applications of this particular service or technology.",
//     gifUrl: "../assets/gifs/section1.gif",
//   },
//   {
//     heading: "Heading 2",
//     content: "Detailed content for section 2. This describes the features, benefits, and applications of this particular service or technology.",
//     gifUrl: "../assets/gifs/section2.gif",
//   },
//   {
//     heading: "Heading 3",
//     content: "Detailed content for section 3. This describes the features, benefits, and applications of this particular service or technology.",
//     gifUrl: "../assets/gifs/section3.gif",
//   },
//   {
//     heading: "Heading 4",
//     content: "Detailed content for section 4. This describes the features, benefits, and applications of this particular service or technology.",
//     gifUrl: "../assets/gifs/section4.gif",
//   },
// ];

// // Modern Glassmorphism Section with Red/Black Theme
// const GlassmorphismSection = styled(Box)`
//   position: relative;
//   padding: 8rem 2rem;
//   background: rgba(18, 18, 18, 0.9);
//   backdrop-filter: blur(10px);
//   border-radius: 16px;
//   overflow: hidden;
//   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
//   margin: 2rem;
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

// // Red glow effect for GIF images
// const GlowingGif = styled.img`
//   filter: drop-shadow(0 0 8px rgba(255, 0, 0, 0.5));
//   transition: all 0.5s ease;
//   max-width: 100%;
//   height: auto;

//   &:hover {
//     filter: drop-shadow(0 0 15px rgba(255, 0, 0, 0.8));
//     transform: scale(1.05);
//   }
// `;

// // ZigZag Container
// const ZigZagContainer = styled(Box)`
//   position: relative;
//   max-width: 1200px;
//   margin: 0 auto;
// `;

// // ZigZag connector line
// const ZigZagConnector = styled.div`
//   position: absolute;
//   width: 4px;
//   background: linear-gradient(to bottom, #ff0000, #cc0000);
//   z-index: 0;
//   left: 50%;
//   transform: translateX(-50%);
//   top: 100px;
//   bottom: 50px;

//   &::before {
//     content: '';
//     position: absolute;
//     height: 100%;
//     width: 100%;
//     background: linear-gradient(to bottom, transparent, rgba(255, 0, 0, 0.7), transparent);
//     animation: pulse 3s infinite;
//   }

//   @keyframes pulse {
//     0% { opacity: 0.3; }
//     50% { opacity: 1; }
//     100% { opacity: 0.3; }
//   }
// `;

// // Individual section containers
// const ContentSection = styled(Box)`
//   position: relative;
//   margin-bottom: 100px;
//   width: 100%;
//   display: flex;
//   justify-content: center;
// `;

// const TrueZigZagLayout = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
//   const [visibleSections, setVisibleSections] = useState([]);
//   const sectionRefs = useRef([]);
//   const containerRef = useRef(null);

//   // Configure refs for sections
//   sectionRefs.current = Array(sectionData.length).fill().map((_, i) => sectionRefs.current[i] || React.createRef());

//   useEffect(() => {
//     // Observer for the sections
//     const sectionObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             const sectionIndex = parseInt(entry.target.dataset.index);
//             setVisibleSections(prev => {
//               if (!prev.includes(sectionIndex)) {
//                 return [...prev, sectionIndex];
//               }
//               return prev;
//             });
//           }
//         });
//       },
//       { threshold: 0.15, rootMargin: "-50px" }
//     );

//     // Observe each section
//     sectionRefs.current.forEach(ref => {
//       if (ref.current) {
//         sectionObserver.observe(ref.current);
//       }
//     });

//     return () => {
//       sectionRefs.current.forEach(ref => {
//         if (ref.current) {
//           sectionObserver.unobserve(ref.current);
//         }
//       });
//     };
//   }, []);

//   return (
//     <GlassmorphismSection>
//       <ZigZagContainer ref={containerRef}>
//         <Box sx={{ textAlign: "center", mb: 6 }}>
//           <NeonTitle variant="h3" component="h2">
//             Our Services
//           </NeonTitle>
//         </Box>

//         {/* ZigZag connector (visible on desktop only) */}
//         {!isMobile && <ZigZagConnector />}

//         {/* Sections with true zigzag layout */}
//         {sectionData.map((section, index) => (
//           <ContentSection
//             key={index}
//             ref={sectionRefs.current[index]}
//             data-index={index}
//             sx={{
//               opacity: visibleSections.includes(index) ? 1 : 0,
//               transition: `opacity 0.8s ease ${index * 0.1}s`,
//             }}
//           >
//             {/* For desktop view: true zigzag layout */}
//             {!isMobile && (
//               <Box sx={{
//                 width: "80%",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: index % 2 === 0 ? "flex-start" : "flex-end",
//               }}>
//                 <Box sx={{
//                   width: "65%",
//                   mb: 2,
//                   alignSelf: index % 2 === 0 ? "flex-start" : "flex-end",
//                   transform: visibleSections.includes(index)
//                     ? "translateX(0)"
//                     : `translateX(${index % 2 === 0 ? '-100px' : '100px'})`,
//                   transition: `transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.1 + 0.2}s`,
//                 }}>
//                   <FloatingCard>
//                     <Box sx={{ p: 3, display: "flex", justifyContent: "center", alignItems: "center" }}>
//                       <GlowingGif
//                         src={section.gifUrl}
//                         alt={section.heading}
//                       />
//                     </Box>
//                   </FloatingCard>
//                 </Box>

//                 <Box sx={{
//                   width: "65%",
//                   alignSelf: index % 2 === 0 ? "flex-end" : "flex-start",
//                   transform: visibleSections.includes(index)
//                     ? "translateX(0)"
//                     : `translateX(${index % 2 === 0 ? '100px' : '-100px'})`,
//                   transition: `transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.1 + 0.4}s`,
//                 }}>
//                   <FloatingCard>
//                     <CardContent sx={{ p: 4 }}>
//                       <Typography
//                         variant="h4"
//                         sx={{
//                           fontWeight: "bold",
//                           mb: 3,
//                           background: "linear-gradient(90deg, #ff0000, #cc0000)",
//                           backgroundClip: "text",
//                           WebkitBackgroundClip: "text",
//                           color: "transparent",
//                           textAlign: index % 2 === 0 ? "left" : "right",
//                         }}
//                       >
//                         {section.heading}
//                       </Typography>
//                       <Typography
//                         variant="body1"
//                         color="#a0a0a0"
//                         sx={{
//                           lineHeight: 1.8,
//                           textAlign: index % 2 === 0 ? "left" : "right",
//                         }}
//                       >
//                         {section.content}
//                       </Typography>
//                     </CardContent>
//                   </FloatingCard>
//                 </Box>
//               </Box>
//             )}

//             {/* For mobile view: stacked layout */}
//             {isMobile && (
//               <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
//                 <Box sx={{
//                   width: "100%",
//                   mb: 2,
//                   transform: visibleSections.includes(index) ? "translateY(0)" : "translateY(50px)",
//                   transition: `transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.1}s`,
//                 }}>
//                   <FloatingCard>
//                     <Box sx={{ p: 3, display: "flex", justifyContent: "center", alignItems: "center" }}>
//                       <GlowingGif
//                         src={section.gifUrl}
//                         alt={section.heading}
//                       />
//                     </Box>
//                   </FloatingCard>
//                 </Box>

//                 <Box sx={{
//                   width: "100%",
//                   transform: visibleSections.includes(index) ? "translateY(0)" : "translateY(50px)",
//                   transition: `transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.1 + 0.2}s`,
//                 }}>
//                   <FloatingCard>
//                     <CardContent sx={{ p: 4 }}>
//                       <Typography
//                         variant="h4"
//                         sx={{
//                           fontWeight: "bold",
//                           mb: 3,
//                           background: "linear-gradient(90deg, #ff0000, #cc0000)",
//                           backgroundClip: "text",
//                           WebkitBackgroundClip: "text",
//                           color: "transparent",
//                           textAlign: "center",
//                         }}
//                       >
//                         {section.heading}
//                       </Typography>
//                       <Typography
//                         variant="body1"
//                         color="#a0a0a0"
//                         sx={{ lineHeight: 1.8 }}
//                       >
//                         {section.content}
//                       </Typography>
//                     </CardContent>
//                   </FloatingCard>
//                 </Box>
//               </Box>
//             )}
//           </ContentSection>
//         ))}
//       </ZigZagContainer>
//     </GlassmorphismSection>
//   );
// };

// export default TrueZigZagLayout;
