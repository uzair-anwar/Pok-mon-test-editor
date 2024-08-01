import { useState } from 'react';

const ErrorBoundary = ({ children }:any) => {
  const [hasError, setHasError] = useState(false);

  const getDerivedStateFromError = (error: any) => {
    setHasError(true);
  };

  const componentDidCatch = (error: any, errorInfo: any) => {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  };

  if (hasError) {
    return <h1>Something went wrong.</h1>;
  }

  return children;
};

export default ErrorBoundary;
