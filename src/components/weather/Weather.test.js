import React from "react";
import Enzyme, { shallow } from "enzyme";
import Button from "./index";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Button component", () => {
	test("renders", () => {
		const wrapper = shallow(<Button />);

		expect(wrapper.exists()).toBe(true);
	});
});