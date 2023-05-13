import { useUser } from "reactfire";

function Homepage() {
    const { status, data: user } = useUser();
  
    if (status === 'loading') {
      return <span>loading...</span>;
    }
  
    return <h1>Welcome Back, {user?.displayName}!</h1>;
}

export default Homepage;