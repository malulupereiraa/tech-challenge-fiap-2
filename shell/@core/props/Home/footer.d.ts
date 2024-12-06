interface FooterProps {
    services: string[];
    contact: {
      phone: string;
      email: string;
      supportEmail: string;
    };
    developedWith: string; 
    logoSrc: string; 
    socialMedia: { imgSrc: string; alt: string }[]; 
  }