import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import ThemeSuspense from "../components/theme/ThemeSuspense";
import { Product } from "../models/types";
import TopSection from "../components/screen/ProductDetails/TopSection";
import ProductDescription from "../components/screen/ProductDetails/ProductDescription";
import RelatedProduct from "../components/screen/ProductDetails/RelatedProduct";
import ProcessingSteps from "src/components/screen/ProcessingSteps";

const ProductDetails = () => {
  const [productData, setProductData] = useState<Product[]>([]);

  const { itemId } = useParams<{ itemId: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const productInfo = productData.find(
    (product) => product._id === Number(itemId)
  );

  const fetchData = () => {
    axios
      .get("/products.json")
      .then((response) => {
        setProductData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [itemId]);

  if (!productInfo) {
    return <ThemeSuspense />;
  }

  return (
    <div>
      <Helmet>
        <title>DailyBuy - Product Details</title>
        <meta
          charSet="utf-8"
          name="description"
          content="DailyBuy Product Details Page"
        />
      </Helmet>
      <div className="mt-20 lg:mt-0">
        <div className="container mt-0 md:mt-[30px]">
          <TopSection productInfo={productInfo} />
          <ProductDescription productInfo={productInfo} />
        </div>

        {/* Related Product */}
        <RelatedProduct productData={productData} />
        <ProcessingSteps />
      </div>
    </div>
  );
};

export default ProductDetails;
