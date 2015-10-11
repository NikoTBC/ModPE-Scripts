//Redstone PE//
//Made by NikoTBC//
//Source code by Darkcube_lord704//
//version 1.0 PRE-RELEASE 1//

function useItem(a,b,c,d,e,f){var g=Level.getData(a,b,c);0!==e&&331==d&&setTile(a,b+1,c,55),331==d&&1==f&&(23==getTile(a-1,b+1,c)||23==getTile(a+1,b+1,c)||23==getTile(a,b+1,c-1)||23==getTile(a,b+1,c+1)||23==getTile(a-1,b+2,c)||23==getTile(a+1,b+2,c)||23==getTile(a,b+2,c-1)||23==getTile(a,b+2,c+1)||23==getTile(a-1,b,c)||23==getTile(a+1,b,c)||23==getTile(a,b,c-1)||23==getTile(a,b,c+1)?(setTile(a,b+1,c,23),checkRed(a-1,b,c,15,!0),checkRed(a+1,b,c,15,!0),checkRed(a,b,c-1,15,!0),checkRed(a,b,c+1,15,!0),checkRed(a-1,b+1,c,15,!0),checkRed(a+1,b+1,c,15,!0),checkRed(a,b+1,c-1,15,!0),checkRed(a,b+1,c+1,15,!0),checkRed(a-1,b+2,c,15,!0),checkRed(a+1,b+2,c,15,!0),checkRed(a,b+2,c-1,15,!0),checkRed(a,b+2,c+1,15,!0)):76==getTile(a-1,b,c)||76==getTile(a+1,b,c)||76==getTile(a,b,c-1)||76==getTile(a,b,c+1)?(setTile(a,b+1,c,23),checkRed(a-1,b,c,15,!0),checkRed(a+1,b,c,15,!0),checkRed(a,b,c-1,15,!0),checkRed(a,b,c+1,15,!0)):setTile(a,b+1,c,55)),69==e&&0==g&&(checkRed(a-1,b,c,15,!0),checkRed(a+1,b,c,15,!0),checkRed(a,b,c-1,15,!0),checkRed(a,b,c+1,15,!0),checkRed(a,b-2,c,15,!0),setTile(a,b,c,69,1)),69==e&&1==g&&(checkRed(a-1,b,c,15,!1),checkRed(a+1,b,c,15,!1),checkRed(a,b,c-1,15,!1),checkRed(a,b,c+1,15,!1),checkRed(a,b-2,c,15,!1),setTile(a,b,c,69,0)),0!==e&&0==g&&76==d&&(checkRed(a-1,b+1,c,15,!0),checkRed(a+1,b+1,c,15,!0),checkRed(a,b+1,c-1,15,!0),checkRed(a,b+1,c+1,15,!0),checkRed(a,b+3,c,15,!0),setTile(a,b+1,c,76,0)),76==getTile(a,b+1,c)&&76==getTile(a,b-1,c)&&setTile(a,b+1,c,75),76==getTile(a,b+1,c)&&76==getTile(a,b+3,c)&&setTile(a,b+3,c,75),76==getTile(a,b+1,c)&&76==getTile(a,b+3,c)&&75==getTile(a,b+5,c)&&setTile(a,b+3,c,75),76==getTile(a,b+1,c)&&76==getTile(a,b+3,c)&&75==getTile(a,b+5,c)&&setTile(a,b+5,c,76)}function checkRed(a,b,c,d,e){55==getTile(a,b,c)&&e&&(setTile(a,b,c,23,0),checkRed(a-1,b,c,d-1,!0),checkRed(a+1,b,c,d-1,!0),checkRed(a,b,c-1,d-1,!0),checkRed(a,b,c+1,d-1,!0),0==getTile(a,b+1,c)&&(checkRed(a-1,b+1,c,15,!0),checkRed(a+1,b+1,c,15,!0),checkRed(a,b+1,c-1,15,!0),checkRed(a,b+1,c+1,15,!0),checkRed(a-1,b-1,c,15,!0),checkRed(a+1,b-1,c,15,!0),checkRed(a,b-1,c-1,15,!0),checkRed(a,b-1,c+1,15,!0))),23!=getTile(a,b,c)||e||(setTile(a,b,c,55),checkRed(a-1,b,c,d-1,!1),checkRed(a+1,b,c,d-1,!1),checkRed(a,b,c-1,d-1,!1),checkRed(a,b,c+1,d-1,!1),0==getTile(a,b+1,c)&&(checkRed(a-1,b+1,c,d-1,!1),checkRed(a+1,b+1,c,d-1,!1),checkRed(a,b+1,c-1,d-1,!1),checkRed(a,b+1,c+1,d-1,!1),checkRed(a-1,b-1,c,d-1,!1),checkRed(a+1,b-1,c,d-1,!1),checkRed(a,b-1,c-1,d-1,!1),checkRed(a,b-1,c+1,d-1,!1))),23==getTile(a,b,c)&&e&&(checkTnt(a+1,b-1,c),checkTnt(a-1,b-1,c),checkTnt(a,b-1,c+1),checkTnt(a,b-1,c-1),checkTnt(a+1,b,c),checkTnt(a-1,b,c),checkTnt(a,b,c+1),checkTnt(a,b,c-1),checkTnt(a,b-2,c)),23==getTile(a,b,c)&&e&&(checkLamp1(a+1,b-1,c),checkLamp1(a-1,b-1,c),checkLamp1(a,b-1,c+1),checkLamp1(a,b-1,c-1),checkLamp1(a+1,b,c),checkLamp1(a-1,b,c),checkLamp1(a,b,c+1),checkLamp1(a,b,c-1),checkLamp1(a,b-2,c)),55!=getTile(a,b,c)||e||(checkLamp2(a+1,b-1,c),checkLamp2(a-1,b-1,c),checkLamp2(a,b-1,c+1),checkLamp2(a,b-1,c-1),checkLamp2(a+1,b,c),checkLamp2(a-1,b,c),checkLamp2(a,b,c+1),checkLamp2(a,b,c-1),checkLamp2(a,b-2,c)),23==getTile(a,b,c)&&e&&(checkTorch1(a+1,b+1,c),checkTorch1(a-1,b+1,c),checkTorch1(a,b+1,c+1),checkTorch1(a,b+1,c-1)),55!=getTile(a,b,c)||e||(checkTorch2(a+1,b+1,c),checkTorch2(a-1,b+1,c),checkTorch2(a,b+1,c+1),checkTorch2(a,b+1,c-1)),23==getTile(a,b,c)&&e&&(checkTorch3(a+1,b+3,c),checkTorch3(a-1,b+3,c),checkTorch3(a,b+3,c+1),checkTorch3(a,b+3,c-1)),55!=getTile(a,b,c)||e||(checkTorch4(a+1,b+3,c),checkTorch4(a-1,b+3,c),checkTorch4(a,b+3,c+1),checkTorch4(a,b+3,c-1)),23==getTile(a,b,c)&&e&&(checkTorch5(a+1,b+5,c),checkTorch5(a-1,b+5,c),checkTorch5(a,b+5,c+1),checkTorch5(a,b+5,c-1)),55!=getTile(a,b,c)||e||(checkTorch6(a+1,b+5,c),checkTorch6(a-1,b+5,c),checkTorch6(a,b+5,c+1),checkTorch6(a,b+5,c-1)),75==getTile(a,b,c)&&(checkRed(a-1,b,c,15,!0),checkRed(a+1,b,c,15,!0),checkRed(a,b,c-1,15,!0),checkRed(a,b,c+1,15,!0),checkRed(a,b+2,c,15,!0)),76==getTile(a,b,c)&&(checkRed(a-1,b,c,d-1,!1),checkRed(a+1,b,c,d-1,!1),checkRed(a,b,c-1,d-1,!1),checkRed(a,b,c+1,d-1,!1),checkRed(a,b+2,c,d-1,!1)),23==getTile(a,b,c)&&e&&(checkDoor(a+1,b+1,c),checkDoor(a-1,b+1,c),checkDoor(a,b+1,c+1),checkDoor(a,b+1,c-1),checkDoor(a+1,b,c),checkDoor(a-1,b,c),checkDoor(a,b,c+1),checkDoor(a,b,c-1))}function checkTnt(a,b,c){46==getTile(a,b,c)&&(setTile(a,b,c,0),Level.spawnMob(a+.5,b+.5,c+.5,65,"mob/cow.png"))}function checkLamp1(a,b,c){123==getTile(a,b,c)&&setTile(a,b,c,124)}function checkLamp2(a,b,c){124==getTile(a,b,c)&&setTile(a,b,c,123)}function checkTorch1(a,b,c){76==getTile(a,b,c)&&setTile(a,b,c,75)}function checkTorch2(a,b,c){75==getTile(a,b,c)&&setTile(a,b,c,76)}function checkTorch3(a,b,c){75==getTile(a,b,c)&&setTile(a,b,c,76)}function checkTorch4(a,b,c){76==getTile(a,b,c)&&setTile(a,b,c,75)}function checkTorch5(a,b,c){76==getTile(a,b,c)&&setTile(a,b,c,75)}function checkTorch6(a,b,c){75==getTile(a,b,c)&&setTile(a,b,c,76)}function procCmd(a){var b=a.split(" "),c=b[0];switch(c){case"give":b[1]>0&&Entity.setCarriedItem(getPlayerEnt(),b[1],1,b[2])}}function destroyBlock(a,b,c){var e=Level.getData(a,b,c);76==getTile(a,b,c)&&(checkRed(a-1,b,c,15,!1),checkRed(a+1,b,c,15,!1),checkRed(a,b,c-1,15,!1),checkRed(a,b,c+1,15,!1),checkRed(a,b+2,c,15,!1)),76==getTile(a,b,c)&&75==getTile(a,b+2,c)&&(setTile(a,b+2,c,76),checkRed(a-1,b,c,15,!0),checkRed(a+1,b,c,15,!0),checkRed(a,b,c-1,15,!0),checkRed(a,b,c+1,15,!0),checkRed(a,b+2,c,15,!0)),76==getTile(a,b,c)&&75==getTile(a,b+2,c)&&76==getTile(a,b+4,c)&&(setTile(a,b+4,c,75),checkRed(a-1,b,c,15,!1),checkRed(a+1,b,c,15,!1),checkRed(a,b,c-1,15,!1),checkRed(a,b,c+1,15,!1),checkRed(a,b+2,c,15,!1)),76==getTile(a,b,c)&&75==getTile(a,b+2,c)&&76==getTile(a,b+5,c)&&(setTile(a,b+2,c,76),checkRed(a-1,b,c,15,!0),checkRed(a+1,b,c,15,!0),checkRed(a,b,c-1,15,!0),checkRed(a,b,c+1,15,!0),checkRed(a,b+2,c,15,!0)),69==getTile(a,b,c)&&1==e&&(checkRed(a-1,b,c,15,!1),checkRed(a+1,b,c,15,!1),checkRed(a,b,c-1,15,!1),checkRed(a,b,c+1,15,!1),checkRed(a,b-2,c,15,!1)),23==getTile(a,b,c)&&(checkRed(a-1,b,c,15,!1),checkRed(a+1,b,c,15,!1),checkRed(a,b,c-1,15,!1),checkRed(a,b,c+1,15,!1))}function checkDoor(a,b,c,d){var e=Level.getData(a,b,c);e>=4&&(e-=4),setTile(a,b,c,getTile(a,b,c),d?e+4:e)}

