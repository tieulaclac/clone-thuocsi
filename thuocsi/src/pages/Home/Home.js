import "./home.css";
import Layout from "../../layout/Layout";
import Slider from "./components/slider/Slider";
import Sanpham from "./components/sanpham/sanpham";
import Doitac from "./components/doitac/doitac";
import Danhgia from "./components/danhgia/Danhgia";
import Truyenthong from "./components/truyenthong/Truyenthong";

export default function Home() {
  return (
    <Layout>
      <div className="home">
        <p>Day la Home</p>
        <Slider/>
        <Sanpham/>
        <Doitac/>
        <Danhgia/>
        <Truyenthong/>
      </div>
    </Layout>
  );
}
