export default function Task({ title, description }) {
  return (
    <div className="task" style={{ padding: "5px" }}>
      <div className="task-details">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}
