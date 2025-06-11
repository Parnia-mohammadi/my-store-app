"use client";
import { useRouter } from "next/navigation";
import { createContext, ReactNode, useContext, useState } from "react";

export type User = {
  userName: string;
  password: string;
};
type UserContextType = {
  user: User | null;
  Login: (user: User) => void;
  Logout: () => void;
};
const UserContext = createContext<UserContextType | undefined>(undefined);

export default function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  const Login = ({ userName, password }: User) => {
    setUser({ userName, password });
    router.push("/checkout");
  };
  const Logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, Login, Logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error("use useUser inside of userProvider.");
  return context;
}
