import React from "react";
import { Form, Input, Button } from "antd";
import { CurrencyItem } from "../model/CurrencyItem";

import { CloseOutlined } from "@ant-design/icons";

type CurrencyInputProps = {
  amount: number;
  currency: CurrencyItem;
  onRemove: (currencyCode: string) => void;
};

const moneyFormatter = (value: number, currencyCode: string) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
  }).format(value);
};

const CurrencyInput = ({ amount, currency, onRemove }: CurrencyInputProps) => {
  return (
    <>
      <Form.Item label={currency.code}>
        <Input
          value={
            currency.rate_float && amount ? moneyFormatter(amount * currency.rate_float, currency.code) : undefined
          }
        />
      </Form.Item>

      <Button type="link" onClick={() => onRemove(currency.code)}>
        <CloseOutlined />
      </Button>
    </>
  );
};

export default CurrencyInput;
