"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Upload() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/i/flow/upload');
  }, [])
  return (
    null

  );
}
