interface INonogram {
    nonogramArray: boolean[][]

    nonogramArrayWidth (): number
    nonogramArrayHeight (): number
};

class Nonogram implements INonogram {
    nonogramArray: boolean[][];

    constructor () {
        this.nonogramArray = [
            [true, true, true, false, true],
            [true, true, true, false, true],
            [true, false, true, false, true],
            [true, false, true, false, true],
            [true, true, true, false, true]
        ];
    }

    nonogramArrayWidth = (): number => {
        return this.nonogramArray[0].length;
    }
    nonogramArrayHeight = (): number => {
        return this.nonogramArray.length;
    }
};

    // function toArrayIndex(index: number): [number, number] {
    //     let y: number = Math.floor(index / numberOfRows);
    //     let x: number = index % numberOfCols;
    //     return [y, x];  // Y, X
    // }
    // function setArrayCell(index: number, value: boolean): void {
    //     let _temp: [number, number] = toArrayIndex(index);
    //     let y: number = _temp[0];
    //     let x: number = _temp[1];
    //     nonogramState.nonogramArray[y][x] = value;
    // }
    // function getArrayCell(index: number): boolean {
    //     let _temp: [number, number] = toArrayIndex(index);
    //     let y: number = _temp[0];
    //     let x: number = _temp[1];
    //     return nonogramState.nonogramArray[y][x];
    // }

export {
    type INonogram,
    Nonogram
}
