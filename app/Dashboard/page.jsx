"use client"
import React, { useState, useEffect } from 'react';
import { collection, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
const Dashboard = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [smallDescription, setSmallDescription] = useState("");
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            title,
            description,
            smallDescription,
            file,
        };

        console.log(data);

        await setDoc(collection(db, "blogs"), data);
    };

    return (
        <div className="formbold-main-wrapper">
            <div className="formbold-form-wrapper">
                <form onSubmit={handleSubmit}>
                    <div className="formbold-mb-5">
                        <label htmlFor="title" className="formbold-form-label">
                            Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Enter your title"
                            className="formbold-form-input"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        <label htmlFor="smallDescription" className="formbold-form-label">
                            Small Description
                        </label>
                        <input
                            type="text"
                            name="smallDescription"
                            id="smallDescription"
                            placeholder="Enter your small description"
                            className="formbold-form-input"
                            value={smallDescription}
                            onChange={(e) => setSmallDescription(e.target.value)}
                        />

                        <label htmlFor="description" className="formbold-form-label">
                            Description
                        </label>
                        <textarea
                            name="description"
                            id="description"
                            placeholder="Enter your description"
                            className="formbold-form-input"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <div className="mb-6 pt-4">
                        <label htmlFor="file" className="formbold-form-label formbold-form-label-2">
                            Upload File
                        </label>
                        <input
                            type="file"
                            name="file"
                            id="file"
                            className="formbold-form-input"
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </div>

                    <div>
                        <button className="formbold-btn w-full" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Dashboard;
