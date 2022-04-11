import { useState } from "react";
import "@pages/contact.scss";

export default function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div id="contact">
      <h1>Contactez-nous</h1>
      <form action="">
        <div className="fields">
          <input
            type="text"
            name="fullname"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <textarea name="message" onChange={(e) => setMessage(e.target.value)}>
          {message}
        </textarea>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}
