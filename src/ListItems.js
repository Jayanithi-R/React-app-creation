import "./App.css";
export default function ListItems({items,itemSelected,deletion}){
    const totalPrice=items.reduce((acc,item)=>{
        return (acc=acc+item.price*item.quantity)
    },0);
    if(!items.length)return <h2>No items.Please add items!</h2>;
    return(
        <div>
            <h3>Item List</h3>{
                items.map((item)=>(
                    <ItemDisplay item={item} itemSelected={itemSelected} deletion={deletion}/>
                ))}  
                <div>Total Price:{totalPrice}</div>
        </div>
    );
}
function ItemDisplay({item,itemSelected,deletion}){
    return(<div className="item">
        <div>
            <input type="checkbox" checked={item.selected}
            onChange={()=>itemSelected(item.id)}/>
        </div>
        <div>{item.name}</div>
        <div>{item.quantity}</div>
        <div>{item.price}</div>
        <div>{item.quantity*item.price}</div>
        <div onClick={()=>deletion(item.id)}>Remove</div>
    </div>
    );
}