
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M280 292.7C303.5 302.1 320 325.1 320 352C320 387.3 291.3 416 256 416C220.7 416 192 387.3 192 352C192 325.1 208.5 302.1 232 292.7V88C232 74.75 242.7 64 256 64C269.3 64 280 74.75 280 88V292.7z"/><path className="fa-secondary" d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM280 292.7V88C280 74.75 269.3 64 256 64C242.7 64 232 74.75 232 88V292.7C208.5 302.1 192 325.1 192 352C192 387.3 220.7 416 256 416C291.3 416 320 387.3 320 352C320 325.1 303.5 302.1 280 292.7z"/>
</>],
['light',<>
	<path d="M192 352C192 322.2 212.4 297.1 239.1 290L239.1 95.1C239.1 87.16 247.2 79.1 255.1 79.1C264.8 79.1 272 87.16 272 95.1L272 290C299.6 297.1 320 322.2 320 352C320 387.3 291.3 416 256 416C220.7 416 192 387.3 192 352V352zM256 384C273.7 384 288 369.7 288 352C288 334.3 273.7 320 256 320C238.3 320 224 334.3 224 352C224 369.7 238.3 384 256 384zM0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 480C379.7 480 480 379.7 480 256C480 132.3 379.7 32 256 32C132.3 32 32 132.3 32 256C32 379.7 132.3 480 256 480z"/>
</>],
['regular',<>
	<path d="M312 352C312 382.9 286.9 408 256 408C225.1 408 200 382.9 200 352C200 329.7 213.1 310.4 231.1 301.4V119.1C231.1 106.7 242.7 95.1 255.1 95.1C269.3 95.1 280 106.7 280 119.1V301.4C298.9 310.4 312 329.7 312 352V352zM0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464z"/>
</>],
['solid',<>
	<path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM280 292.7V88C280 74.75 269.3 64 256 64C242.7 64 232 74.75 232 88V292.7C208.5 302.1 192 325.1 192 352C192 387.3 220.7 416 256 416C291.3 416 320 387.3 320 352C320 325.1 303.5 302.1 280 292.7z"/>
</>],
['thin',<>
	<path d="M192 352C192 319.4 216.4 292.4 247.1 288.5V79.1C247.1 75.58 251.6 71.1 255.1 71.1C260.4 71.1 264 75.58 264 79.1V288.5C295.6 292.4 320 319.4 320 352C320 387.3 291.3 416 256 416C220.7 416 192 387.3 192 352zM256 400C282.5 400 304 378.5 304 352C304 325.5 282.5 304 256 304C229.5 304 208 325.5 208 352C208 378.5 229.5 400 256 400zM0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 496C388.5 496 496 388.5 496 256C496 123.5 388.5 16 256 16C123.5 16 16 123.5 16 256C16 388.5 123.5 496 256 496z"/>
</>],

]);

const GaugeSimple: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

GaugeSimple.displayName = "GaugeSimple";

export default GaugeSimple;