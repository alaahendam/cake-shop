import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Pagination from "@mui/material/Pagination";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const CustomPagination = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const pageQuery = router.query.page;
    const parsedPage = pageQuery ? parseInt(pageQuery) : 1;
    setCurrentPage(parsedPage);
  }, [router.query.page]);
  const handlePageChange = (event, page) => {
    router.push({
      pathname: "/products/filter",
      query: { page: page },
    });
  };
  const theme = createTheme({
    palette: {
      primary: {
        main: "#e34a86", // Replace with your custom color
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Pagination
        count={10}
        color="primary" // Use the primary color from the custom theme
        page={currentPage}
        onChange={handlePageChange}
      />
    </ThemeProvider>
  );
};
export default CustomPagination;
