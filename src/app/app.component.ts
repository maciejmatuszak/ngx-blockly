import { Component } from '@angular/core';
import { NgxToolboxBuilderService } from '../../projects/ngx-blockly/src/lib/ngx-blockly/services/ngx-toolbox-builder.service';

export interface Link {
    name: string;
    url: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    links: Link[] = [
        {
            name: 'Basic',
            url: '/basic'
        }
    ];

    // @ViewChild(NgxBlocklyComponent, null) workspace;
    //
    // public config: BlocklyOptions = {
    //     toolbox: '<xml id="toolbox" style="display: none">' +
    //         '<block type="controls_if"></block>' +
    //         '<block type="controls_repeat_ext"></block>' +
    //         '<block type="logic_compare"></block>' +
    //         '<block type="math_number"></block>' +
    //         '<block type="math_arithmetic"></block>' +
    //         '<block type="text"></block>' +
    //         '<block type="text_print"></block>' +
    //         '</xml>',
    //     move: {
    //         scrollbars: true
    //     },
    //     trashcan: true
    // };
    //
    // public generatorConfig: NgxBlocklyGeneratorConfig = {
    //     dart: false,
    //     javascript: false,
    //     lua: false,
    //     php: false,
    //     python: true,
    //     xml: true
    // };
    //
    // public customBlocks: CustomBlock[] = [
    //     new TestBlock('test')
    // ];
    //
    // public blockStyle: { [key: string]: Blockly.Theme.BlockStyle } = {
    //     'colour_blocks': {
    //         colourPrimary: '20',
    //         colourSecondary: '20',
    //         colourTertiary: '20',
    //         hat: ''
    //     },
    //     'list_blocks': {
    //         'colourPrimary': '260',
    //         colourSecondary: '20',
    //         colourTertiary: '20',
    //         hat: ''
    //     },
    //     'logic_blocks': {
    //         colourPrimary: '210',
    //         colourSecondary: '20',
    //         colourTertiary: '20',
    //         hat: ''
    //     },
    //     'loop_blocks': {
    //         colourPrimary: '120',
    //         colourSecondary: '20',
    //         colourTertiary: '20',
    //         hat: ''
    //     },
    //     'math_blocks': {
    //         colourPrimary: '230',
    //         colourSecondary: '20',
    //         colourTertiary: '20',
    //         hat: ''
    //     },
    //     'procedure_blocks': {
    //         colourPrimary: '290',
    //         colourSecondary: '20',
    //         colourTertiary: '20',
    //         hat: ''
    //     },
    //     'text_blocks': {
    //         colourPrimary: '160',
    //         colourSecondary: '20',
    //         colourTertiary: '20',
    //         hat: ''
    //     },
    //     'variable_blocks': {
    //         colourPrimary: '330',
    //         colourSecondary: '20',
    //         colourTertiary: '20',
    //         hat: ''
    //     },
    //     'variable_dynamic_blocks': {
    //         colourPrimary: '310',
    //         colourSecondary: '20',
    //         colourTertiary: '20',
    //         hat: ''
    //     },
    //     'hat_blocks': {
    //         colourPrimary: '330',
    //         colourSecondary: '20',
    //         colourTertiary: '20',
    //         hat: 'cap'
    //     },
    //     'test': {
    //         colourPrimary: '360',
    //         colourSecondary: '20',
    //         colourTertiary: '20',
    //         hat: 'cap'
    //     }
    // };
    //
    // public categoryStyle: { [key: string]: Blockly.Theme.CategoryStyle } = {
    //     'colour_category': {
    //         colour: '20'
    //     },
    //     'list_category': {
    //         colour: '260'
    //     },
    //     'logic_category': {
    //         colour: '210'
    //     },
    //     'loop_category': {
    //         colour: '120'
    //     },
    //     'math_category': {
    //         colour: '230'
    //     },
    //     'procedure_category': {
    //         colour: '290'
    //     },
    //     'text_category': {
    //         colour: '160'
    //     },
    //     'variable_category': {
    //         colour: '330'
    //     },
    //     'variable_dynamic_category': {
    //         colour: '310'
    //     },
    //     'testStyle': {
    //         colour: '360'
    //     }
    // };
    activeLink: Link;

    constructor(ngxToolboxBuilder: NgxToolboxBuilderService) {
        // const a = new Category('TestA', '#abcabc', this.customBlocks, [], null, 'testStyle');
        // const c = new Category('TestB', '#123123', this.customBlocks, [], null, 'testStyle');
        // const b = new Category('TestC', '#ff0000', [], [a, c]);
        // ngxToolboxBuilder.nodes = [
        //     // new Category('TestD', '#00ff00', this.customBlocks, [b]),
        //     LOGIC_CATEGORY_WITH_DEFAULTS,
        //     // LOOP_CATEGORY,
        //     // MATH_CATEGORY,
        //     // TEXT_CATEGORY,
        //     // new Separator(),
        //     // LISTS_CATEGORY,
        //     // COLOUR_CATEGORY,
        //     // VARIABLES_CATEGORY,
        //     // FUNCTIONS_CATEGORY
        // ];
        // // this.config.theme = new Blockly.Theme(this.blockStyle, this.categoryStyle) as Blockly.BlocklyTheme;
        // this.config.toolbox = ngxToolboxBuilder.build();
        //
        // console.log(this.config.toolbox);
    }


    onCode(code: string) {
        // console.log(code);
    }

    onWorkspaceChange($event: any) {
        // console.log($event);
    }
}
