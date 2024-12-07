import { ReactNode } from "react";

interface Props {
  children: ReactNode,
}

function Card(props: Props) {
  const { children: children } = props;

  return (
    <div
      className="card" style={{
        width: '350px',
      }}
    >
      <div className="card-body">
        { children }
      </div>
    </div>
  )
}

interface CardBodyProps {
  title: string
  text?: string
}

export function CardBody(props: CardBodyProps) {
  const {title, text} = props;
  return (
    <>
      <h3 className="card-title">{ title }</h3>
      <p className="card-text">{ text }</p>
    </>
  );
}

export default Card;
