
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M371.1 7.013C385.8 18.05 388 38.19 376.1 51.99L328.1 112L563.7 405.4C571.7 415.4 576 427.7 576 440.4V448H407.5L288 291.7L168.5 448H0V440.4C0 427.7 4.328 415.4 12.27 405.4L247 112L199 51.99C187.1 38.19 190.2 18.05 204 7.013C217.8-4.027 237.9-1.789 248.1 12.01L288 60.78L327 12.01C338.1-1.789 358.2-4.027 371.1 7.013V7.013zM528.3 512C528.2 512 528.1 512 528 512H48C47.89 512 47.78 512 47.66 512H528.3z"/><path className="fa-secondary" d="M576 448V464C576 490.5 554.5 512 528 512H48C21.49 512 0 490.5 0 464V448H576z"/>
</>],
['light',<>
	<path d="M394.3 3.745C401.1 9.425 401.9 19.52 396.3 26.29L308.9 130.4L532.8 397.2C540 405.8 544 416.7 544 428V464C544 490.5 522.5 512 496 512H80C53.49 512 32 490.5 32 464V428C32 416.7 35.98 405.8 43.23 397.2L267.1 130.4L179.7 26.29C174.1 19.52 174.9 9.425 181.7 3.745C188.5-1.936 198.6-1.054 204.3 5.715L287.1 105.5L371.7 5.715C377.4-1.054 387.5-1.936 394.3 3.745H394.3zM64 428V464C64 472.8 71.16 480 80 480H129.9L275.4 294.1C278.4 290.3 283.1 288 288 288C292.9 288 297.6 290.3 300.6 294.1L446.1 480H496C504.8 480 512 472.8 512 464V428C512 424.2 510.7 420.6 508.3 417.7L288 155.3L67.74 417.7C65.33 420.6 64 424.2 64 428zM170.6 480H405.4L288 329.1L170.6 480z"/>
</>],
['regular',<>
	<path d="M375.4 5.587C385.6 14.09 386.9 29.22 378.4 39.39L319.3 110.1L554.1 392.1C563.4 402.1 568 414.8 568 427.1V456C568 486.9 542.9 512 512 512H64C33.07 512 8 486.9 8 456V427.1C8 414.8 12.61 402.1 21.04 392.1L256.7 110.1L197.6 39.39C189.1 29.22 190.4 14.09 200.6 5.587C210.8-2.914 225.9-1.562 234.4 8.608L288 72.71L341.6 8.608C350.1-1.562 365.2-2.914 375.4 5.587V5.587zM56 427.1V456C56 460.4 59.58 464 64 464H126L269.1 281.2C273.6 275.4 280.6 272 288 272C295.4 272 302.4 275.4 306.9 281.2L449.1 464H512C516.4 464 520 460.4 520 456V427.1C520 426.1 519.3 424.3 518.1 422.8L288 147.5L57.86 422.8C56.66 424.3 56 426.1 56 427.1V427.1zM186.1 464H389L288 334.9L186.1 464z"/>
</>],
['solid',<>
	<path d="M328.1 112L563.7 405.4C571.7 415.4 576 427.7 576 440.4V464C576 490.5 554.5 512 528 512H48C21.49 512 0 490.5 0 464V440.4C0 427.7 4.328 415.4 12.27 405.4L247 112L199 51.99C187.1 38.19 190.2 18.05 204 7.013C217.8-4.027 237.9-1.789 248.1 12.01L288 60.78L327 12.01C338.1-1.789 358.2-4.027 371.1 7.013C385.8 18.05 388 38.19 376.1 51.99L328.1 112zM407.5 448L288 291.7L168.5 448H407.5z"/>
</>],
['thin',<>
	<path d="M190.1 2.836L530.8 405.8C539.3 415.9 544 428.7 544 441.9V472C544 494.1 526.1 512 504 512H288C283.6 512 280 508.4 280 504C280 499.6 283.6 496 288 496H504C517.3 496 528 485.3 528 472V441.9C528 432.5 524.7 423.3 518.5 416.1L177.9 13.17C175 9.791 175.5 4.743 178.8 1.891C182.2-.9616 187.3-.5389 190.1 2.835V2.836zM397.2 1.891C400.5 4.744 400.1 9.791 398.1 13.17L57.45 416.1C51.35 423.3 48 432.5 48 441.9V472C48 485.3 58.75 496 72 496H288C292.4 496 296 499.6 296 504C296 508.4 292.4 512 288 512H72C49.91 512 32 494.1 32 472V441.9C32 428.7 36.69 415.9 45.23 405.8L385.9 2.836C388.7-.5382 393.8-.961 397.2 1.892V1.891zM294.3 315.1L438.3 499.1L425.7 508.9L287.1 332.1L150.3 508.9L137.7 499.1L281.7 315.1C283.2 313.1 285.5 312 288 312C290.5 312 292.8 313.1 294.3 315.1H294.3z"/>
</>],

]);

const Campground: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Campground.displayName = "Campground";

export default Campground;
