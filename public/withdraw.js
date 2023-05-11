function Withdraw() {
  const [show, setShow] = React.useState(true);
  const [title, setTitle] = React.useState("Please Login first!");
  const [status, setStatus] = React.useState("");
  const { isLoggedIn } = React.useContext(AuthContext);

  React.useEffect(() => {
    if (isLoggedIn == true) setTitle("");
  }, []);

  return (
    <Card
      bgcolor="light"
      txtcolor="black"
      header={
        <>
          <>Withdraw</>
          <br />
          {isLoggedIn && <>Current Balance: {CurrentBalance()}</>}
        </>
      }
      title={title}
      body={
        isLoggedIn ? (
          show ? (
            <WithdrawForm
              setTitle={setTitle}
              setShow={setShow}
              setStatus={setStatus}
            />
          ) : (
            <WithdrawMsg
              setTitle={setTitle}
              setShow={setShow}
              setStatus={setStatus}
            />
          )
        ) : (
          <WithdrawLogin
            setTitle={setTitle}
            setShow={setShow}
            setStatus={setStatus}
          />
        )
      }
    />
  );
}

function WithdrawMsg(props) {
  return (
    <>
      <h5>Successful Withdraw!</h5>
      <button
        type="submit"
        className="btn btn-dark"
        onClick={() => {
          props.setShow(true);
          props.setTitle("");
        }}
      >
        Withdraw again
      </button>
    </>
  );
}

function WithdrawForm(props) {
  const [amount, setAmount] = React.useState("");
  const { email } = React.useContext(AuthContext);

  function handle() {
    if (amount <= 0) {
      alert("Please enter a positive amount.");
      return;
    }

    fetch(`/account/update/${email}/-${amount}`)
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
        Withdraw
      </button>
    </>
  );
}

function WithdrawLogin(props) {
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
