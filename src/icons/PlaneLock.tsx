
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M448 320V272C448 227.8 483.8 192 528 192C572.2 192 608 227.8 608 272V320C625.7 320 640 334.3 640 352V480C640 497.7 625.7 512 608 512H448C430.3 512 416 497.7 416 480V352C416 334.3 430.3 320 448 320zM496 320H560V272C560 254.3 545.7 240 528 240C510.3 240 496 254.3 496 272V320z"/><path className="fa-secondary" d="M320 93.68V178.3L421.8 236.4C418 247.6 416 259.6 416 272V296.6C398.1 306.9 385.7 325.7 384.2 347.5L320 329.1V400L377.6 443.2C381.6 446.2 384 450.1 384 456V497.1C384 505.7 377.7 512 369.1 512C368.7 512 367.4 511.8 366.1 511.5L256 480L145.9 511.5C144.6 511.8 143.3 512 142 512C134.3 512 128 505.7 128 497.1V456C128 450.1 130.4 446.2 134.4 443.2L192 400V329.1L20.4 378.2C10.17 381.1 0 373.4 0 362.8V297.3C0 291.5 3.076 286.2 8.062 283.4L192 178.3V93.68C192 59.53 221 0 256 0C292 0 320 59.53 320 93.68H320z"/>
</>],
['light',<>
	<path d="M176 153.1V112.1C176 74.04 207 0 256 0C304 0 336 74.04 336 112.1V154.1L432.1 214.2C426.5 223.3 422.3 233.3 419.5 243.1L304 171.1V112.1C304 81.04 278 33.02 256 33.02C233 33.02 208 81.04 208 113.1V172.1L32 282.1V347.2L208 292.1V392.2L144 440.2V480.2L256 448.2L368 480.2V511.1C365.3 512.1 362.6 511.8 360 511.3L256 480.2L152 510.2C142 513.3 132 511.3 124 505.2C116 499.2 112 490.2 112 480.2V440.2C112 430.2 116 421.2 124 415.2L176 376.2V335.2L41 378.2C31 381.2 20 379.2 12 373.2C4 367.2 0 357.2 0 347.2V282.1C0 271.1 6 259.1 16 254.1L176 153.1zM368 401.3V440.2L304 392.2V292.1L392.6 319.9C387.4 328.9 384.3 339.3 384 350.5L336 335.2V376.2L368 401.3zM528 192C572.2 192 608 227.8 608 272V320C625.7 320 640 334.3 640 352V480C640 497.7 625.7 512 608 512H448C430.3 512 416 497.7 416 480V352C416 334.3 430.3 320 448 320V272C448 227.8 483.8 192 528 192zM528 224C501.5 224 480 245.5 480 272V320H576V272C576 245.5 554.5 224 528 224zM448 352V480H608V352H448z"/>
</>],
['regular',<>
	<path d="M256 .001C305 .001 336 73.89 336 111.8V153.8L432.1 213.8C423.6 227.8 418.1 243.8 416.5 260.9L288 180.7V112.8C288 85.87 267 49.93 256 48.93C246 50.93 224 86.87 224 112.8V180.7L48 290.6V324.5L224 269.6V383.4L160 431.4V458.3L256 430.4L352 458.3V431.4L288 383.4V269.6L403.4 305.6C391.8 316.9 384.5 332.5 384 349.8L336 334.5V359.5L384 395.4V479.3C384 488.2 385.8 496.7 389.1 504.4C388.8 504.7 388.4 504.1 388 505.3C380 511.3 370 513.2 360 510.3L256 480.3L152 511.3C143 513.2 133 511.3 125 505.3C117 499.3 112 489.3 112 480.3V423.4C112 413.4 117 404.4 125 398.4L176 359.5V334.5L41 377.4C32 380.4 21 378.4 13 372.5C5 366.5 0 356.5 0 346.5V281.6C0 270.6 7 258.6 16 254.6L176 154.8V112.8C176 73.89 208 0 256 0L256 .001zM528 192C572.2 192 608 227.8 608 272V320C625.7 320 640 334.3 640 352V480C640 497.7 625.7 512 608 512H448C430.3 512 416 497.7 416 480V352C416 334.3 430.3 320 448 320V272C448 227.8 483.8 192 528 192zM528 240C510.3 240 496 254.3 496 272V320H560V272C560 254.3 545.7 240 528 240z"/>
</>],
['solid',<>
	<path d="M192 93.68C192 59.53 221 0 256 0C292 0 320 59.53 320 93.68V178.3L421.8 236.4C418 247.6 416 259.6 416 272V296.6C398.1 306.9 385.7 325.7 384.2 347.5L320 329.1V400L377.6 443.2C381.6 446.2 384 450.1 384 456V497.1C384 505.7 377.7 512 369.1 512C368.7 512 367.4 511.8 366.1 511.5L256 480L145.9 511.5C144.6 511.8 143.3 512 142 512C134.3 512 128 505.7 128 497.1V456C128 450.1 130.4 446.2 134.4 443.2L192 400V329.1L20.4 378.2C10.17 381.1 0 373.4 0 362.8V297.3C0 291.5 3.076 286.2 8.062 283.4L192 178.3L192 93.68zM528 192C572.2 192 608 227.8 608 272V320C625.7 320 640 334.3 640 352V480C640 497.7 625.7 512 608 512H448C430.3 512 416 497.7 416 480V352C416 334.3 430.3 320 448 320V272C448 227.8 483.8 192 528 192zM528 240C510.3 240 496 254.3 496 272V320H560V272C560 254.3 545.7 240 528 240z"/>
</>],
['thin',<>
	<path d="M191.1 178.8V95.88C191.1 60.92 219.1 0 255.1 0C290.1 0 319.1 60.92 319.1 96.88V178.8L421.6 236.1C419.9 242.1 418.6 247.3 417.7 252.7L320 196.8V312.6L387.3 331.8C385.5 336.9 384.5 342.3 384.1 347.9L320 329.6V399.5L368 436.5V455.4L304 407.5V95.88C304 64.92 278 15.98 256 15.98C233 15.98 208 64.92 208 95.88V407.5L144 455.4V495.4L256 463.4L368 496.4V511.7C366.7 511.7 365.3 511.6 364 511.4L256 479.4L147 511.4C137 514.4 128 506.4 128 495.4V455.4C128 450.4 130 446.4 134 443.4L192 399.5V329.6L20 378.5C10 381.5 0 373.5 0 362.6V297.6C0 292.6 3 285.6 8 283.6L191.1 178.8zM15.1 297.6V362.6L191.1 312.6V196.8L15.1 297.6zM528 192C563.3 192 592 220.7 592 256V320H608C625.7 320 640 334.3 640 352V480C640 497.7 625.7 512 608 512H448C430.3 512 416 497.7 416 480V352C416 334.3 430.3 320 448 320H464V256C464 220.7 492.7 192 528 192zM528 208C501.5 208 480 229.5 480 256V320H576V256C576 229.5 554.5 208 528 208zM432 352V480C432 488.8 439.2 496 448 496H608C616.8 496 624 488.8 624 480V352C624 343.2 616.8 336 608 336H448C439.2 336 432 343.2 432 352z"/>
</>],

]);

const PlaneLock: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

PlaneLock.displayName = "PlaneLock";

export default PlaneLock;