Block.defineBlock(55, "Redstone Wire", [["redstone_dust_cross", 0]], 3, false, 0);
Block.setLightLevel(55, 2);
Block.setDestroyTime(55, 0);
Block.setShape(55, 0, 0, 0, 1, 1/16, 1);
Block.setColor(55,[0xff2f30]);
Block.setRenderLayer(55, 1);
Block.setLightOpacity(55, .0000001);

Block.defineBlock(23, "Redstone Wire [ON]", [["redstone_dust_cross", 0]], 3, false, 0);
Block.setLightLevel(23, 10);
Block.setDestroyTime(23, 0);
Block.setShape(23, 0, 0, 0, 1, 1/16, 1);
Block.setColor(23, [0xff2f30]);
Block.setRenderLayer(23, 1);
Block.setLightOpacity(23, .0000001);

Block.defineBlock(76, "Redstone Torch", [["redstone_torch_on", 0]], 50, !1, 1);
Block.setLightLevel(76, 15);
Block.setDestroyTime(76, 0);
Block.setRenderLayer(76, 1);

Block.defineBlock(75, "Redstone Torch [OFF]", [["redstone_torch_off", 0]], 50, !1, 1);
Block.setLightLevel(75, 0);
Block.setDestroyTime(75, 0);
Block.setRenderLayer(75, 1);

