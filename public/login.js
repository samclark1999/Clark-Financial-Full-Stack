function Login(){
    const [show, setShow]     = React.useState(true);
    const [username, setUsername] = React.useState('');
   

    return (
       <>
       {username}
        <Card
            bgcolor="light"
            txtcolor="black"
            header="Login"
            body={show ? 
            <CreateLogin setShow={setShow} setUsername={setUsername}/> : 
            <Logout setShow={setShow} setUsername={setUsername}/>}
        />
      </>
    )
  }
  
  function Logout(props){
    return(<>
      <h6>Successfully Logged in Welcome!</h6>
      <button type="submit" 
        className="btn btn-primary" 
        onClick={() => {props.setUsername(''); props.setShow(true); ctx.users[1].user=''}}>Logout</button>
    </>);
  }
  
  function CreateLogin(props){
    const ctx = React.useContext(UserContext); 

    function handleLogin(){
      const url = `/account/login/${ctx.users[0].email}/${ctx.users[0].password}`;
      fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.length!==0) ctx.users[1].check=true;        
        })
        .then(() => {
            if (ctx.users[1].check) {
                ctx.users[1].check = false;
                console.log('Logged in!');
                ctx.users[1].user = ctx.users[0].email;
                props.setUsername(ctx.users[0].email);
                props.setShow(false);
              } else {
                console.log('login failed')    
              }
        });

    }    
  
    return (<>

      Email address<br/>
      <input type="input" 
        className="form-control" 
        placeholder="Enter email" 
        onChange={e => ctx.users[0].email = e.currentTarget.value}/><br/>
  
      Password<br/>
      <input type="password" 
        className="form-control" 
        placeholder="Enter password" 
        onChange={e => ctx.users[0].password = e.currentTarget.value}/><br/>
  
      <button type="submit" 
        className="btn btn-primary" 
        onClick={handleLogin}>Login</button>
       <a href="#/createaccount/" style={{paddingLeft:'50px', textDecoration:'none', color:'blue', fontSize:'14px'}}>New User?</a>
  
    </>);
  }