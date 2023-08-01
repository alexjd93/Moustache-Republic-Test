import ProductPage from "../src/components/ProductPage/ProductPage";
import Layout from "../src/components/Layout/layout";
import "./App.css";

function App() {
  return (
    <div>
      <Layout className="layout">
        <ProductPage />
      </Layout>
    </div>
  );
}

export default App;
