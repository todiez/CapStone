function Spa() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <HashRouter>
      <div>
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
          <NavBar />
          <div className="container" style={{ padding: "20px" }}>
            <Route path="/" exact component={Home} />
            <Route path="/CreateAccount/" component={CreateAccount} />
            <Route path="/login/" component={Login} />
            <Route path="/deposit/" component={Deposit} />
            <Route path="/withdraw/" component={Withdraw} />
            <Route path="/balance/" component={Balance} />
            <Route path="/alldata/" component={AllData} />       
            {/* <Route path="/logout/" component={Logout} />   */}

          </div>
        </AuthContext.Provider>
      </div>      
    </HashRouter>
  );
}

ReactDOM.render(<Spa />, document.getElementById("root"));
