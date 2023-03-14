import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Products, useGetProductsQuery } from "../features/api/apiSlice";
import { addToChoiceList } from "../features/productSlice/productSlice";
import {filterSystem} from "./allFunctions";
import "./displayProducts.css";

interface stateOptions {
  filter: { category: string[] };
}
function DisplayProducts() {
  const [range, setRange] = useState(0)
  const dispatch = useDispatch();
  const { data, isLoading } = useGetProductsQuery();
  const [filteredProducts, setFilteredProducts] = useState<Products[]>();
  const category = useSelector(
    (state: stateOptions) => state.filter.category
  );

  useEffect(() => {
    setFilteredProducts(data)
    if (data?.length) {
      let result = filterSystem(data, { category, range })
      setFilteredProducts([...result])
    }
  }, [range, category, data])

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let customerPrice: number = parseInt(e.target.value);
    setRange(customerPrice)
  }
  return (
    <div className="d-flex">
      <div className="w-25 mt-2">
        <h3>Filter Product</h3>
        <div>
          <h5>Category</h5>
          <ul className="category">
            <li
              style={{
                backgroundColor: category.includes("men's clothing")
                  ? "red"
                  : "",
              }}
              onClick={() => dispatch(addToChoiceList("men's clothing"))}
            >
              Men
            </li>
            <li
              style={{
                backgroundColor: category.includes("women's clothing")
                  ? "red"
                  : "",
              }}
              onClick={() => dispatch(addToChoiceList("women's clothing"))}
            >
              Women
            </li>
            <li
              style={{
                backgroundColor: category.includes("jewelery") ? "red" : "",
              }}
              onClick={() => dispatch(addToChoiceList("jewelery"))}
            >
              Jewelery
            </li>
            <li
              style={{
                backgroundColor: category.includes("electronics")
                  ? "red"
                  : "",
              }}
              onClick={() => dispatch(addToChoiceList("electronics"))}
            >
              Electronics
            </li>
          </ul>
          <div>
            <label htmlFor="price" className="m-4  fw-bold">Max Price: </label>
            <input type="number" onChange={e => handleOnChange(e)} className="form-range w-25" min="0" id="customRange2" />
          </div>
        </div>
      </div>
      <div className="container-fluid mt-3">
        {isLoading && (
          <span
            className="spinner-border d-flex justify-content-center"
            role="status"
          ></span>
        )}

        <div className="row g-5">
          {!isLoading &&
            filteredProducts?.map((product) => (
              <div className="col-sm-12 col-md-4 col-lg-4" key={product.id}>
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={product?.image}
                    className="card-img-top w-25 mx-auto my-5"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product?.title}</h5>
                    <p className="card-text text-justified">
                      {product?.description.slice(0, 100)}...
                    </p>

                    <Link
                      to={`/products/${product.id}`}
                      className="btn btn-primary"
                    >
                      Go somewhere
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default DisplayProducts;
