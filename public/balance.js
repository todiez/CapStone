function Balance(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');
    

  return (
    <Card
      bgcolor="light"
      txtcolor="black"
      header="Balance"
      status={status}
      body={show ?
        <BalanceForm setShow={setShow} setStatus={setStatus}/> :
        <BalanceMsg setShow={setShow} setStatus={setStatus}/>}
    />
  )
}

function BalanceMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => {
        props.setShow(true);
        props.setStatus('');
      }}>
        Check balance again
    </button>
  </>);
}

function BalanceForm(props){
  const [email, setEmail]   = React.useState('');
  const [balance, setBalance] = React.useState('');  

  function handle(){
    fetch(`/account/findOne/${email}`)
    .then(response => response.text())
    .then(text => {
        try {
            console.log("inside TRY")
            const data = JSON.parse(text);
            
            props.setShow(false);
            console.log(data.balance)
            setBalance(data.balance);
            props.setStatus(data.balance);
            console.log('JSON:', data);
            
        } catch(err) {
            console.log("inside CATCH")
            props.setStatus(text)
            console.log('err:', text);
        }
    });
  }

  // function handle(){
  //   fetch(`/account/findOne/${email}`)
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data); 
  //     console.log(data[0])           
  // });
  // }

  return (<>

    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>
        Check Balance
    </button>

  </>);
}