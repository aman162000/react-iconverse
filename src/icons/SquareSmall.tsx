
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-secondary" d="M0 160C0 124.7 28.65 96 64 96H256C291.3 96 320 124.7 320 160V352C320 387.3 291.3 416 256 416H64C28.65 416 0 387.3 0 352V160z"/>
</>],
['light',<>
	<path d="M256 96C291.3 96 320 124.7 320 160V352C320 387.3 291.3 416 256 416H64C28.65 416 0 387.3 0 352V160C0 124.7 28.65 96 64 96H256zM256 128H64C46.33 128 32 142.3 32 160V352C32 369.7 46.33 384 64 384H256C273.7 384 288 369.7 288 352V160C288 142.3 273.7 128 256 128z"/>
</>],
['regular',<>
	<path d="M256 96C291.3 96 320 124.7 320 160V352C320 387.3 291.3 416 256 416H64C28.65 416 0 387.3 0 352V160C0 124.7 28.65 96 64 96H256zM256 144H64C55.16 144 48 151.2 48 160V352C48 360.8 55.16 368 64 368H256C264.8 368 272 360.8 272 352V160C272 151.2 264.8 144 256 144z"/>
</>],
['solid',<>
	<path d="M0 160C0 124.7 28.65 96 64 96H256C291.3 96 320 124.7 320 160V352C320 387.3 291.3 416 256 416H64C28.65 416 0 387.3 0 352V160z"/>
</>],
['thin',<>
	<path d="M256 96C291.3 96 320 124.7 320 160V352C320 387.3 291.3 416 256 416H64C28.65 416 0 387.3 0 352V160C0 124.7 28.65 96 64 96H256zM256 112H64C37.49 112 16 133.5 16 160V352C16 378.5 37.49 400 64 400H256C282.5 400 304 378.5 304 352V160C304 133.5 282.5 112 256 112z"/>
</>],

]);

const SquareSmall: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={320} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

SquareSmall.displayName = "SquareSmall";

export default SquareSmall;
