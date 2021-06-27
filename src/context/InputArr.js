import React, { createContext, useState } from 'react';

const listContext = createContext();
const inputContext = createContext();
const condContext = createContext();
const indexContext = createContext();
const InputArr = (props) =>{
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);
    const [cond, setCond] = useState(true);
    const [index, setIndex] = useState(null);


    const click = () =>{

        if(cond && input){
            setList([...list, Number(input)]);
            setInput('');
      
          }else if(!cond && input){
             list.map((val, indx)=>{
              if(indx ===  index){
               return list[indx] = Number(input);
             
              }
            })
            setCond(true);
            setIndex(null);
            setInput('');
          }else{
            setCond(true);
          }
    }

    return<><div>
        <input  placeholder='✍️ Add Number List...' type='number' value= {input} onChange={(e)=>{setInput(e.target.value)}}/>
        {cond ? <i className='fa fa-plus btn-add' onClick={()=>{click()}}></i> : <i onClick={()=>{click()}} className='fa fa-edit btn-add'></i>}
        </div>
<indexContext.Provider value= {setIndex}>
    <condContext.Provider value ={setCond}> 
        <inputContext.Provider value= {setInput}>
            <listContext.Provider value={{list,setList}}>
                {props.children}
            </listContext.Provider>
        </inputContext.Provider>
    </condContext.Provider>    
</indexContext.Provider>
    </>
}

export default InputArr;
export {listContext, inputContext, condContext, indexContext};