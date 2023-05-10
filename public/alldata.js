function AllData(){
    const [data, setData] = React.useState('');
    const [balance, setBalance]    = React.useState(null);

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

    return (<>
        <h5>All Data in Store:</h5>
        {data}
        {balance}
       
    </>);
}
