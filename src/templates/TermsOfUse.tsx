import { Section } from '../layout/Section';

const TermsOfUse = () => (
  <Section title="Terms of Use">
    <div className="relative mx-auto max-w-3xl space-y-6 rounded-xl border border-pinkAccent/30 bg-[#111827]/80 p-8 text-white shadow-xl backdrop-blur-lg">
      {/* Balanced Pink Glow Behind */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="size-48 rounded-full bg-pinkAccent/20 opacity-50 blur-3xl"></div>
      </div>

      <p>
        By using this website, you agree to comply with the following terms. If
        you do not agree, please do not use this site.
      </p>

      <h2 className="text-2xl font-semibold">Acceptable Use</h2>
      <p>
        You may only use this website for lawful purposes. You must not infringe
        on the rights of others or attempt unauthorized access to any part of
        the site.
      </p>

      <h2 className="text-2xl font-semibold">Disclaimer</h2>
      <p>
        Information provided on this site is for general information only. We
        make no guarantees regarding its accuracy or completeness. Use of this
        information is at your own risk.
      </p>

      <h2 className="text-2xl font-semibold">Products & Services</h2>
      <p>
        Terms specific to our products, including{' '}
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
        , are provided on their respective websites.
      </p>

      <h2 className="text-2xl font-semibold">Contact</h2>
      <p>
        Questions about these terms? Contact us at{' '}
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

export { TermsOfUse };
