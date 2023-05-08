"use client";
import { useAppSelector } from "@/customHooks/storeHooks";
import { GetUser } from "@/utility/AsyncFetchFunctions";
import { User } from "@/utility/CustomTypes";
import React, { useEffect, useState } from "react";

const AccountDetails = () => {
  const email = useAppSelector((state) => state.UserSlice.email);
  const [user, setUser] = useState<User>({
    id: 0,
    attributes: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });
  useEffect(() => {
    const getUser = async () => {
      try {
        const userResponse = await GetUser(email || "");
        setUser(userResponse);
      } catch (error) {
        console.log((error as Error).message);
      }
    };

    getUser();
  }, []);

  return (
    <>
      <h3 className="text-[4rem]">Account details</h3>
      <p>
        {user.attributes.firstName} {user.attributes.lastName}
      </p>
      <p>USA</p>
    </>
  );
};

export default AccountDetails;
