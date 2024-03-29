
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L630.8 469.1C641.2 477.3 643.1 492.4 634.9 502.8C626.7 513.2 611.6 515.1 601.2 506.9L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196V9.196z"/><path className="fa-secondary" d="M138.6 83.31C167.8 51.75 209.6 32 255.1 32C315.3 32 367 64.25 394.7 112.2C409.9 101.1 428.3 96 448 96C501 96 544 138.1 544 192C544 204.2 541.7 215.8 537.6 226.6C596 238.4 640 290.1 640 352C640 388.6 624.6 421.6 599.1 444.1L138.6 83.31zM97.17 172.6L487.4 480H143.1C64.47 480-.001 415.5-.001 336C-.001 273.2 40.17 219.8 96.2 200.1C96.07 197.4 95.1 194.7 95.1 192C95.1 185.4 96.4 178.9 97.17 172.6V172.6z"/>
</>],
['light',<>
	<path d="M633.9 483.4C640.9 488.9 642 498.1 636.6 505.9C631.1 512.9 621 514 614.1 508.6L6.087 28.56C-.849 23.08-2.033 13.02 3.443 6.086C8.918-.8493 18.98-2.033 25.92 3.443L633.9 483.4zM640 352C640 374.6 634.1 395.9 623.8 414.3L598.3 394.2C604.5 381.4 608 367.1 608 352C608 315.2 587.3 283.2 556.8 267.1C543.4 259.1 536.8 244.5 540.9 229.1C542.9 223 544 215.7 544 208C544 163.8 508.2 128 464 128C451.7 128 440.1 130.8 429.7 135.7C415.7 142.4 398.8 137.9 389.8 125.2C363.7 88.12 320.7 64 272 64C246.8 64 223.2 70.45 202.6 81.79L175.8 60.61C203.4 42.52 236.5 32 272 32C331.5 32 384.1 61.55 416 106.8C430.5 99.87 446.8 96 464 96C525.9 96 576 146.1 576 208C576 218.7 574.5 228.1 571.7 238.8C612.3 260.2 640 302.9 640 352V352zM101.3 164.9L129.5 187.1C128.8 191.9 128.4 196.7 128.1 201.5C127.6 214.6 119.1 225.1 106.8 230.3C63.18 245.7 32 287.2 32 336C32 397.9 82.14 448 144 448H459.9L500.4 480H144C64.47 480 0 415.5 0 336C0 273.2 40.15 219.9 96.17 200.1C96.71 188 98.46 176.2 101.3 164.9V164.9z"/>
</>],
['regular',<>
	<path d="M141.2 85.36C171.9 52.53 215.5 32 264 32C314.9 32 360.4 54.6 391.3 90.31C406.2 83.69 422.6 80 440 80C506.3 80 560 133.7 560 200C560 206.6 559.5 213 558.5 219.3C606.5 240.3 640 288.3 640 344C640 382.1 623.6 418.1 597.4 442.9L630.8 469.1C641.2 477.3 643.1 492.4 634.9 502.8C626.7 513.2 611.6 515.1 601.2 506.9L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L141.2 85.36zM179.2 115.1L558.9 412.8C579.1 396.6 592 371.8 592 344C592 308 570.4 276.9 539.2 263.3L505.1 248.4L511.1 211.7C511.7 207.9 512 204 512 200C512 160.2 479.8 128 440 128C429.5 128 419.6 130.2 410.8 134.2L378.2 148.7L354.9 121.7C332.8 96.08 300.3 80 263.1 80C230.9 80 200.9 93.42 179.2 115.1L179.2 115.1zM426.5 432L487.4 480H144C64.47 480 0 415.5 0 336C0 273.3 40.07 219.1 96 200.2V200C96 190.9 96.72 181.1 98.11 173.3L144 209.5L144 234.1L111.1 245.5C74.64 258.7 47.1 294.3 47.1 336C47.1 389 90.98 432 143.1 432H426.5z"/>
</>],
['solid',<>
	<path d="M138.6 83.31C167.8 51.76 209.6 32 256 32C315.3 32 367 64.25 394.7 112.2C409.9 101.1 428.3 96 448 96C501 96 544 138.1 544 192C544 204.2 541.7 215.8 537.6 226.6C596 238.4 640 290.1 640 352C640 388.6 624.6 421.6 599.1 444.1L630.8 469.1C641.2 477.3 643.1 492.4 634.9 502.8C626.7 513.2 611.6 515.1 601.2 506.9L9.197 42.89C-1.236 34.71-3.064 19.63 5.113 9.196C13.29-1.236 28.37-3.065 38.81 5.112L138.6 83.31zM97.17 172.6L487.4 480H144C64.47 480 0 415.5 0 336C0 273.2 40.17 219.8 96.2 200.1C96.07 197.4 96 194.7 96 192C96 185.4 96.4 178.9 97.17 172.6V172.6z"/>
</>],
['thin',<>
	<path d="M636.1 497.7C640.4 500.5 641 505.5 638.3 508.1C635.5 512.4 630.5 513 627 510.3L3.023 14.26C-.4358 11.51-1.011 6.481 1.739 3.022C4.488-.4365 9.52-1.012 12.98 1.738L636.1 497.7zM640 352C640 371.7 635.5 390.4 627.6 407.1L614.6 396.9C620.7 383.1 624 367.1 624 352C624 297.8 585.5 252.6 534.4 242.2C529.8 241.3 525.8 238.4 523.6 234.2C521.3 230.1 520.1 225.2 522.7 220.8C526.1 211.9 528 202.2 528 192C528 147.8 492.2 112 448 112C431.5 112 416.3 116.1 403.6 125.5C399.9 127.9 395.4 128.7 391.1 127.7C386.7 126.7 383 123.1 380.8 120.2C355.9 76.99 309.3 48 256 48C232.9 48 211.1 53.42 191.8 63.06L178.1 52.22C201.1 39.34 227.7 32 256 32C309.6 32 356.1 58.31 386 98.71C389.1 103 392 107.5 394.7 112.2C398.2 109.8 401.9 107.7 405.7 105.8C418.5 99.52 432.8 96 448 96C501 96 544 138.1 544 192C544 198.6 543.3 204.1 542.1 211.2C541 216.5 539.5 221.6 537.6 226.6C542.9 227.6 548.1 229 553.1 230.7C603.6 247.9 640 295.7 640 352zM97.25 171.9L112.2 183.7C112.1 186.5 112 189.2 112 192C112 194.5 112.1 196.9 112.2 199.3C112.5 206.4 108.2 212.9 101.5 215.2C51.68 232.7 16 280.2 16 336C16 406.7 73.31 464 144 464H467.3L487.5 480H144C64.47 480 0 415.5 0 336C0 273.2 40.17 219.8 96.2 200.1C96.07 197.4 96 194.7 96 192C96 185.2 96.43 178.5 97.25 171.9H97.25z"/>
</>],

]);

const CloudSlash: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CloudSlash.displayName = "CloudSlash";

export default CloudSlash;
