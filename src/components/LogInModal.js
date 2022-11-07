import React from "react";
import "./Components.css";

function LogInModal({ onClick }) {
  const passW = 346521;

  return (
    <div className="LogInModal">
      <div>
        <p>Helloooo</p>
        <div style={{ paddingBottom: 10 }}>
          <form>
            <label>
              {"Name: "}
              <input type="text" name="name" />
            </label>
            <div style={{ paddingTop: 20 }}>
              <label>
                {"Password: "}
                <input type="password" name="password" />
              </label>
            </div>
          </form>
        </div>
        <div style={{ marginBottom: 20 }}>
          <button onClick={onClick}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default LogInModal;
