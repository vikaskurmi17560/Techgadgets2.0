const FormatPrice = ({ price }) => {
  const validPrice = typeof price === "number" && !isNaN(price) ? price : 0;
  return Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(validPrice);
};

export default FormatPrice;