import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <div
        class="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="large"
        data-theme="light"
        data-type="HORIZONTAL"
        data-vanity="chirayuagrawal"
        data-version="v1"
      >
        {/* <a
          class="badge-base__link LI-simple-link"
          href="https://in.linkedin.com/in/chirayuagrawal?trk=profile-badge"
        >
          Chirayu Agrawal
        </a> */}
      </div>
    </div>
  );
};

export default Contact;
