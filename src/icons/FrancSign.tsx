
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M288 32C305.7 32 320 46.33 320 64C320 81.67 305.7 96 288 96H112V192H256C273.7 192 288 206.3 288 224C288 241.7 273.7 256 256 256H112V448C112 465.7 97.67 480 80 480C62.33 480 48 465.7 48 448V64C48 46.33 62.33 32 80 32H288z"/><path className="fa-secondary" d="M48 384H32C14.33 384 0 369.7 0 352C0 334.3 14.33 320 32 320H48V384zM112 320H192C209.7 320 224 334.3 224 352C224 369.7 209.7 384 192 384H112V320z"/>
</>],
['light',<>
	<path d="M304 32C312.8 32 320 39.16 320 48C320 56.84 312.8 64 304 64H104C99.58 64 96 67.58 96 72V192H272C280.8 192 288 199.2 288 208C288 216.8 280.8 224 272 224H96V320H208C216.8 320 224 327.2 224 336C224 344.8 216.8 352 208 352H96V464C96 472.8 88.84 480 80 480C71.16 480 64 472.8 64 464V352H16C7.164 352 0 344.8 0 336C0 327.2 7.164 320 16 320H64V72C64 49.91 81.91 32 104 32H304z"/>
</>],
['regular',<>
	<path d="M296 32C309.3 32 320 42.75 320 56C320 69.25 309.3 80 296 80H96V192H264C277.3 192 288 202.7 288 216C288 229.3 277.3 240 264 240H96V320H200C213.3 320 224 330.7 224 344C224 357.3 213.3 368 200 368H96V456C96 469.3 85.25 480 72 480C58.75 480 48 469.3 48 456V368H24C10.75 368 0 357.3 0 344C0 330.7 10.75 320 24 320H48V56C48 42.75 58.75 32 72 32H296z"/>
</>],
['solid',<>
	<path d="M288 32C305.7 32 320 46.33 320 64C320 81.67 305.7 96 288 96H112V192H256C273.7 192 288 206.3 288 224C288 241.7 273.7 256 256 256H112V320H192C209.7 320 224 334.3 224 352C224 369.7 209.7 384 192 384H112V448C112 465.7 97.67 480 80 480C62.33 480 48 465.7 48 448V384H32C14.33 384 0 369.7 0 352C0 334.3 14.33 320 32 320H48V64C48 46.33 62.33 32 80 32H288z"/>
</>],
['thin',<>
	<path d="M312 32C316.4 32 320 35.58 320 40C320 44.42 316.4 48 312 48H96C87.16 48 80 55.16 80 64V208H280C284.4 208 288 211.6 288 216C288 220.4 284.4 224 280 224H80V336H216C220.4 336 224 339.6 224 344C224 348.4 220.4 352 216 352H80V472C80 476.4 76.42 480 72 480C67.58 480 64 476.4 64 472V352H8C3.582 352 0 348.4 0 344C0 339.6 3.582 336 8 336H64V64C64 46.33 78.33 32 96 32H312z"/>
</>],

]);

const FrancSign: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={320} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

FrancSign.displayName = "FrancSign";

export default FrancSign;
