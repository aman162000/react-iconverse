
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M394.4 20.18C421.3-6.728 464.9-6.728 491.8 20.18C518.7 47.1 518.7 90.73 491.8 117.6L396.4 213.1C381.8 227.6 358.2 227.6 343.6 213.1L298.9 168.4C284.4 153.8 284.4 130.2 298.9 115.6L394.4 20.18z"/><path className="fa-secondary" d="M298.6 168.1C298.7 168.2 298.8 168.3 298.9 168.4L343.6 213.1C343.7 213.2 343.8 213.3 343.9 213.4L245.3 311.1L310.6 377.4C318.5 385.3 321.8 396.8 319.1 407.6C316.4 418.5 308.2 427.2 297.5 430.5L41.55 510.5C30.18 514.1 17.79 511 9.373 502.6C.9565 494.2-2.093 481.8 1.458 470.5L81.46 214.5C84.8 203.8 93.48 195.6 104.4 192.9C115.2 190.2 126.7 193.5 134.6 201.4L200 266.7L298.6 168.1z"/>
</>],
['light',<>
	<path d="M491.8 20.18C518.7 47.1 518.7 90.73 491.8 117.6L396.4 213.1C381.8 227.6 358.2 227.6 343.6 213.1L332.6 202L230.6 303.1L306.2 379.5C318.8 392.2 313.7 413.6 296.8 419.3L36.24 506.1C17.48 512.4-.3715 494.5 5.883 475.8L92.73 215.2C98.37 198.3 119.9 193.2 132.5 205.8L208 281.4L309.1 179.4L298.9 168.4C284.4 153.8 284.4 130.2 298.9 115.6L394.4 20.18C421.3-6.728 464.9-6.728 491.8 20.18L491.8 20.18zM321.6 138.2C319.5 140.3 319.5 143.7 321.6 145.8L366.2 190.4C368.3 192.5 371.7 192.5 373.8 190.4L469.2 95.01C483.6 80.6 483.6 57.23 469.2 42.81C454.8 28.4 431.4 28.4 416.1 42.81L321.6 138.2zM274.4 393L118.1 237.6L41.3 470.7L274.4 393z"/>
</>],
['regular',<>
	<path d="M491.8 20.18C518.7 47.1 518.7 90.73 491.8 117.6L396.4 213.1C381.8 227.6 358.2 227.6 343.6 213.1L338.2 207.7L237.9 308L312.1 383C318.9 388.9 321.3 397.5 319.3 405.6C317.4 413.7 311.3 420.3 303.4 422.8L31.39 510.8C22.81 513.6 13.4 511.3 7.03 504.1C.6563 498.6-1.609 489.2 1.166 480.6L89.17 208.6C91.74 200.7 98.26 194.6 106.4 192.7C114.5 190.7 123.1 193.1 128.1 199L204 274.1L304.3 173.8L298.9 168.4C284.4 153.8 284.4 130.2 298.9 115.6L394.4 20.18C421.3-6.728 464.9-6.728 491.8 20.18L491.8 20.18zM340.4 142L369.1 171.6L457.9 83.7C466 75.53 466 62.29 457.9 54.12C449.7 45.96 436.5 45.96 428.3 54.12L340.4 142zM122.8 260.7L61.29 450.7L251.3 389.2L122.8 260.7z"/>
</>],
['solid',<>
	<path d="M343.9 213.4L245.3 312L310.6 377.4C318.5 385.3 321.8 396.8 319.1 407.6C316.4 418.5 308.2 427.2 297.5 430.5L41.55 510.5C30.18 514.1 17.79 511 9.373 502.6C.9565 494.2-2.093 481.8 1.458 470.5L81.46 214.5C84.8 203.8 93.48 195.6 104.4 192.9C115.2 190.3 126.7 193.5 134.6 201.4L200 266.7L298.6 168.1C284.4 153.5 284.5 130.1 298.9 115.6L394.4 20.18C421.3-6.728 464.9-6.728 491.8 20.18C518.7 47.1 518.7 90.73 491.8 117.6L396.4 213.1C381.9 227.5 358.5 227.6 343.9 213.4V213.4z"/>
</>],
['thin',<>
	<path d="M298.9 168.4C284.4 153.8 284.4 130.2 298.9 115.6L394.4 20.18C421.3-6.728 464.9-6.728 491.8 20.18C518.7 47.1 518.7 90.73 491.8 117.6L396.4 213.1C381.8 227.6 358.2 227.6 343.6 213.1L326.9 196.4L227.3 296L298.6 367.3C315.3 384 308.8 412.4 286.6 420.2L49.69 503.1C24.38 511.9 .056 487.6 8.913 462.3L91.83 225.4C99.62 203.1 127.1 196.7 144.7 213.3L215.1 284.7L315.6 185.1L298.9 168.4zM310.2 126.9C301.9 135.3 301.9 148.8 310.2 157.1L354.9 201.8C363.2 210.1 376.7 210.1 385.1 201.8L480.5 106.3C501.2 85.66 501.2 52.16 480.5 31.5C459.8 10.83 426.3 10.83 405.7 31.5L310.2 126.9zM24.02 467.6C19.59 480.2 31.75 492.4 44.4 487.1L281.3 405.1C292.4 401.2 295.7 386.1 287.3 378.6L133.3 224.7C125 216.3 110.8 219.6 106.9 230.7L24.02 467.6z"/>
</>],

]);

const Trowel: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Trowel.displayName = "Trowel";

export default Trowel;
