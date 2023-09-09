
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M160 144C160 64.47 224.5 0 304 0C383.5 0 448 64.47 448 144C448 223.5 383.5 288 304 288C224.5 288 160 223.5 160 144zM304 224C348.2 224 384 188.2 384 144C384 99.82 348.2 64 304 64C259.8 64 224 99.82 224 144C224 188.2 259.8 224 304 224z"/><path className="fa-secondary" d="M227.3 265.9L141.3 352L182.6 393.4C195.1 405.9 195.1 426.1 182.6 438.6C170.1 451.1 149.9 451.1 137.4 438.6L96 397.3L77.25 416L118.6 457.4C131.1 469.9 131.1 490.1 118.6 502.6C106.1 515.1 85.87 515.1 73.37 502.6L9.372 438.6C-3.124 426.1-3.124 405.9 9.372 393.4L182.1 220.7C193.6 238.9 209.1 254.4 227.3 265.9V265.9z"/>
</>],
['light',<>
	<path d="M214.1 256.5L102.6 368L155.3 420.7C161.6 426.9 161.6 437.1 155.3 443.3C149.1 449.6 138.9 449.6 132.7 443.3L79.1 390.6L38.63 432L91.31 484.7C97.56 490.9 97.56 501.1 91.31 507.3C85.07 513.6 74.94 513.6 68.69 507.3L4.686 443.3C-1.562 437.1-1.562 426.9 4.686 420.7L191.5 233.9C171.8 209.2 159.1 178 159.1 144C159.1 64.47 224.5 0 304 0C383.5 0 448 64.47 448 144C448 223.5 383.5 288 304 288C270 288 238.8 276.2 214.1 256.5V256.5zM304 255.1C365.9 255.1 416 205.9 416 143.1C416 82.14 365.9 31.1 304 31.1C242.1 31.1 191.1 82.14 191.1 143.1C191.1 205.9 242.1 255.1 304 255.1z"/>
</>],
['regular',<>
	<path d="M220.6 261.4L121.9 360L168.1 407C178.3 416.4 178.3 431.6 168.1 440.1C159.6 450.3 144.4 450.3 135 440.1L88 393.9L57.94 424L104.1 471C114.3 480.4 114.3 495.6 104.1 504.1C95.6 514.3 80.4 514.3 71.03 504.1L7.029 440.1C-2.343 431.6-2.343 416.4 7.029 407L186.6 227.4C169.9 203.9 160 175.1 160 144C160 64.47 224.5 0 304 0C383.5 0 448 64.47 448 144C448 223.5 383.5 288 304 288C272.9 288 244.1 278.1 220.6 261.4zM304 240C357 240 400 197 400 144C400 90.98 357 48 304 48C250.1 48 208 90.98 208 144C208 197 250.1 240 304 240z"/>
</>],
['solid',<>
	<path d="M227.3 265.9L141.3 352L182.6 393.4C195.1 405.9 195.1 426.1 182.6 438.6C170.1 451.1 149.9 451.1 137.4 438.6L96 397.3L77.25 416L118.6 457.4C131.1 469.9 131.1 490.1 118.6 502.6C106.1 515.1 85.87 515.1 73.37 502.6L9.372 438.6C-3.124 426.1-3.124 405.9 9.372 393.4L182.1 220.7C168.1 198.5 159.1 172.2 159.1 144C159.1 64.47 224.5 0 304 0C383.5 0 448 64.47 448 144C448 223.5 383.5 288 304 288C275.8 288 249.5 279.9 227.3 265.9H227.3zM304 224C348.2 224 384 188.2 384 144C384 99.82 348.2 64 304 64C259.8 64 224 99.82 224 144C224 188.2 259.8 224 304 224z"/>
</>],
['thin',<>
	<path d="M207.1 251.3L83.31 376L141.7 434.3C144.8 437.5 144.8 442.5 141.7 445.7C138.5 448.8 133.5 448.8 130.3 445.7L72 387.3L19.31 440L77.66 498.3C80.78 501.5 80.78 506.5 77.66 509.7C74.53 512.8 69.47 512.8 66.34 509.7L2.343 445.7C-.7811 442.5-.7811 437.5 2.343 434.3L196.7 240C173.9 214.5 159.1 180.9 159.1 144C159.1 64.47 224.5 0 304 0C383.5 0 448 64.47 448 144C448 223.5 383.5 288 304 288C267.1 288 233.5 274.1 207.1 251.3H207.1zM304 272C374.7 272 432 214.7 432 144C432 73.31 374.7 16 304 16C233.3 16 176 73.31 176 144C176 214.7 233.3 272 304 272z"/>
</>],

]);

const KeySkeleton: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

KeySkeleton.displayName = "KeySkeleton";

export default KeySkeleton;
