import { BrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Contents from "./layout/Contents";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


function Tripter() {

  return (
    <BrowserRouter>
      <Layout>
        <Contents />
      </Layout>
    </BrowserRouter>
  )
}

export default Tripter
