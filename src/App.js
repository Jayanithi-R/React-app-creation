import { useState } from "react";
import Header from "./Header";
import "./App.css";
import AddItem from "./Additems";
import ListItems from "./ListItems";
import Footer from "./Footer";
function App(){
  const [items,setItems]=useState([]);
  function addItemFun(newItem){
    setItems((items)=>[...items,newItem]);
    console.log(items);
  }
  function itemSelected(id){
    return setItems((items)=>{
      return items.map((item)=>{
        return item.id==id?{...item,selected:!item.selected}:item
      });
    });
  }
  function deletion(id){
    return setItems((items)=>{
      return items.filter((items)=>items.id != id);
    });
  }
  return(
    <div>
      <Header/>
      <AddItem addItemFun={addItemFun}/>
      <ListItems items={items} itemSelected={itemSelected} deletion={deletion}/>
      <Footer items={items}/>
    </div> 
  );
}

export default App;