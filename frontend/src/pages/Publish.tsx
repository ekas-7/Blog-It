import axios from "axios"
import Navbar from "@/components/Navbar"
import { BACKEND_URL } from "@/api/config"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate()

    const handlePublish = async () => {
        const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
            title,
            content: description
        }, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        });
        navigate(`/blog/${response.data.id}`)
    }

    return (
        <div>
            <Navbar />
            <div className="flex justify-center w-full pt-12 bg-gray-50 min-h-screen">
                <div className="max-w-screen-lg w-full p-4 bg-white shadow-lg rounded-lg">
                    <h1 className="text-4xl font-bold text-gray-700 mb-6 text-center mt-4">Create a New Post</h1>
                    
                    <input 
                        onChange={(e) => setTitle(e.target.value)} 
                        type="text" 
                        className="bg-gray-100 border border-gray-300 text-gray-800 text-lg rounded-lg focus:ring-4 focus:ring-blue-500 focus:border-blue-500 block w-full p-3 mb-4 transition-all duration-200 ease-in-out hover:shadow-lg" 
                        placeholder="Enter your blog title" 
                    />
                    
                    <TextEditor 
                        onChange={(e) => setDescription(e.target.value)} 
                    />

                    <button 
                        onClick={handlePublish} 
                        className="mt-6 w-full inline-flex justify-center items-center px-5 py-3 text-base font-medium text-center text-white bg-slate-800 rounded-lg hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 transition-all duration-300 ease-in-out shadow-md transform hover:scale-105"
                    >
                        Publish Post 
                    </button>
                </div>
            </div>
        </div>
    )
}

function TextEditor({ onChange }: { onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }) {
    return (
        <div className="mt-8">
            <div className="w-full mb-4 bg-gray-50 border border-gray-300 rounded-lg shadow-sm">
                <div className="flex items-center justify-between px-3 py-2 border-b">
                    <div className="flex space-x-1">
                        <button type="button" className="p-2 text-gray-500 rounded hover:bg-gray-200 focus:outline-none">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                        </button>
                        <button type="button" className="p-2 text-gray-500 rounded hover:bg-gray-200 focus:outline-none">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h12" />
                            </svg>
                        </button>
                    </div>
                    <button type="button" className="p-2 text-gray-500 rounded hover:bg-gray-200 focus:outline-none">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 10l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
                <div className="px-3 py-2 bg-white rounded-b-lg">
                    <textarea 
                        onChange={onChange} 
                        rows={8} 
                        className="block w-full px-0 text-sm text-gray-800 bg-white border-0 focus:outline-none focus:ring-0" 
                        placeholder="Write your blog..." 
                    />
                </div>
            </div>
        </div>
    )
}
