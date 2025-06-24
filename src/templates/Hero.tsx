import { useState } from 'react';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { Nav } from '../navigation/Nav';

const Hero = () => {
  const [submitted, setSubmitted] = useState(false);

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
                Exploring New Frontiers in Technology & Design.
              </span>
              {'\n'}
              <span className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                Cybernetic Hawk is the launchpad for bold ideas.
              </span>
            </>
          }
          description="We support ventures that push boundaries — from SaaS platforms to space-inspired consumer products. Where innovation takes flight, we help it land."
          button={null}
        />

        <div className="flex flex-col items-center">
          {!submitted ? (
            <form
              action="https://usebasin.com/f/012daed56098"
              method="POST"
              className="mt-8 flex max-w-md flex-col items-center gap-4 sm:flex-row"
              onSubmit={() => {
                setTimeout(() => {
                  setSubmitted(true);
                }, 100); // Delay to allow POST to complete
              }}
            >
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-md border border-white/20 bg-white/10 px-4 py-2 text-white placeholder:text-white focus:outline-none sm:w-64"
              />
              <button
                type="submit"
                className="rounded-md bg-white px-6 py-2 font-semibold text-black hover:bg-gray-100"
              >
                Stay in the Loop
              </button>
            </form>
          ) : (
            <p className="mt-4 text-center text-green-400">
              You&apos;re on the list. We&apos;ll be in touch!
            </p>
          )}

          <p className="mt-4 text-center text-sm text-gray-400">
            We only send occasional updates — no spam.
          </p>
        </div>
      </Section>
    </Background>
  );
};

export { Hero };
