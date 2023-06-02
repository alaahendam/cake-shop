import { useEffect } from "react";
import API from "@/utilities/api";
import { addLoginUser } from "@/redux/features/user";
import { useDispatch } from "react-redux";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchDate = async () => {
      try {
        const { data } = await API.get("/users/");
        if (data.user) {
          dispatch(addLoginUser(data.user));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchDate();
  }, []);
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
