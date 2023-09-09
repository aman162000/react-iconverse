
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M0 352H128V448H32C23.51 448 15.37 444.6 9.372 438.6C3.371 432.6 0 424.5 0 416V352zM80 128C97.36 127.9 114.2 122.2 128 111.6V192H47.65C58.2 178.2 63.94 161.4 64 144V128H80zM0 224H128V320H0V224zM288 64V192H160V64H288zM160 224H288V320H160V224zM160 352H288V448H160V352z"/><path className="fa-secondary" d="M288 448V64H592C604.7 64 616.9 69.06 625.9 78.06C634.9 87.06 640 99.27 640 112V400C640 412.7 634.9 424.9 625.9 433.9C616.9 442.9 604.7 448 592 448H288z"/>
</>],
['light',<>
	<path d="M589.3 82.75C601.3 94.75 608 111 608 128V384C608 400.1 601.3 417.3 589.3 429.3C577.3 441.3 560.1 448 544 448H32C15.03 448-1.252 441.3-13.25 429.3C-25.26 417.3-32 400.1-32 384V222.4C-13.93 218.7 2.31 208.9 13.97 194.6C25.64 180.3 32 162.4 32 144V128H48C66.44 128 84.32 121.6 98.61 109.1C112.9 98.31 122.7 82.07 126.4 64H544C560.1 64 577.3 70.74 589.3 82.75zM62.98 158.1C61.23 170.5 57.66 181.6 52.42 192H128V125.2C110.7 143.5 87.83 155.4 62.98 158.1zM0 320H128V224H29.25C20.71 232.6 10.83 239.8 0 245.2V320zM128 416V352H0V384C0 392.5 3.372 400.6 9.372 406.6C15.37 412.6 23.51 416 32 416H128zM288 352H160V416H288V352zM288 224H160V320H288V224zM288 96H160V192H288V96zM576 128C576 119.5 572.6 111.4 566.6 105.4C560.6 99.37 552.5 96 544 96H320V416H544C552.5 416 560.6 412.6 566.6 406.6C572.6 400.6 576 392.5 576 384V128z"/>
</>],
['regular',<>
	<path d="M0 352H128V448H32C23.51 448 15.37 444.6 9.372 438.6C3.371 432.6 0 424.5 0 416V352zM621.3 82.75C633.3 94.75 640 111 640 128V384C640 400.1 633.3 417.3 621.3 429.3C609.3 441.3 592.1 448 576 448H160V352H288V320H160V224H288V192H160V64H576C592.1 64 609.3 70.74 621.3 82.75zM592 128C592 123.8 590.3 119.7 587.3 116.7C584.3 113.7 580.2 112 576 112H336V400H576C580.2 400 584.3 398.3 587.3 395.3C590.3 392.3 592 388.2 592 384V128zM0 224H128V320H0V224zM80 128C97.36 127.9 114.2 122.2 128 111.6V192H47.65C58.2 178.2 63.94 161.4 64 144V128H80z"/>
</>],
['solid',<>
	<path d="M80 128C97.36 127.9 114.2 122.2 128 111.6V192H47.65C58.2 178.2 63.94 161.4 64 144V128H80zM0 352H128V448H32C23.51 448 15.37 444.6 9.372 438.6C3.371 432.6 0 424.5 0 416V352zM160 352H288V448H160V352zM0 224H128V320H0V224zM625.9 78.06C634.9 87.06 640 99.27 640 112V400C640 412.7 634.9 424.9 625.9 433.9C616.9 442.9 604.7 448 592 448H320V64H592C604.7 64 616.9 69.06 625.9 78.06zM160 64H288V192H160V64zM160 224H288V320H160V224z"/>
</>],
['thin',<>
	<path d="M621.3 82.75C633.3 94.75 640 111 640 128V384C640 400.1 633.3 417.3 621.3 429.3C609.3 441.3 592.1 448 576 448H32C23.51 448 15.37 444.6 9.372 438.6C3.371 432.6 0 424.5 0 416V222.4C18.07 218.7 34.31 208.9 45.97 194.6C57.64 180.3 64 162.4 64 144V128H80C98.44 128 116.3 121.6 130.6 109.1C144.9 98.31 154.7 82.07 158.4 64H576C592.1 64 609.3 70.74 621.3 82.75zM125.5 132.3C111.5 139.9 95.89 143.9 80 144C79.93 160.9 75.35 177.5 66.75 192H160V100.5C151.3 113.8 139.4 124.8 125.5 132.3zM16 320H160V208H55.17C44.54 219.1 31.07 229.1 16 234.5V320zM160 432V336H16V416C16 420.2 17.69 424.3 20.69 427.3C23.69 430.3 27.76 432 32 432H160zM304 336H176V432H304V336zM304 208H176V320H304V208zM304 80H176V192H304V80zM624 128C624 115.3 618.9 103.1 609.9 94.06C600.9 85.06 588.7 80 576 80H320V432H576C588.7 432 600.9 426.9 609.9 417.9C618.9 408.9 624 396.7 624 384V128z"/>
</>],

]);

const CandyBar: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CandyBar.displayName = "CandyBar";

export default CandyBar;