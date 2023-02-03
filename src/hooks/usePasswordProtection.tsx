import { useState } from "react";

export default function usePasswordProtection() {
  const [isValid, setIsValid] = useState(false);

  const handleSiteEntrance = (e) => {
    e.preventDefault();
    if (e.target[0].value === "miouss") {
      setIsValid(true);
    }
  };

  const passwordForm = (
    <form
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightgrey",
      }}
      onSubmit={handleSiteEntrance}
    >
      <input type="text" placeholder="password" />
      <button type="submit">Valider</button>
    </form>
  );

  if(window.location.hostname === "localhost") {
    return undefined;
  }

  return isValid ? undefined : passwordForm;
}
