import React from "react";
import Enzyme, { shallow } from "enzyme";
import Weather from "./index";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("weather component", () => {
	test("renders", () => {
		const wrapper = shallow(<Weather />);

		expect(wrapper.exists()).toBe(true);
	});
});