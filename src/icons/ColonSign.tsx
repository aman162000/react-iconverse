
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M192 127.1C121.3 127.1 64 185.3 64 255.1C64 326.7 121.3 384 192 384C220.9 384 247.4 374.5 268.8 358.4C282.9 347.8 302.1 350.6 313.6 364.8C324.2 378.9 321.4 398.1 307.2 409.6C275.1 433.7 235.2 448 192 448C85.96 448 0 362 0 256C0 149.1 85.96 64 192 64C235.2 64 275.1 78.3 307.2 102.4C321.4 113 324.2 133.1 313.6 147.2C302.1 161.4 282.9 164.2 268.8 153.6C247.4 137.5 220.9 128 192 128V127.1z"/><path className="fa-secondary" d="M216.6 65.56C208.5 64.53 200.3 64 192 64C177.5 64 163.4 65.6 149.9 68.64L160.1 24.24C165.2 7.093 182.6-3.331 199.8 .9552C216.9 5.242 227.3 22.62 223 39.76L216.6 65.56zM139.8 372.9C117.5 362.9 98.67 346.8 85.32 326.8L131.2 143.3C149.3 133.6 169.1 128 192 128C194.1 128 197.1 128.1 200.9 128.3L139.8 372.9zM167.6 381.7L229.6 133.6C243.9 137.1 257.1 144.8 268.8 153.6C274.8 158.1 281.1 160.2 288.1 159.1L234.8 376.7C221.4 381.4 207 384 192 384C183.7 384 175.5 383.2 167.6 381.7V381.7zM111 487.8C106.8 504.9 89.38 515.3 72.24 511C55.09 506.8 44.67 489.4 48.96 472.2L66.65 401.4C83.5 415.1 102.9 427.6 124.1 435.6L111 487.8zM152.1 443.8C164.9 446.6 178.3 448 192 448C200.6 448 209.1 447.4 217.4 446.3L207 487.8C202.8 504.9 185.4 515.3 168.2 511C151.1 506.8 140.7 489.4 144.1 472.2L152.1 443.8zM303.1 100C286.4 87.36 266.5 77.61 245.1 71.46L256.1 24.24C261.2 7.093 278.6-3.331 295.8 .9552C312.9 5.242 323.3 22.62 319 39.76L303.1 100z"/>
</>],
['light',<>
	<path d="M213.1 64.72C228.7 66.04 243.7 69.15 258.1 73.84L272.4 12.36C274.4 3.759 283-1.59 291.6 .4181C300.2 2.426 305.6 11.03 303.6 19.64L287.1 86.43C296.9 91.09 305.4 96.4 313.5 102.3C320.6 107.5 322.1 117.6 316.9 124.7C311.7 131.8 301.6 133.3 294.5 128.1C290 124.8 285.3 121.7 280.4 118.8L211.3 415.3C242.4 412.5 270.9 401.2 294.5 383.9C301.6 378.7 311.7 380.2 316.9 387.3C322.1 394.4 320.6 404.5 313.5 409.7C282.6 432.4 244.7 446.3 203.7 447.9L191.6 499.6C189.6 508.2 180.1 513.6 172.4 511.6C163.8 509.6 158.4 500.1 160.4 492.4L171.1 446.5C155.6 444.5 140.7 440.8 126.5 435.6L111.6 499.6C109.6 508.2 100.1 513.6 92.36 511.6C83.76 509.6 78.41 500.1 80.42 492.4L96.91 421.7C39.01 388.4 0 326.8 0 256C0 154.9 79.64 72.47 180.2 64.61L192.4 12.36C194.4 3.759 203-1.59 211.6 .4181C220.2 2.426 225.6 11.03 223.6 19.64L213.1 64.72zM172.5 97.62C92.83 108.7 32 175.7 32 256C32 311.2 60.73 360.1 104.6 388.9L172.5 97.62zM178.4 415.1L250.8 105.1C236.6 100.2 221.4 97.17 205.7 96.28L133.9 404.1C147.9 409.7 162.8 413.5 178.4 415.1V415.1z"/>
</>],
['regular',<>
	<path d="M212.9 72.86C222.9 73.78 232.8 75.44 242.3 77.76L256.7 18.37C259.8 5.481 272.7-2.442 285.6 .6677C298.5 3.778 306.4 16.74 303.3 29.63L287.6 94.8C295.4 98.86 302.8 103.4 309.9 108.4C320.7 116.1 323.2 131 315.6 141.9C307.9 152.7 292.1 155.2 282.1 147.6C280.1 146.1 278 144.7 275.9 143.4L216.2 390.4C240.8 386.9 263.3 377.7 282.1 364.4C292.1 356.7 307.9 359.3 315.6 370.1C323.2 380.1 320.7 395.9 309.9 403.6C280 424.7 243.7 437.8 204.3 439.7L191.3 493.6C188.2 506.5 175.3 514.4 162.4 511.3C149.5 508.2 141.6 495.3 144.7 482.4L155.8 436.4C145.9 434.5 136.3 431.9 127 428.7L111.3 493.6C108.2 506.5 95.25 514.4 82.37 511.3C69.48 508.2 61.56 495.3 64.67 482.4L82.9 406.8C33.04 373.8 0 319 0 255.1C0 163.2 71.63 88.26 163.2 74.32L176.7 18.37C179.8 5.482 192.7-2.442 205.6 .6684C218.5 3.778 226.4 16.74 223.3 29.63L212.9 72.86zM150.7 126C90.52 143.4 48 195.9 48 255.1C48 295.1 66 331 95.15 356.1L150.7 126zM167 389.7L231.1 124.4C221.6 122.1 211.7 120.7 201.5 120.2L138.3 381.8C147.4 385.3 157 387.1 167 389.7V389.7z"/>
</>],
['solid',<>
	<path d="M216.6 65.56C226.4 66.81 235.9 68.8 245.2 71.46L256.1 24.24C261.2 7.093 278.6-3.331 295.8 .9552C312.9 5.242 323.3 22.62 319 39.76L303.1 100C305.1 100.8 306.2 101.6 307.2 102.4C321.4 113 324.2 133.1 313.6 147.2C307.5 155.3 298.4 159.7 288.1 159.1L234.8 376.7C247.1 372.3 258.5 366.1 268.8 358.4C282.9 347.8 302.1 350.6 313.6 364.8C324.2 378.9 321.4 398.1 307.2 409.6C281.5 428.9 250.8 441.9 217.4 446.3L207 487.8C202.8 504.9 185.4 515.3 168.2 511C151.1 506.8 140.7 489.4 144.1 472.2L152.1 443.8C142.4 441.8 133.1 439.1 124.1 435.6L111 487.8C106.8 504.9 89.38 515.3 72.24 511C55.09 506.8 44.67 489.4 48.96 472.2L66.65 401.4C25.84 366.2 0 314.1 0 256C0 164.4 64.09 87.85 149.9 68.64L160.1 24.24C165.2 7.093 182.6-3.331 199.8 .9552C216.9 5.242 227.3 22.62 223 39.76L216.6 65.56zM131.2 143.3C91.17 164.1 64 207.3 64 256C64 282.2 71.85 306.5 85.32 326.8L131.2 143.3zM167.6 381.7L229.6 133.6C220.4 130.8 210.8 128.1 200.9 128.3L139.8 372.9C148.6 376.8 157.9 379.8 167.6 381.7V381.7z"/>
</>],
['thin',<>
	<path d="M203.5 64.07C224.9 64.64 245.5 68.5 264.6 75.15L280.2 6.238C281.2 1.928 285.5-.7769 289.8 .1962C294.1 1.169 296.8 5.452 295.8 9.762L279.7 81.07C292.9 86.86 305.3 94.01 316.7 102.3C320.3 104.9 321.1 109.9 318.5 113.5C315.9 117.1 310.9 117.9 307.3 115.3C297.6 108.2 287.2 102.1 276.1 96.99L200.5 431.1C240.6 431.5 277.5 418.4 307.3 396.7C310.9 394.1 315.9 394.9 318.5 398.5C321.1 402.1 320.3 407.1 316.7 409.7C283.6 433.8 242.5 448 197.1 448C197.6 448 197.2 448 196.8 447.1L183.8 505.8C182.8 510.1 178.5 512.8 174.2 511.8C169.9 510.8 167.2 506.5 168.2 502.2L180.6 447.3C159.4 445.5 139.1 440.4 120.3 432.7L103.8 505.8C102.8 510.1 98.55 512.8 94.24 511.8C89.93 510.8 87.22 506.5 88.2 502.2L105.5 425.8C42.8 393.6 0 329.8 0 256C0 153.3 83.03 69.77 187.1 64.29L200.2 6.238C201.2 1.928 205.5-.7769 209.8 .1962C214.1 1.169 216.8 5.452 215.8 9.762L203.5 64.07zM183.4 80.55C89.52 87.74 16 163.8 16 255.1C16 321.9 53.48 379.5 109.1 409.6L183.4 80.55zM184.2 431.5L261.1 90.86C242 84.05 221.4 80.23 199.9 80.01L123.9 416.8C142.5 424.9 162.8 429.1 184.2 431.5z"/>
</>],

]);

const ColonSign: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={320} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ColonSign.displayName = "ColonSign";

export default ColonSign;
