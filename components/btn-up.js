import React from "react";
import { useRouter } from "next/router";
import { Icon } from '@iconify/react';

export default function BtnUp() {
    const router = useRouter();

  return (
    <>
      <button onClick={() => router.push('#')} className="float-up">
      <Icon icon="ph:arrow-up" width="30" /> 
      </button>
    </>
  );
}
