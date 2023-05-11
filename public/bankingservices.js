function BankingServices() {
    Deposit();
    Withdraw();
    Balance();

    return(
        <>
        <Deposit></Deposit>
        <Withdraw></Withdraw>
        </>
    )
}