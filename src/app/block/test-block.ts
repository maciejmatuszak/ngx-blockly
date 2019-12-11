import { CustomBlock } from '../../../projects/ngx-blockly/src/lib/ngx-blockly/models/custom-block';
import * as Blockly from 'blockly';

export class TestBlock extends CustomBlock {

    constructor(type: string) {
        super(type, null, null);
        this.class = TestBlock;
    }

    defineBlock() {
        this.block.appendDummyInput()
            .appendField(this.type)
            .appendField(new Blockly.FieldImage('assets/dummy.png', 50, 50, '*'));
        this.block.setOutput(true, 'Input');
        this.block.setStyle('test');
        this.block.setTooltip('');
        this.block.setHelpUrl('');
    }

    toXML() {
        return '<block type="test"></block>';
    }

    toPythonCode(block: any): string {
        return '';
    }

    onChange(changeEvent: any) {
    }
}
