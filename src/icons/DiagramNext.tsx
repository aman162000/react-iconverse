
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M280 224V288H326.1C347.4 288 358.1 313.9 343 328.1L272.1 399C263.6 408.4 248.4 408.4 239 399L168.1 328.1C153.9 313.9 164.6 288 185.9 288H232V224H64C28.65 224 0 195.3 0 160V96C0 60.65 28.65 32 64 32H448C483.3 32 512 60.65 512 96V160C512 195.3 483.3 224 448 224H280z"/><path className="fa-secondary" d="M384.1 343.6C401 327.6 404.6 306.4 399 288H448C483.3 288 512 316.7 512 352V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V352C0 316.7 28.65 288 64 288H112.1C107.4 306.4 110.1 327.6 127 343.6L216.4 432.1C238.3 454.8 273.7 454.8 295.6 432.1L384.1 343.6z"/>
</>],
['light',<>
	<path d="M272 329.4L308.7 292.7C314.9 286.4 325.1 286.4 331.3 292.7C337.6 298.9 337.6 309.1 331.3 315.3L267.3 379.3C261.1 385.6 250.9 385.6 244.7 379.3L180.7 315.3C174.4 309.1 174.4 298.9 180.7 292.7C186.9 286.4 197.1 286.4 203.3 292.7L240 329.4V224H64C28.65 224 .0003 195.3 .0003 160V96C.0003 60.65 28.65 32 64 32H448C483.3 32 512 60.65 512 96V160C512 195.3 483.3 224 448 224H272L272 329.4zM480 160V96C480 78.33 465.7 64 448 64H64C46.33 64 32 78.33 32 96V160C32 177.7 46.33 192 64 192H448C465.7 192 480 177.7 480 160zM64 480C28.65 480 0 451.3 0 416V352C0 316.7 28.65 288 64 288H112C120.8 288 128 295.2 128 304C128 312.8 120.8 320 112 320H64C46.33 320 32 334.3 32 352V416C32 433.7 46.33 448 64 448H448C465.7 448 480 433.7 480 416V352C480 334.3 465.7 320 448 320H400C391.2 320 384 312.8 384 304C384 295.2 391.2 288 400 288H448C483.3 288 512 316.7 512 352V416C512 451.3 483.3 480 448 480H64z"/>
</>],
['regular',<>
	<path d="M280 224V310.1L303 287C312.4 277.7 327.6 277.7 336.1 287C346.3 296.4 346.3 311.6 336.1 320.1L272.1 384.1C263.6 394.3 248.4 394.3 239 384.1L175 320.1C165.7 311.6 165.7 296.4 175 287C184.4 277.7 199.6 277.7 208.1 287L232 310.1V224H64C28.65 224 0 195.3 0 160V96C0 60.65 28.65 32 64 32H448C483.3 32 512 60.65 512 96V160C512 195.3 483.3 224 448 224H280zM64 288H130C125.9 304 128.1 321.3 136.6 336H64C55.16 336 48 343.2 48 352V416C48 424.8 55.16 432 64 432H448C456.8 432 464 424.8 464 416V352C464 343.2 456.8 336 448 336H375.4C383.9 321.3 386.1 304 381.1 288H448C483.3 288 512 316.7 512 352V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V352C0 316.7 28.65 288 64 288z"/>
</>],
['solid',<>
	<path d="M512 160C512 195.3 483.3 224 448 224H280V288H326.1C347.4 288 358.1 313.9 343 328.1L272.1 399C263.6 408.4 248.4 408.4 239 399L168.1 328.1C153.9 313.9 164.6 288 185.9 288H232V224H64C28.65 224 0 195.3 0 160V96C0 60.65 28.65 32 64 32H448C483.3 32 512 60.65 512 96V160zM312.6 416H448V352H376.6L384.1 343.6C401 327.6 404.6 306.4 399 288H448C483.3 288 512 316.7 512 352V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V352C0 316.7 28.65 288 64 288H112.1C107.4 306.4 110.1 327.6 127 343.6L135.4 352H64V416H199.4L216.4 432.1C238.3 454.8 273.7 454.8 295.6 432.1L312.6 416z"/>
</>],
['thin',<>
	<path d="M264 223.1V348.7L314.3 298.3C317.5 295.2 322.5 295.2 325.7 298.3C328.8 301.5 328.8 306.5 325.7 309.7L261.7 373.7C258.5 376.8 253.5 376.8 250.3 373.7L186.3 309.7C183.2 306.5 183.2 301.5 186.3 298.3C189.5 295.2 194.5 295.2 197.7 298.3L248 348.7V224H64C28.65 224 0 195.3 0 160V96C0 60.65 28.65 32 64 32H448C483.3 32 512 60.65 512 96V160C512 195.3 483.3 224 448 224L264 223.1zM496 159.1V95.1C496 69.49 474.5 47.1 448 47.1H64C37.49 47.1 16 69.49 16 95.1V159.1C16 186.5 37.49 207.1 64 207.1H448C474.5 207.1 496 186.5 496 159.1zM512 416C512 451.3 483.3 480 448 480H64C28.65 480 .0003 451.3 .0003 416V352C.0003 316.7 28.65 287.1 64 287.1H112C116.4 287.1 120 291.6 120 295.1C120 300.4 116.4 303.1 112 303.1H64C37.49 303.1 16 325.5 16 352V416C16 442.5 37.49 464 64 464H448C474.5 464 496 442.5 496 416V352C496 325.5 474.5 303.1 448 303.1H400C395.6 303.1 392 300.4 392 295.1C392 291.6 395.6 287.1 400 287.1H448C483.3 287.1 512 316.7 512 352V416z"/>
</>],

]);

const DiagramNext: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

DiagramNext.displayName = "DiagramNext";

export default DiagramNext;
