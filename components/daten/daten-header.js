import DatenTitle from "./daten-title";

export default function DatenHeader({ title }) {
  return (
    <>
      <div className="container">
        <DatenTitle>{title}</DatenTitle>
      </div>
    </>
  );
}
