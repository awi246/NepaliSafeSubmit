import React from "react";
import { toast } from "react-toastify";
import vulgarWords from "../data/vulgar-words.json";

interface SafeSubmitProps {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent) => void;
}

const NepaliSafeSubmit = ({ children, onSubmit }: SafeSubmitProps) => {
  const checkForVulgarWords = (formData: FormData) => {
    let hasVulgar = false;

    formData.forEach((value) => {
      if (typeof value === "string") {
        vulgarWords.forEach((word) => {
          if (value.toLowerCase().includes(word.value.toLowerCase())) {
            hasVulgar = true;
            toast.error(`Vulgar word detected: ${word.value}`, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
          }
        });
      }
    });

    return !hasVulgar;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    if (checkForVulgarWords(formData)) {
      onSubmit(e);
    }
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
};

export default NepaliSafeSubmit;
