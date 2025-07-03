function filterKeys(obj, func){
    let arr = {}
    for (let i in obj){
        if (func(i)){
            arr[i] = obj[i]
        }
    }
    return arr
}

function mapKeys(obj, func){
    let arr = {}
    for (let i in obj){
        let k = func(i)
        arr[k] = obj[i]
    }
    return arr
}

function reduceKeys(obj, func, arr){
    // console.log(obj[0]);
    let keys = Object.keys(obj)
    let start = 0
    if (arr == undefined){
        arr = keys[0]
        start = 1
    }
    for (let i = start; i < keys.length; i++){
        arr = func(arr, keys[i])
    }
    return arr
}
const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

console.log(filterKeys(nutrients, (key) => /protein/.test(key)))
// output: { protein: 20 }

console.log(mapKeys(nutrients, (k) => `-${k}`))
// output: { -carbohydrates: 12, -protein: 20, -fat: 5 }

console.log(reduceKeys(nutrients, (acc, cr) =>acc.concat(', ', cr)))
// output: carbohydrates, protein, fat


// eq(
//     reduceKeys(ctx.cart, (acc, cr) => acc.concat(', ', cr)),
//     'vinegar, sugar, oil, onion, garlic, paprika',
//     )
// small database with nutrition facts, per 100 grams
// prettier-ignore
// const nutritionDB = {
//     tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
//     vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
//     oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
//     onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
//     garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
//     paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
//     sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
//     orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 12,  fiber: 0.2, fat: 0.1   },
//     }