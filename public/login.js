
function Login() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const { isLoggedIn } = React.useContext(AuthContext);
  
  return (
   
      <Card
        bgcolor="light"
        txtcolor="black"
        header="Login"
        status={status}
        body={
          show ? (
            <LoginForm setShow={setShow} setStatus={setStatus} />
          ) : (
            <LoginMsg setShow={setShow} setStatus={setStatus} />
          )
        }
      />
   
  );
}

function LoginMsg(props) {
  return (
    <>
      <h5>Success</h5>
      <button
        type="submit"
        className="btn btn-dark"
        onClick={() => props.setShow(true)}
      >
        Authenticate again
      </button>
    </>
  );
}

function LoginForm(props) {
  const [password, setPassword] = React.useState("");
  const { setIsLoggedIn, setId, email, setEmail } = React.useContext(AuthContext);

  function handle() {
    console.log(email);
    fetch(`/account/login/${email}/${password}`)
      .then((response) => response.text())
      .then((text) => {
        try {
          const data = JSON.parse(text);
          setId(data._id);
          props.setStatus("");
          props.setShow(false);
          setIsLoggedIn(true); // Set isLoggedIn to true
        } catch (err) {
          props.setStatus(text);
          console.log("err:", text);
          console.log(err);
        }
      });
  }
  return (
    <>
      Email
      <br />
      <input
        type="input"
        className="form-control"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <br />
      Password
      <br />
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <br />
      <button type="submit" className="btn btn-dark" onClick={handle}>
        Login
      </button>
    </>
  );
}

function Logincorner() {
  const { isLoggedIn, email } = React.useContext(AuthContext);

  return (
    <>
      {isLoggedIn ? <p>{email}</p> : <p>Please log in first</p>}
    </>
  );
}

