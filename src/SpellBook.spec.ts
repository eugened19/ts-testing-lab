import { SpellBook } from "./SpellBook";

describe("SpellBook", () => {
    let book: SpellBook;

    beforeEach(() => {
        book = new SpellBook("Harry");
    });

    it("starts empty", () => {
        expect(book.getSpellCount()).toBe(0);
    });

    it("adds a spell", () => {
        book.addSpell("Expelliarmus");

        expect(book.hasSpell("Expelliarmus")).toBe(true);
        expect(book.getSpellCount()).toBe(1);
    });

    it("does not add duplicates", () => {
        book.addSpell("Lumos");
        book.addSpell("Lumos");

        expect(book.getSpellCount()).toBe(1);
    });

    it ("removes a spell", () => {
        book.addSpell("Alohomora");
        expect(book.hasSpell("Alohomora")).toBe(true);

        const removed = book.removeSpell("Alohomora");
        expect(removed).toBe(true);
        expect(book.hasSpell("Alohomora")).toBe(false);
        expect(book.getSpellCount()).toBe(0);
    });

    it ("returns false when removing a non-existent spell", () => {
        const removed = book.removeSpell("NonExistentSpell");
        expect(removed).toBe(false);
    });
});