Block.defineBlock(188, "TNT [PC Beta 1.6]", [["tnt", 2], ["tnt", 1], ["tnt", 0], ["tnt", 0], ["tnt", 0], ["tnt", 0]]);
Block.setLightLevel(188, 0);
Block.setDestroyTime(188, 0);

Block.defineBlock(123, "Redstone Lamp", [["redstone_lamp_off", 0]], 3, false, 0);
Block.setLightLevel(123, 0);
Block.setDestroyTime(123, 0.2);

Block.defineBlock(124, "Redstone Lamp [ON]", [["redstone_lamp_on", 0]], 3, false, 0);
Block.setLightLevel(124, 15);
Block.setDestroyTime(124, 0.2);

Block.defineBlock(69, "Lever", [["lever", 0]], 50, !1, 2);
Block.setLightLevel(69, 0);
Block.setDestroyTime(69, 0);
Block.setRenderLayer(69, 2);

Block.defineBlock(33, "Piston", [["piston_bottom", 0], ["piston_top_normal", 0], ["piston_side", 0], ["piston_side", 0], ["piston_side", 0], ["piston_side", 0]], 1, 0, 0);
Block.setLightLevel(33, 0);
Block.setDestroyTime(33, 0.2);

Block.defineBlock(34, "Piston Arm", [["piston_top_normal", 0]], 3, false, 0);
Block.setLightLevel(34, 0);
Block.setDestroyTime(34, 1);
Block.setLightOpacity(34, .0000001);
Block.setShape(34, 4/16, 0, 4/16, 12/16, 1, 12/16);

