import { PRODUCTS } from "./data";
import Item from "./item";

function ItemList() {
  // click function
  const alertProductFunction = (productName) => {
    alert(productName);
  };

  return (
    <div>
      <h1>Our market place</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container mx-auto px-4 gap-3">
        {PRODUCTS.map((product) => {
          return (
            <Item
              key={product.id}
              imgLink={product.image}
              productName={product.name}
              price={product.price}
              // Passing the alertProduct function to its parent component for an onclick event.
              alertProductProp={() => alertProductFunction(product.name)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ItemList;
