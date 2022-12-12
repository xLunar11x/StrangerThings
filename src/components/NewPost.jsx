import React, {useState} from "react";
import { PostFormInfo } from "../api/auth";

export const NewPostForm = ({token}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    return(
        <div>
            <h3>New Post Here</h3>
            <form onSubmit={async (e) => {
                try {
                    e.preventDefault();
                    PostFormInfo(title, description, price, location, token);
                } catch (error) {
                    console.error(error)
                }
            }}> 
            <input value={title} type='text' name="title" placeholder="Title" onChange={(e) => setTitle(e.target.value)}></input>
            <input value={description} type='text' name="description" placeholder="Description" onChange={(e) => setDescription(e.target.value)}></input>
            <input value={price} type='text' name="price" placeholder="Price" onChange={(e) => setPrice(e.target.value)}></input>
            <input value={location} type='text' name="location" placeholder="Location" onChange={(e) => setLocation(e.target.value)}></input>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}
// const [willDeliver, setWillDeliver] = useState();
{/* <input value={willDeliver} type='text' name="willDeliver" placeholder="willDeliver" onChange={(e) => setWillDeliver(e.target.value)}></input> */}