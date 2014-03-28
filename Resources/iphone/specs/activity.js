require("behave").andSetup(this);

describe("Custom activity", function() {
    var activity = Alloy.createModel("activity", {
        code: "testCode",
        name: "testName",
        image: "testImage",
        price: 10,
        officePrice: 12
    });
    it("should create a proper custom activity", function() {
        expect(activity.get("code")).toBe("testCode");
        expect(activity.get("name")).toBe("testName");
        expect(activity.get("image")).toBe("testImage");
        expect(activity.get("price")).toBe(10);
        expect(activity.get("officePrice")).toBe(12);
    });
});