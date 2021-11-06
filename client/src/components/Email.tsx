import React from "react";

export default function Email() {
  const [email, setEmail] = React.useState("");

  const callBackendAPI = async () => {
    const response = await fetch("/send", {
      method: "POST",
      body: JSON.stringify({
        email: email,
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
    setEmail(evt.target.value);
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
      <h3 className="register-heading">SignUp Here</h3>
      <form method="POST" onSubmit={handleSubmit}>
        <div className="row register-form">
          <div className="col-md-6">
            <div className="form-group">
              <input
                onChange={handleChange}
                type="email"
                placeholder="Your Email *"
                name="email"
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <input type="submit" className="btnRegister" value="Register" />
          </div>
        </div>
      </form>

      {/* <form action="" onSubmit={handleSubmit} method="POST">
      <div>
        <label htmlFor="formGroupExampleInput">Podaj email</label>
        <input type="email" id="article" name="article" placeholder="Email" />
      </div>
      <button type="submit">Wyślij jednorazowe hasło</button>
    </form> */}
    </div>
  );
}
