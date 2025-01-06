import { SessionProvider } from "next-auth/react";
import React from "react";

// A simple mock session provider, which returns a mock session object
const MockSessionProvider = ({ children }) => {
  const mockSession = {
    user: {
      name: "Mock User",
      email: "mockuser@example.com",
      image: "https://example.com/mock-user.jpg",
    },
    expires: "2024-12-31T23:59:59.999Z",
  };

  return <SessionProvider session={mockSession}>{children}</SessionProvider>;
};

export default MockSessionProvider;
