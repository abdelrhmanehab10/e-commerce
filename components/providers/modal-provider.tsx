"use client";

import { useEffect, useState } from "react";
import EditProductModal from "../modals/edit-product-modal";
import EditCategoryModal from "../modals/edit-category-modal";

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
      <EditProductModal />
      <EditCategoryModal />
    </>
  );
};

export default ModalProvider;
