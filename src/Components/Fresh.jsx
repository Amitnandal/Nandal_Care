import React,{useState} from 'react'

function Fresh( props) {
 const [count , setCount] = useState(0);
    function klik(){
        setCount(count + 1);
    }
    function show(){
        setTimeout( ()=> {
            alert(
                `The Count is ${count}`
            )
        },1000 )
    };
  return (
    <div>
     <div className="row">
        <h1 className='mt-5'>Use of useState</h1>
     <h1 className='mt-5 pt-5' >Clik below {count} </h1>
      <div>
      <button className='btn btn-primary ms-2' onClick={klik}>Clik Here</button>
      <button className='btn btn-primary mx-5' onClick={show}>Show</button>
      </div>

     </div>
     <div className="row"> 
     
        <h1>Use of Propes</h1>
        <h1>lorem ka {props.Count}</h1>
        <div>
          <input type='text' value={props.name} onChange={e => props.setName( e.target.value)}/>
        </div> 
     </div>
    </div>
  );
}

export default Fresh
