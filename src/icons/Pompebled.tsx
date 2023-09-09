
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-secondary" d="M482.9 372.2C397.4 498.5 222.5 557.8 101.1 470.8C-20.76 383.8-28.62 196.7 56.88 70.4C103.1 1.486 188.6-20.65 247.5 21.1C294.2 53.3 302.1 127.7 265.2 194.6C259.3 203.2 261.3 214.8 269.7 220.8C278 226.8 289.3 224.8 295.2 216.3C343.4 157.9 414.1 138.8 460.3 172C519.3 213.8 529.1 303.8 482.9 372.2V372.2z"/>
</>],
['light',<>
	<path d="M257.2 22.67C310.5 59.49 315.3 139.8 278.7 206.2L278.3 206.9L277.8 207.6C277.2 208.5 277.5 209.5 278.2 210C278.4 210.2 278.5 210.2 278.6 210.2C278.7 210.3 278.8 210.3 278.9 210.3C278.9 210.2 279 210.2 279.1 210.1C279.3 210.1 279.4 209.9 279.6 209.7L279.1 209.1L280.4 208.6C328.3 150.6 403.8 126.1 456.9 164.2C520.8 209.6 528.1 304.3 482 373.9C398.6 497.1 224.9 558.9 101.5 470.4C101.5 470.4 101.5 470.4 101.5 470.4C-21.87 382.3-27.38 196.3 56.06 73.06C56.06 73.07 56.05 73.08 56.04 73.09L69.33 81.1L56.08 73.03C56.08 73.04 56.07 73.05 56.06 73.06C103.1 2.894 192.9-22.8 257.2 22.67L257.2 22.67zM238.8 48.84C192.6 16.11 122.2 31.91 82.62 90.91L82.58 90.97C5.729 204.5 14.97 369.3 120.1 444.4C224.2 519 378.6 469.5 455.5 355.1C495.1 297.3 484.9 223.3 438.3 190.3L438.2 190.3C404.8 166.2 347.9 177.5 305.5 228.5C294.8 243.2 274.4 246.8 259.4 235.1C244.7 225.4 241.2 205.2 250.1 190.2C283.1 131.4 273.1 72.44 238.1 48.96L238.8 48.84zM110.8 457.4L101.5 470.4z"/>
</>],
['regular',<>
	<path d="M254.4 22.79C299.5 54.05 309.7 114.1 292.4 169.1C337.5 134.4 395.9 122.8 440.7 154.1C505.3 200.8 512.4 295.1 466.5 363.1L466.4 363.1C386.7 480.8 219.2 542 98.49 455.5C-21.79 369.5-25.87 189.1 53.87 72.19C99.91 3.549 189.2-23.23 254.4 22.79L254.4 22.79zM226.7 62.05C188.7 35.13 128.5 47.08 93.71 98.96L93.65 99.06C23.79 202.2 33.48 350.1 126.4 416.4L126.5 416.4C218.2 482.2 356.8 439.5 426.7 336.2C461.6 284.5 451.4 221.4 412.9 194.1L412.8 193.1C387.1 175.6 339.3 182.3 301.3 227.9C288.4 245.4 263.9 249.7 245.9 236.7C228.3 223.9 224 199.9 235.5 181.9C264.1 129.3 253.3 80.37 226.1 62.22L226.7 62.05z"/>
</>],
['solid',<>
	<path d="M482.9 372.2C397.4 498.5 222.5 557.8 101.1 470.8C-20.76 383.8-28.62 196.7 56.88 70.4C103.1 1.486 188.6-20.65 247.5 21.1C294.2 53.3 302.1 127.7 265.2 194.6C259.3 203.2 261.3 214.8 269.7 220.8C278 226.8 289.3 224.8 295.2 216.3C343.4 157.9 414.1 138.8 460.3 172C519.3 213.8 529.1 303.8 482.9 372.2V372.2z"/>
</>],
['thin',<>
	<path d="M252.4 21.89C302.4 56.4 308.7 133.8 271.1 200.4L271.8 200.8L271.5 201.1C268.3 205.8 269.4 212.1 273.9 215.4C278.3 218.6 284.2 217.6 287.4 212.1L287.6 212.7L287.8 212.4C335.8 154.3 408.1 132.5 458.6 168.1C520.1 211.7 529 304.1 482.5 373.1C398 497.8 223.7 558.4 101.3 470.6C101.3 470.6 101.3 470.6 101.3 470.6C-21.32 383-28 196.5 56.47 71.73C103.1 2.191 190.7-21.72 252.4 21.89L252.4 21.89zM243.2 34.97C190.6-2.27 112.6 16.7 69.75 80.65L69.73 80.69C-11.45 200.6-2.899 376.5 110.6 457.6C223.3 538.4 388 484 469.2 364.1C512.1 300.5 502.1 218.5 449.3 181.2L449.3 181.1C409.5 152.5 345.6 167.7 300.4 222.4C292.1 234 276.2 236.8 264.5 228.4C253 220.1 250.3 204.2 258.1 192.4C292.6 129.5 283.6 62.86 243.3 35.03L243.2 34.97zM105.9 464.1L101.3 470.6L105.9 464.1zM56.47 71.73C56.46 71.73 56.47 71.72 56.47 71.73V71.73zM63.1 76.2L56.47 71.73z"/>
</>],

]);

const Pompebled: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Pompebled.displayName = "Pompebled";

export default Pompebled;
