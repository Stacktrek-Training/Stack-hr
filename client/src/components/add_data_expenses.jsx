import React, { useState } from "react";
import axios from "axios";

const AddDataExpense = () => {
  // Open the modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  // Close the Modal
  const handleModalClose = () => {
    setIsModalOpen(false);
  };
// Input only number
const OnlyNumber = (event) => {
    event.target.value = event.target.value.replace(/[^0-9]/gi, "");
  };
}