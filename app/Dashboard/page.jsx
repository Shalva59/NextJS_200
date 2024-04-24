"use client"
import React, { useState, useEffect } from 'react';
import { addDoc, collection, setDoc } from "firebase/firestore";
import { ref, upoloadBytes, getDownloadURL, uploadBytes } from "firebase/storage"
import { db, storage } from "@/lib/firebase";
const Dashboard = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [smallDescription, setSmallDescription] = useState("");
    const [file, setFile] = useState(null);
  
    const handleImagesChange = (e) => {
      setFile([...e.target.files]);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const imagesURL = await Promise.all(
        Array.from(file).map(async (img) => {
          console.log(img);
          const imageRef = ref(storage, `images/${img.name}`);
          const uploadResult = await uploadBytes(imageRef, img);
          return getDownloadURL(uploadResult.ref);
        })
      );
      console.log(imagesURL);
  
      await addDoc(collection(db, "blogs"), {
        title,
        description,
        smallDescription,
        imagesURL,
      });
      setFile(null);
      setTitle("");
      setDescription("");
      setSmallDescription("");
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
                            onChange={handleImagesChange}
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
