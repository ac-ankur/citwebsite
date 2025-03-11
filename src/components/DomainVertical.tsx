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