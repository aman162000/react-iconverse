
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M512 256C547.3 256 576 284.7 576 320V448C576 483.3 547.3 512 512 512H256C220.7 512 192 483.3 192 448V320C192 284.7 220.7 256 256 256H512zM320 336C320 327.2 312.8 320 304 320C295.2 320 288 327.2 288 336V352C288 405 330.1 448 384 448C437 448 480 405 480 352V336C480 327.2 472.8 320 464 320C455.2 320 448 327.2 448 336V352C448 387.3 419.3 416 384 416C348.7 416 320 387.3 320 352V336z"/><path className="fa-secondary" d="M64 160H128V96C128 42.98 170.1 0 224 0C277 0 320 42.98 320 96V160H384C419.3 160 448 188.7 448 224H240C195.8 224 160 259.8 160 304V464C160 469.5 160.6 474.8 161.6 480H64C28.65 480 0 451.3 0 416V224C0 188.7 28.65 160 64 160V160zM224 48C197.5 48 176 69.49 176 96V160H272V96C272 69.49 250.5 48 224 48zM320 352C320 387.3 348.7 416 384 416C419.3 416 448 387.3 448 352V336C448 327.2 455.2 320 464 320C472.8 320 480 327.2 480 336V352C480 405 437 448 384 448C330.1 448 288 405 288 352V336C288 327.2 295.2 320 304 320C312.8 320 320 327.2 320 336V352z"/>
</>],
['light',<>
	<path d="M128 96C128 42.98 170.1 0 224 0C277 0 320 42.98 320 96V160H384C419.3 160 448 188.7 448 224H416C416 206.3 401.7 192 384 192H64C46.33 192 32 206.3 32 224V416C32 433.7 46.33 448 64 448H160V480H64C28.65 480 0 451.3 0 416V224C0 188.7 28.65 160 64 160H128V96zM160 160H288V96C288 60.65 259.3 32 224 32C188.7 32 160 60.65 160 96V160zM320 352C320 387.3 348.7 416 384 416C419.3 416 448 387.3 448 352V336C448 327.2 455.2 320 464 320C472.8 320 480 327.2 480 336V352C480 405 437 448 384 448C330.1 448 288 405 288 352V336C288 327.2 295.2 320 304 320C312.8 320 320 327.2 320 336V352zM192 320C192 284.7 220.7 256 256 256H512C547.3 256 576 284.7 576 320V448C576 483.3 547.3 512 512 512H256C220.7 512 192 483.3 192 448V320zM256 288C238.3 288 224 302.3 224 320V448C224 465.7 238.3 480 256 480H512C529.7 480 544 465.7 544 448V320C544 302.3 529.7 288 512 288H256z"/>
</>],
['regular',<>
	<path d="M128 96C128 42.98 170.1 0 224 0C277 0 320 42.98 320 96V160H384C419.3 160 448 188.7 448 224H400C400 215.2 392.8 208 384 208H64C55.16 208 48 215.2 48 224V416C48 424.8 55.16 432 64 432H160V480H64C28.65 480 0 451.3 0 416V224C0 188.7 28.65 160 64 160H128V96zM176 160H272V96C272 69.49 250.5 48 224 48C197.5 48 176 69.49 176 96V160zM512 256C547.3 256 576 284.7 576 320V448C576 483.3 547.3 512 512 512H256C220.7 512 192 483.3 192 448V320C192 284.7 220.7 256 256 256H512zM320 336C320 327.2 312.8 320 304 320C295.2 320 288 327.2 288 336V352C288 405 330.1 448 384 448C437 448 480 405 480 352V336C480 327.2 472.8 320 464 320C455.2 320 448 327.2 448 336V352C448 387.3 419.3 416 384 416C348.7 416 320 387.3 320 352V336z"/>
</>],
['solid',<>
	<path d="M128 160V96C128 42.98 170.1 0 224 0C277 0 320 42.98 320 96V160H384C419.3 160 448 188.7 448 224H240C195.8 224 160 259.8 160 304V464C160 469.5 160.6 474.8 161.6 480H64C28.65 480 0 451.3 0 416V224C0 188.7 28.65 160 64 160H128zM176 160H272V96C272 69.49 250.5 48 224 48C197.5 48 176 69.49 176 96V160zM512 256C547.3 256 576 284.7 576 320V448C576 483.3 547.3 512 512 512H256C220.7 512 192 483.3 192 448V320C192 284.7 220.7 256 256 256H512zM320 336C320 327.2 312.8 320 304 320C295.2 320 288 327.2 288 336V352C288 405 330.1 448 384 448C437 448 480 405 480 352V336C480 327.2 472.8 320 464 320C455.2 320 448 327.2 448 336V352C448 387.3 419.3 416 384 416C348.7 416 320 387.3 320 352V336z"/>
</>],
['thin',<>
	<path d="M128 96C128 42.98 170.1 0 224 0C277 0 320 42.98 320 96V160H384C419.3 160 448 188.7 448 224H432C432 197.5 410.5 176 384 176H64C37.49 176 16 197.5 16 224V416C16 442.5 37.49 464 64 464H160V480H64C28.65 480 0 451.3 0 416V224C0 188.7 28.65 160 64 160H128V96zM144 160H304V96C304 51.82 268.2 16 224 16C179.8 16 144 51.82 144 96V160zM320 368C320 403.3 348.7 432 384 432C419.3 432 448 403.3 448 368V328C448 323.6 451.6 320 456 320C460.4 320 464 323.6 464 328V368C464 412.2 428.2 448 384 448C339.8 448 304 412.2 304 368V328C304 323.6 307.6 320 312 320C316.4 320 320 323.6 320 328V368zM192 320C192 284.7 220.7 256 256 256H512C547.3 256 576 284.7 576 320V448C576 483.3 547.3 512 512 512H256C220.7 512 192 483.3 192 448V320zM256 272C229.5 272 208 293.5 208 320V448C208 474.5 229.5 496 256 496H512C538.5 496 560 474.5 560 448V320C560 293.5 538.5 272 512 272H256z"/>
</>],

]);

const BagsShopping: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

BagsShopping.displayName = "BagsShopping";

export default BagsShopping;
