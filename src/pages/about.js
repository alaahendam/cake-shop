import PrivateRoute from "@/utilities/privateRoute";
const About = () => {
  return <div>About</div>;
};

export default PrivateRoute(About, "CLIENT");
