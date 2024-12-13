import { sum } from "../sum";

test("sum of 7 and 8 is 15", () => {
    const result = sum(7, 8);
    expect(result).toBe(15);
});
