import React from 'react'
import {toast} from "react-toastify";

const Form = ({addItem}) => {
    const [newItemName, setNewItemName] = React.useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!newItemName) {
            toast.error('Please provide a value')
            return
        };
        addItem(newItemName)
        setNewItemName('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <h4>Grocery Bud</h4>
            <div className="form-control">
                <input
                    type="text"
                    className="form-input"
                    value={newItemName}
                    onChange={(e) => setNewItemName(e.target.value)}
                />
                <button className="btn" type="submit">
                    Add Item
                </button>
            </div>
        </form>
    )
}
export default Form
