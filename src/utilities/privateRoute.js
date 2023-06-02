import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const PrivateRoute = (WrappedComponent, role) => {
  const hocComponent = (props) => {
    const router = useRouter();
    const loginUser = useSelector((state) => state.user.user);
    const [passed, setPassed] = useState(true);

    // Simulating authentication check
    // Replace with your authentication logic
    useEffect(() => {
      if (role == "sign" && !loginUser) {
        setPassed(true);
      } else if (!loginUser) {
        router.replace("/login"); // Redirect to login page if not authenticated
      } else if (loginUser.role != role) {
        router.replace("/404");
      } else if (loginUser.role == role) {
        setPassed(true);
      }
    }, [loginUser, router]);

    return passed ? <WrappedComponent {...props} /> : null;
  };

  return hocComponent;
};

export default PrivateRoute;
