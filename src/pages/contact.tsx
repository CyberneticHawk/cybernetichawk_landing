import { Meta } from '../layout/Meta';
import { Nav } from '../navigation/Nav';
import { Contact } from '../templates/Contact';
import { Footer } from '../templates/Footer';

const ContactPage = () => (
  <div className="bg-brand-dark text-gray-600 antialiased">
    <Meta
      title="Contact - Cybernetic Hawk"
      description="Get in touch with Cybernetic Hawk."
    />
    <Nav />
    <main className="px-4 py-20 sm:px-6 lg:px-8">
      <Contact />
    </main>
    <Footer />
  </div>
);

export default ContactPage;
