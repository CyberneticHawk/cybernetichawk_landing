import { Section } from '../layout/Section';

const PrivacyPolicy = () => (
  <Section title="Privacy Policy">
    <div className="relative mx-auto max-w-3xl space-y-6 rounded-xl border border-pinkAccent/30 bg-[#111827]/80 p-8 text-white shadow-xl backdrop-blur-lg">
      {/* Balanced Pink Glow Behind */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="size-48 rounded-full bg-pinkAccent/20 opacity-50 blur-3xl"></div>
      </div>

      <p>
        Cybernetic Hawk Ltd. respects your privacy. This policy explains how we
        handle personal information collected through this website.
      </p>

      <h2 className="text-2xl font-semibold">Information We Collect</h2>
      <p>
        We do not actively collect personal information through this website,
        except information you provide voluntarily via email or contact forms.
      </p>

      <h2 className="text-2xl font-semibold">Use of Information</h2>
      <p>
        Any information you provide will only be used to respond to your
        inquiries or provide requested information.
      </p>

      <h2 className="text-2xl font-semibold">Third-Party Links</h2>
      <p>
        This site may link to our product websites or other external sites. We
        are not responsible for the privacy practices of those sites.
      </p>

      <h2 className="text-2xl font-semibold">Product-Specific Policies</h2>
      <p>
        For privacy policies specific to{' '}
        <a
          href="https://attronaut.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pinkAccent hover:underline"
        >
          Attronaut
        </a>{' '}
        and{' '}
        <a
          href="https://artofficialdimensions.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pinkAccent hover:underline"
        >
          ArtOfficialDimensions
        </a>
        , visit the respective product websites.
      </p>

      <h2 className="text-2xl font-semibold">Data Collection by Products</h2>
      <p>
        Cybernetic Hawk Ltd. does not directly collect or process user data for
        our products. Any data collection occurs through product-specific
        platforms in accordance with their respective policies.
      </p>

      <h2 className="text-2xl font-semibold">Contact</h2>
      <p>
        For questions about this policy, contact us at{' '}
        <a
          href="mailto:mgmt@cybernetichawk.com"
          className="text-pinkAccent hover:underline"
        >
          mgmt@cybernetichawk.com
        </a>
        .
      </p>
    </div>
  </Section>
);

export { PrivacyPolicy };
