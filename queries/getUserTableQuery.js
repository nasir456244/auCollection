import { db } from "@/lib/firebaseConfig";
import {
  query,
  where,
  getDoc,
  doc,
} from "firebase/firestore";

export const getUserTable = async (id, user) => {
  if (!user) return;

  let q =  doc(db, "Collections", id);

  try {
    const data = await getDoc(query(q));
    return data;
  } catch (error) {
    throw error;
  }
};

