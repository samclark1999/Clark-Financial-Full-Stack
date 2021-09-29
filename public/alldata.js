function AllData(){
    const [data, setData] = React.useState('');    

    React.useEffect(() => {
        
        // fetch all accounts from API
        fetch('/account/all')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(JSON.stringify(data));                
            });

    }, []);

    return (<>
        <div className="card w-150 bg-light">
            <div className="card-body">
                <h5 className="card-title">User Data:</h5>
                <p className="card-text">{data}</p>
            </div>
        </div>
    </>);
}
