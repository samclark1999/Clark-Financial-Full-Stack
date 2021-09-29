function Deposit(){
  const ctx = React.useContext(UserContext);
  const [number, setNumber]         = React.useState('');
  const [show, setShow]             = React.useState(true);
  const [status, setStatus]         = React.useState('');
  const [canSubmit, setCanSubmit]   = React.useState(false);

  function validate(field){ 
      if (!field || field<0) {
        setStatus('Error: Please enter a valid amount')        
        setTimeout(() => setStatus(''),6000);
        return false;
      }
      setStatus('');
      return true;
  }

  function handleCreate(){  
    if (!validate(parseInt(number)))     
    return;    
    if (ctx.users[1].user !== '') {
          ctx.users[0].balance.toString();
            fetch(`/account/deposit/${ctx.users[1].user}/${ctx.users[0].balance}`)
              .then(response => response.json())
              .then(data => {
                  console.log(data);
        }).then(() => {
          setShow(false);
        });

      } else {
        setStatus('Please login before you deposit')
        setTimeout(() => setStatus(''), 6000);
      }

  }     


  function clearForm(){ 
    setNumber('');
    setShow(true);
    setCanSubmit(false);
  }

  function onChange(event){ 
    setNumber(event);
    setCanSubmit(true);
    ctx.users[0].balance = event;
  }

  return (
    <Card
      bgcolor="success"
      txtcolor="white"
      header="Deposit"
      title=''
      status={status}
      body={show ? ( 
        <>
        <br/>
        Amount to deposit:
        <input type="input" id="number" value={number} onChange={e => onChange(e.currentTarget.value)}></input> 
        <br/><br/>
        {canSubmit ? (<button type="submit" className="btn btn-light" onClick={handleCreate}>Deposit</button>):(<></>)} 
        </>
      ):( 
        <>
        <br/><br/>
        <h5>Success!</h5>
        <br/>
        <button type="submit" className="btn btn-light" onClick={clearForm}>Make another deposit</button>
        </>
      )}
    />  
  )
}
