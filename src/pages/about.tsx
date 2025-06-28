import { Meta } from '../layout/Meta';
import { Nav } from '../navigation/Nav';
import { About } from '../templates/About';
import { Footer } from '../templates/Footer';

const AboutPage = () => (
  <div className="bg-brand-dark text-gray-600 antialiased">
    <Meta
      title="About - Cybernetic Hawk"
      description="Learn more about Cybernetic Hawk."
    />

    <Nav />

    <main className="px-4 py-20 text-center sm:px-6 lg:px-8">
      <About />
    </main>

    <Footer />
  </div>
);

export default AboutPage;
