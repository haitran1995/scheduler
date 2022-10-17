import React from "react";
import Button from "components/Button";

const Confirm = (props) => {
  return (
    <main className="appointment__card appointment__card--confirm">
      <h1 className="text--semi-bold">{props.message}</h1>
      <section className="appointment__actions">
        <Button onClick={props.onCancel} danger>Cancel</Button>
        <Button onClick={props.onConfirm} danger>Confirm</Button>
      </section>
    </main>
  );
};

export default Confirm;

// props 
// message="Delete the appointment?"
// onConfirm={action("onConfirm")}
// onCancel={action("onCancel")}
