import { db } from "@/lib/firebaseConfig";
import {
  collection,
  orderBy,
  limit,
  query,
  startAfter,
  getDocs,
  where,
} from "firebase/firestore";

export const getClientsFn = async (lastKey, pageSize, user) => {
  if (!user) return;

  let q = query(
    collection(db, "Collections"),
    where("uid", "==", user.uid),
    orderBy("createdAt", "desc"),
    limit(pageSize)
  );

  if (lastKey) {
    q = query(
      collection(db, "Collections"),
      where("uid", "==", user.uid),
      orderBy("createdAt", "desc"),
      startAfter(lastKey),
      limit(pageSize)
    );
  }

  try {
    const data = await getDocs(query(q));
    return data;
  } catch (error) {
    throw error;
  }
};

// export const totalClientsFn = async () => {
//   const q = query(collection(db, "Collections"));
//   try {
//     const data = await getDocs(query(q));
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };
