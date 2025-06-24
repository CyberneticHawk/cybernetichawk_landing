import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { Nav } from '../navigation/Nav';

const Hero = () => {
  return (
    <Background color="bg-brand-dark relative overflow-hidden">
      <Section yPadding="py-6">
        <Nav />
      </Section>

      <Section yPadding="pt-20 pb-32">
        <HeroOneButton
          title={
            <>
              <span className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                See Further. Build Smarter.
              </span>
              {'\n'}
              <span className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                Cybernetic Hawk helps bold ideas take flight.
              </span>
            </>
          }
          description="We partner with ambitious ventures to scale, adapt, and land — across industries, platforms, and uncharted terrain. From technology to design, we turn vision into reality."
          button={null}
        />
      </Section>
    </Background>
  );
};

export { Hero };
