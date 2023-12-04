function sortByKey(array, key,order = "desc") {
    array.sort((a, b) => {
        if(key == "name"){
            const aValue = a[key];
            const bValue = b[key];
            return aValue.localeCompare(bValue);
        }
        //number compare
        if(a[key] < b[key]){
            return -1;
        }
        if(a[key] > b[key]){
            return 1;
        }
        return 0;
          
    });
    if(order == "asc"){
        return array.reverse();
    }
    return array;
}
/* EXAMPLE
products = [
    {"name": "Product A", "price": 100, "stock": 5},
    {"name": "Product B", "price": 200, "stock": 3},
    {"name": "Product C", "price": 50, "stock": 10}
];
sortByKey(products, 'price','desc');
*/