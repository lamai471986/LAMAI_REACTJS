function App() {
  const name = "LAM AI";
  const job = "Treasury Specialist";
  const hobbies = ["Finance", "Coding", "Design"];

  return (
    <div className="profile-card">
      <div className="profile-header">
        <img
          className="profile-avatar"
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="avatar"
        />
      </div>

      <div className="profile-body">
        <div className="profile-name">{name}</div>
        <div className="profile-job">{job}</div>
        <div className="tags">
          {hobbies.map((item, index) => (
            <span className="tag" key={index}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
