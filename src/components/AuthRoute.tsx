import { useSigninCheck } from 'reactfire';
import { Navigate } from 'react-router-dom';

type AuthRouteProps = {
  children: React.ReactNode;
};

const AuthRoute = ({ children }: AuthRouteProps) => {
  const { status, data: signInCheckResult } = useSigninCheck();
  
  if(status === "loading") {
    return <div>Loading...</div>;
  } 
  
  if(!signInCheckResult.signedIn) {
    return <Navigate to='/login' />;
  }

  return <>{children}</>
};
export default AuthRoute;