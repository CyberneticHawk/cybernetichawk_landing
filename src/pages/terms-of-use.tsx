import { Meta } from '../layout/Meta';
import { Nav } from '../navigation/Nav';
import { Footer } from '../templates/Footer';
import { TermsOfUse } from '../templates/TermsOfUse';

const TermsOfUsePage = () => (
  <div className="bg-brand-dark text-gray-600 antialiased">
    <Meta
      title="Terms of Use - Cybernetic Hawk"
      description="Terms and conditions for using this site."
    />
    <Nav />
    <main className="px-4 py-20 sm:px-6 lg:px-8">
      <TermsOfUse />
    </main>
    <Footer />
  </div>
);

export default TermsOfUsePage;
