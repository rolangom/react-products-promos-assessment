import { useProductsPromoApp } from "./hooks";
import ProductItem from "../products/component";

function AppList() {
  const [products, handleApplyPromos] = useProductsPromoApp();

  return (
    <div data-test>
      <header>
        <h2>Products</h2>
        <button type="button" onClick={handleApplyPromos}>
          Apply Promotions
        </button>
      </header>
      <main>
        <section className="cards">
          {products.map((it) => (
            <ProductItem key={it.id} item={it} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default AppList;
