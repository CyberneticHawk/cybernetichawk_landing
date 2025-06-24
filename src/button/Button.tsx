import classNames from 'classnames';

type IButtonProps = {
  xl?: boolean;
  children: string;
};

const Button = (props: IButtonProps) => {
  const baseStyles =
    'inline-block rounded-md text-center text-white bg-primary-500 hover:bg-primary-600 transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-md';
  const sizeStyles = props.xl
    ? 'font-extrabold text-xl py-4 px-6'
    : 'text-lg font-semibold py-2 px-4';

  const btnClass = classNames(baseStyles, sizeStyles);

  return (
    <button type="button" className={btnClass}>
      {props.children}
    </button>
  );
};

export { Button };
