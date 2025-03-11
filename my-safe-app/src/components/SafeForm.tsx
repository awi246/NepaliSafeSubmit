import { NepaliSafeSubmit, ToastContainer } from "nepali-safe-submit";
import "react-toastify/dist/ReactToastify.css";

const SafeForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    console.log("Form data:", Object.fromEntries(formData));
    alert("Form submitted successfully!");
  };

  return (
    <div>
      <h1>Nepali Safe Form Demo</h1>
      <NepaliSafeSubmit onSubmit={handleSubmit}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input name="username" placeholder="Enter your name" required />
          <textarea
            name="message"
            placeholder="Enter your message"
            rows={4}
            required
          />
          <button type="submit">Submit</button>
        </div>
      </NepaliSafeSubmit>
      <ToastContainer />
    </div>
  );
};

export default SafeForm;
