function Balance() {
  const [show, setShow] = React.useState(true);
  const [title, setTitle] = React.useState("Please Login first!");
  const { isLoggedIn, id } = React.useContext(AuthContext);

  console.log(isLoggedIn);
  console.log(id);

  React.useEffect(() => {
    if (isLoggedIn == true) setTitle("");
  }, []);

  return (
    <Card
      bgcolor="light"
      txtcolor="black"
      header="Balance"
      title={title}
      body={
        isLoggedIn ? (
          <BalanceMsg setTitle={setTitle} setShow={setShow} />
        ) : (
          <BalanceLogin setTitle={setTitle} setShow={setShow} />
        )
      }
    />
  );
}

function BalanceMsg(props) {
  const [email, setEmail] = React.useState("");
  const [balance, setBalance] = React.useState("");

  function handle() {
    fetch(`/account/findOne/${email}`)
      .then((response) => response.text())
      .then((text) => {
        try {
          console.log("inside TRY");
          const data = JSON.parse(text);
          props.setShow(false);
          console.log(data.balance);
          setBalance(data.balance);
          props.setTitle("USD " + data.balance);
          console.log("JSON:", data);
        } catch (err) {
          console.log("inside CATCH");
          props.setTitle(
            "User not found, please make sure you have entered the correct email address! Thank you."
          );
          console.log("err:", text);
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
      <button type="submit" className="btn btn-dark" onClick={handle}>
        Check Balance
      </button>
    </>
  );
}

function BalanceLogin(props) {
  return (
    <>
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
    </>
  );
}
