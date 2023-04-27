import { Carousel } from 'antd';
import styles from './Home.module.css';

const contentStyle = {
  margin: 0,
  height: '60vh',
  objectFit: 'fill',
};

export const Home = () => {
  return (
    <>
      <Carousel autoplay dots={{className: styles.dots}}>
        <div>
          <img style={contentStyle} src="../../../public/img/banner/banner_ofertas_colchones_26abr23.webp" alt="1" border="0" />
        </div>
        <div>
          <img style={contentStyle} src="../../../public/img/banner/banner_ofertas_compu_26abr23.webp" alt="1" border="0" />
        </div>
        <div>
          <img style={contentStyle} src="../../../public/img/banner/banner_ofertas_lb_26abr23.webp" alt="1" border="0" />
        </div>
        <div>
          <img style={contentStyle} src="../../../public/img/banner/banner_ofertas_moda_26abr23.webp" alt="1" border="0" />
        </div>
        <div>
          <img style={contentStyle} src="../../../public/img/banner/banner_ofertas_muebles_26abr23.webp" alt="1" border="0" />
        </div>
        <div>
          <img style={contentStyle} src="../../../public/img/banner/banner_ofertas_perfumes_26abr23.webp" alt="1" border="0" />
        </div>
        <div>
          <img style={contentStyle} src="../../../public/img/banner/banner_ofertas_telefonia_26abr23.webp" alt="1" border="0" />
        </div>
      </Carousel>
      <div className={styles.home}>
        <h1>Rangers eCommerce, best in the world mundial</h1>
      </div>
    </>
  );
};
