class Player{
    constructor(){

    }
getCount(){
    var playercountref=database.ref('gplayerCount')
    playercountref.on("value",function(data){
        playerCount=data.val();
    })
}
updateCount(count){
    database.ref('/').update({
        playerCount:count
    })
}
update(name){
var playerIndex="player"+playerCount;
database.ref('/').set({
    name:name
})


}
}