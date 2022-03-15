import { BtnGrey, BtnOrange, IconBtnNewGame } from './style';

function Button({
  text,
  func,
  status,
  icon = false,
  variant,
}: {
  text: string;
  func: any;
  status: any;
  icon: boolean;
  variant: string;
}) {
  return (
    <>
      {variant === 'orange' ? (
        <BtnOrange onClick={func}>{text}</BtnOrange>
      ) : (
        <BtnGrey onClick={func} status={status}>
          {icon && <IconBtnNewGame />}
          <p>{text}</p>
        </BtnGrey>
      )}
    </>
  );
}

export default Button;
