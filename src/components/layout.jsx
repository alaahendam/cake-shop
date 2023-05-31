import NavBar from "./navbar";
const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div
        style={{
          paddingTop: "80px",
        }}
      >
        {children}
      </div>
    </div>
  );
};
export default Layout;
