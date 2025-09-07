import "./Style.css";

type ComponentProps = {
  title: string;
};

const LoadingText = ({ title }: ComponentProps): JSX.Element => {
  return <div className="loadingText">{title}</div>;
};

export default LoadingText;
