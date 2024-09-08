import { useState } from "react";
import Header from "./header";
import References from "./references";
import AddForm from "./add-form";

function Home() {
  const [showForm, setForm] = useState(false);
  const toggleForm = () => setForm(!showForm);

  return (
    <div className={`${showForm ? "overflow-hidden h-[100vh]" : ""}`}>
      <AddForm showForm={showForm} setForm={toggleForm} />
      <div className={`min-h-screen bg-neutral-700 text-neutral-200`}>
        <Header setForm={toggleForm} />
        <References />
      </div>
    </div>
  );
}

export default Home;
