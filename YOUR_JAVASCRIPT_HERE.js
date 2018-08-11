// Write your JS here
var hero = {
    name: "Zlatan",
    heroic: true,
    inventory: [],
    health: 10,
    weapon:{
        type: "",
        damage: 2,
    }
}

function rest(hero) {
    if (hero.health === 10) {
        console.log('well rested')
    } else if (hero.health < 10) {
        hero.health = 10;
        console.log('health restored')
    } 
    return hero;
}

function pickUpItem(hero, weapon) {
    console.log('weapon picked up')
    hero.inventory.push(weapon)

    return hero.inventory
    console.log('weapon added to inventory')
}

function equipWeapon(hero) {
    
    if (hero.inventory.length >= 1) {
        hero.weapon = hero.inventory[0];
        hero.inventory[0] = hero.inventory[hero.inventory.length - 1]; 
        hero.inventory.pop()
        console.log('weapon equiped')
    } else {
        console.log('inventory empty')
    }
    return hero.inventory
    
    
}

var displayStats = function() {
    document.write(`Name: ${hero.name} \n`,`Health: ${hero.health} \n`, `Weapontype: ${hero.weapon.type} \n`, `Damage: ${hero.weapon.damage}`)

}
displayStats()

//submitForm not yet working.
//function submitForm(event) {
//  event.preventDefault()
//  const newName = document.getElementById("newHero").value
//  hero.name = newName.innerText
//  console.log('naam veranderd')
//}