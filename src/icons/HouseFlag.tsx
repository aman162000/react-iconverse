
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M624 32C632.8 32 640 39.16 640 48V176C640 184.8 632.8 192 624 192H512V512H448V32C448 14.33 462.3 0 480 0C497.7 0 512 14.33 512 32H624z"/><path className="fa-secondary" d="M416 512H416.1C416.9 512 416.8 512 416.8 512H352C334.3 512 320 497.7 320 480V384C320 366.3 305.7 352 288 352H224C206.3 352 192 366.3 192 384V480C192 497.7 177.7 512 160 512H96C78.33 512 64 497.7 64 480V287.1H31.1C18.6 287.1 6.629 279.7 1.983 267.1C-2.663 254.5 1.003 240.4 11.17 231.7L235.2 39.7C247.2 29.43 264.8 29.43 276.8 39.7L416 159V512z"/>
</>],
['light',<>
	<path d="M464 0C472.8 0 480 7.164 480 16V32H624C632.8 32 640 39.16 640 48V176C640 184.8 632.8 192 624 192H480V512H448V16C448 7.164 455.2 0 464 0zM480 160H608V64H480V160zM416 175.1L272 68L96 200V440C96 462.1 113.9 480 136 480H200V352C200 334.3 214.3 320 232 320H312C329.7 320 344 334.3 344 352V480H408C410.7 480 413.4 479.7 416 479.2V511.6C413.4 511.9 410.7 512 408 512H136C96.24 512 64 479.8 64 440V224L25.6 252.8C18.53 258.1 8.503 256.7 3.201 249.6C-2.101 242.5-.6682 232.5 6.401 227.2L262.4 35.2C268.1 30.93 275.9 30.93 281.6 35.2L416 135.1V175.1zM232 352V480H312V352H232z"/>
</>],
['regular',<>
	<path d="M472 0C485.3 0 496 10.75 496 24V32H624C632.8 32 640 39.16 640 48V176C640 184.8 632.8 192 624 192H496V512H448V24C448 10.75 458.7 0 472 0zM416 192.7L272 85.88L112 204.6V432C112 449.7 126.3 464 144 464H192V344C192 321.9 209.9 304 232 304H312C334.1 304 352 321.9 352 344V464H400C405.8 464 411.3 462.4 416 459.7V510.4C410.8 511.4 405.5 512 400 512H144C99.82 512 64 476.2 64 432V240.2L38.3 259.3C27.66 267.2 12.63 264.9 4.727 254.3C-3.171 243.7-.9438 228.6 9.701 220.7L257.7 36.73C266.2 30.42 277.8 30.42 286.3 36.73L416 132.1L416 192.7zM240 352V464H304V352H240z"/>
</>],
['solid',<>
	<path d="M480 0C497.7 0 512 14.33 512 32H624C632.8 32 640 39.16 640 48V176C640 184.8 632.8 192 624 192H512V512H448V32C448 14.33 462.3 0 480 0V0zM416 512H416.1L416.8 512H352C334.3 512 320 497.7 320 480V384C320 366.3 305.7 352 288 352H224C206.3 352 192 366.3 192 384V480C192 497.7 177.7 512 160 512H96C78.33 512 64 497.7 64 480V288H31.1C18.61 288 6.631 279.7 1.985 267.1C-2.661 254.5 1.005 240.4 11.17 231.7L235.2 39.7C247.2 29.43 264.8 29.43 276.8 39.7L416 159V512z"/>
</>],
['thin',<>
	<path d="M456 0C460.4 0 464 3.582 464 8V32H624C632.8 32 640 39.16 640 48V176C640 184.8 632.8 192 624 192H464V512H448V8C448 3.582 451.6 0 456 0V0zM464 176H624V48H464V176zM416 157.1L272 50L80 194V448C80 474.5 101.5 496 128 496H192V344C192 330.7 202.7 320 216 320H328C341.3 320 352 330.7 352 344V496H416V512H128C92.66 512 64 483.3 64 448V206L20.8 238.4C17.27 241.1 12.25 240.3 9.602 236.8C6.952 233.3 7.668 228.3 11.2 225.6L267.2 33.6C270 31.47 273.1 31.47 276.8 33.6L416 137.1V157.1zM328 336H216C211.6 336 208 339.6 208 344V496H336V344C336 339.6 332.4 336 328 336z"/>
</>],

]);

const HouseFlag: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

HouseFlag.displayName = "HouseFlag";

export default HouseFlag;