import { Section } from '../layout/Section';

const About = () => (
  <Section id="about" bgColor="bg-[#0B101B]" title="About Cybernetic Hawk">
    <div className="mx-auto max-w-3xl text-center text-gray-300">
      <p className="mb-6 text-lg">
        Cybernetic Hawk is a technology-focused parent company developing and
        supporting digital tools that empower businesses to grow with
        confidence.
      </p>
      <p className="text-lg">
        Our mission is to simplify decision-making through innovative platforms
        and actionable insights — guiding bold ideas from vision to reality.
      </p>
    </div>
  </Section>
);

export { About };
