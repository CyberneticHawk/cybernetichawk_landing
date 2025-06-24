import type { ReactNode } from 'react';

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  children: ReactNode;
  id?: string;
  bgColor?: string;
};

const Section = ({
  title,
  description,
  yPadding,
  children,
  id,
  bgColor,
}: ISectionProps) => (
  <div
    id={id}
    className={`w-full ${bgColor ?? 'bg-background'} ${yPadding ?? 'py-16'}`}
  >
    <div className="mx-auto max-w-screen-lg px-3">
      {(title || description) && (
        <div className="mb-12 text-center">
          {title && <h2 className="text-4xl font-bold text-white">{title}</h2>}
          {description && (
            <p className="mt-4 text-xl text-gray-300 md:px-20">{description}</p>
          )}
        </div>
      )}
      {children}
    </div>
  </div>
);

export { Section };
