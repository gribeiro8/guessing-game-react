import { BtnGrey, BtnOrange, IconBtnNewGame } from './style';

function Button({
  text,
  func,
  status,
  icon = false,
  variant,
  dataTestid,
}: {
  text: string;
  func: any;
  status: any;
  icon: boolean;
  variant: string;
  dataTestid: string;
}) {
  return (
    <>
      {variant === 'orange' ? (
        <BtnOrange onClick={func} data-testid={dataTestid}>
          {text}
        </BtnOrange>
      ) : (
        <BtnGrey onClick={func} status={status} data-testid={dataTestid}>
          {icon && <IconBtnNewGame />}
          <p>{text}</p>
        </BtnGrey>
      )}
    </>
  );
}

export default Button;
