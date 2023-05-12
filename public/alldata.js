function LoggOut() {
  const { isLoggedIn, setIsLoggedIn } = React.useContext(AuthContext);

  console.log(isLoggedIn);

  function logout() {
    setIsLoggedIn(false);    
  }
  logout();

  

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
      <h5>Successfully logged out.</h5>
      <button
        type="button"
        className="btn btn-dark"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "./#/login/";
        }}
      >
        Go to Login
      </button>
    </div>
  );
  
}
