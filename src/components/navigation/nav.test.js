import React from "react";
import Enzyme, { shallow } from "enzyme";
import Navigation from "./index";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("nav component", () => {
	test("renders", () => {
		const wrapper = shallow(<Navigation />);

		expect(wrapper.exists()).toBe(true);
	});
});