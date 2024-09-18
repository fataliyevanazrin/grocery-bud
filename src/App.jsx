import {useState} from "react";
import Form from "./Form.jsx";
import {nanoid} from "nanoid";
import Items from "./Items.jsx";
import {ToastContainer, toast} from "react-toastify";

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
}

const defaultList = JSON.parse(localStorage.getItem("list") || '[]');

const App = () => {
  const [items, setItems] = useState(defaultList);
  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    }
    const newItems = [...items, newItem]
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("Item added successfully.");
  }

  const removeItem = (itemId) => {
    const newItems = items.filter(item => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems)
    toast.success("Item removed.");
  }

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        return {...item, completed: !item.completed};
      }
      return item;
    })
    setItems(newItems);
    setLocalStorage(newItems)
  }

  return <section className='section-center'>
    <ToastContainer position='top-center' autoClose={2000} hideProgressBar/>
    <Form addItem={addItem} />
    <Items items={items} removeItem={removeItem} editItem={editItem} />
  </section>;
};

export default App;
