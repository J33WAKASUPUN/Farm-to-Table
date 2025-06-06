import React from "react";

const OrderHistoryItem = ({ lineItem, index }) => {
  return (
    <>
      {/* {lineItem.product === null ? (
        <tr>
          <td>Product Does not Exist</td>
        </tr>
      ) : ( */}
      <tr>
        <td
          className="is-vcentered"
          key={lineItem.product === null ? index : lineItem.product._id}
        >
          <div className="vertical-center">
            <img
              id="thumbnail"
              src={
                lineItem.product === null
                  ? "./assets/icons/addproducts.svg"
                  : lineItem.product.pathway
              }
              alt="item description"
            />
            {lineItem.product === null ? (
              "Status 404: Product Not Found"
            ) : (
              <span>
                {lineItem.product.name} ( LKR {lineItem.price} per{" "}
                {lineItem.product.unitSize}-{lineItem.product.unitType} )
              </span>
            )}
          </div>
        </td>
        <td className="is-vcentered">
          <div
            className="vertical-center"
            style={{ height: 20, justifyContent: "center" }}
          >
            {/* quantity */}
            {lineItem.quantity}
          </div>
        </td>
        <td className="is-vcentered">
          <div
            className="vertical-center"
            style={{ height: 20, justifyContent: "center" }}
          >
            <div>LKR {lineItem.totalCost}</div>
          </div>
        </td>
      </tr>
      {/* )} */}
    </>
  );
};

export default OrderHistoryItem;
