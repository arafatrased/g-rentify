"use client";
import { useSession } from "next-auth/react";
import React, { createContext, useState, useContext, useEffect } from "react";

const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
  const session = useSession();
  const userEmail = session?.data?.user?.email;
  const [loading, setLoading] = useState(true);
  const [myOrder, setMyOrder] = useState();
  const [totalCart, setTotalCart] = useState(0);
  const total = totalCart + myOrder?.length;

  useEffect(() => {
    const fetchMyOrder = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_LINK}/my-cart?email=${userEmail}`
        );

        const data = await res.json();
        setMyOrder(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        // console.log("Failed to fetch data length", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMyOrder();
  }, [userEmail]);

  return (
    <OrdersContext.Provider
      value={{ total, totalCart, setTotalCart, loading }}
    >
      {children}
    </OrdersContext.Provider>
  );
};

export const useOrders = () => {
  return useContext(OrdersContext);
};
