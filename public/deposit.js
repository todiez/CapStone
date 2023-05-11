function Deposit() {
  const [show, setShow] = React.useState(true);
  const [title, setTitle] = React.useState("Please Login first!");
  const [status, setStatus] = React.useState('');  

  const { isLoggedIn } = React.useContext(AuthContext);

  React.useEffect(() => {
    if (isLoggedIn == true) setTitle("");
  }, []);

  return (
    <Card
      bgcolor="light"
      txtcolor="black"
      header="Deposit"
      title={title}
      body={
        isLoggedIn ? (
          <DepositForm setTitle={setTitle} setShow={setShow} setStatus={setStatus} />
        ) : (
          <DepositLogin setTitle={setTitle} setShow={setShow} setStatus={setStatus}/>
        )
      }
    />
  );
}

function DepositMsg(props) {
  return (
    <>
      <h5>Success</h5>
      <button
        type="submit"
        className="btn btn-dark"
        onClick={() => {
          props.setShow(true);
          props.setTitle("");
        }}
      >
        Deposit again
      </button>
    </>
  );
}

function DepositForm(props) {
  //const [email, setEmail] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const { email } = React.useContext(AuthContext);

  function handle() {
    fetch(`/account/update/${email}/${amount}`)
      .then((response) => response.text())
      .then((text) => {
        try {
          const data = JSON.parse(text);
          props.setStatus(JSON.stringify(data.value));
          props.setShow(false);
          console.log("JSON:", data);
        } catch (err) {
          props.setStatus("Deposit failed");
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
        readOnly
        //onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <br />
      Amount
      <br />
      <input
        type="number"
        className="form-control"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.currentTarget.value)}
      />
      <br />
      <button type="submit" className="btn btn-dark" onClick={handle}>
        Deposit
      </button>
    </>
  );
}

function DepositLogin(props) {
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
