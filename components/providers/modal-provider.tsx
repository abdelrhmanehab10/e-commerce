"use client";

import { useEffect, useState } from "react";
import EditModal from "../modals/edit-modal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <EditModal />
    </>
  );
};

export default ModalProvider;
