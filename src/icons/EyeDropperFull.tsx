
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M482.8 29.23C521.7 68.21 521.7 131.4 482.8 170.4L381.2 271.9L390.6 281.4C403.1 293.9 403.1 314.1 390.6 326.6C378.1 339.1 357.9 339.1 345.4 326.6L185.4 166.6C172.9 154.1 172.9 133.9 185.4 121.4C197.9 108.9 218.1 108.9 230.6 121.4L240.1 130.8L341.6 29.23C380.6-9.744 443.8-9.744 482.8 29.23L482.8 29.23zM132.1 416H96V379.9C96 375.6 97.69 371.6 100.7 368.6L218.6 250.6L261.4 293.4L143.4 411.3C140.4 414.3 136.4 416 132.1 416L132.1 416z"/><path className="fa-secondary" d="M244 225.3L100.7 368.6C97.69 371.6 96 375.6 96 379.9V416H132.1C136.4 416 140.4 414.3 143.4 411.3L286.7 268L332 313.3L188.7 456.6C173.7 471.6 153.3 480 132.1 480H89.69L49.75 506.6C37.06 515.1 20.16 513.4 9.372 502.6C-1.414 491.8-3.087 474.9 5.374 462.2L32 422.3V379.9C32 358.7 40.43 338.3 55.43 323.3L198.7 180L244 225.3z"/>
</>],
['light',<>
	<path d="M180.7 155.3C174.4 149.1 174.4 138.9 180.7 132.7C186.9 126.4 197.1 126.4 203.3 132.7L220.7 150.1L341.6 29.23C380.6-9.744 443.8-9.744 482.8 29.23C521.7 68.21 521.7 131.4 482.8 170.4L361.9 291.3L379.3 308.7C385.6 314.9 385.6 325.1 379.3 331.3C373.1 337.6 362.9 337.6 356.7 331.3L180.7 155.3zM339.3 268.6L460.1 147.8C486.6 121.3 486.6 78.34 460.1 51.86C433.7 25.38 390.7 25.38 364.2 51.86L243.4 172.7L339.3 268.6zM299.3 324.7C305.6 330.9 305.6 341.1 299.3 347.3L190.1 456.6C175.1 471.6 154.7 480 133.5 480H92.25L42.85 508.2C38.53 510.7 33.63 512 28.64 512C12.82 512 0 499.2 0 483.4C0 478.4 1.301 473.5 3.774 469.1L32 419.8V378.5C32 357.3 40.43 336.9 55.43 321.9L164.7 212.7C170.9 206.4 181.1 206.4 187.3 212.7L299.3 324.7zM64 378.5V428.2L37.67 474.3L83.75 448H133.5C146.2 448 158.4 442.9 167.4 433.9L265.4 336L175.1 246.6L78.06 344.6C69.06 353.6 63.1 365.8 63.1 378.5L64 378.5z"/>
</>],
['regular',<>
	<path d="M191 160.1C181.7 151.6 181.7 136.4 191 127C200.4 117.7 215.6 117.7 224.1 127L232.1 135L338.2 29.82C357.3 10.73 383.2 0 410.2 0C466.4 0 512 45.59 512 101.8C512 128.8 501.3 154.7 482.2 173.8L376.1 279L384.1 287C394.3 296.4 394.3 311.6 384.1 320.1C375.6 330.3 360.4 330.3 351 320.1L191 160.1zM464 101.8C464 72.1 439.9 48 410.2 48C395.9 48 382.2 53.67 372.1 63.76L266.9 168.1L343 245.1L448.2 139.9C458.3 129.8 464 116.1 464 101.8V101.8zM53.09 328.1L183.4 198.6L313.4 328.6L183 458.9C169.5 472.4 151.2 480 132.1 480H79.27L37.31 507.1C27.79 514.3 15.12 513.1 7.03 504.1C-1.06 496.9-2.315 484.2 4.031 474.7L32 432.7V379.9C32 360.8 39.59 342.5 53.09 328.1H53.09z"/>
</>],
['solid',<>
	<path d="M482.8 29.23C521.7 68.21 521.7 131.4 482.8 170.4L381.2 271.9L390.6 281.4C403.1 293.9 403.1 314.1 390.6 326.6C378.1 339.1 357.9 339.1 345.4 326.6L185.4 166.6C172.9 154.1 172.9 133.9 185.4 121.4C197.9 108.9 218.1 108.9 230.6 121.4L240.1 130.8L341.6 29.23C380.6-9.744 443.8-9.744 482.8 29.23L482.8 29.23zM55.43 323.3L176.1 202.6L309.4 335.9L188.7 456.6C173.7 471.6 153.3 480 132.1 480H89.69L49.75 506.6C37.06 515.1 20.16 513.4 9.373 502.6C-1.413 491.8-3.086 474.9 5.375 462.2L32 422.3V379.9C32 358.7 40.43 338.3 55.43 323.3L55.43 323.3z"/>
</>],
['thin',<>
	<path d="M186.3 133.7C183.2 130.5 183.2 125.5 186.3 122.3C189.5 119.2 194.5 119.2 197.7 122.3L223.1 147.8L341.6 29.23C380.6-9.744 443.8-9.744 482.8 29.23C521.7 68.21 521.7 131.4 482.8 170.4L364.2 288.9L389.7 314.3C392.8 317.5 392.8 322.5 389.7 325.7C386.5 328.8 381.5 328.8 378.3 325.6L186.3 133.7zM471.5 40.55C438.7 7.818 385.7 7.818 352.9 40.55L234.4 159.1L352.9 277.6L471.5 159.1C504.2 126.3 504.2 73.27 471.5 40.55V40.55zM317.7 314.3C320.8 317.5 320.8 322.5 317.7 325.7L184.4 458.9C170.9 472.4 152.6 480 133.5 480H82.42L41.08 507.6C36.74 510.5 31.64 512 26.42 512C11.83 512 0 500.2 0 485.6C0 480.4 1.544 475.3 4.438 470.9L32 429.6V378.5C32 359.4 39.59 341.1 53.09 327.6L186.3 194.3C189.5 191.2 194.5 191.2 197.7 194.3L317.7 314.3zM47.1 378.5V434.4L17.75 479.8C16.61 481.5 15.1 483.5 15.1 485.6C15.1 491.3 20.67 496 26.42 496C28.48 496 30.49 495.4 32.2 494.2L77.58 464H133.5C148.3 464 162.6 458.1 173.1 447.6L300.7 320L191.1 211.3L64.4 338.9C53.9 349.4 47.1 363.7 47.1 378.5V378.5zM482.5 29.51L471.5 40.55z"/>
</>],

]);

const EyeDropperFull: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

EyeDropperFull.displayName = "EyeDropperFull";

export default EyeDropperFull;
