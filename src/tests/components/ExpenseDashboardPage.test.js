import React from "react";
import { shallow } from "enzyme";
import { ExpenseDashboardPage } from "../../components/ExpenseDashboardPage";
import toJSON from "enzyme-to-json";

describe("Component: ExpenseDashboardPage", () => {
  test("should render the ExpenseDashboardPage", () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
