import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

// Main container
const FooterContainer = styled(motion.footer)`
  position: relative;
  background: #0a0a0a;
  color: rgba(255, 255, 255, 0.85);
  padding: 80px 24px 40px;
  overflow: hidden;
`;

// Background elements
const FooterBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -150px;
    right: -100px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 0, 0, 0.15) 0%, transparent 70%);
    filter: blur(40px);
  }
  
  &::after {
    content: '';
    position: absolute;
    left: -50px;
    bottom: -100px;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(100, 0, 0, 0.1) 0%, transparent 70%);
    filter: blur(30px);
  }
`;

// Diagonal top border
const DiagonalBorder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, 
    #990000 0%, 
    #ff0000 20%, 
    #ff3333 50%,
    #ff0000 80%,
    #990000 100%);
  clip-path: polygon(
    0 0,
    100% 0,
    98% 100%,
    2% 100%
  );
`;

// Content wrapper
const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 40px;
  
  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 60px;
  }
`;

// Logo section
const LogoSection = styled.div`
  grid-column: span 3;
  
  @media (max-width: 900px) {
    grid-column: span 1;
  }
`;

const LogoContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`;

const LogoSymbol = styled(motion.div)`
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #ff0000, #990000);
  border-radius: 8px;
  transform: rotate(45deg);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 20px rgba(255, 0, 0, 0.3);
  
  &::before {
    content: '';
    width: 18px;
    height: 18px;
    border-radius: 4px;
    background: black;
    border: 2px solid rgba(255, 255, 255, 0.8);
  }
`;

const LogoText = styled.span`
  font-size: 24px;
  font-weight: 800;
  background: linear-gradient(to right, #ffffff, #ff9999);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 1px;
`;

const CompanyDescription = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
  max-width: 300px;
  margin-bottom: 24px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 20px;
`;

const SocialIcon = styled(motion.a)`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: 1px solid rgba(255, 0, 0, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 0, 0, 0.2);
    border-color: rgba(255, 0, 0, 0.4);
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

// Nav sections
const NavSection = styled.div`
  grid-column: span 2;
  
  @media (max-width: 900px) {
    grid-column: span 1;
  }
`;

const NavTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 24px;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 2px;
    background: #ff0000;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled(motion.li)`
  margin-bottom: 12px;
`;

const NavLink = styled(motion.a)`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  padding-left: 0;
  display: inline-block;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 0;
    height: 1px;
    background: #ff0000;
    transform: translateY(-50%);
    opacity: 0;
    transition: all 0.3s ease;
  }
  
  &:hover {
    color: rgba(255, 255, 255, 1);
    padding-left: 18px;
    
    &::before {
      width: 12px;
      opacity: 1;
    }
  }
`;

// Contact section
const ContactSection = styled.div`
  grid-column: span 3;
  
  @media (max-width: 900px) {
    grid-column: span 1;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 20px;
  
  svg {
    margin-top: 3px;
    color: #ff0000;
  }
`;

const ContactText = styled.div`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
`;

const ContactLabel = styled.span`
  display: block;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  margin-bottom: 4px;
`;

// Newsletter section
// const NewsletterSection = styled.div`
//   grid-column: span 2;
  
//   @media (max-width: 900px) {
//     grid-column: span 1;
//   }
// `;

// const NewsletterDescription = styled.p`
//   font-size: 14px;
//   line-height: 1.6;
//   color: rgba(255, 255, 255, 0.7);
//   margin-bottom: 20px;
// `;

// const EmailForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 12px;
// `;

// const EmailInput = styled(motion.input)`
//   background: rgba(255, 255, 255, 0.05);
//   border: 1px solid rgba(255, 0, 0, 0.2);
//   border-radius: 8px;
//   height: 42px;
//   padding: 0 16px;
//   color: white;
//   font-size: 14px;
//   width: 100%;
//   transition: all 0.3s ease;
  
//   &:focus {
//     outline: none;
//     border-color: rgba(255, 0, 0, 0.5);
//     background: rgba(255, 255, 255, 0.08);
//     box-shadow: 0 0 0 2px rgba(255, 0, 0, 0.1);
//   }
  
//   &::placeholder {
//     color: rgba(255, 255, 255, 0.4);
//   }
// `;

// const SubscribeButton = styled(motion.button)`
//   background: linear-gradient(135deg, #ff0000, #990000);
//   color: white;
//   border: none;
//   border-radius: 8px;
//   height: 42px;
//   font-size: 14px;
//   font-weight: 600;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   position: relative;
//   overflow: hidden;
  
//   &::after {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: linear-gradient(135deg, #cc0000, #800000);
//     opacity: 0;
//     transition: opacity 0.3s ease;
//   }
  
//   &:hover::after {
//     opacity: 1;
//   }
  
//   span {
//     position: relative;
//     z-index: 1;
//   }
// `;

// Bottom section
const BottomSection = styled.div`
  margin-top: 80px;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
`;

const CopyrightText = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
`;

const BottomLinks = styled.div`
  display: flex;
  gap: 24px;
`;

const BottomLink = styled.a`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ff0000;
  }
