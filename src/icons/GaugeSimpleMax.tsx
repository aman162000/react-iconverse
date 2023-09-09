
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M411.4 227.6C422.6 220.6 437.4 224.1 444.4 235.4C451.4 246.6 447.9 261.4 436.6 268.4L319.1 341.2C319.7 344.7 320 348.3 320 352C320 387.3 291.3 416 256 416C220.7 416 192 387.3 192 352C192 316.7 220.7 288 256 288C270.1 288 283.2 292.6 293.8 300.4L411.4 227.6z"/><path className="fa-secondary" d="M256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM192 352C192 387.3 220.7 416 256 416C291.3 416 320 387.3 320 352C320 348.3 319.7 344.7 319.1 341.2L436.6 268.4C447.9 261.4 451.4 246.6 444.4 235.4C437.4 224.1 422.6 220.6 411.4 227.6L293.8 300.4C283.2 292.6 270.1 288 256 288C220.7 288 192 316.7 192 352V352z"/>
</>],
['light',<>
	<path d="M256 416C220.7 416 192 387.3 192 352C192 316.7 220.7 288 256 288C273.5 288 289.4 295 300.9 306.4L407.8 242.3C415.3 237.7 425.2 240.2 429.7 247.8C434.3 255.3 431.8 265.2 424.2 269.7L317.4 333.8C319.1 339.6 320 345.7 320 352C320 387.3 291.3 416 255.1 416H256zM288 352C288 334.3 273.7 320 256 320C238.3 320 224 334.3 224 352C224 369.7 238.3 384 256 384C273.7 384 288 369.7 288 352zM256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM480 256C480 132.3 379.7 32 256 32C132.3 32 32 132.3 32 256C32 379.7 132.3 480 256 480C379.7 480 480 379.7 480 256z"/>
</>],
['regular',<>
	<path d="M256 296C266.3 296 275.9 298.8 284.2 303.6L394.4 228.2C405.4 220.7 420.3 223.5 427.8 234.4C435.3 245.4 432.5 260.3 421.6 267.8L311.3 343.2C311.8 346.1 312 349 312 352C312 382.9 286.9 408 256 408C225.1 408 200 382.9 200 352C200 321.1 225.1 295.1 256 295.1V296zM256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256z"/>
</>],
['solid',<>
	<path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM319.1 341.2L436.6 268.4C447.9 261.4 451.4 246.6 444.4 235.4C437.4 224.1 422.6 220.6 411.4 227.6L293.8 300.4C283.2 292.6 270.1 288 256 288C220.7 288 192 316.7 192 352C192 387.3 220.7 416 256 416C291.3 416 320 387.3 320 352C320 348.3 319.7 344.7 319.1 341.2L319.1 341.2z"/>
</>],
['thin',<>
	<path d="M256 416C220.7 416 192 387.3 192 352C192 316.7 220.7 288 256 288C274.8 288 291.7 296.1 303.4 309L411.4 233.4C415 230.9 420 231.8 422.6 235.4C425.1 239 424.2 244 420.6 246.6L312.6 322.1C317.3 331 320 341.2 320 352C320 387.3 291.3 416 256 416V416zM304 352C304 325.5 282.5 304 256 304C229.5 304 208 325.5 208 352C208 378.5 229.5 400 256 400C282.5 400 304 378.5 304 352zM256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM496 256C496 123.5 388.5 16 256 16C123.5 16 16 123.5 16 256C16 388.5 123.5 496 256 496C388.5 496 496 388.5 496 256z"/>
</>],

]);

const GaugeSimpleMax: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

GaugeSimpleMax.displayName = "GaugeSimpleMax";

export default GaugeSimpleMax;