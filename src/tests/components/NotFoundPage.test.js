import React from "react";
import { shallow } from "enzyme";
import { NotFoundPage } from "../../components/NotFoundPage";
import toJSON from "enzyme-to-json";

describe("Component: NotFoundPage", () => {
  test("should render the NotFoundPage", () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
