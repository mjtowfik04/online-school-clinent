import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { Suspense, useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import ProductMediaGallery from "../components/ProductMediaGallery"

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const { courseId } = useParams();

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
  }, [courseId]);

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
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <Suspense
          fallback={
            <div className="aspect-square bg-base-300 animate-pulse rounded-lg"></div>
          }
        >
          <ProductMediaGallery
            media={product?.media || []}
            productName={product.title}
          />
        </Suspense>

        <div className="flex flex-col">
          <div className="mb-4">
            <div className="badge badge-outline mb-2">
              Category {product.category}
            </div>
            
          </div>

          <div className="mt-2 mb-6">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold"></span>
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

          <div className="mt-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
