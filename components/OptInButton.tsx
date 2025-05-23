// components/OptInButton.tsx
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { initLiff } from "../liff";

export const OptInButton = () => {
  const [status, setStatus] = useState("未登録");

  const handleOptIn = async () => {
    try {
      const user = auth.currentUser;
      if (!user) {
        alert("Firebaseにログインしてください。");
        return;
      }

      const profile = await initLiff(); // LINEユーザー情報
      const lineUserId = profile.userId;

      const ref = doc(db, "users", user.uid);
      await setDoc(ref, {
        uid: user.uid,
        lineUserId,
        optIn: true,
      }, { merge: true });

      setStatus("登録済み");
    } catch (err) {
      console.error(err);
      setStatus("エラー");
    }
  };

  return (
    <div className="p-4 rounded bg-white shadow-md">
      <p className="mb-2">LINE通知を受け取るには、以下を押してください。</p>
      <button
        onClick={handleOptIn}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
      >
        オプトインする
      </button>
      <p className="mt-2 text-sm">現在の状態: {status}</p>
    </div>
  );
};
