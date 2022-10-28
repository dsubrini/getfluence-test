import { createContext } from 'react';

export interface User {
  email: string;
  password: string;
  isLogged: boolean;
  city?: string;
}

type UserContextType = {
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

const userContextState = {
  user: undefined,
  setUser: () => {},
};

export const UserContext = createContext<UserContextType>(userContextState);
