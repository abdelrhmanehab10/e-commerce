"use client";

import { useEffect, useState } from "react";
import AddCategoryModal from "../modals/add-category-modal";
import AddProductModal from "../modals/add-product-modal";
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
      <AddCategoryModal />
      <AddProductModal />
      <EditProductModal />
      <EditCategoryModal />
    </>
  );
};

export default ModalProvider;
