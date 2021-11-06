import React from "react";

export default function OneTimePassword() {
  const [oneTimePassword, setOneTimePassword] = React.useState("");

  const callBackendAPI = async () => {
    const response = await fetch("/verify", {
      method: "POST",
      body: JSON.stringify({
        oneTimePassword: oneTimePassword,
      }),
      headers: { "Content-Type": "application/json" },
    });

    const body = await response.json();

    if (response.status !== 200) {
      console.log("errors message");
      throw Error(body.message);
    }

    return body;
  };

  const handleChange = (evt: any) => {
    setOneTimePassword(evt.target.value);
  };

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    console.log("before call");
    callBackendAPI()
      .then((res) => console.log("res", res))
      .catch((err) => console.log("err", err));
  };

  return (
    <div>
      <form method="POST" onSubmit={handleSubmit}>
        <p>
          <label>Enter otp</label>
          <input
            type="text"
            name="oneTimePassword"
            required
            onChange={handleChange}
          />
        </p>
        <p className="full">
          <button type="submit">Submit</button>
        </p>
      </form>
      <br />
      <form method="POST" action="resend">
        <p className="full">
          <button type="submit">resend otp</button>
        </p>
      </form>
    </div>
  );
}
