function AllData(){
    const [data, setData] = React.useState('');
    const [balance, setBalance]    = React.useState(null);
    const { isLoggedIn, setIsLoggedIn } = React.useContext(AuthContext);

    React.useEffect(() => {
        // fetch all accounts from API
        fetch('/account/all')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(JSON.stringify(data));
                setBalance(data[1].balance)                
            });

    }, []);

    console.log(isLoggedIn);

    function logout() {
        console.log(isLoggedIn);
        setIsLoggedIn(false);
        console.log(isLoggedIn);
    }

    return (<>
        <h5>All Data in Store:</h5>
        {data}
        {balance}
        <button type="submit" className="btn btn-dark" onClick={logout}>
        Logout
      </button>
       
    </>);
}
