function hasCity(country, arr){
    return function (city){
        if (arr.includes(city)){
            let v = city + ' is a city from ' + country
            return v
        }else{
            let v = city + ' is not a city from ' + country
            return v
        }
    }
}