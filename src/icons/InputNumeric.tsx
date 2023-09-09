
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M283.5 229.9C275.8 240.7 260.8 243.2 250.1 235.5C239.3 227.8 236.8 212.8 244.5 202.1L255.6 186.5C279.3 153.2 327.9 150.8 354.8 181.6C376.1 205.1 375.6 242.5 353.7 266.3L318.8 304H352C365.3 304 376 314.7 376 328C376 341.3 365.3 352 352 352H264C254.5 352 245.8 346.4 242 337.6C238.2 328.9 239.9 318.7 246.4 311.7L318.4 233.7C323.7 227.9 323.8 219.1 318.7 213.2C312.1 205.8 300.4 206.3 294.6 214.4L283.5 229.9zM160 160C173.3 160 184 170.7 184 184V304H200C213.3 304 224 314.7 224 328C224 341.3 213.3 352 200 352H120C106.7 352 96 341.3 96 328C96 314.7 106.7 304 120 304H136V208H128C114.7 208 104 197.3 104 184C104 170.7 114.7 160 128 160H160z"/><path className="fa-secondary" d="M576 64C611.3 64 640 92.65 640 128V384C640 419.3 611.3 448 576 448H64C28.65 448 0 419.3 0 384V128C0 92.65 28.65 64 64 64H576zM576 128H64V384H576V128z"/>
</>],
['light',<>
	<path d="M96 176C96 167.2 103.2 160 112 160H144C152.8 160 160 167.2 160 176V320H176C184.8 320 192 327.2 192 336C192 344.8 184.8 352 176 352H112C103.2 352 96 344.8 96 336C96 327.2 103.2 320 112 320H128V192H112C103.2 192 96 184.8 96 176zM252.3 218.2C246.6 225 236.5 225.9 229.8 220.3C222.1 214.6 222.1 204.5 227.7 197.8L240.1 182.9C260.1 157.8 298.4 154.9 322.1 176.4C347.1 197.4 349.6 233.1 328.6 258.1L275 319.1H336C344.8 319.1 352 327.2 352 336C352 344.8 344.8 352 336 352H240C233.7 352 228 348.3 225.4 342.6C222.8 336.9 223.8 330.3 227.9 325.5L304.5 237.2C313.9 226.3 312.7 209.9 301.9 200.4C290.9 190.8 274.1 192.1 264.7 203.4L252.3 218.2zM576 64C611.3 64 640 92.65 640 128V384C640 419.3 611.3 448 576 448H64C28.65 448 0 419.3 0 384V128C0 92.65 28.65 64 64 64H576zM576 96H64C46.33 96 32 110.3 32 128V384C32 401.7 46.33 416 64 416H576C593.7 416 608 401.7 608 384V128C608 110.3 593.7 96 576 96z"/>
</>],
['regular',<>
	<path d="M104 184C104 170.7 114.7 160 128 160H160C173.3 160 184 170.7 184 184V304H200C213.3 304 224 314.7 224 328C224 341.3 213.3 352 200 352H120C106.7 352 96 341.3 96 328C96 314.7 106.7 304 120 304H136V208H128C114.7 208 104 197.3 104 184zM283.5 229.9C275.8 240.7 260.8 243.2 250.1 235.5C239.3 227.8 236.8 212.8 244.5 202.1L255.6 186.5C279.3 153.2 327.9 150.8 354.8 181.6C376.1 205.1 375.6 242.5 353.7 266.3L318.8 304H352C365.3 304 376 314.7 376 328C376 341.3 365.3 352 352 352H264C254.5 352 245.8 346.4 242 337.6C238.2 328.9 239.9 318.7 246.4 311.7L318.4 233.7C323.7 227.9 323.8 219.1 318.7 213.2C312.1 205.8 300.4 206.3 294.6 214.4L283.5 229.9zM576 64C611.3 64 640 92.65 640 128V384C640 419.3 611.3 448 576 448H64C28.65 448 0 419.3 0 384V128C0 92.65 28.65 64 64 64H576zM576 112H64C55.16 112 48 119.2 48 128V384C48 392.8 55.16 400 64 400H576C584.8 400 592 392.8 592 384V128C592 119.2 584.8 112 576 112z"/>
</>],
['solid',<>
	<path d="M104 184C104 170.7 114.7 160 128 160H160C173.3 160 184 170.7 184 184V304H200C213.3 304 224 314.7 224 328C224 341.3 213.3 352 200 352H120C106.7 352 96 341.3 96 328C96 314.7 106.7 304 120 304H136V208H128C114.7 208 104 197.3 104 184zM283.5 229.9C275.8 240.7 260.8 243.2 250.1 235.5C239.3 227.8 236.8 212.8 244.5 202.1L255.6 186.5C279.3 153.2 327.9 150.8 354.8 181.6C376.1 205.1 375.6 242.5 353.7 266.3L318.8 304H352C365.3 304 376 314.7 376 328C376 341.3 365.3 352 352 352H264C254.5 352 245.8 346.4 242 337.6C238.2 328.9 239.9 318.7 246.4 311.7L318.4 233.7C323.7 227.9 323.8 219.1 318.7 213.2C312.1 205.8 300.4 206.3 294.6 214.4L283.5 229.9zM576 64C611.3 64 640 92.65 640 128V384C640 419.3 611.3 448 576 448H64C28.65 448 0 419.3 0 384V128C0 92.65 28.65 64 64 64H576zM576 128H64V384H576V128z"/>
</>],
['thin',<>
	<path d="M104 176C104 171.6 107.6 168 112 168H144C148.4 168 152 171.6 152 176V328H176C180.4 328 184 331.6 184 336C184 340.4 180.4 344 176 344H112C107.6 344 104 340.4 104 336C104 331.6 107.6 328 112 328H136V184H112C107.6 184 104 180.4 104 176zM246.1 213.1C243.3 216.5 238.3 216.1 234.9 214.1C231.5 211.3 231 206.3 233.9 202.9L246.2 188C264.3 166.4 296.5 163.8 317.7 182.4C338.5 200.5 340.7 232.1 322.6 252.9L257.5 328H336C340.4 328 344 331.6 344 336C344 340.4 340.4 344 336 344H240C236.9 344 234 342.2 232.7 339.3C231.4 336.5 231.9 333.1 233.1 330.8L310.5 242.4C322.8 228.2 321.3 206.8 307.2 194.4C292.8 181.8 270.8 183.5 258.5 198.3L246.1 213.1zM576 64C611.3 64 640 92.65 640 128V384C640 419.3 611.3 448 576 448H64C28.65 448 0 419.3 0 384V128C0 92.65 28.65 64 64 64H576zM576 80H64C37.49 80 16 101.5 16 128V384C16 410.5 37.49 432 64 432H576C602.5 432 624 410.5 624 384V128C624 101.5 602.5 80 576 80z"/>
</>],

]);

const InputNumeric: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

InputNumeric.displayName = "InputNumeric";

export default InputNumeric;