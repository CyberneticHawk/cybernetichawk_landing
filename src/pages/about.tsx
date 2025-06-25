import { Meta } from '../layout/Meta';
import { Nav } from '../navigation/Nav';
import { About } from '../templates/About';
import { Footer } from '../templates/Footer';
import { AppConfig } from '../utils/AppConfig';

const AboutPage = () => (
  <div className="bg-brand-dark text-gray-600 antialiased">
    <Meta
      title={`About | ${AppConfig.title}`}
      description="Learn more about Cybernetic Hawk."
    />

    <div className="px-4 sm:px-8">
      <Nav />
      <About />
      <Footer />
    </div>
  </div>
);

export default AboutPage;
