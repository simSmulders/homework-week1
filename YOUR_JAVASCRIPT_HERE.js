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

function pickUpItem() {

}

function equipWeapon() {

}
