
class HashMap {
    dataMap: Array<any>
    constructor(size=7){
        this.dataMap = new Array(size)
    }


    _hash(key:string){
        let hash = 0
        for(let i = 0 ; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * 23 ) % this.dataMap.length
        }
        return hash
    }

    set(key:string,value:any){

        let index = this._hash(key)
        if(!this.dataMap[index]){
            this.dataMap[index] = []
        }
        this.dataMap[index].push([key,value])
    }

    get(key:string){
        let index = this._hash(key)
        if(this.dataMap[index]){
            for(let i = 0; i< this.dataMap[index].length ; i++){
                if(this.dataMap[index][i][0] === key){
                    return this.dataMap[index][i][1]
                }
            }
        }
        return undefined
    }
}

const myMovieStore = new HashMap(10)

myMovieStore.set('StarWars', 400)
myMovieStore.set('Justice League', 700)
myMovieStore.set('Saw', 600)
myMovieStore.set('It', 500)
myMovieStore.set('StarWars 4', 400)
myMovieStore.set('StarWars 3', 1000)
myMovieStore.set('StarWars 2', 400)
myMovieStore.set('StarWars 5', 400)
myMovieStore.set('StarWars 6', 400)
myMovieStore.set('StarWars 7', 400)
myMovieStore.set('StarWars 8', 400)
myMovieStore.set('StarWars 9', 400)
myMovieStore.set('StarWars 10', 400)
myMovieStore.set('StarWars 11', 400)
myMovieStore.set('StarWars 12', 400)
myMovieStore.set('StarWars 13', 400)
myMovieStore.set('StarWars 134', 1400)
myMovieStore.set('StarWars 15', 400)


console.log(myMovieStore.get('StarWars 134'))
