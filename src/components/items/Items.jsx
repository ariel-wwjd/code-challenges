import { useState } from 'react';
import './items.css'

const Item = ({ id, text, onDeleteItem }) => {
    return (
        <div className='item'>
            <div key={id}>{text}</div>
            <button onClick={() => onDeleteItem(id)}>X</button>
        </div>
    )
}


export default function Items() {
    const [id, setId] = useState(1)
    const [list, setList] = useState([])
    const [newItem, setNewItem] = useState('')


    const onInputChange = (event) => {
        setNewItem(event.target.value)
    }

    const onCreateItem = () => {
        const newList = [...list]
        newList.push({ id: id, content: newItem })
        setId(id + 1)
        setList(newList)
        setNewItem('')
    }

    const onDeleteItem = (id) => {
        console.log({ id })
        const newArray = [...list]
        console.log({ newArray })
        const index = list.findIndex((element) => element.id === id)
        console.log({ index })
        if (index !== -1) {
            newArray.splice(index, 1)
            setList(newArray)
        }
    }
 
    return (
        <div>
            <h1 className="main-title">Build a component that adds, deletes, and displays items in a list.</h1>
            <div className='form'>
                <h2 className='list'>List</h2>
                <div>
                    {list.map((element) => {
                        return (
                            <Item 
                                id={element.id} 
                                text={element.content} 
                                key={element.id}
                                onDeleteItem={() => onDeleteItem(element.id)}
                            />
                        )
                    })}                    
                </div>
                <div className='footer'>
                    <input value={newItem} onChange={(event) => onInputChange(event)}></input>
                    <button onClick={onCreateItem}>+</button>
                </div>
            </div>

        </div>
    );
}