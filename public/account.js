function Account(){
    const [data, setData] = React.useState('');    

    React.useEffect(() => {
        // fetch all accounts from API
        fetch('/account/account')
            

    }, []);

    return (<>
        <h5>All Data in Store:</h5>
        {data}

        <Card
            header="test"
            txtcolor="black"
           
        ></Card>
    </>);
}