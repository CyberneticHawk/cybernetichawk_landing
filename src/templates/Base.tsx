import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Products } from './Products';

const Base = () => (
  <div className="bg-brand-dark text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <Products />
    <Footer />
  </div>
);

export { Base };
