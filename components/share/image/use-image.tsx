import { useState } from "react";

const useImage = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const endLoading = () => {
    return setLoading(false);
  };
  const activationError = () => {
    setError(true);
    endLoading();
  };
  return { error, loading, activationError, endLoading };
};
export default useImage;
