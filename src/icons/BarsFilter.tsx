
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M416 128H32C14.33 128 0 113.7 0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128zM256 448H192C174.3 448 160 433.7 160 416C160 398.3 174.3 384 192 384H256C273.7 384 288 398.3 288 416C288 433.7 273.7 448 256 448z"/><path className="fa-secondary" d="M64 256C64 238.3 78.33 224 96 224H352C369.7 224 384 238.3 384 256C384 273.7 369.7 288 352 288H96C78.33 288 64 273.7 64 256z"/>
</>],
['light',<>
	<path d="M0 80C0 71.16 7.164 64 16 64H432C440.8 64 448 71.16 448 80C448 88.84 440.8 96 432 96H16C7.164 96 0 88.84 0 80zM64 240C64 231.2 71.16 224 80 224H368C376.8 224 384 231.2 384 240C384 248.8 376.8 256 368 256H80C71.16 256 64 248.8 64 240zM272 416H176C167.2 416 160 408.8 160 400C160 391.2 167.2 384 176 384H272C280.8 384 288 391.2 288 400C288 408.8 280.8 416 272 416z"/>
</>],
['regular',<>
	<path d="M0 88C0 74.75 10.75 64 24 64H424C437.3 64 448 74.75 448 88C448 101.3 437.3 112 424 112H24C10.75 112 0 101.3 0 88zM64 248C64 234.7 74.75 224 88 224H360C373.3 224 384 234.7 384 248C384 261.3 373.3 272 360 272H88C74.75 272 64 261.3 64 248zM264 432H184C170.7 432 160 421.3 160 408C160 394.7 170.7 384 184 384H264C277.3 384 288 394.7 288 408C288 421.3 277.3 432 264 432z"/>
</>],
['solid',<>
	<path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM64 256C64 238.3 78.33 224 96 224H352C369.7 224 384 238.3 384 256C384 273.7 369.7 288 352 288H96C78.33 288 64 273.7 64 256zM256 448H192C174.3 448 160 433.7 160 416C160 398.3 174.3 384 192 384H256C273.7 384 288 398.3 288 416C288 433.7 273.7 448 256 448z"/>
</>],
['thin',<>
	<path d="M0 88C0 83.58 3.582 80 8 80H440C444.4 80 448 83.58 448 88C448 92.42 444.4 96 440 96H8C3.582 96 0 92.42 0 88zM64 248C64 243.6 67.58 240 72 240H376C380.4 240 384 243.6 384 248C384 252.4 380.4 256 376 256H72C67.58 256 64 252.4 64 248zM280 416H168C163.6 416 160 412.4 160 408C160 403.6 163.6 400 168 400H280C284.4 400 288 403.6 288 408C288 412.4 284.4 416 280 416z"/>
</>],

]);

const BarsFilter: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

BarsFilter.displayName = "BarsFilter";

export default BarsFilter;