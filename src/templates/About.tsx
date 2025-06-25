import { Section } from '../layout/Section';

const About = () => (
  <Section id="about" bgColor="bg-[#0B101B]" title="About Cybernetic Hawk">
    <div className="mx-auto max-w-3xl text-center text-gray-300">
      <p className="mb-6 text-lg">
        Cybernetic Hawk builds and supports ideas that fuse technology,
        creativity, and culture — always with a view to the future.
      </p>
      <p className="text-lg">
        From software to space-inspired design to creative expression — our work
        explores new terrain, grounded by bold thinking and technical precision.
      </p>
    </div>
  </Section>
);

export { About };
