function Logout() {
    const { isLoggedIn, setIsLoggedIn } = React.useContext(AuthContext);
    console.log("Inside LOGOUT");

    // function logout() {
    //     console.log(isLoggedIn);
    //     setIsLoggedIn(false);
    //     console.log(isLoggedIn);
    // }

    return (<>
      
        {/* <button type="submit" className="btn btn-dark" onClick={logout}>
        Logout
      </button> */}
       
    </>);
}


// function Logout(props) {
//     const authContext = React.useContext(AuthContext);
  
//     // Clear the user's session and redirect to the login page
//     React.useEffect(() => {
//       authContext.setIsLoggedIn(false);
//       props.history.push("/login");
//     }, []);
  
//     return null;
//   }