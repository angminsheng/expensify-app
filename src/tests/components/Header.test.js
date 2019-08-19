import React from "react";
import { shallow } from "enzyme";
import Header from "../../components/Header";
import toJSON from "enzyme-to-json";

describe("Component: Header", () => {
  test("should render header component correctly", () => {
    const wrapper = shallow(<Header />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
