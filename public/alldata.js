function LoggOut() {
  const { isLoggedIn, setIsLoggedIn } = React.useContext(AuthContext);

  console.log(isLoggedIn);

  function logout() {
    setIsLoggedIn(false);    
  }
  logout();

  

  return (
    <>
      <h5>Successfully logged out.</h5>
    </>
  );
}
