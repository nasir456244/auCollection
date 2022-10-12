import { collection, setDoc, doc, addDoc, getDoc, updateDoc, deleteDoc, } from "firebase/firestore";
import { db, storage } from "./firebaseConfig";
import { v4 } from "uuid";
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

export const createUser = (uid, data) => {
  setDoc(
    doc(db, "users", uid),
    {
      uid,
      ...data,
    },
    { merge: true }
  );
};


export const UploadImagesAndCollection = async ({ images, CollectionToPost, }) => {
  let photos = [];

  return Promise.all(
    images.map(async (image) => {
      if (image === null) return;
      const imageRef = ref(storage, `images/${image.name + v4()}`);
      const snapshot = await uploadBytes(imageRef, image);
      const downloadURL = await getDownloadURL(snapshot.ref);
      photos.push(downloadURL);
      const data =  photos.length === images.length &&
        (await PostCollection({ ...CollectionToPost, photos: photos }));
      return data;
    })
  );
};

export const PostCollection = async (CollectionToPost) => {
  try {
    const doc = await addDoc(collection(db, "Collections"), {
      ...CollectionToPost,
    });

    return {
      id: doc.id,
      ...CollectionToPost,
    };
  } catch (error) {
    return {
      success: false,
      error: error,
    };
  }
};


export const deleteDocument = async(id) => {
  return await deleteDoc(doc(db, "Collections", id));
}
  



export const getDocument = async (id) => {
  const result = await getDoc(doc(db, `Collections/${id}`));
  return result?.data()?.Status;
}


export const UpdateDocument = async (id) => {
  return await updateDoc(doc(db, `Collections/${id}`), {
    Status: 'complete'
  });
}