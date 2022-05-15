import { Card, Button } from "react-bootstrap";
import React from "react";

const Order = ({ order, onComplete }) => {
  return (
    <Card className="mb-3">
      <Card.Header className="d-flex justify-content-between">
        <span>{`Order #${order.id} - Table #${order.table}`}</span>
        <span>
          <b>${order.amount}</b>
        </span>
      </Card.Header>
      <Card.Body className="d-flex justify-content-between">
        <div>
          {JSON.parse(order.detail).map((item) => (
            <div className="mb-2">
              <span>x{item.quantity}</span>
              <img
                src={item.image}
                width={50}
                height={50}
                alt="gg"
                style={{ borderRadius: 3, margin: "0 10px" }}
              />
              <span>{item.name}</span>
            </div>
          ))}
        </div>

        <div>
          {onComplete ? (
            <Button variant="primary" size="md" onClick={onComplete}>
              Done
            </Button>
          ) : null}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Order;
