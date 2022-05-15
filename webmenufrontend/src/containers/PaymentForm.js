import React, { useContext, useState } from "react";

import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

import { createPaymentIntent } from "../apis";
import AuthContext from "../contexts/AuthContext";

const PaymentForm = ({ amount, items, onDone, color }) => {
  const [loading, setLoading] = useState(false);

  const auth = useContext(AuthContext);
  const params = useParams();

  const onSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    const json = await createPaymentIntent(
      {
        amount,
        place: params.id,
        table: params.table,
        detail: items,
      },
      auth.token
    );

    if (json?.success) {
      toast(`Your order #${json.order} is processing`, { type: "success" });
      onDone();
      setLoading(false);
    } else if (json?.error) {
      toast(json.error, { type: "error" });
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <Button
        variant="standard"
        style={{ backgroundColor: color }}
        className="mt-4"
        block
        type="submit"
        disabled={loading}
      >
        {loading ? "Processing..." : "Place Order"}
      </Button>
    </Form>
  );
};

export default PaymentForm;
