
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M256 128C326.7 128 384 185.3 384 256V480C384 497.7 369.7 512 352 512H32C14.33 512 0 497.7 0 480V256C0 185.3 57.31 128 128 128H256zM288 224C270.3 224 256 238.3 256 256V352C256 369.7 270.3 384 288 384C305.7 384 320 369.7 320 352V256C320 238.3 305.7 224 288 224z"/><path className="fa-secondary" d="M200 0C213.3 0 224 10.75 224 24V48H232C245.3 48 256 58.75 256 72C256 85.25 245.3 96 232 96H88C74.75 96 64 85.25 64 72C64 58.75 74.75 48 88 48H96V24C96 10.75 106.7 0 120 0H200z"/>
</>],
['light',<>
	<path d="M96 64V24C96 10.75 106.7 0 120 0H200C213.3 0 224 10.75 224 24V64H240C248.8 64 256 71.16 256 80C256 88.84 248.8 96 240 96H80C71.16 96 64 88.84 64 80C64 71.16 71.16 64 80 64H96zM192 64V32H128V64H192zM304 256V352C304 378.5 282.5 400 256 400C229.5 400 208 378.5 208 352V256C208 229.5 229.5 208 256 208C282.5 208 304 229.5 304 256zM240 352C240 360.8 247.2 368 256 368C264.8 368 272 360.8 272 352V256C272 247.2 264.8 240 256 240C247.2 240 240 247.2 240 256V352zM256 128C326.7 128 384 185.3 384 256V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V256C0 185.3 57.31 128 128 128H256zM128 160C74.98 160 32 202.1 32 256V448C32 465.7 46.33 480 64 480H320C337.7 480 352 465.7 352 448V256C352 202.1 309 160 256 160H128z"/>
</>],
['regular',<>
	<path d="M200 0C213.3 0 224 10.75 224 24V48H232C245.3 48 256 58.75 256 72C256 85.25 245.3 96 232 96H88C74.75 96 64 85.25 64 72C64 58.75 74.75 48 88 48H96V24C96 10.75 106.7 0 120 0H200zM288 256V352C288 369.7 273.7 384 256 384C238.3 384 224 369.7 224 352V256C224 238.3 238.3 224 256 224C273.7 224 288 238.3 288 256zM256 128C326.7 128 384 185.3 384 256V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V256C0 185.3 57.31 128 128 128H256zM256 176H128C83.82 176 48 211.8 48 256V448C48 456.8 55.16 464 64 464H320C328.8 464 336 456.8 336 448V256C336 211.8 300.2 176 256 176z"/>
</>],
['solid',<>
	<path d="M96 24C96 10.75 106.7 0 120 0H200C213.3 0 224 10.75 224 24V48H232C245.3 48 256 58.75 256 72C256 85.25 245.3 96 232 96H88C74.75 96 64 85.25 64 72C64 58.75 74.75 48 88 48H96V24zM0 256C0 185.3 57.31 128 128 128H256C326.7 128 384 185.3 384 256V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V256zM256 352C256 369.7 270.3 384 288 384C305.7 384 320 369.7 320 352V256C320 238.3 305.7 224 288 224C270.3 224 256 238.3 256 256V352z"/>
</>],
['thin',<>
	<path d="M96 80V24C96 10.75 106.7 0 120 0H200C213.3 0 224 10.75 224 24V80H248C252.4 80 256 83.58 256 88C256 92.42 252.4 96 248 96H72C67.58 96 64 92.42 64 88C64 83.58 67.58 80 72 80H96zM112 24V80H208V24C208 19.58 204.4 16 200 16H120C115.6 16 112 19.58 112 24zM320 248V328C320 350.1 302.1 368 280 368C257.9 368 240 350.1 240 328V248C240 225.9 257.9 208 280 208C302.1 208 320 225.9 320 248zM256 328C256 341.3 266.7 352 280 352C293.3 352 304 341.3 304 328V248C304 234.7 293.3 224 280 224C266.7 224 256 234.7 256 248V328zM256 128C326.7 128 384 185.3 384 256V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V256C0 185.3 57.31 128 128 128H256zM256 144H128C66.14 144 16 194.1 16 256V448C16 474.5 37.49 496 64 496H320C346.5 496 368 474.5 368 448V256C368 194.1 317.9 144 256 144z"/>
</>],

]);

const JugDetergent: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

JugDetergent.displayName = "JugDetergent";

export default JugDetergent;
