function LoggOut() {
  const { isLoggedIn, setIsLoggedIn } = React.useContext(AuthContext);

  console.log(isLoggedIn);

  function logout() {
    setIsLoggedIn(false);
  }
  logout();

  return (
    <>
      <h3>successfully logged out</h3>
    </>
  );
}
