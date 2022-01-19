import Image from "next/image";
import React, { useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { db,storage } from "../firebase";
import firebase from "firebase";

const InputBox = () => {
  const { data: session, status } = useSession();
  // for input reference
  const inputRef = useRef(null);
  const filepickerRef = useRef(null);
  // For image uploading we need a state to hold on to the image before submitting
  const [imageToPost, setImageToPost] = useState(null);

  // for submit button
  const sendPost = (e) => {
    e.preventDefault();
    //  if there is no input then return,else add the following things in collection.posts
    if (!inputRef.current.value) return;
    db.collection("posts").add({
      message: inputRef.current.value,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    }).then((doc) => {
      if (imageToPost) {   // when start uploading
        const uploadTask = storage
          .ref(`posts/${doc.id}`)
          .putString(imageToPost, "data_url");

        removeImage();

        uploadTask.on(           // listen to state change
          "state_change",
          null,
          (error) => console.error(error),
          () => {     // after uploading
            storage
              .ref("posts")
              .child(doc.id)
              .getDownloadURL()
              .then((url) =>
                db.collection("posts").doc(doc.id).set(
                  {
                    postImage: url,
                  },
                  { merge: true }
                )
              );
          }
        );
      }
    });
    inputRef.current.value = "";
  };

  const addImageToPost = (e) => {
    const reader = new FileReader(); //fileReader api for reading
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]); //passing the files to reader
    }

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  // for removing image
  const removeImage = () => {
    setImageToPost(null);
  };

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex items-center space-x-4 p-4">
        <Image
          className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
          objectFit="cover"
          alt=""
        />

        <form className="flex flex-1">
          {/* for input box */}
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
            type="text"
            ref={inputRef}
            placeholder={`Whats on your mind,${session.user.name}?`}
          />
          <button hidden onClick={sendPost} type="submit">
            Submit
          </button>
        </form>

        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
          >
            <img
              className="h-10 pt-2 object-contain"
              src={imageToPost}
              alt=""
            />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )}
      </div>

      {/* for upload */}
      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        {/* for Image upload */}
        <div
          onClick={() => filepickerRef.current.click()}
          className="inputIcon"
        >
          <CameraIcon className="h-7 text-green-500" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          {/* onChange: when i select a file it will call a function */}
          <input
            ref={filepickerRef}
            onChange={addImageToPost}
            type="file"
            hidden
          />
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-500" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
