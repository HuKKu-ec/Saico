import React, { useContext, useState } from 'react'
import './Content.css'
import { AuthContext, FirebaseContext } from '../../store/Context'
import { useHistory } from 'react-router-dom'
function Content() {
    const { firebase } = useContext(FirebaseContext)
    const {user} = useContext(AuthContext)
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [cost, setCost] = useState('')
    const [description, setDescription] = useState('')
    let history=useHistory()
    const handleSubmit = (e) => {
    e.preventDefault()
    
    firebase.firestore().collection('data').add({
        user:user.uid,
        name,
        date,
        cost,
        description
 }).then(()=>{
     alert('Action is Submited')
    history.push('/')}); 
    // firebase.firestore().collection('data').add({
    //     name:name
    // }).then(()=>{history.push('/')});
    }
    return (
        <div>
        {user?<form className="form-data">
            <label htmlFor="name">Customer Name</label>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} id="name" name="name" placeholder="customer name" />
            <label htmlFor="date">Date</label>
            <input type="date" value={date} onChange={(e)=>{setDate(e.target.value)}} id="date" name="date" placeholder="date" />
            <label htmlFor="cost">Cost</label>
            <input type="number" value={cost} onChange={(e)=>{setCost(e.target.value)}} id="cost" name="cost" placeholder="number" />
            <label htmlFor="description">Description</label>
            <textarea placeholder="description" value={description} onChange={(e)=>{setDescription(e.target.value)}} id="description" name="description"></textarea>
            <button onClick={handleSubmit}>Submit</button>
            </form>:null}
            </div>
            
        
    )
}
export default Content
