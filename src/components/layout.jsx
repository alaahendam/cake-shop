const Layout = ({ children }) => {
  return (
    <div>
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
