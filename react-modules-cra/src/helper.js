function choice(items){

    let itemsLength = items.length
    let selection = Math.floor(Math.random()*itemsLength)

    return items[selection]
}

function remove(items, item){
    let count = 0;
    let removedItem = undefined;

    for(let target of items){
        if(target == item){
            removedItem = items.splice(count, 1)
        }
        count += 1; 
    }
    return removedItem
}

export { choice , remove }