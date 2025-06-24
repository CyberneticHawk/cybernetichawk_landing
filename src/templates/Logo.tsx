import Image from 'next/image';

import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? 44 : 32;
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`inline-flex items-center text-white ${fontStyle}`}>
      <Image
        src="/assets/images/GPT_ATTRONAUT_WHITE.png"
        alt="Attronaut logo"
        width={size}
        height={size}
        className="mr-2"
      />
      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
