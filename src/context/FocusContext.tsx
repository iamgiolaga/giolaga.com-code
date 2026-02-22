import { createContext, useContext, useState, ReactNode } from 'react';

interface FocusContextType {
  isFocusingOnProject: boolean;
  setFocusingOnProject: (focusing: boolean) => void;
}

const FocusContext = createContext<FocusContextType | undefined>(undefined);

export const FocusProvider = ({ children }: { children: ReactNode }) => {
  const [isFocusingOnProject, setIsFocusingOnProject] = useState(false);

  const setFocusingOnProject = (focusing: boolean) => {
    setIsFocusingOnProject(focusing);
  };

  return (
    <FocusContext.Provider
      value={{ isFocusingOnProject, setFocusingOnProject }}
    >
      {children}
    </FocusContext.Provider>
  );
};

export const useFocus = () => {
  const context = useContext(FocusContext);
  if (context === undefined) {
    throw new Error('useFocus must be used within a FocusProvider');
  }
  return context;
};
