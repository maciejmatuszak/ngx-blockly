import { Component, OnInit } from '@angular/core';
import { BlocklyOptions } from 'blockly';
import {
    LOOP_CATEGORY, MATH_CATEGORY,
    NgxToolboxBuilderService, TEXT_CATEGORY
} from '../../../../projects/ngx-blockly/src/lib/ngx-blockly/services/ngx-toolbox-builder.service';


@Component({
    selector: 'app-basic-demo',
    templateUrl: './basic-demo.component.html',
    styleUrls: ['./basic-demo.component.scss']
})
export class BasicDemoComponent implements OnInit {

    public config: BlocklyOptions = {
        toolbox: '<xml id="toolbox" style="display: none">' +
            '<block type="controls_if"></block>' +
            '<block type="controls_repeat_ext"></block>' +
            '<block type="logic_compare"></block>' +
            '<block type="math_number"></block>' +
            '<block type="math_arithmetic"></block>' +
            '<block type="text"></block>' +
            '<block type="text_print"></block>' +
            '</xml>',
        move: {
            scrollbars: true
        },
        trashcan: true
    };

    constructor(ngxToolboxBuilder: NgxToolboxBuilderService) {
        ngxToolboxBuilder.nodes = [
            LOOP_CATEGORY,
            MATH_CATEGORY,
        ];
        this.config.toolbox = ngxToolboxBuilder.build();
    }

    ngOnInit() {
    }

}
