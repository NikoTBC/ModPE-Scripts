//PC Commands [Advanced]//
//Made by NikoTBC//
//version 1.2.2//

var worldEditToggle = false
var x1 = 0;
var y1 = 0;
var z1 = 0;
var x2 = 0;
var y2 = 0;
var z2 = 0;

var homeX = 0
var homeY = 0
var homeZ = 0

var MobIDs = {
"chicken" : 10,
"cow" : 11,
"pig" : 12,
"sheep" : 13,
"wolf" : 14,
"villager" : 15,
"mooshroom" : 16,
"squid" : 17,
"bat" : 19,
"villagergolem" : 20,
"snowman" : 21,
"ocelot" : 22,
"zombie" : 32,
"creeper" : 33,
"skeleton" : 34,
"spider" : 35,
"pigzombie" : 36,
"slime" : 37,
"enderman" : 38,
"silverfish" : 39,
"cavespider" : 40,
"ghast" : 41,
"lavaslime" : 42,
"blaze" : 43,
"zombievillager" : 44,
"tnt" : 65,
"arrow" : 80,
"snowball" : 81,
"egg" : 82,
"minecart" : 84,
"fireball" : 85,
"boat" : 90,
}

function procCmd(c){
var p = c.split(" ");
var command = p[0];
switch(command){

case 'help':{
if(!p[1]){
clientMessage("--Showing help page 1 of 2 (/help <page>)--");
clientMessage("§a/time: §fSet time");
clientMessage("§a/gamemode: §fChanges gamemode");
clientMessage("§a/sethome: §fSet a home");
clientMessage("§a/home: §fTeleport to home");
clientMessage("§a/give: §fGives a specific item/block");
clientMessage("§a/WEA: §fShows the worldedit commands");
clientMessage("§a/bounce: §fBounce at specific blocks height");
clientMessage("§a/itemdata: §fTells the block OR item ID");
clientMessage("§a/dimension: §fTells which dimension you at");
clientMessage("§a/world: §fTells the world name");
break;
}
if(p[1] == '2'){
clientMessage("--Showing help page 2 of 2 (/help <page>)--");
clientMessage("§a/coords: §fShows the current coordinates");
clientMessage("§a/tp: §fTeleport to a specific coordinates");
clientMessage("§a/summon: §fSummon a specific mob");
clientMessage("§a/effect: §fGives a status effect");
clientMessage("§a/kill: §fKills yourself");
clientMessage("§a/info: §fTells the mod info");
clientMessage("§a/ignite: §fIgnite player for a specific time");
break;
}
}
case 'WEA':{
clientMessage("-- Showing WEA help page ---");
clientMessage("§a/worldedit: §fEnable worldedit");
clientMessage("§a//1: §fSet first position");
clientMessage("§a//2: §fSet second position");
clientMessage("§a//set: §fSet the blocks");
break;
}
case 'time':{
if(p[1] == 'set'){
if(p[2] == 'day'){
Level.setTime(0);
clientMessage("Set time to 0");
break;
}
if(p[2] == 'night'){
Level.setTime(14000);
clientMessage("Set time to 14000");
break;
}
if(!p[2]){
clientMessage("Usage: /time set <day/night>");
break;
}
else{
Level.setTime(parseInt(p[2]));
clientMessage("Set time to " + parseInt(p[2]));
break;
}
}
if(!p[1]){
clientMessage("Current time is " + Level.getTime());
}
break;
}
case 'gamemode':{
if(p[1] == 'survival' || p[1] == '0' || p[1] == 's'){
Level.setGameMode(0);
clientMessage("Set own gamemode to SURVIVAL mode");
break;
}
if(p[1] == 'creative' || p[1] == '1' || p[1] == 'c'){
Level.setGameMode(1);
clientMessage("Set own gamemode to CREATIVE mode");
}
if(!p[1]){
clientMessage("Usage: /gamemode <survival/creative>");
}
break;
}
case 'sethome':{
ModPE.saveData("homeX", parseInt(Player.getX()));
ModPE.saveData("homeY", parseInt(Player.getY()));
ModPE.saveData("homeZ", parseInt(Player.getZ()));
ModPE.saveData("setHomeData", 1);
clientMessage("Home set to ");
clientMessage("X: " + Math.floor(ModPE.readData("homeX")) + " Y: " + Math.floor(ModPE.readData("homeY")) + " Z: " + Math.floor(ModPE.readData("homeZ")));
break;
}
case 'home':{
Entity.setPosition(Player.getEntity(), parseInt(ModPE.readData("homeX")) + 0.5, parseInt(ModPE.readData("homeY")) + 2, parseInt(ModPE.readData("homeZ")) + 0.5);
clientMessage("Teleported to home");
break;
}
case 'coords':{
clientMessage("Current coordinates are:");
clientMessage("X: " + Math.floor(Player.getX()) + " Y: " + Math.floor(Player.getY() - 1) + " Z: " + Math.floor(Player.getZ()));
break;
}
case 'tp':{
setPosition(getPlayerEnt(), parseInt(p[1]), parseInt(p[2]), parseInt(p[3]));
clientMessage("Teleported to X: " + parseInt(p[1]) + " Y: " + parseInt(p[2]) + " Z: " + parseInt(p[3]));
break;
}
case 'summon':{
if(p[1]){
spawnMobID = MobIDs[p[1].toLowerCase()];
if(typeof(spawnMobID) == "undefined"){
clientMessage("Usage: /summon <MobName> <Amount>");
break;
}
}
if(!p[1]){
clientMessage("Usage: /summon <MobName> <Amount>");
break;
}
if(p[2]){
for(spawnAmount = 0; spawnAmount <= parseInt(p[2]); spawnAmount++){
Level.spawnMob(Player.getX(), Player.getY(), Player.getZ(), spawnMobID);
clientMessage("Object(s) successfully summoned");
}
}
if(!p[2]){
clientMessage("Usage: /summon <MobName> <Amount>");
}
break;
}
case 'kill':{
Player.setHealth(1);
Entity.addEffect(getPlayerEnt(), MobEffect.harm, 1*20, 0, false, true);
clientMessage("Ouch. That look like it hurts.");
break;
}
case 'effect':{
if(p[1] == 'add'){
Entity.addEffect(getPlayerEnt(), parseInt(p[2]), parseInt(p[3])*20, parseInt(p[4]) - 1, false, true);
clientMessage("Given effect ID: " + p[2] + " *" + p[4] + " for " + p[3] + " seconds");
break;
}
if(p[1] == 'clear'){
Entity.removeAllEffects(getPlayerEnt());
clientMessage("Took all effects away");
break;
}
else if(!p[1]){
clientMessage("Usage: /effect add <ID> <seconds> <amplifier>")
}
break;
}
case 'itemdata':{
clientMessage("The block/item ID : " + Player.getCarriedItem() + ":" + Player.getCarriedItemData() + " *" + Player.getCarriedItemCount());
break;
}
case 'dimension':{
clientMessage("You are currently in " + Player.getDimension() + " dimension");
clientMessage("0 = Normal dimension");
clientMessage("1 = §cNether §fdimension");
break;
}
case 'world':{
clientMessage("You are playing in " + Level.getWorldName() + " §fworld");
break;
}
case 'me':{
p.shift();
clientMessage("*" + Player.getName(getPlayerEnt()) + " " + p.join(" "));
break;
}
case 'say':{
p.shift();
clientMessage("§5["+Player.getName(getPlayerEnt())+"]" + " " + p.join(" "));
break;
}
case 'bounce':{
if(!(p[1])){
clientMessage("Usage: /bounce <power>");
}
else if(!parseInt(p[1])){
clientMessage("§cThe power must be a number");
}
else{
Entity.setVelY(Player.getEntity(), p[1] / 3);
clientMessage("You were bounced with " + parseInt(p[1]) + " bounce power");
}
break;
}
case 'ignite':{
if(!p[1]){
clientMessage("Usage: /ignite <seconds>");
}
else if(!parseInt(p[1])){
clientMessage("The seconds must be in number");
}
else{
Entity.setFireTicks(Player.getEntity(), p[1]);
clientMessage("You have been ignited for " + p[1] + " seconds");
}
break;
}
case 'give':{
addItemInventory(p[1], p[3], p[2]);
clientMessage("Given " + p[1] + ":" + p[2] + " *" + p[3] + " to " + Player.getName(getPlayerEnt()));
break;
}
case 'info':{
clientMessage("§b[PC Commands] §fMade by §bNiko§eTBC");
clientMessage("§b[PC Commands] §ev1.2.2");
break;
}
case 'worldedit':{
if(worldEditToggle == false){
clientMessage("WorldEdit enabled");
worldEditToggle = true
}
else if(worldEditToggle == true){
clientMessage("WorldEdit disabled");
worldEditToggle = false
}
}
break;
case '/1':{
x1 = getPlayerX();
y1 = getPlayerY();
z1 = getPlayerZ();
clientMessage("Position #1 set");
}
break;
case '/2':{
x2 = getPlayerX();
y2 = getPlayerY();
z2 = getPlayerZ();
clientMessage("Position #2 set");
clientMessage("Do //set <block ID> to set blocks");
}
break;
case '/set':{
//if(p[1] == 0){
clientMessage("Not enough parameters")
break;
}
//else
//}
var lowestX = Math.min(x1, x2);
var lowestY = Math.min(y1, y2);
var lowestZ = Math.min(z1, z2);
var highestX = Math.max(x1, x2);
var highestY = Math.max(y1, y2);
var highestZ = Math.max(z1, z2);
var BlockNum = 0;
for(var x = lowestX; x <= highestX; x++){
for(var y = lowestY; y <= highestY; y++){
for(var z = lowestZ; z <= highestZ; z++){
setTile(x, y, z, parseInt(p[1]));
BlockNum++;
}
}
}
clientMessage("Successfully changed " + BlockNum + " blocks");
//}
break;
}
}
