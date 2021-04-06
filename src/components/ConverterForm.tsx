import React, { useEffect, useState } from "react";
import { Form, Select, InputNumber, Layout, Row, Col } from "antd";
import CurrencyInput from "./CurrencyInput";

import { getCurrencyPriceData } from "../services/currencyService";
import { Currency } from "../model/Currency";
import { CurrencyModel } from "../model/CurrencyModel";
import { CurrencyItem } from "../model/CurrencyItem";

const { Content } = Layout;
const { Option } = Select;

const ConverterForm = () => {
  const [form] = Form.useForm();

  const defaultCurrencies = Object.values(Currency).filter((i) => !(parseInt(i.toString()) >= 0));

  const [amount, setAmount] = useState<number>(0);
  const [currencies, setCurrencies] = useState<(string | Currency)[]>(defaultCurrencies);
  const [currencyPriceData, setCurrencyPriceData] = useState<CurrencyModel>({} as CurrencyModel);

  useEffect(() => {
    async function fetchData() {
      const currencyPriceDataResponse = await getCurrencyPriceData();

      if (currencyPriceDataResponse) {
        setCurrencyPriceData(currencyPriceDataResponse);
      }
    }

    setInterval(async () => {
      fetchData();
    }, 60000);
  }, []);

  const onCurrencyRemove = (currencyCode: string) => {
    setCurrencies([...currencies.filter((i) => i !== currencyCode)]);
  };

  const onCurrencyAdd = (value: Currency) => {
    setCurrencies([...currencies, value]);

    form.setFieldsValue({
      missedCurrencies: null,
    });
  };

  return (
    <Layout className="btc-wrapper">
      <Content>
        <Row>
          <Col offset={8}>
            <Form layout="inline" form={form}>
              <Form.Item
                label="Btc Number"
                name="btcNumber"
                rules={[{ required: true, message: "Please input BFC number !" }]}
              >
                <InputNumber onInput={(value) => (value ? setAmount(parseInt(value)) : value)} min={0} />
              </Form.Item>
              {currencyPriceData?.currencies &&
                currencies.map((currency: string | Currency) => {
                  const curencyItem = currencyPriceData.currencies.find((i) => i.code === currency) ?? {};
                  return (
                    <CurrencyInput
                      key={currency}
                      amount={amount}
                      currency={curencyItem as CurrencyItem}
                      onRemove={onCurrencyRemove}
                    />
                  );
                })}

              {currencies.length !== defaultCurrencies.length && (
                <Form.Item name="missedCurrencies" label="Add currency">
                  <Select onChange={onCurrencyAdd} style={{ width: "100px" }}>
                    {defaultCurrencies
                      .filter((i) => !currencies.includes(i))
                      .map((item) => (
                        <Option key={item} value={item}>
                          {item}
                        </Option>
                      ))}
                  </Select>
                </Form.Item>
              )}
            </Form>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default ConverterForm;
