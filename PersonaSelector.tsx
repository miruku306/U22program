// PersonaSelector.tsx
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

const personas = [
  { id: "yandere", label: "病み系" },
  { id: "military", label: "軍人系" },
  { id: "gal", label: "ギャル系" },
  { id: "polite", label: "敬語系" },
];

export const PersonaSelector = () => {
  const [selected, setSelected] = useState("");

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelected(value);

    const user = auth.currentUser;
    if (!user) return;

    await setDoc(doc(db, "users", user.uid), {
      persona: value,
    }, { merge: true });
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <label className="block mb-2">通知キャラを選ぶ:</label>
      <select
        value={selected}
        onChange={handleChange}
        className="border p-2 rounded"
      >
        <option value="">選択してください</option>
        {personas.map(p => (
          <option key={p.id} value={p.id}>{p.label}</option>
        ))}
      </select>
    </div>
  );
};
