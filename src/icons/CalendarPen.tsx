
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V192H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM308.8 320.4L293.9 335.3L240.6 281.1L255.5 267C270.2 252.3 294.1 252.3 308.8 267C323.5 281.8 323.5 305.6 308.8 320.4V320.4zM146.1 376.5L217.1 304.6L271.3 357.9L199.4 429.9C195.3 433.1 190.1 436.9 184.5 438.3L147.9 447.4C142.4 448.8 136.7 447.2 132.7 443.2C128.7 439.3 127.1 433.5 128.5 428L137.6 391.4C139 385.8 141.1 380.6 146.1 376.5H146.1z"/><path className="fa-secondary" d="M448 464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192H448V464zM308.8 267C294.1 252.3 270.2 252.3 255.5 267L240.6 281.1L293.9 335.3L308.8 320.4C323.5 305.6 323.5 281.8 308.8 267V267zM137.6 391.4L128.5 428C127.1 433.5 128.7 439.3 132.7 443.2C136.7 447.2 142.4 448.8 147.9 447.4L184.5 438.3C190.1 436.9 195.3 433.1 199.4 429.9L271.3 357.9L217.1 304.6L146.1 376.5C141.1 380.6 139 385.8 137.6 391.4H137.6z"/>
</>],
['light',<>
	<path d="M250.4 235.3C269.1 216.6 299.5 216.6 318.2 235.3L324.7 241.8C343.4 260.5 343.4 290.9 324.7 309.6L201.6 432.7C197.4 436.9 192 439.9 186.2 441.2L136 452.7C118.8 456.7 103.3 441.2 107.3 423.1L118.8 373.8C120.1 367.1 123.1 362.6 127.3 358.4L250.4 235.3zM295.6 257.9C289.4 251.7 279.2 251.7 272.1 257.9L260.8 270.2L289.8 299.2L302.1 287C308.3 280.8 308.3 270.6 302.1 264.4L295.6 257.9zM267.2 321.8L238.2 292.8L149.1 380.1L141.3 418.7L179 410L267.2 321.8zM112 0C120.8 0 128 7.164 128 16V64H320V16C320 7.164 327.2 0 336 0C344.8 0 352 7.164 352 16V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H96V16C96 7.164 103.2 0 112 0zM416 192H32V448C32 465.7 46.33 480 64 480H384C401.7 480 416 465.7 416 448V192zM384 96H64C46.33 96 32 110.3 32 128V160H416V128C416 110.3 401.7 96 384 96z"/>
</>],
['regular',<>
	<path d="M308.8 296.4L293.9 311.3L240.6 257.1L255.5 243C270.2 228.3 294.1 228.3 308.8 243C323.5 257.8 323.5 281.6 308.8 296.4V296.4zM146.1 352.5L217.1 280.6L271.3 333.9L199.4 405.9C195.3 409.1 190.1 412.9 184.5 414.3L147.9 423.4C142.4 424.8 136.7 423.2 132.7 419.2C128.7 415.3 127.1 409.5 128.5 404L137.6 367.4C139 361.8 141.1 356.6 146.1 352.5H146.1zM128 0C141.3 0 152 10.75 152 24V64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0zM400 192H48V448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192z"/>
</>],
['solid',<>
	<path d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM308.8 267C294.1 252.3 270.2 252.3 255.5 267L240.6 281.1L293.9 335.3L308.8 320.4C323.5 305.6 323.5 281.8 308.8 267V267zM137.6 391.4L128.5 428C127.1 433.5 128.7 439.3 132.7 443.2C136.7 447.2 142.4 448.8 147.9 447.4L184.5 438.3C190.1 436.9 195.3 433.1 199.4 429.9L271.3 357.9L217.1 304.6L146.1 376.5C141.1 380.6 139 385.8 137.6 391.4H137.6z"/>
</>],
['thin',<>
	<path d="M256 240.1C271.6 225.3 296.1 225.3 312.6 240.1L319 247.4C334.6 263 334.6 288.4 319 303.1L195.1 427C192.8 430.2 188.8 432.4 184.4 433.4L134.2 444.9C122.7 447.6 112.4 437.3 115.1 425.8L126.6 375.6C127.6 371.2 129.8 367.2 132.1 364L256 240.1zM301.3 252.3C291.9 242.9 276.7 242.9 267.3 252.3L249.5 270.2L289.8 310.5L307.7 292.7C317.1 283.3 317.1 268.1 307.7 258.7L301.3 252.3zM142.2 379.2L130.7 429.4L180.8 417.8C182.3 417.5 183.6 416.8 184.7 415.7L278.5 321.8L238.2 281.5L144.3 375.3C143.2 376.4 142.5 377.7 142.2 379.2L142.2 379.2zM128 64H320V8C320 3.582 323.6 0 328 0C332.4 0 336 3.582 336 8V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H112V8C112 3.582 115.6 0 120 0C124.4 0 128 3.582 128 8V64zM16 448C16 474.5 37.49 496 64 496H384C410.5 496 432 474.5 432 448V192H16V448zM64 80C37.49 80 16 101.5 16 128V176H432V128C432 101.5 410.5 80 384 80H336V120C336 124.4 332.4 128 328 128C323.6 128 320 124.4 320 120V80H128V120C128 124.4 124.4 128 120 128C115.6 128 112 124.4 112 120V80H64z"/>
</>],

]);

const CalendarPen: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CalendarPen.displayName = "CalendarPen";

export default CalendarPen;
