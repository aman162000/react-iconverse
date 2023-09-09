
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M168 0C181.3 0 192 10.75 192 24V64H128V24C128 10.75 138.7 0 152 0H168zM328 0C341.3 0 352 10.75 352 24V64H288V24C288 10.75 298.7 0 312 0H328zM224 16C224 7.164 231.2 0 240 0C248.8 0 256 7.164 256 16V64H224V16zM416 16V272C416 280.8 408.8 288 400 288C391.2 288 384 280.8 384 272V16C384 7.164 391.2 0 400 0C408.8 0 416 7.164 416 16zM448 24C448 10.75 458.7 0 472 0H488C501.3 0 512 10.75 512 24V264C512 277.3 501.3 288 488 288H472C458.7 288 448 277.3 448 264V24zM264 160C277.3 160 288 170.7 288 184V200C288 213.3 277.3 224 264 224H88C74.75 224 64 213.3 64 200V184C64 170.7 74.75 160 88 160H264z"/><path className="fa-secondary" d="M288 96C323.3 96 352 124.7 352 160V448C352 483.3 323.3 512 288 512H64C28.65 512 0 483.3 0 448V160C0 124.7 28.65 96 64 96H288zM88 160C74.75 160 64 170.7 64 184V200C64 213.3 74.75 224 88 224H264C277.3 224 288 213.3 288 200V184C288 170.7 277.3 160 264 160H88zM80 288C71.16 288 64 295.2 64 304V336C64 344.8 71.16 352 80 352H144C152.8 352 160 344.8 160 336V304C160 295.2 152.8 288 144 288H80zM64 432C64 440.8 71.16 448 80 448H144C152.8 448 160 440.8 160 432V400C160 391.2 152.8 384 144 384H80C71.16 384 64 391.2 64 400V432zM208 288C199.2 288 192 295.2 192 304V336C192 344.8 199.2 352 208 352H272C280.8 352 288 344.8 288 336V304C288 295.2 280.8 288 272 288H208zM192 432C192 440.8 199.2 448 208 448H272C280.8 448 288 440.8 288 432V400C288 391.2 280.8 384 272 384H208C199.2 384 192 391.2 192 400V432z"/>
</>],
['light',<>
	<path d="M128 16C128 7.164 135.2 0 144 0C152.8 0 160 7.164 160 16V48C160 56.84 152.8 64 144 64C135.2 64 128 56.84 128 48V16zM320 16C320 7.164 327.2 0 336 0C344.8 0 352 7.164 352 16V48C352 56.84 344.8 64 336 64C327.2 64 320 56.84 320 48V16zM224 16V48C224 56.84 216.8 64 208 64C199.2 64 192 56.84 192 48V16C192 7.164 199.2 0 208 0C216.8 0 224 7.164 224 16zM400 16C400 7.164 407.2 0 416 0C424.8 0 432 7.164 432 16V272C432 280.8 424.8 288 416 288C407.2 288 400 280.8 400 272V16zM512 16V272C512 280.8 504.8 288 496 288C487.2 288 480 280.8 480 272V16C480 7.164 487.2 0 496 0C504.8 0 512 7.164 512 16zM64 200C64 177.9 81.91 160 104 160H248C270.1 160 288 177.9 288 200V248C288 270.1 270.1 288 248 288H104C81.91 288 64 270.1 64 248V200zM96 200V248C96 252.4 99.58 256 104 256H248C252.4 256 256 252.4 256 248V200C256 195.6 252.4 192 248 192H104C99.58 192 96 195.6 96 200zM144 320C152.8 320 160 327.2 160 336C160 344.8 152.8 352 144 352H80C71.16 352 64 344.8 64 336C64 327.2 71.16 320 80 320H144zM64 400C64 391.2 71.16 384 80 384H144C152.8 384 160 391.2 160 400C160 408.8 152.8 416 144 416H80C71.16 416 64 408.8 64 400zM272 320C280.8 320 288 327.2 288 336C288 344.8 280.8 352 272 352H208C199.2 352 192 344.8 192 336C192 327.2 199.2 320 208 320H272zM192 400C192 391.2 199.2 384 208 384H272C280.8 384 288 391.2 288 400C288 408.8 280.8 416 272 416H208C199.2 416 192 408.8 192 400zM288 96C323.3 96 352 124.7 352 160V448C352 483.3 323.3 512 288 512H64C28.65 512 0 483.3 0 448V160C0 124.7 28.65 96 64 96H288zM288 128H64C46.33 128 32 142.3 32 160V448C32 465.7 46.33 480 64 480H288C305.7 480 320 465.7 320 448V160C320 142.3 305.7 128 288 128z"/>
</>],
['regular',<>
	<path d="M128 23.1C128 10.74 138.7-.002 152-.002C165.3-.002 176 10.74 176 23.1V63.1H128V23.1zM304 23.1C304 10.74 314.7-.002 328-.002C341.3-.002 352 10.74 352 23.1V63.1H304V23.1zM256 15.1V63.1H224V15.1C224 7.162 231.2-.002 240-.002C248.8-.002 256 7.162 256 15.1V15.1zM384 15.1C384 7.162 391.2-.002 400-.002C408.8-.002 416 7.162 416 15.1V271.1C416 280.8 408.8 287.1 400 287.1C391.2 287.1 384 280.8 384 271.1V15.1zM512 23.1V263.1C512 277.3 501.3 287.1 488 287.1C474.7 287.1 464 277.3 464 263.1V23.1C464 10.74 474.7-.002 488-.002C501.3-.002 512 10.74 512 23.1V23.1zM248 175.1C261.3 175.1 272 186.7 272 199.1V231.1C272 245.3 261.3 255.1 248 255.1H104C90.75 255.1 80 245.3 80 231.1V199.1C80 186.7 90.75 175.1 104 175.1H248zM144 303.1C152.8 303.1 160 311.2 160 319.1V335.1C160 344.8 152.8 351.1 144 351.1H96C87.16 351.1 80 344.8 80 335.1V319.1C80 311.2 87.16 303.1 96 303.1H144zM80 399.1C80 391.2 87.16 383.1 96 383.1H144C152.8 383.1 160 391.2 160 399.1V415.1C160 424.8 152.8 431.1 144 431.1H96C87.16 431.1 80 424.8 80 415.1V399.1zM256 303.1C264.8 303.1 272 311.2 272 319.1V335.1C272 344.8 264.8 351.1 256 351.1H208C199.2 351.1 192 344.8 192 335.1V319.1C192 311.2 199.2 303.1 208 303.1H256zM192 399.1C192 391.2 199.2 383.1 208 383.1H256C264.8 383.1 272 391.2 272 399.1V415.1C272 424.8 264.8 431.1 256 431.1H208C199.2 431.1 192 424.8 192 415.1V399.1zM288 95.1C323.3 95.1 352 124.7 352 159.1V447.1C352 483.3 323.3 511.1 288 511.1H64C28.65 511.1 0 483.3 0 447.1V159.1C0 124.7 28.65 95.1 64 95.1H288zM64 143.1C55.16 143.1 48 151.2 48 159.1V447.1C48 456.8 55.16 463.1 64 463.1H288C296.8 463.1 304 456.8 304 447.1V159.1C304 151.2 296.8 143.1 288 143.1H64z"/>
</>],
['solid',<>
	<path d="M168 0C181.3 0 192 10.75 192 24V64H128V24C128 10.75 138.7 0 152 0H168zM328 0C341.3 0 352 10.75 352 24V64H288V24C288 10.75 298.7 0 312 0H328zM224 16C224 7.164 231.2 0 240 0C248.8 0 256 7.164 256 16V64H224V16zM416 16V272C416 280.8 408.8 288 400 288C391.2 288 384 280.8 384 272V16C384 7.164 391.2 0 400 0C408.8 0 416 7.164 416 16zM448 24C448 10.75 458.7 0 472 0H488C501.3 0 512 10.75 512 24V264C512 277.3 501.3 288 488 288H472C458.7 288 448 277.3 448 264V24zM0 160C0 124.7 28.65 96 64 96H288C323.3 96 352 124.7 352 160V448C352 483.3 323.3 512 288 512H64C28.65 512 0 483.3 0 448V160zM64 200C64 213.3 74.75 224 88 224H264C277.3 224 288 213.3 288 200V184C288 170.7 277.3 160 264 160H88C74.75 160 64 170.7 64 184V200zM64 336C64 344.8 71.16 352 80 352H144C152.8 352 160 344.8 160 336V304C160 295.2 152.8 288 144 288H80C71.16 288 64 295.2 64 304V336zM80 384C71.16 384 64 391.2 64 400V432C64 440.8 71.16 448 80 448H144C152.8 448 160 440.8 160 432V400C160 391.2 152.8 384 144 384H80zM192 336C192 344.8 199.2 352 208 352H272C280.8 352 288 344.8 288 336V304C288 295.2 280.8 288 272 288H208C199.2 288 192 295.2 192 304V336zM208 384C199.2 384 192 391.2 192 400V432C192 440.8 199.2 448 208 448H272C280.8 448 288 440.8 288 432V400C288 391.2 280.8 384 272 384H208z"/>
</>],
['thin',<>
	<path d="M144 8V56C144 60.42 140.4 64 136 64C131.6 64 128 60.42 128 56V8C128 3.582 131.6 0 136 0C140.4 0 144 3.582 144 8zM272 8V56C272 60.42 268.4 64 264 64C259.6 64 256 60.42 256 56V8C256 3.582 259.6 0 264 0C268.4 0 272 3.582 272 8zM384 8C384 3.582 387.6 0 392 0C396.4 0 400 3.582 400 8V280C400 284.4 396.4 288 392 288C387.6 288 384 284.4 384 280V8zM448 8C448 3.582 451.6 0 456 0C460.4 0 464 3.582 464 8V280C464 284.4 460.4 288 456 288C451.6 288 448 284.4 448 280V8zM320 8C320 3.582 323.6 0 328 0C332.4 0 336 3.582 336 8V56C336 60.42 332.4 64 328 64C323.6 64 320 60.42 320 56V8zM192 8C192 3.582 195.6 0 200 0C204.4 0 208 3.582 208 8V56C208 60.42 204.4 64 200 64C195.6 64 192 60.42 192 56V8zM512 8V280C512 284.4 508.4 288 504 288C499.6 288 496 284.4 496 280V8C496 3.582 499.6 0 504 0C508.4 0 512 3.582 512 8zM64 200C64 177.9 81.91 160 104 160H248C270.1 160 288 177.9 288 200V216C288 238.1 270.1 256 248 256H104C81.91 256 64 238.1 64 216V200zM80 200V216C80 229.3 90.75 240 104 240H248C261.3 240 272 229.3 272 216V200C272 186.7 261.3 176 248 176H104C90.75 176 80 186.7 80 200zM64 416C64 398.3 78.33 384 96 384H128C145.7 384 160 398.3 160 416C160 433.7 145.7 448 128 448H96C78.33 448 64 433.7 64 416zM80 416C80 424.8 87.16 432 96 432H128C136.8 432 144 424.8 144 416C144 407.2 136.8 400 128 400H96C87.16 400 80 407.2 80 416zM256 384C273.7 384 288 398.3 288 416C288 433.7 273.7 448 256 448H224C206.3 448 192 433.7 192 416C192 398.3 206.3 384 224 384H256zM256 400H224C215.2 400 208 407.2 208 416C208 424.8 215.2 432 224 432H256C264.8 432 272 424.8 272 416C272 407.2 264.8 400 256 400zM64 320C64 302.3 78.33 288 96 288H128C145.7 288 160 302.3 160 320C160 337.7 145.7 352 128 352H96C78.33 352 64 337.7 64 320zM80 320C80 328.8 87.16 336 96 336H128C136.8 336 144 328.8 144 320C144 311.2 136.8 304 128 304H96C87.16 304 80 311.2 80 320zM256 288C273.7 288 288 302.3 288 320C288 337.7 273.7 352 256 352H224C206.3 352 192 337.7 192 320C192 302.3 206.3 288 224 288H256zM256 304H224C215.2 304 208 311.2 208 320C208 328.8 215.2 336 224 336H256C264.8 336 272 328.8 272 320C272 311.2 264.8 304 256 304zM288 96C323.3 96 352 124.7 352 160V448C352 483.3 323.3 512 288 512H64C28.65 512 0 483.3 0 448V160C0 124.7 28.65 96 64 96H288zM288 112H64C37.49 112 16 133.5 16 160V448C16 474.5 37.49 496 64 496H288C314.5 496 336 474.5 336 448V160C336 133.5 314.5 112 288 112z"/>
</>],

]);

const ScannerKeyboard: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ScannerKeyboard.displayName = "ScannerKeyboard";

export default ScannerKeyboard;