"use client";

import { useRouter } from "next/navigation";
import type React from "react";
import { createContext, useState, useContext, useEffect } from "react";
import Cookies from "universal-cookie"; // Universal cookie library

// Define the User type
type User = {
  id: string;
  username: string;
  email: string;
  isAuthenticated: boolean;
} | null;

type UserContextType = {
  user: User;
  setUser: (user: User) => void;
  logout: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
    const router = useRouter();
  const cookies = new Cookies(); // Create cookies instance
  const [user, setUserState] = useState<User>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize user from cookie on mount
  useEffect(() => {
    const savedUser = cookies.get("user");
    if (savedUser) {
      try {
        setUserState(savedUser);
      } catch (error) {
        console.error("Error parsing user cookie:", error);
        cookies.remove("user");
      }
    }
    setIsInitialized(true);
  }, []); // Empty dependency array since we only want this to run once on mount

  // Update cookie when user changes
  useEffect(() => {
    if (isInitialized) {
      if (user) {
        // Set cookie with 7 days expiration
        cookies.set("user", user, {
          path: "/",
          maxAge: 7 * 24 * 60 * 60, // 7 days in seconds
          sameSite: "strict",
          secure: process.env.NODE_ENV === "production",
        });
      } else {
        cookies.remove("user", { path: "/" });
      }
    }
  }, [user, isInitialized]); // Only depends on user and isInitialized

  const setUser = (newUser: User) => {
    setUserState(newUser);
  };

  const logout = () => {
    setUserState(null);
    router.push('/');
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};