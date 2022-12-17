import React, {useState} from 'react';
import axios from 'axios';

function PostCreate(props) {
    const [title, setTitle] = useState('');

    const onSubmit = async(e)=>{
        e.preventDefault();
        await axios.post('http://localhost:4000/posts',
        {
            title,
        });

        setTitle('');
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="Title" className="form-label">{props.title}</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="Title" />
                </div>
    
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default PostCreate
