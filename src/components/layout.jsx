import NavBar from "./navbar";
import TestNavBar from "./test";
const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />

      <div
        style={{
          paddingTop: "80px",
        }}
      >
        <TestNavBar />
        {children}
      </div>
    </div>
  );
};
export default Layout;
