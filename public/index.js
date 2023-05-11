function Spa() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [id, setId] = React.useState(null);
  const [email, setEmail] = React.useState("");
  

  return (
    <HashRouter>
      <div>
        <AuthContext.Provider
          value={{ isLoggedIn, setIsLoggedIn, id, setId, email, setEmail }}
        >
          <NavBar />
          <div className="container" style={{ padding: "20px" }}>
            <Route path="/" exact component={Home} />
            <Route path="/CreateAccount/" component={CreateAccount} />
            <Route path="/login/" component={Login} />
            <Route path="/deposit/" component={Deposit} />
            <Route path="/withdraw/" component={Withdraw} />
            <Route path="/balance/" component={Balance} />
            <Route path="/logout/" component={LoggOut} />
            {/* <Route path="/bankingservices/" component={BankingServices} /> */}
          </div>
        </AuthContext.Provider>
      </div>
    </HashRouter>
  );
}

ReactDOM.render(<Spa />, document.getElementById("root"));
