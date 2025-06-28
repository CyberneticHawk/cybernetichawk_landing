import { Meta } from '../layout/Meta';
import { Nav } from '../navigation/Nav';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Products } from './Products';

const Base = () => (
  <div className="relative overflow-hidden bg-brand-dark text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />

    {/* Nav with solid background */}
    <div className="relative z-20 bg-brand-dark">
      <Nav />
    </div>

    <Hero />
    <Products />
    <Footer />
  </div>
);

export { Base };
