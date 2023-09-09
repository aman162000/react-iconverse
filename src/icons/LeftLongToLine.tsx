
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M247.8 377.6L135.7 273.6C125.4 264.1 125.4 247.9 135.7 238.4L247.8 134.4C254.7 127.9 264.9 126.2 273.7 129.1C282.4 133.8 288.1 142.5 288.1 151.1V208H608C625.7 208 640 222.3 640 240V272C640 289.7 625.7 304 608 304H288.1V360C288.1 369.5 282.4 378.2 273.7 382C264.9 385.8 254.7 384.1 247.8 377.6V377.6zM64 96V416C64 433.7 49.67 448 32 448C14.33 448 0 433.7 0 416V96C0 78.33 14.33 64 32 64C49.67 64 64 78.33 64 96z"/>
</>],
['light',<>
	<path d="M0 80C0 71.16 7.164 64 16 64C24.84 64 32 71.16 32 80V432C32 440.8 24.84 448 16 448C7.164 448 0 440.8 0 432V80zM640 232V279.1C640 302.1 622 319.1 599.1 319.1L287.7 319.1L287.5 359.1C287.5 375.9 278.1 390.3 263.5 396.6C248.9 403 231.1 400.2 220.3 389.3L108.2 285.3C100.1 277.8 96 266.9 96 256C95.1 245.1 100.1 234.2 108.2 226.7L220.3 122.7C231.1 111.9 248.9 108.1 263.5 115.4C278.1 121.7 287.5 136.1 287.5 152L287.7 192L599.1 192C622 192 640 209.9 640 232V232zM129.1 250.2C127.8 252.2 127.4 254.7 127.4 256C127.4 257.3 127.8 259.8 129.1 261.9L242 365.9C247.2 370.6 255.5 367 255.5 359.1V287.1H599.1C604.4 287.1 608 284.4 608 279.1V232C608 227.6 604.4 224 599.1 224L255.5 224V152C255.5 144.1 247.2 141.4 242 146.1L129.1 250.2z"/>
</>],
['regular',<>
	<path d="M0 88C0 74.75 10.75 64 24 64C37.25 64 48 74.75 48 88V424C48 437.3 37.25 448 24 448C10.75 448 0 437.3 0 424V88zM272.1 360C272.1 369.5 266.4 378.2 257.7 382C248.9 385.8 238.7 384.1 231.8 377.6L119.7 273.6C109.4 264.1 109.4 247.9 119.7 238.4L231.8 134.4C238.7 127.9 248.9 126.2 257.7 129.1C266.4 133.8 272.1 142.5 272.1 152L272.1 232H616C629.3 232 640 242.8 640 256C640 269.3 629.3 280 616 280H272.1L272.1 360z"/>
</>],
['solid',<>
	<path d="M64 96V416C64 433.7 49.67 448 32 448C14.33 448 0 433.7 0 416V96C0 78.33 14.33 64 32 64C49.67 64 64 78.33 64 96zM135.7 238.4L247.8 134.4C254.7 127.9 264.9 126.2 273.7 129.1C282.4 133.8 288.1 142.5 288.1 151.1V208H608C625.7 208 640 222.3 640 240V272C640 289.7 625.7 304 608 304H288.1V360C288.1 369.5 282.4 378.2 273.7 382C264.9 385.8 254.7 384.1 247.8 377.6L135.7 273.6C125.4 264.1 125.4 247.9 135.7 238.4V238.4z"/>
</>],
['thin',<>
	<path d="M0 72C0 67.58 3.582 64 8 64C12.42 64 16 67.58 16 72V440C16 444.4 12.42 448 8 448C3.582 448 0 444.4 0 440V72zM607.1 192C625.7 192 640 206.3 640 224V287.1C640 305.7 625.7 319.1 607.1 319.1L287.7 319.1L287.8 392C287.8 401.6 282.1 410.2 273.3 414C264.5 417.8 254.3 416 247.3 409.5L103.2 273.5C98.4 268.9 95.1 262.5 95.1 256C95.1 249.5 98.4 243.1 103.2 238.5L247.3 102.5C254.3 95.97 264.5 94.17 273.3 97.95C282.1 101.8 287.8 110.4 287.8 120L287.7 192L607.1 192zM112 256C112 258.4 112.8 260.5 114.2 261.8L258.3 397.8C260.6 400 264 400.6 266.1 399.4C269.9 398.1 271.8 395.2 271.8 392V303.1H607.1C616.8 303.1 624 296.8 624 287.1V224C624 215.2 616.8 208 607.1 208H271.8V120C271.8 116.8 269.9 113.9 266.1 112.7C264 111.4 260.6 111.1 258.3 114.2L114.2 250.2C112.8 251.5 112 253.6 112 256V256z"/>
</>],

]);

const LeftLongToLine: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

LeftLongToLine.displayName = "LeftLongToLine";

export default LeftLongToLine;