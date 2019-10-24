import { Hero } from './hero';

export class MockHeroes {
    private static HEROES: Hero[] =
        [{ id: 11, name: 'Dr Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }];

    constructor() { }

    static getHEROES(): Hero[] {
        return this.HEROES;
    }

    static getHERO(id: number): Hero {
        for (const i of this.HEROES) {
            if (i.id === id) {
                return i;
            }
        }
    }

    static setHEROES(id: number, name: string) {
        let i = 0;
        while (i < this.HEROES.length) {
            if (this.HEROES[i].id === +id) {
                this.HEROES[i].name = name;
                break;
            }
            i++;
        }
    }
}
