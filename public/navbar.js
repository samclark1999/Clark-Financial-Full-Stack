function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
    <img src="/logo.png" alt="" width="70" height="70" className="d-inline-block align-text-top" style={{border: 'solid white 2px', borderRadius: '50%'}}/>
      <a className="navbar-brand" href="#" style={{paddingRight:'25px', marginLeft:'25px',}}>Clark Financial</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item" style={{paddingRight:'25px'}}>
            <a className="nav-link" href="#/deposit/">Deposit</a>
          </li>
          <li className="nav-item" style={{paddingRight:'25px'}}>
            <a className="nav-link" href="#/withdraw/">Withdraw</a>
          </li>
          <li className="nav-item" style={{paddingRight:'25px'}}>
            <a className="nav-link" href="#/balance/">Balance</a>
          </li>
          <li className="nav-item" style={{paddingRight:'25px'}}>
            <a className="nav-link" href="#/alldata/">User Data</a>
          </li>          
        </ul>
      </div>
    </nav>
    </>
  );
}