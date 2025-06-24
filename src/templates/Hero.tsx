import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { Nav } from '../navigation/Nav';

const Hero = () => {
  return (
    <Background color="bg-brand-dark relative overflow-hidden">
      <Section yPadding="py-6">
        <Nav />
      </Section>

      <Section yPadding="pt-20 pb-32 text-center">
        <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Building Bold Ideas With Vision and Precision.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg text-gray-300">
          Cybernetic Hawk is the nest for products ready to take flight —
          aligned by technology and strategy.
        </p>
      </Section>
    </Background>
  );
};

export { Hero };
