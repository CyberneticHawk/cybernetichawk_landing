import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

import { AppConfig } from '../utils/AppConfig';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = ({ title, description, canonical }: IMetaProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>

        {/* Favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${router.basePath}/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/favicon-16x16.png`}
        />
        <link rel="shortcut icon" href={`${router.basePath}/favicon.ico`} />
      </Head>

      <NextSeo
        title={title}
        description={description}
        canonical={canonical}
        openGraph={{
          title,
          description,
          url: canonical || '',
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
        }}
      />
    </>
  );
};

export { Meta };
