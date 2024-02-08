"use client";
import addData from "../../firebase/firestore/addData";
import { useAuthContext } from "@/context/AuthContext";


export default function Home() {
  const { user } = useAuthContext();

  const handleForm = async () => {
    if (!user) {
      console.log('User not authenticated');
      return;
    }

    console.log(user);

    const data = {
      name: "John snow",
      house: "Stark",
    };

    const { result, error } = await addData("users", "user-id", data);

     if (error) {
      console.error('Error adding data:', error);
    } else {
      console.log('Data added successfully:', result);
    }
  };

  return <main>
    <button onClick={handleForm}>Add data</button>

  </main>;
}
