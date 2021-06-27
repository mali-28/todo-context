import React, { useContext} from "react";
import { listContext , inputContext, condContext, indexContext} from "./InputArr";

// import { UserContext } from "./HOC";
// import InputArr from './InputArr';
const List = () =>{
    const {list,setList} = useContext(listContext);
    const setInput = useContext(inputContext);
    const setCond = useContext(condContext);
    const setIndex = useContext(indexContext);
        const editItem =(indx)=>{
            setInput(list[indx]);
            setIndex(indx);
            setCond(false);
        }

        const delItem = (index)=>{
            setList(list.filter((val, id)=>{
                return index !== id;
            }))
            setIndex(null);
            setCond(true);
            setInput('');
        }

    return <>
    {list.map((val, indx)=>{
            return<>
            <div className='div-list' key={`${indx}`}>
              <span>{indx+1} : {val}</span>
              <div className='list-btn'>
                  <i onClick={()=>{editItem(indx)}} className='fa fa-edit' title='Edit Item'></i>

                  <i onClick={()=>{delItem(indx)}} className='fa fa-trash-alt ' title='Delete Item'></i>
            </div>
            </div>
            </>
          })}
    </>
}

export default List;