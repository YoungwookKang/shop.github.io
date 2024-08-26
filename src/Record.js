import {useState, useTransition} from "react";

function Record() {
  const [name, setName] = useState("");
  let [isPending, startTransition] = useTransition();
  let a = Array(1000).fill(0);
  return(
    <div className='Record'>
      <input type={"text"} onChange={(e) =>
        startTransition(()=> {
        setName(e.target.value)
      }) }/>
      {
        isPending ? "로딩중" :
        a.map((item, index)=> {
          return (<div key={`${name}-${index}`}>{name}</div>)
        })
      }
    </div>

  )
}

export default Record