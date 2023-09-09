
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M288 160C288 177.7 273.7 192 256 192C238.3 192 224 177.7 224 160C224 142.3 238.3 128 256 128C273.7 128 288 142.3 288 160zM144 256C144 242.7 154.7 232 168 232H344C357.3 232 368 242.7 368 256C368 269.3 357.3 280 344 280H168C154.7 280 144 269.3 144 256zM224 352C224 334.3 238.3 320 256 320C273.7 320 288 334.3 288 352C288 369.7 273.7 384 256 384C238.3 384 224 369.7 224 352z"/><path className="fa-secondary" d="M140.6 21.15C154.1 7.648 172.4 .0625 191.5 .0625H320.5C339.6 .0625 357.9 7.648 371.4 21.15L490.8 140.6C504.3 154.1 511.9 172.4 511.9 191.5V320.5C511.9 339.6 504.3 357.9 490.8 371.4L371.4 490.8C357.9 504.3 339.6 511.9 320.5 511.9H191.5C172.4 511.9 154.1 504.3 140.6 490.8L21.15 371.4C7.652 357.9 .0666 339.6 .0666 320.5V191.5C.0666 172.4 7.652 154.1 21.15 140.6L140.6 21.15zM256 191.1C273.7 191.1 288 177.7 288 159.1C288 142.3 273.7 127.1 256 127.1C238.3 127.1 224 142.3 224 159.1C224 177.7 238.3 191.1 256 191.1zM168 231.1C154.7 231.1 144 242.7 144 255.1C144 269.3 154.7 279.1 168 279.1H344C357.3 279.1 368 269.3 368 255.1C368 242.7 357.3 231.1 344 231.1H168zM256 319.1C238.3 319.1 224 334.3 224 351.1C224 369.7 238.3 383.1 256 383.1C273.7 383.1 288 369.7 288 351.1C288 334.3 273.7 319.1 256 319.1z"/>
</>],
['light',<>
	<path d="M232 159.1C232 146.7 242.7 135.1 256 135.1C269.3 135.1 280 146.7 280 159.1C280 173.3 269.3 183.1 256 183.1C242.7 183.1 232 173.3 232 159.1zM352 239.1C360.8 239.1 368 247.2 368 255.1C368 264.8 360.8 271.1 352 271.1H160C151.2 271.1 144 264.8 144 255.1C144 247.2 151.2 239.1 160 239.1H352zM280 351.1C280 365.3 269.3 375.1 256 375.1C242.7 375.1 232 365.3 232 351.1C232 338.7 242.7 327.1 256 327.1C269.3 327.1 280 338.7 280 351.1zM.0669 191.5C.0669 172.4 7.652 154.1 21.16 140.6L140.6 21.15C154.1 7.648 172.4 .0625 191.5 .0625H320.5C339.6 .0625 357.9 7.648 371.4 21.15L490.8 140.6C504.3 154.1 511.9 172.4 511.9 191.5V320.5C511.9 339.6 504.3 357.9 490.8 371.4L371.4 490.8C357.9 504.3 339.6 511.9 320.5 511.9H191.5C172.4 511.9 154.1 504.3 140.6 490.8L21.15 371.4C7.652 357.9 .0666 339.6 .0666 320.5L.0669 191.5zM43.78 163.2C36.28 170.7 32.07 180.9 32.07 191.5V320.5C32.07 331.1 36.28 341.3 43.78 348.8L163.2 468.2C170.7 475.7 180.9 479.9 191.5 479.9H320.5C331.1 479.9 341.3 475.7 348.8 468.2L468.2 348.8C475.7 341.3 479.9 331.1 479.9 320.5V191.5C479.9 180.9 475.7 170.7 468.2 163.2L348.8 43.78C341.3 36.28 331.1 32.06 320.5 32.06H191.5C180.9 32.06 170.7 36.28 163.2 43.78L43.78 163.2zM43.78 348.8L21.15 371.4z"/>
</>],
['regular',<>
	<path d="M224 159.1C224 142.3 238.3 127.1 256 127.1C273.7 127.1 288 142.3 288 159.1C288 177.7 273.7 191.1 256 191.1C238.3 191.1 224 177.7 224 159.1zM344 231.1C357.3 231.1 368 242.7 368 255.1C368 269.3 357.3 279.1 344 279.1H168C154.7 279.1 144 269.3 144 255.1C144 242.7 154.7 231.1 168 231.1H344zM288 351.1C288 369.7 273.7 383.1 256 383.1C238.3 383.1 224 369.7 224 351.1C224 334.3 238.3 319.1 256 319.1C273.7 319.1 288 334.3 288 351.1zM.0669 191.5C.0669 172.4 7.652 154.1 21.16 140.6L140.6 21.15C154.1 7.648 172.4 .0625 191.5 .0625H320.5C339.6 .0625 357.9 7.648 371.4 21.15L490.8 140.6C504.3 154.1 511.9 172.4 511.9 191.5V320.5C511.9 339.6 504.3 357.9 490.8 371.4L371.4 490.8C357.9 504.3 339.6 511.9 320.5 511.9H191.5C172.4 511.9 154.1 504.3 140.6 490.8L21.15 371.4C7.652 357.9 .0666 339.6 .0666 320.5L.0669 191.5zM55.1 174.5C50.6 179 48.07 185.2 48.07 191.5V320.5C48.07 326.8 50.6 332.9 55.1 337.4L174.5 456.9C179 461.4 185.2 463.9 191.5 463.9H320.5C326.8 463.9 332.1 461.4 337.5 456.9L456.9 337.4C461.4 332.9 463.9 326.8 463.9 320.5V191.5C463.9 185.2 461.4 179 456.9 174.5L337.5 55.09C332.1 50.59 326.8 48.06 320.5 48.06H191.5C185.2 48.06 179 50.59 174.5 55.09L55.1 174.5zM21.15 371.4L55.1 337.4z"/>
</>],
['solid',<>
	<path d="M140.6 21.15C154.1 7.648 172.4 .0625 191.5 .0625H320.5C339.6 .0625 357.9 7.648 371.4 21.15L490.8 140.6C504.3 154.1 511.9 172.4 511.9 191.5V320.5C511.9 339.6 504.3 357.9 490.8 371.4L371.4 490.8C357.9 504.3 339.6 511.9 320.5 511.9H191.5C172.4 511.9 154.1 504.3 140.6 490.8L21.15 371.4C7.652 357.9 .0666 339.6 .0666 320.5V191.5C.0666 172.4 7.652 154.1 21.15 140.6L140.6 21.15zM256 191.1C273.7 191.1 288 177.7 288 159.1C288 142.3 273.7 127.1 256 127.1C238.3 127.1 224 142.3 224 159.1C224 177.7 238.3 191.1 256 191.1zM168 231.1C154.7 231.1 144 242.7 144 255.1C144 269.3 154.7 279.1 168 279.1H344C357.3 279.1 368 269.3 368 255.1C368 242.7 357.3 231.1 344 231.1H168zM256 319.1C238.3 319.1 224 334.3 224 351.1C224 369.7 238.3 383.1 256 383.1C273.7 383.1 288 369.7 288 351.1C288 334.3 273.7 319.1 256 319.1z"/>
</>],
['thin',<>
	<path d="M288 159.1C288 177.7 273.7 191.1 256 191.1C238.3 191.1 224 177.7 224 159.1C224 142.3 238.3 127.1 256 127.1C273.7 127.1 288 142.3 288 159.1zM256 143.1C247.2 143.1 240 151.2 240 159.1C240 168.8 247.2 175.1 256 175.1C264.8 175.1 272 168.8 272 159.1C272 151.2 264.8 143.1 256 143.1zM360 247.1C364.4 247.1 368 251.6 368 255.1C368 260.4 364.4 263.1 360 263.1H152C147.6 263.1 144 260.4 144 255.1C144 251.6 147.6 247.1 152 247.1H360zM224 351.1C224 334.3 238.3 319.1 256 319.1C273.7 319.1 288 334.3 288 351.1C288 369.7 273.7 383.1 256 383.1C238.3 383.1 224 369.7 224 351.1zM256 367.1C264.8 367.1 272 360.8 272 351.1C272 343.2 264.8 335.1 256 335.1C247.2 335.1 240 343.2 240 351.1C240 360.8 247.2 367.1 256 367.1zM320.5 .0628C339.6 .0628 357.9 7.648 371.4 21.15L490.8 140.6C504.3 154.1 511.9 172.4 511.9 191.5V320.5C511.9 339.6 504.3 357.9 490.8 371.4L371.4 490.8C357.9 504.3 339.6 511.9 320.5 511.9H191.5C172.4 511.9 154.1 504.3 140.6 490.8L21.15 371.4C7.652 357.9 .0666 339.6 .0666 320.5V191.5C.0666 172.4 7.652 154.1 21.15 140.6L140.6 21.15C154.1 7.648 172.4 .0625 191.5 .0625L320.5 .0628zM32.47 151.9C21.97 162.4 16.07 176.7 16.07 191.5V320.5C16.07 335.3 21.97 349.6 32.47 360.1L151.9 479.5C162.4 490 176.7 495.9 191.5 495.9H320.5C335.3 495.9 349.6 490 360.1 479.5L479.5 360.1C490 349.6 495.9 335.3 495.9 320.5V191.5C495.9 176.7 490 162.4 479.5 151.9L360.1 32.46C349.6 21.96 335.3 16.06 320.5 16.06H191.5C176.7 16.06 162.4 21.96 151.9 32.46L32.47 151.9z"/>
</>],

]);

const OctagonDivide: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

OctagonDivide.displayName = "OctagonDivide";

export default OctagonDivide;
