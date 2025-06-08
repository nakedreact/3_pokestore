"use client";

import { useState } from "react";

export default function EmailInput() {
  return (
    <div className="sign-up">
      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="Email address..."
      />
      <button onClick={handleAddSubscriber} className="button-card">
        Sign Up
      </button>
    </div>
  );
}
