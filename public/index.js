function Spa() {
  return (
    <HashRouter>
      <div>
        <NavBar/>  
        <UserContext.Provider value={{users:[{name:'',email:'',password:'',balance:0},{user:'', check:''}]}}>
       
          <div className="container" style={{paddingTop: "25px"}}>
          <Login/>
            <Route path="/" exact component={Home} />
            <Route path="/CreateAccount/" component={CreateAccount} />
            <Route path="/deposit/" component={Deposit} />
            <Route path="/withdraw/" component={Withdraw} />
            <Route path="/balance/" component={Balance} />
            <Route path="/alldata/" component={AllData} />
          </div>
          
        </UserContext.Provider>
     
      </div>
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
