
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368C352 288.5 416.5 224 496 224C575.5 224 640 288.5 640 368zM496 416C482.7 416 472 426.7 472 440C472 453.3 482.7 464 496 464C509.3 464 520 453.3 520 440C520 426.7 509.3 416 496 416zM511.1 288C511.1 279.2 504.8 272 495.1 272C487.2 272 479.1 279.2 479.1 288V368C479.1 376.8 487.2 384 495.1 384C504.8 384 511.1 376.8 511.1 368V288z"/><path className="fa-secondary" d="M0 24C0 10.75 10.75 0 24 0H96C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L537.6 196.9C524.3 193.7 510.3 192 496 192C427.6 192 368.3 231 339.2 288H170.7L179.9 336H322.9C320.1 346.4 319.1 357.1 319.1 368C319.1 373.4 320.2 378.7 320.7 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.26 0 24L0 24zM224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464z"/>
</>],
['light',<>
	<path d="M79.1 0C87.47 0 93.95 5.17 95.6 12.45L100 32H541.8C562.1 32 578.3 52.25 572.6 72.66L537.6 196.9C527.3 194.4 516.6 192.9 505.7 192.3L541.8 64H107.3L150.1 256H360.2C352.1 265.8 345 276.6 339.2 288H158.2L172.8 352H320.7C320.2 357.3 320 362.6 320 368C320 373.4 320.2 378.7 320.7 384H160C152.5 384 146.1 378.8 144.4 371.5L67.23 32H16C7.164 32 0 24.84 0 16C0 7.164 7.164 .0003 16 .0003L79.1 0zM127.1 456C127.1 425.1 153.1 400 183.1 400C214.9 400 239.1 425.1 239.1 456C239.1 486.9 214.9 512 183.1 512C153.1 512 127.1 486.9 127.1 456zM183.1 480C197.3 480 207.1 469.3 207.1 456C207.1 442.7 197.3 432 183.1 432C170.7 432 159.1 442.7 159.1 456C159.1 469.3 170.7 480 183.1 480zM480 432C480 423.2 487.2 416 496 416C504.8 416 512 423.2 512 432C512 440.8 504.8 448 496 448C487.2 448 480 440.8 480 432zM495.1 288C504.8 288 511.1 295.2 511.1 304V384C511.1 392.8 504.8 400 495.1 400C487.2 400 479.1 392.8 479.1 384V304C479.1 295.2 487.2 288 495.1 288zM640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368C352 288.5 416.5 224 496 224C575.5 224 640 288.5 640 368zM496 256C434.1 256 384 306.1 384 368C384 429.9 434.1 480 496 480C557.9 480 608 429.9 608 368C608 306.1 557.9 256 496 256z"/>
</>],
['regular',<>
	<path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L537.6 196.9C524.3 193.7 510.3 192 496 192C493.7 192 491.4 192 489.1 192.1L520.6 80H131.1L161.6 240H375.2C360.6 253.8 348.4 269.1 339.2 288H170.7L179.9 336H322.9C320.1 346.4 319.1 357.1 319.1 368C319.1 373.4 320.2 378.7 320.7 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.26 0 24C0 10.75 10.75 .0003 24 .0003L96 0zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM352 368C352 288.5 416.5 224 496 224C575.5 224 640 288.5 640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368zM496 464C509.3 464 520 453.3 520 440C520 426.7 509.3 416 496 416C482.7 416 472 426.7 472 440C472 453.3 482.7 464 496 464zM479.1 288V368C479.1 376.8 487.2 384 495.1 384C504.8 384 511.1 376.8 511.1 368V288C511.1 279.2 504.8 272 495.1 272C487.2 272 479.1 279.2 479.1 288z"/>
</>],
['solid',<>
	<path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L537.6 196.9C524.3 193.7 510.3 192 496 192C427.6 192 368.3 231 339.2 288H170.7L179.9 336H322.9C320.1 346.4 319.1 357.1 319.1 368C319.1 373.4 320.2 378.7 320.7 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.26 0 24C0 10.75 10.75 .0003 24 .0003L96 0zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM352 368C352 288.5 416.5 224 496 224C575.5 224 640 288.5 640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368zM496 464C509.3 464 520 453.3 520 440C520 426.7 509.3 416 496 416C482.7 416 472 426.7 472 440C472 453.3 482.7 464 496 464zM479.1 288V368C479.1 376.8 487.2 384 495.1 384C504.8 384 511.1 376.8 511.1 368V288C511.1 279.2 504.8 272 495.1 272C487.2 272 479.1 279.2 479.1 288z"/>
</>],
['thin',<>
	<path d="M64 0C67.64 0 70.82 2.458 71.74 5.98L78.53 32H541.8C562.1 32 578.3 52.25 572.6 72.66L537.6 196.9C532.4 195.7 527.2 194.7 521.8 193.9L557.2 68.33C560 58.13 552.4 48 541.8 48H82.7L141.1 272H348.5C345.1 277.2 342 282.5 339.2 288H145.3L166.2 368H319.1C319.1 373.4 320.2 378.7 320.7 384H159.1C156.4 384 153.2 381.5 152.3 378L57.82 16H8C3.582 16 0 12.42 0 8C0 3.582 3.582 .0003 8 .0003L64 0zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM176 496C193.7 496 208 481.7 208 464C208 446.3 193.7 432 176 432C158.3 432 144 446.3 144 464C144 481.7 158.3 496 176 496zM480 432C480 423.2 487.2 416 496 416C504.8 416 512 423.2 512 432C512 440.8 504.8 448 496 448C487.2 448 480 440.8 480 432zM495.1 280C500.4 280 503.1 283.6 503.1 288V384C503.1 388.4 500.4 392 495.1 392C491.6 392 487.1 388.4 487.1 384V288C487.1 283.6 491.6 280 495.1 280zM640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368C352 288.5 416.5 224 496 224C575.5 224 640 288.5 640 368zM496 240C425.3 240 368 297.3 368 368C368 438.7 425.3 496 496 496C566.7 496 624 438.7 624 368C624 297.3 566.7 240 496 240z"/>
</>],

]);

const CartCircleExclamation: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CartCircleExclamation.displayName = "CartCircleExclamation";

export default CartCircleExclamation;