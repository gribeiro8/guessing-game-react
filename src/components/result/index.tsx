import { ResultText } from './style';

function TextResult({
  status,
  text,
  type,
}: {
  status: any;
  text: String;
  type: String;
}) {
  return (
    <ResultText status={status} type={type}>
      {text}
    </ResultText>
  );
}

export default TextResult;
