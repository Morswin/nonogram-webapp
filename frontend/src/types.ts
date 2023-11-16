interface INonogram {
    nonogramArray: Map<[number, number], boolean>
    nonogramWidth: number
    nonogramHeight: number

    getAsArray(): Array<[[number, number], boolean]>
    // nonogramArrayWidth (): number
    // nonogramArrayHeight (): number
};

class Nonogram implements INonogram {
    nonogramArray: Map<[number, number], boolean>;
    nonogramWidth: number
    nonogramHeight: number

    constructor () {
        this.nonogramWidth = 5;
        this.nonogramHeight = 5;
        this.nonogramArray = new Map<[number, number], boolean>();
        for (let _x = 0; _x < this.nonogramWidth; _x++) {
            for (let _y = 0; _y < this.nonogramHeight; _y++) {
                this.nonogramArray.set([_x, _y], true);
            }
        }
    }

    getAsArray(): Array<[[number, number], boolean]> {
        console.log(this.nonogramArray);
        console.log(new Array<[[number, number], boolean]>());
        

        let _ret: [[number, number], boolean] = new Array<[[number, number], boolean]>();
        this.nonogramArray.forEach((value, key) => {
            // if (_ret == undefined) {
            //     _ret = new Array();
            // }
            _ret.push([...key], value)
        })
        // for (let _cell in this.nonogramArray) {
        //     // _ret.push(_cell);
        //     console.log(_cell);
        // }
        
        return _ret;
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
