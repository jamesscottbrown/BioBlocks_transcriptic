/*
The MIT License (MIT)

Copyright (c) 2016 Universidad Polit�cnica de Madrid

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/**
 * @file Special function of flashFreeze. Include special inputs for the electrophoresis function.
 * @author Vishal Gupta, Jes�s Irimia, Iv�n Pau, Alfonso Rodr�guez-Pat�n, �ngel Panizo <contactLIAUPM@gmail.com>
 */
Blockly.Blocks['flashFreeze'] = {
	
	init: function() {
		/*Usual initialization of a common block*/
		this.setInputsInline(false);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(120);
		
		//Creating inputs.
		this.appendDummyInput()
			.setAlign(Blockly.ALIGN_CENTRE)
			.appendField("FLASH FREEZE")
		
		this.setTooltip('');
		
		this.appendValueInput("source")
		    .setCheck(["containerCheck", "containerList"])
		    .setAlign(Blockly.ALIGN_RIGHT)
		    .appendField("container input");
		    
		this.appendDummyInput()
		    .setAlign(Blockly.ALIGN_RIGHT)
		    .appendField("time of operation")
		    .appendField(new Blockly.FieldNumber("0"), "timeOfOperation");
		this.appendDummyInput()
		    .setAlign(Blockly.ALIGN_RIGHT)
		    .appendField("duration")
		    .appendField(new Blockly.FieldNumber("0"), "DURATION")
		    .appendField(new Blockly.FieldDropdown([["Minutes", "minutes"], ["Milliseconds", "milliseconds"], ["Seconds", "seconds"], ["Hours", "hours"]]), "Unit_Time");
		
		            
	},
	
	//This is the extract of the code in JSON which is called by the Blockly.JavaScript['incubate1'] function 
	optionsDisplay_ : function(code, block) {
		var currentBlock = block;  //local variable created to don't modify continuously another the first variable.
		var currentCode = code;   //local variable created to don't modify continuously another the first variable.
		
		if( this.getFieldValue('timeOfOperation')!=null){ //If the option "SPEED" is displayed in this moment in the container block connected:
			currentCode= currentCode + '                "time of operation: " ' +this.getFieldValue("timeOfOperation") +'", \n';  // Write the next code added to the first code.
		}
		if(this.getFieldValue('DURATION')!=null){
			currentCode= currentCode + '                 "duration": " ' +this.getFieldValue("DURATION")+':'+this.getFieldValue("Unit_Time") +'"\n';
		}	
		
		return currentCode;
	},
	
	//This is the extract of the code in JSON which is called by the Blockly.JavaScript['incubate1'] function 
	optionsDisplay_naturalLanguage : function(code, block) {
		var currentBlock = block;  //local variable created to don't modify continuously another the first variable.
		var currentCode = code;   //local variable created to don't modify continuously another the first variable.
		
		if( this.getFieldValue('timeOfOperation')!=null){ //If the option "SPEED" is displayed in this moment in the container block connected:
			currentCode= currentCode + ' with the time of operation ' +this.getFieldValue("timeOfOperation") ;  // Write the next code added to the first code.
		}
		if( this.getFieldValue('DURATION')!=null){
			currentCode= currentCode + ' during ' +this.getFieldValue("DURATION") + " " + this.getFieldValue("Unit_Time")+"s" + " " ;
		}	
		
		return currentCode;
	},
	onchange: function() {
		/*var blockSource = this.getInputTargetBlock('source') //Get the block set in the source
    	if(blockSource!=null){
			var isList1 = blockSource.getInput('contListOption');
        	if(isList1){ //Check if it is a list
	        	var currentBlock
				for(var i=1;i<blockSource.getFieldValue('contListOptionValue')+1;i++){/*Iterate over all inputs in the list
					var chain='contListOptionValueNum'+i//Name of the current block
					currentBlock = blockSource.getInputTargetBlock(chain);//Current block got with chain
					if(currentBlock!=null){
						if( currentBlock.getFieldValue('container_type_global')==201){//If it is  AGAROSE
							currentBlock.setParent(null);//Remove the parent of its own parameters
							var dx = Blockly.SNAP_RADIUS * (currentBlock.RTL ? -1 : 1);//calculate the movement of the block in x axis
						    var dy = Blockly.SNAP_RADIUS * 2;//calculate the movement of the block in x axis
						    currentBlock.moveBy(dx, dy); //Move the block with the measures gotten.						
						}
					}
				}
        	}else if(blockSource!=null){
	        	if(blockSource.getFieldValue('container_type_global')==201){//If it is  a list 
	        		blockSource.setParent(null);//Remove the parent of its own parameters
					var dx = Blockly.SNAP_RADIUS * (blockSource.RTL ? -1 : 1);//calculate the movement of the block in x axis
				    var dy = Blockly.SNAP_RADIUS * 2;//calculate the movement of the block in x axis
				    blockSource.moveBy(dx, dy); //Move the block with the measures gotten.
			    }
    		}
		}*/
	}
};


	