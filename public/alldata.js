function AllData() {
  const { isLoggedIn, setIsLoggedIn } = React.useContext(AuthContext);

  console.log(isLoggedIn);

  function logout() {
    setIsLoggedIn(false);
  }

  return (
    <>
      <div>
        {isLoggedIn ? (
          <button type="submit" className="btn btn-dark" onClick={logout}>
            Logout
          </button>
        ) : (
          <h3>successfully logged out</h3>
        )}
      </div>
    </>
  );
}
