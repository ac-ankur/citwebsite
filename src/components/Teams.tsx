import React, { useEffect, useState } from "react";
import "../assets/css/Teams.css"
import { Box } from "@mui/material";
import RaviSIr from "../assets/images/team/ravi sir.jpeg"
import Shreevidya from "../assets/images/team/vidyamam.jpeg"
import Rahul from "../assets/images/team/rahulsir.jpeg"
import VinodSir from "../assets/images/team/binodsir.jpeg"
import RiteshSir from "../assets/images/team/riteshsir.jpeg"
import RohitSir from "../assets/images/team/rohitsir.jpeg"

// Define the interface for team member data
interface TeamMember {
  name: string;
  image: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Dr. Ravi Ramakrishnan",
    image: RaviSIr, // Replace with actual image URL
    description:
      "Dr. Ravi has 24+ years of global experience in complex implementations in manufacturing, insurance, financial services, knowledge-based industry, telecom & internet portals.",
  },
  {
    name: "Shreevidya Ravi",
    image: Shreevidya,
    description:
      "Shreevidya, with 17+ years of IT industry experience is a seasoned software professional, well adept in managing administration and students interaction.",
  },
  {
    name: "Rahul Wali",
    image:Rahul,
    description:
      "Rahul, with over 22 years of global experience (ex Deloitte) on multiple technologies, is an expert in online and mobile digitisation strategies and handled multiple projects globally.",
  },
 
];

const teamMembers2: TeamMember[] = [
  {
    name: "Vinod Gupta",
    image: VinodSir,
    description:
      "Vinod Gupta, 13+ years expert project manager with substantial experience in leading all stages of technological projects. Excels at motivating and managing team to obtain top-level performance.",
  },
  {
    name: "Ritesh Kumar",
    image: RiteshSir,
    description:
      "Ritesh, HR with 13+ years experience has extensive background in HR generalist affairs, employee recruitment and retention, HR policies development and legal compliance.",
  },
  {
    name: "Rohit Chaudhary",
    image: RohitSir,
    description:
      "5+ Years of experience in cloud computing, python development & training supoport programs management.",
  },
 
];

const TeamPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0,0);
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <Box>
    <div className="team-page">
      {/* Header */}
      <header className="team-header">Meet Our Team</header>

      {/* Team Section */}
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className={`team-card ${isLoaded ? "loaded" : ""}`}>
            <div className="team-image">
              <img src={member.image} alt={member.name} />
            </div>
            <h3 className="team-name">{member.name}</h3>
            <p className="team-description">{member.description}</p>
          </div>
        ))}
      </div>
      <div className="team-container">
        {teamMembers2.map((member, index) => (
          <div key={index} className={`team-card ${isLoaded ? "loaded" : ""}`}>
            <div className="team-image">
              <img src={member.image} alt={member.name} />
            </div>
            <h3 className="team-name">{member.name}</h3>
            <p className="team-description">{member.description}</p>
          </div>
        ))}
      </div>

      
    </div>
    </Box>
  );
};

export default TeamPage;