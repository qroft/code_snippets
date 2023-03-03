Set value of scene variable:
runtimeScene.getVariables().get(“sceneVarName”).setNumber(100);
runtimeScene.getVariables().get(“sceneVarName”).setString(“new text”);

Get value of scene variable:
var sceneVarNumber = runtimeScene.getVariables().get(“sceneVarName”).getAsNumber();
var sceneVarString = runtimeScene.getVariables().get(“sceneVarName”).getAsString();

Set value of global variable:
runtimeScene.getGame().getVariables().get(“globalVarName”).setNumber(100);
runtimeScene.getGame().getVariables().get(“globalVarName”).setString(“new text”);

Get value of global variable:
var globalVarNumber = runtimeScene.getGame().getVariables().get(“globalVarName”).getAsNumber();
var globalVarString = runtimeScene.getGame().getVariables().get(“globalVarName”).getAsString();

Set value of object variable:
var objects = runtimeScene.getObjects(“objectName”); //return an array of all instances
objects[0].getVariables().get(“objectVariableName”).setNumber(100); //set number value of first instance
objects[0].getVariables().get(“objectVariableName”).setString(“new text”); //set text value of first instance

Get value of object variable
var objects = runtimeScene.getObjects(“objectName”); //return an array of all instances
var objectVarNumber = objects[0].getVariables().get(“objectVariableName”).getAsNumber();
var objectVarString = objects[0].getVariables().get(“objectVariableName”).getAsString();

Set value of a child in a structure variable
runtimeScene.getVariables().get(“structureVarName”).getChild(“childVarName”).setNumber(100);
runtimeScene.getVariables().get(“structureVarName”).getChild(“childVarName”).setString(“new text”);

OR

var structureVar = runtimeScene.getVariables(“structureVarName”).getAllChild();
structureVar[“childName”].setAsNumber(100);
structureVar[“childName”].setAsString(“new text”);

Get value of child from structure variable
var structureVar = runtimeScene.getVariables(“structureVarName”).getAllChild();
var childVarNumber = structureVar[“childName”].getAsNumber();
var childVarString = structureVar[“childName”].getAsString();
