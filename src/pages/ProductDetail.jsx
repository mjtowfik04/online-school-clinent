import { Link, useParams } from "react-router-dom"; // ✅ use react-router-dom, not react-router
import AddToCartButton from "../components/CoursesDetails/AddToCartButton";
import ProductImageGallery from "../components/CoursesDetails/coursesImage";
import { FaArrowLeft } from "react-icons/fa";
import { Suspense, useEffect, useState } from "react";
import apiClient from "../services/apiClient";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const { courseId } = useParams(); // ✅ Correctly destructured

  useEffect(() => {
    setLoading(true);

    apiClient
      .get(`/api/v1/course/${courseId}/`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load course:", err);
        setLoading(false);
      });
  }, [courseId]); // ✅ Correct dependency

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product Not Found...</div>;

  return (
    <div className="w-3/4 mx-auto px-4 py-8">
      <div className="mb-6">
        <Link
          to="/class"
          className="flex items-center text-sm text-base-content/70 hover:text-base-content transition-colors"
        >
          <FaArrowLeft className="mr-2 h-4 w-4" />
          Back to products
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <Suspense
          fallback={
            <div className="aspect-square bg-base-300 animate-pulse rounded-lg"></div>
          }
        >
          <ProductImageGallery
            images={product?.images}
            productName={product.title} 
          />
        </Suspense>

        <div className="flex flex-col">
          <div className="mb-4">
            <div className="badge badge-outline mb-2">
              Category {product.category}
            </div>
            <h1 className="text-3xl font-bold tracking-tight">
              {product.title}
            </h1>
          </div>

          <div className="mt-2 mb-6">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">${product.price}</span>
              {product.price_with_tax && (
                <span className="text-sm text-base-content/70">
                  (${product.price_with_tax} incl. tax)
                </span>
              )}
            </div>
          </div>

          <div className="prose prose-sm mb-6">
            <p>{product.description}</p>
          </div>

          {/* <div className="mb-6">
            <div className="flex items-center">
              <div className="mr-2 text-sm font-medium">Availability:</div>
              {product.stock > 0 ? (
                <div className="badge badge-outline bg-success/10 text-success border-success/20">
                  In Stock ({product.stock} available)
                </div>
              ) : (
                <div className="badge badge-outline bg-error/10 text-error border-error/20">
                  Out of Stock
                </div>
              )}
            </div>
          </div> */}

          <div className="mt-auto">
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
