import S from './style';

interface Props {
  children?: React.ReactNode;
}

function Input({ children }: Props) {
  return (
    <div className={S.root}>
      {children}
    </div>
  );
};

export default Input;