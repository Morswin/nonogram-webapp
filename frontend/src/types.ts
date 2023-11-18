interface INonogram {
    nonogramArray: Map<[number, number], boolean>
    nonogramWidth: number
    nonogramHeight: number

    getAsArray(): INonogramIndex[]
    setCell(index:INonogramIndex): void
};

class Nonogram implements INonogram {
    nonogramArray: Map<[number, number], boolean>;
    nonogramWidth: number;
    nonogramHeight: number;

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

    getAsArray = (): INonogramIndex[] => {
        // console.log(this.nonogramArray);

        let _ret: INonogramIndex[] = new Array<INonogramIndex>();
        this.nonogramArray.forEach((value, key) => {
            _ret.push(new NonogramIndex(key[0], key[1], value));
        })
        
        return _ret;
    }

    setCell = (index:INonogramIndex): void => {
        let _newMap: Map<[number, number], boolean> = new Map<[number, number], boolean>();
        this.nonogramArray.forEach((value: boolean, key: [number, number]) => {
            if (key[0] == index.x && key[1] == index.y) {
                _newMap.set(key, index.value);
            } else {
                _newMap.set(key, value);
            }
        });
        this.nonogramArray = _newMap;
        // console.log(
        //     // this.nonogramArray.delete([index.x, index.y])
        //     this.nonogramArray.clear()
        // );
        // this.nonogramArray.set([index.x, index.y], index.value);
    }
};
    // function getArrayCell(index: number): boolean {
    //     let _temp: [number, number] = toArrayIndex(index);
    //     let y: number = _temp[0];
    //     let x: number = _temp[1];
    //     return nonogramState.nonogramArray[y][x];
    // }

interface INonogramIndex {
    x: number
    y: number
    value: boolean

    getAsKey(): [number, number]
}

class NonogramIndex implements INonogramIndex{
    x: number;
    y: number;
    value: boolean;

    constructor (x: number, y: number, value: boolean) {
        this.x = x;
        this.y = y;
        this.value = value;
    }

    getAsKey = (): [number, number] => {
        return [this.x, this.y];
    }
}


export {
    type INonogram,
    type INonogramIndex,
    Nonogram,
    NonogramIndex
}
