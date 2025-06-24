import type { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color?: string; // optional now
};

const Background = ({
  children,
  color = 'bg-brand-dark',
}: IBackgroundProps) => <div className={color}>{children}</div>;

export { Background };
