const SignIn = () => {
  const handleSubmit = () => {
    alert("success");
  };
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <select>
            <option value="john">John</option>
            <option value="jeff">Jeff</option>
            <option value="sundar">Sundar</option>
          </select>
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {renderForm}
      </div>
    </div>
  );
};

export default SignIn;
