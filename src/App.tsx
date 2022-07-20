import { useCallback, useMemo, useState } from "react";
import { Item } from "./components/Item";

function App() {
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState("");
  const [wishList, setWishList] = useState<string[]>([]);

  function addItemsToList() {
    setItems([...items, `Item ${items.length}`])
  }

  const addItemToWishList = useCallback((item: string) => {
    setWishList(state => [...state, item])
  },[]);

  const countItemsWithOne = {
    count: items.filter(item => item.includes('1')).length
  };

  

  return (
    <div className="App">
      <input type="text" onChange={e => setNewItem(e.target.value)} value={newItem}/>
        <button onClick={addItemsToList}>Add</button>
      <ul>
        {items.map(item => {
          return ( 
          <Item 
          key={item} 
          onAddToWishList={addItemToWishList}
          countItemsWithOne={countItemsWithOne}
          title={item}
          /> 
          )
        })}
      </ul>

    </div>
  )
}

export default App
