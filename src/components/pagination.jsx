import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Pagination from "@mui/material/Pagination";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";

const CustomPagination = () => {
  const router = useRouter();
  const productsNum = useSelector((state) => state.products.productsNum);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const pageQuery = router.query.page;
    const parsedPage = pageQuery ? parseInt(pageQuery) : 1;
    setCurrentPage(parsedPage);
  }, [router.query.page]);
  const handlePageChange = (event, page) => {
    let tempRouter = {
      ...router.query,
      page: page,
      size: router.query.size ?? 10,
    };
    delete tempRouter["slug"];
    router.push({
      pathname: "/products/filter",
      query: tempRouter,
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
        count={
          productsNum % (router?.query?.size ?? 10)
            ? parseInt(productsNum / (router?.query?.size ?? 10)) + 1
            : productsNum / (router?.query?.size ?? 10)
        }
        color="primary" // Use the primary color from the custom theme
        page={currentPage}
        onChange={handlePageChange}
      />
    </ThemeProvider>
  );
};
export default CustomPagination;
