import React from "react";
import Card from "./card";
import axios from "axios";
function Home() {
  const checkoutHandler = async (amount) => {
    const {
      data: { key },
    } = await axios.get("http://www.localhost:4000/api/getkey");

    const {
      data: { order },
    } = await axios.post("http://localhost:4000/api/checkout", {
      amount,
    });

    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Sumit verma",
      description: "Tutorial of RazorPay",
      image:
        "https://avatars.githubusercontent.com/u/162549367?s=400&u=7cfb9538802f05c1846154247eebb9b4aa87adba&v=4",
      order_id: order.id,
      callback_url: "http://localhost:4000/api/paymentverification",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9625781451",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#121212",
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <div className="flex items-center justify-center h-screen gap-12">
      <Card
        amount={25000}
        img="https://img.freepik.com/premium-photo/camera-yellow-background-vertical-photo_326533-1494.jpg"
        checkoutHandler={checkoutHandler}
      />
      <Card
        amount={7000}
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXxAXEJbCnQq6VaA2IfYnx4VVRe2ozfvFd7g&s"
        checkoutHandler={checkoutHandler}
      />
    </div>
  );
}

export default Home;
