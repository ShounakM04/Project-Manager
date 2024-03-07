import { useState } from "react";
import Input from "./Input";

export default function NewProject({onSaveProject}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");

    const handleTitle = (e)=>{
        setTitle(e.target.value);
    }

    const handleDescription = (e)=>{
        setDescription(e.target.value);
    }
    
    const handleDueDate = (e)=>{
        setDueDate(e.target.value);
    }

    const handleSave = () => {
        onSaveProject({ title, description, dueDate });
        setTitle("");
        setDescription("");
        setDueDate("");
    }

    return (
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button className="text-stone-800 hover:text-stone-900">Cancel</button></li>
                <li><button className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md" onClick={handleSave}>Save</button></li>
            </menu>
            <div>
                <Input label="Title" onChange={handleTitle} value={title}/>
                <Input label="Description" textarea  onChange={handleDescription} value={description}/>
                <Input type="date" label="Due Date"  onChange={handleDueDate} value={dueDate}/>
            </div>
        </div>
    )
}