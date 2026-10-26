export class SpellBook {
    private spells: Set<string> = new Set();

    constructor(public readonly owner: string) {}

    addSpell(spell: string): void {
        this.spells.add(spell);
    }

    hasSpell(spell: string): boolean {
        return this.spells.has(spell);
    }

    getSpellCount(): number {
        return this.spells.size;
    }

    removeSpell(spell: string): boolean {
        return this.spells.delete(spell);
    }
}