Block.defineBlock(200, "piston_body_one", [["piston_bottom", 0], ["piston_inner", 0], ["piston_bottom", 0], ["piston_bottom", 0], ["piston_bottom", 0], ["piston_bottom", 0]], 1, 0, 0);
Block.setLightLevel(200, 0);
Block.setDestroyTime(200, 1);

Block.defineBlock(201, "Piston Head", [["piston_top_normal", 0]], 3, false, 0);
Block.setLightLevel(201, 0);
Block.setDestroyTime(201, 1);
Block.setLightOpacity(201, .0000001);
Block.setShape(201, 0, 0, 0, 1, 4/16, 1);

Block.defineBlock(72, "Wooden Pressure Plate", [["planks", 0]], 50, false, 0);
Block.setLightLevel(72, 0);
Block.setDestroyTime(72, 0);
Block.setShape(72, 1/16, 0, 1/16, 15/16, 1/16, 15/16);

Block.defineBlock(70, "Stone Pressure Plate", [["stone", 0]], 50, false, 0);
Block.setLightLevel(70, 0);
Block.setDestroyTime(70, 0);
Block.setShape(70, 1/16, 0, 1/16, 15/16, 1/16, 15/16);

function newLevel(){
clientMessage("§c[Redstone PE] §bMade by Niko§eTBC §b[Redstone items adding]");
clientMessage("§c[Redstone PE] §eSource codes from §5Darkcube_lord704");
clientMessage("§c[Redstone PE] §aChecking version.........");
clientMessage("§c[Redstone PE] §ev1.0 §aPRE-RELEASE §b1");
clientMessage("§c[Redstone PE] §eDo §cNOT §euse on §aproduction until stable released");
}
