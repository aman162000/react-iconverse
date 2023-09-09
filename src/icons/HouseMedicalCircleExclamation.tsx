
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368C352 288.5 416.5 224 496 224C575.5 224 640 288.5 640 368zM496 416C482.7 416 472 426.7 472 440C472 453.3 482.7 464 496 464C509.3 464 520 453.3 520 440C520 426.7 509.3 416 496 416zM511.1 288C511.1 279.2 504.8 272 495.1 272C487.2 272 479.1 279.2 479.1 288V368C479.1 376.8 487.2 384 495.1 384C504.8 384 511.1 376.8 511.1 368V288z"/><path className="fa-secondary" d="M496 192C453.6 192 414.7 207 384.3 232C384.2 232 384.1 232 384 232H328V176C328 167.2 320.8 160 312 160H264C255.2 160 248 167.2 248 176V232H192C183.2 232 176 239.2 176 248V296C176 304.8 183.2 312 192 312H248V368C248 376.8 255.2 384 264 384H312C315.1 384 318 383.1 320.5 381.5C324.6 435.5 353 482.6 394.8 512H128.1C92.75 512 64.09 483.3 64.09 448V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L522.1 193.9C513.6 192.7 504.9 192 496 192H496z"/>
</>],
['light',<>
	<path d="M277.4 4.002C283.5-1.334 292.5-1.334 298.6 4.002L512.5 192.8C507.1 192.3 501.6 192 496 192C485.8 192 475.8 192.9 466.1 194.5L288 37.34L96 206.7V432C96 458.5 117.5 480 144 480H360.2C370.3 492.1 381.9 502.9 394.8 512H144C99.82 512 64 476.2 64 432V234.1L26.59 267.1C19.96 273.8 9.849 273.2 4.003 266.6C-1.844 259.1-1.212 249.8 5.414 244L277.4 4.002zM354 264H312V192H264V264H192V312H264V384H320.7C321.6 393.9 323.3 403.5 325.8 412.9C321.6 414.9 316.9 416 312 416H264C246.3 416 232 401.7 232 384V344H192C174.3 344 160 329.7 160 312V264C160 246.3 174.3 232 192 232H232V192C232 174.3 246.3 160 264 160H312C329.7 160 344 174.3 344 192V232H384L384.3 232C372.9 241.4 362.7 252.1 354 264V264zM472 424C472 410.7 482.7 400 496 400C509.3 400 520 410.7 520 424C520 437.3 509.3 448 496 448C482.7 448 472 437.3 472 424zM495.1 288C504.8 288 511.1 295.2 511.1 304V368C511.1 376.8 504.8 384 495.1 384C487.2 384 479.1 376.8 479.1 368V304C479.1 295.2 487.2 288 495.1 288zM640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368C352 288.5 416.5 224 496 224C575.5 224 640 288.5 640 368zM496 256C434.1 256 384 306.1 384 368C384 429.9 434.1 480 496 480C557.9 480 608 429.9 608 368C608 306.1 557.9 256 496 256z"/>
</>],
['regular',<>
	<path d="M272.5 5.7C281.4-1.9 294.6-1.9 303.5 5.7L526.1 194.6C516.3 192.9 506.3 192 496 192C481.8 192 467.9 193.7 454.7 196.9L288 55.47L112 204.8V432C112 449.7 126.3 464 144 464H348.5C360.7 482.8 376.5 499.1 394.8 512H144C99.82 512 64 476.2 64 432V245.5L39.53 266.3C29.42 274.9 14.28 273.6 5.7 263.5C-2.875 253.4-1.634 238.3 8.473 229.7L272.5 5.7zM384 232L384.3 232C359.1 252.7 339.7 280.4 329.1 312H328V315.4C322.8 331.1 320 349.7 320 368C320 372.6 320.2 377.1 320.5 381.5C318 383.1 315.1 384 312 384H264C255.2 384 248 376.8 248 368V312H192C183.2 312 176 304.8 176 296V248C176 239.2 183.2 232 192 232H248V176C248 167.2 255.2 160 264 160H312C320.8 160 328 167.2 328 176V232H384zM352 368C352 288.5 416.5 224 496 224C575.5 224 640 288.5 640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368zM496 464C509.3 464 520 453.3 520 440C520 426.7 509.3 416 496 416C482.7 416 472 426.7 472 440C472 453.3 482.7 464 496 464zM479.1 288V368C479.1 376.8 487.2 384 495.1 384C504.8 384 511.1 376.8 511.1 368V288C511.1 279.2 504.8 272 495.1 272C487.2 272 479.1 279.2 479.1 288z"/>
</>],
['solid',<>
	<path d="M320.5 381.5C324.6 435.5 353 482.6 394.8 512H128.1C92.75 512 64.09 483.3 64.09 448V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L522.1 193.9C513.6 192.7 504.9 192 496 192C453.6 192 414.7 207 384.3 232L384 232H328V176C328 167.2 320.8 160 311.1 160H263.1C255.2 160 247.1 167.2 247.1 176V232H191.1C183.2 232 175.1 239.2 175.1 248V296C175.1 304.8 183.2 312 191.1 312H247.1V368C247.1 376.8 255.2 384 263.1 384H311.1C315.1 384 318 383.1 320.5 381.5H320.5zM328 312H329.1C328.7 313.1 328.4 314.3 328 315.4V312zM352 368C352 288.5 416.5 224 496 224C575.5 224 640 288.5 640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368zM496 464C509.3 464 520 453.3 520 440C520 426.7 509.3 416 496 416C482.7 416 472 426.7 472 440C472 453.3 482.7 464 496 464zM479.1 288V368C479.1 376.8 487.2 384 495.1 384C504.8 384 511.1 376.8 511.1 368V288C511.1 279.2 504.8 272 495.1 272C487.2 272 479.1 279.2 479.1 288z"/>
</>],
['thin',<>
	<path d="M282.7 2.011C285.7-.6704 290.3-.6704 293.3 2.011L508.3 192.4C504.2 192.1 500.1 192 496 192C492 192 488 192.1 484.1 192.4L288 18.69L80 202.9V448C80 474.5 101.5 496 128 496H375.2C381.3 501.8 387.9 507.1 394.8 512H128C92.65 512 64 483.3 64 448V217.1L13.3 261.1C9.997 264.9 4.941 264.6 2.011 261.3C-.9182 257.1-.6116 252.9 2.696 250L282.7 2.011zM360.2 256H320V192C320 187.6 316.4 184 312 184H264C259.6 184 256 187.6 256 192V256H192C187.6 256 184 259.6 184 264V312C184 316.4 187.6 320 192 320H256V384C256 388.4 259.6 392 264 392H321.6C322.2 396.3 322.1 400.6 323.9 404.9C320.4 406.9 316.3 408 312 408H264C250.7 408 240 397.3 240 384V336H192C178.7 336 168 325.3 168 312V264C168 250.7 178.7 240 192 240H240V192C240 178.7 250.7 168 264 168H312C325.3 168 336 178.7 336 192V240H375.2C369.9 245 364.9 250.4 360.2 256V256zM480 432C480 423.2 487.2 416 496 416C504.8 416 512 423.2 512 432C512 440.8 504.8 448 496 448C487.2 448 480 440.8 480 432zM495.1 280C500.4 280 503.1 283.6 503.1 288V384C503.1 388.4 500.4 392 495.1 392C491.6 392 487.1 388.4 487.1 384V288C487.1 283.6 491.6 280 495.1 280zM640 368C640 447.5 575.5 512 496 512C416.5 512 352 447.5 352 368C352 288.5 416.5 224 496 224C575.5 224 640 288.5 640 368zM496 240C425.3 240 368 297.3 368 368C368 438.7 425.3 496 496 496C566.7 496 624 438.7 624 368C624 297.3 566.7 240 496 240z"/>
</>],

]);

const HouseMedicalCircleExclamation: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

HouseMedicalCircleExclamation.displayName = "HouseMedicalCircleExclamation";

export default HouseMedicalCircleExclamation;