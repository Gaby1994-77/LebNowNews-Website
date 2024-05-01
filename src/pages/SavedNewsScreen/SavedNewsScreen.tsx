import React, { Dispatch, SetStateAction } from "react";

interface SavedNewsScreenProps {
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
}

const SavedNewsScreen: React.FC<SavedNewsScreenProps> = ({
  setIsAuthenticated,
}) => {
  return <div>Saved News Screen</div>;
};

export default SavedNewsScreen;
