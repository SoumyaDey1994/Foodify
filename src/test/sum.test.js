import { sum } from "../components/sum"

test("Should return error when sum method called using invalid arguments", () => {
    const result = sum("soumya", "dey");
    expect(result).toBeInstanceOf(Error);
});

test("Should return result when sum method called using numeric arguments", () => {
    const result = sum(70, 8);
    expect(result).toBe(78);
});
