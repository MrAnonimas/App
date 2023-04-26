import React from "react";

const BookingConfirmation = ({
  name,
  date,
  time,
  guests,
  occasion = false,
  table = false,
  request = false,
}) => {
  return (
    <main>
      <section
        style={{ display: "flex", "flex-direction": "column", gap: "0.5rem" }}
      >
        <h1>Thanks for booking, {name}!</h1>
        <p>
          Your reservation has been confirmed for {date} at {time} for {guests}{" "}
          {guests === 1 ? "guest" : "guests"}.
        </p>
        {occasion && (
          <p>
            We see that you want to celebrate{" "}
            {occasion === "birthday" ? "a" : "an"} {occasion}. Thanks for notifying
            us, everything will be taken care of!{" "}
          </p>
        )}
        {table && (
          <p>
            Since you  wish to sit {table} we will make
            your request.
          </p>
        )}
        {request && (
          <p>
            We see you left a message. Our team will
            consider your message. In case of necessity we will send you an
            email.
          </p>
        )}
      </section>
    </main>
  );
};

export default BookingConfirmation;
