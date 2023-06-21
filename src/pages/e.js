import { useRouter } from "next/router";
const Products = () => {
  const router = useRouter();
  console.log(router);
  return <div>{router.pathname}</div>;
};
export default Products;
