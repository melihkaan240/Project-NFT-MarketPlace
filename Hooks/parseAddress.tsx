import React from "react";
import { Text } from "@chakra-ui/react";

export const parseAddress = (account: any) => {
  console.log(account.substring(0, 8));
  const firstValue = account.substring(0, 5);
  const lastValue = account.substring(account.length - 4);
  return (
    <>
      <Text>
        {firstValue}...{lastValue}
      </Text>
    </>
  );
};
