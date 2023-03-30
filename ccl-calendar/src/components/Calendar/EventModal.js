import React, { useContext, useState } from 'react'
import GlobalContext from '../../context/GlobalContext'
import './../../css/Calendar.css'

const labelsClasses = ["indigo", "gray", "green", "blue", "red", "purple"];

export default function EventModal() {
    const {setShowEventModal, daySelected} = useContext(GlobalContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState("");
    const [selectedLabel, setSelectedLabel] = useState(labelsClasses[0]);
    

  return (
    <div onClick={() => setShowEventModal(false)} className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">{/* Overlay */}
        <form onClick={e => e.stopPropagation()} className="bg-white rounded-lg shadow-2xl w-14">
            <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
                <span className="material-icons-outlined text-gray-400">
                    drag_handle
                </span>
                <button onClick={() => setShowEventModal(false)}>
                    <span className="material-icons-outlined text-gray-400">
                        close
                    </span>
                </button>
            </header>

            <div className="p-3">
                <div className="grid grid-cols-15 items-end gap-y-7">
                    <div></div>
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="Add title" 
                        id="" 
                        value={title}
                        required 
                        onChange={(e) => setTitle(e.target.value)}  
                        className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus"/> {/* focus:outline-none focus:ring-0 focus:border-blue-500*/}
                    <span className="material-icons-outlined text-gray-400">
                        schedule
                    </span>
                    {/* Display the current day */}
                    <p>{daySelected.format("dddd, MMMM DD")}</p>
                    <span className="material-icons-outlined text-gray-400">
                        segment
                    </span>
                    {/* Description */}
                    <input 
                        type="text" 
                        name="description" 
                        placeholder="Add a description" 
                        id="" 
                        value={description}
                        required 
                        onChange={(e) => setDescription(e.target.value)}  
                        className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus"
    
                    />
                    <span className="material-icons-outlined text-gray-400">
                        bookmark-border
                    </span>
                    <div className="flex gap-x">
                        {labelsClasses.map((lblClass, i) => (
                            <span 
                                key={i} 
                                onClick={() => setSelectedLabel(lblClass)}
                                className={`bg-${lblClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                            >
                            {selectedLabel === lblClass && (
                                <span className="material-icons-outlined text-white text-sm">
                                    check
                                </span>
                            )}
                            
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <footer className="flex justify-end border-t p-3 mt-5">
                <button type="submit" className="bg-blue-500 eventSubmit hover:bg-blue-600 px-6 py-2 rounded text-white">
                    Save
                </button>
            </footer>
        </form>
    </div>
  )
}
