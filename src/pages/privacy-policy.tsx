import { Meta } from '../layout/Meta';
import { Nav } from '../navigation/Nav';
import { Footer } from '../templates/Footer';
import { PrivacyPolicy } from '../templates/PrivacyPolicy';

const PrivacyPolicyPage = () => (
  <div className="bg-brand-dark text-gray-600 antialiased">
    <Meta
      title="Privacy Policy - Cybernetic Hawk"
      description="Our commitment to your privacy."
    />
    <Nav />
    <main className="px-4 py-20 sm:px-6 lg:px-8">
      <PrivacyPolicy />
    </main>
    <Footer />
  </div>
);

export default PrivacyPolicyPage;
