
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-secondary" d="M364.2 83.8C339.8 59.39 300.2 59.39 275.8 83.8L91.8 267.8C49.71 309.9 49.71 378.1 91.8 420.2C133.9 462.3 202.1 462.3 244.2 420.2L396.2 268.2C407.1 257.3 424.9 257.3 435.8 268.2C446.7 279.1 446.7 296.9 435.8 307.8L283.8 459.8C219.8 523.8 116.2 523.8 52.2 459.8C-11.75 395.8-11.75 292.2 52.2 228.2L236.2 44.2C282.5-2.08 357.5-2.08 403.8 44.2C450.1 90.48 450.1 165.5 403.8 211.8L227.8 387.8C199.2 416.4 152.8 416.4 124.2 387.8C95.59 359.2 95.59 312.8 124.2 284.2L268.2 140.2C279.1 129.3 296.9 129.3 307.8 140.2C318.7 151.1 318.7 168.9 307.8 179.8L163.8 323.8C157.1 330.5 157.1 341.5 163.8 348.2C170.5 354.9 181.5 354.9 188.2 348.2L364.2 172.2C388.6 147.8 388.6 108.2 364.2 83.8V83.8z"/>
</>],
['light',<>
	<path d="M380.7 67.31C351.6 38.22 304.4 38.22 275.3 67.31L83.31 259.3C36.54 306.1 36.54 381.9 83.31 428.7C130.1 475.5 205.9 475.5 252.7 428.7L404.7 276.7C410.9 270.4 421.1 270.4 427.3 276.7C433.6 282.9 433.6 293.1 427.3 299.3L275.3 451.3C216 510.6 119.1 510.6 60.69 451.3C1.417 392 1.418 295.1 60.69 236.7L252.7 44.69C294.3 3.092 361.7 3.092 403.3 44.69C444.9 86.28 444.9 153.7 403.3 195.3L219.5 379.1C191.3 407.3 144.9 404.7 119.1 373.6C98.67 346.1 100.8 308.6 124.9 284.5L276.7 132.7C282.9 126.4 293.1 126.4 299.3 132.7C305.6 138.9 305.6 149.1 299.3 155.3L147.5 307.1C134.1 319.7 133.8 339.7 144.1 353.6C157.1 369.8 182.2 371.2 196.9 356.5L380.7 172.7C409.8 143.6 409.8 96.41 380.7 67.31L380.7 67.31z"/>
</>],
['regular',<>
	<path d="M375 72.97C349.1 46.1 306.9 46.1 280.1 72.97L88.97 264.1C45.32 308.6 45.32 379.4 88.97 423C132.6 466.7 203.4 466.7 247 423L399 271C408.4 261.7 423.6 261.7 432.1 271C442.3 280.4 442.3 295.6 432.1 304.1L280.1 456.1C218.6 519.4 117.4 519.4 55.03 456.1C-7.364 394.6-7.364 293.4 55.03 231L247 39.03C291.7-5.689 364.2-5.689 408.1 39.03C453.7 83.75 453.7 156.3 408.1 200.1L225.2 384.7C193.6 416.3 141.6 413.4 113.7 378.6C89.88 348.8 92.26 305.8 119.2 278.8L271 127C280.4 117.7 295.6 117.7 304.1 127C314.3 136.4 314.3 151.6 304.1 160.1L153.2 312.7C143.5 322.4 142.6 337.9 151.2 348.6C161.2 361.1 179.9 362.2 191.2 350.8L375 167C401 141.1 401 98.94 375 72.97V72.97z"/>
</>],
['solid',<>
	<path d="M364.2 83.8C339.8 59.39 300.2 59.39 275.8 83.8L91.8 267.8C49.71 309.9 49.71 378.1 91.8 420.2C133.9 462.3 202.1 462.3 244.2 420.2L396.2 268.2C407.1 257.3 424.9 257.3 435.8 268.2C446.7 279.1 446.7 296.9 435.8 307.8L283.8 459.8C219.8 523.8 116.2 523.8 52.2 459.8C-11.75 395.8-11.75 292.2 52.2 228.2L236.2 44.2C282.5-2.08 357.5-2.08 403.8 44.2C450.1 90.48 450.1 165.5 403.8 211.8L227.8 387.8C199.2 416.4 152.8 416.4 124.2 387.8C95.59 359.2 95.59 312.8 124.2 284.2L268.2 140.2C279.1 129.3 296.9 129.3 307.8 140.2C318.7 151.1 318.7 168.9 307.8 179.8L163.8 323.8C157.1 330.5 157.1 341.5 163.8 348.2C170.5 354.9 181.5 354.9 188.2 348.2L364.2 172.2C388.6 147.8 388.6 108.2 364.2 83.8V83.8z"/>
</>],
['thin',<>
	<path d="M386.3 61.66C354.1 29.43 301.9 29.43 269.7 61.66L77.66 253.7C27.76 303.6 27.76 384.4 77.66 434.3C127.6 484.2 208.4 484.2 258.3 434.3L410.3 282.3C413.5 279.2 418.5 279.2 421.7 282.3C424.8 285.5 424.8 290.5 421.7 293.7L269.7 445.7C213.5 501.8 122.5 501.8 66.34 445.7C10.2 389.5 10.2 298.5 66.34 242.3L258.3 50.34C296.8 11.87 359.2 11.87 397.7 50.34C436.1 88.81 436.1 151.2 397.7 189.7L213.9 373.4C189 398.3 148.2 395.1 126.2 368.6C107.5 345.1 109.3 311.3 130.6 290.1L282.3 138.3C285.5 135.2 290.5 135.2 293.7 138.3C296.8 141.5 296.8 146.5 293.7 149.7L141.9 301.4C126.4 316.9 125.1 341.5 138.7 358.6C154.7 378.6 184.5 380.2 202.6 362.1L386.3 178.3C418.6 146.1 418.6 93.88 386.3 61.66V61.66z"/>
</>],

]);

const Paperclip: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Paperclip.displayName = "Paperclip";

export default Paperclip;
