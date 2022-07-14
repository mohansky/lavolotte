import React from "react";
import { useRouter } from "next/router";
import { Icon } from '@iconify/react';

export default function BtnBack() {
    const router = useRouter();
  return (
    <>
      <button onClick={() => router.back()} className="float-back" aria-label="back button">
      <Icon icon="ph:arrow-left" width="30" /> 
      </button>
    </>
  );
}