`;

// SVG Icons
const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 16.92V19.92C21 20.4704 20.7893 20.9996 20.4142 21.3747C20.0391 21.7498 19.51 21.96 18.96 21.96C15.6624 21.8061 12.4766 20.6609 9.8 18.66C7.32793 16.8334 5.36118 14.467 4.02 11.67C2.31325 8.72631 1.44349 5.31645 1.5 1.86C1.50047 1.31105 1.71053 0.785933 2.08538 0.413413C2.46023 0.0408918 2.98884 -0.168324 3.54 -0.17H6.54C7.58399 -0.182181 8.47455 0.664634 8.64 1.7C8.75968 2.51224 8.97237 3.30717 9.27 4.07C9.55557 4.81179 9.43438 5.6519 8.95 6.27L7.68 7.82C8.94106 10.4273 11.0727 12.5589 13.68 13.82L15.23 12.55C15.8481 12.0656 16.6882 11.9444 17.43 12.23C18.1928 12.5276 18.9877 12.7403 19.8 12.86C20.8518 13.028 21.7112 13.9393 21.68 15.01L21 16.92Z" fill="currentColor"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M23 3.01006C22.0424 3.68553 20.9821 4.20217 19.86 4.54006C19.2577 3.84757 18.4573 3.35675 17.567 3.13398C16.6767 2.91122 15.7395 2.96725 14.8821 3.29451C14.0247 3.62177 13.2884 4.20446 12.773 4.96377C12.2575 5.72309 11.9877 6.62239 12 7.54006V8.54006C10.2426 8.58562 8.50127 8.19587 6.93101 7.4055C5.36074 6.61513 4.01032 5.44869 3 4.01006C3 4.01006 -1 13.0101 8 17.0101C5.94053 18.408 3.48716 19.109 1 19.0101C10 24.0101 21 19.0101 21 7.51006C20.9991 7.23151 20.9723 6.95365 20.92 6.68006C21.9406 5.67355 22.6608 4.40277 23 3.01006Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" />
    <path d="M6 9H2V21H6V9Z" />
    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" />
  </svg>
);

// Component implementation
const Footer: React.FC = () => {
  const navItems1 = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Services", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Testimonials", href: "#" },
  ];

  const navItems2 = [
    { name: "Technologies", href: "#" },
    { name: "Development", href: "#" },
    { name: "Design", href: "#" },
    { name: "Security", href: "#" },
    { name: "Support", href: "#" },
  ];

  const navItems3 = [
    { name: "FAQ", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <FooterContainer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <FooterBackground />
      <DiagonalBorder />
      
      <ContentWrapper>
        {/* Company Info Section */}
        <LogoSection>
          <LogoContainer>
            <LogoSymbol 
              whileHover={{ rotate: 225, transition: { duration: 0.5 } }} 
            />
            <LogoText>ConsultIT</LogoText>
          </LogoContainer>
          
          <CompanyDescription>
          Technology Partners For Your Enterprise.
          </CompanyDescription>
          
          <SocialLinks>
            <SocialIcon
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FacebookIcon />
            </SocialIcon>
            <SocialIcon
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <TwitterIcon />
            </SocialIcon>
            <SocialIcon
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon />
            </SocialIcon>
          </SocialLinks>
        </LogoSection>
        
        {/* Navigation Section 1 */}
        <NavSection>
          <NavTitle>Company</NavTitle>
          <NavList>
            {navItems1.map((item, index) => (
              <NavItem 
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <NavLink href={item.href}>
                  {item.name}
                </NavLink>
              </NavItem>
            ))}
          </NavList>
        </NavSection>
        
        {/* Navigation Section 2 */}
        <NavSection>
          <NavTitle>Services</NavTitle>
          <NavList>
            {navItems2.map((item, index) => (
              <NavItem 
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <NavLink href={item.href}>
                  {item.name}
                </NavLink>
              </NavItem>
            ))}
          </NavList>
        </NavSection>
        
        {/* Navigation Section 3 */}
        <NavSection>
          <NavTitle>Legal</NavTitle>
          <NavList>
            {navItems3.map((item, index) => (
              <NavItem 
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <NavLink href={item.href}>
                  {item.name}
                </NavLink>
              </NavItem>
            ))}
          </NavList>
        </NavSection>
        
        {/* Contact Information */}
        <ContactSection>
          <NavTitle>Contact Us</NavTitle>
          
          <ContactItem>
            <PhoneIcon />
            <ContactText>
              <ContactLabel>Phone</ContactLabel>
              +91-9810266776
            </ContactText>
          </ContactItem>
          
          <ContactItem>
            <EmailIcon />
            <ContactText>
              <ContactLabel>Email</ContactLabel>
              info@consultit.co.in
            </ContactText>
          </ContactItem>
          
          <ContactItem>
            <LocationIcon />
            <ContactText>
              <ContactLabel>Address</ContactLabel>
              ConsultIT House, TECHZONE 7, IT Plots, Plot 20, West, opposite Bloom International School. <br />
              Greater Noida, Uttar Pradesh 203207
            </ContactText>
          </ContactItem>
        </ContactSection>
        
        {/* Newsletter Section */}
        {/* <NewsletterSection>
          <NavTitle>Newsletter</NavTitle>
          <NewsletterDescription>
            Subscribe to our newsletter to receive updates and exclusive offers.
          </NewsletterDescription>
          
          <EmailForm>
            <EmailInput 
              type="email"
              placeholder="Your email address"
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            <SubscribeButton 
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Subscribe</span>
            </SubscribeButton>
          </EmailForm>
        </NewsletterSection> */}
      </ContentWrapper>
      
      {/* Bottom Section */}
      <ContentWrapper>
        <BottomSection style={{ gridColumn: "span 12" }}>
          <CopyrightText>
          ConsultIT Technologies Pvt Ltd  © 2023 . All rights reserved.
          </CopyrightText>
          
          <BottomLinks>
            <BottomLink href="#">Privacy Policy</BottomLink>
            <BottomLink href="#">Terms of Service</BottomLink>
            <BottomLink href="#">Cookies Policy</BottomLink>
          </BottomLinks>
        </BottomSection>
      </ContentWrapper>
    </FooterContainer>
  );
};

export default Footer;