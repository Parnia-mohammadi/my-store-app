"use client";

import { User, useUser } from "@/context/UserContext";
import { useState } from "react";

function page() {
  const [user, setUser] = useState<User>({ userName: "", password: "" });
  const { Login } = useUser();

  return (
    <main className="border p-6 rounded-xl max-w-2xl mx-auto mt-30">
      <h1 className="text-2xl font-bold mb-4">Login :</h1>
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          Login(user);
        }}
      >
        <div className="flex flex-col gap-2 border rounded-md p-4">
          <label htmlFor="username">UserName :</label>
          <input
            type="text"
            placeholder="Enter your username"
            id="username"
            value={user?.userName}
            className="p-2"
            required
            onChange={(e) =>
              setUser((prev) => ({ ...prev, userName: e.target.value }))
            }
          />
        </div>
        <div className="flex flex-col gap-2 border rounded-md p-4">
          <label htmlFor="password">Password :</label>
          <input
            type="text"
            placeholder="Enter your password"
            id="password"
            className="p-2"
            required
            onChange={(e) =>
              setUser((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </div>
        <button
          type="submit"
          className="bg-amber-200 p-4 rounded-xl text-gray-800"
        >
          Login
        </button>
      </form>
    </main>
  );
}

export default page;
