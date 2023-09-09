
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M0 24C0 10.75 10.75 0 24 0H96C107.5 0 117.4 8.19 119.6 19.51L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24V24zM224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464zM416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464zM252 160C252 148.1 260.1 140 272 140H316V96C316 84.95 324.1 76 336 76C347 76 356 84.95 356 96V140H400C411 140 420 148.1 420 160C420 171 411 180 400 180H356V224C356 235 347 244 336 244C324.1 244 316 235 316 224V180H272C260.1 180 252 171 252 160z"/><path className="fa-secondary" d="M121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L121.1 32zM272 180H316V224C316 235 324.1 244 336 244C347 244 356 235 356 224V180H400C411 180 420 171 420 160C420 148.1 411 140 400 140H356V96C356 84.95 347 76 336 76C324.1 76 316 84.95 316 96V140H272C260.1 140 252 148.1 252 160C252 171 260.1 180 272 180z"/>
</>],
['light',<>
	<path d="M240 160C240 151.2 247.2 144 256 144H304V96C304 87.16 311.2 80 320 80C328.8 80 336 87.16 336 96V144H384C392.8 144 400 151.2 400 160C400 168.8 392.8 176 384 176H336V224C336 232.8 328.8 240 320 240C311.2 240 304 232.8 304 224V176H256C247.2 176 240 168.8 240 160zM80 0C87.47 0 93.95 5.17 95.6 12.45L100 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H158.2L172.8 352H496C504.8 352 512 359.2 512 368C512 376.8 504.8 384 496 384H160C152.5 384 146.1 378.8 144.4 371.5L67.23 32H16C7.164 32 0 24.84 0 16C0 7.164 7.164 0 16 0H80zM107.3 64L150.1 256H487.8L541.8 64H107.3zM128 456C128 425.1 153.1 400 184 400C214.9 400 240 425.1 240 456C240 486.9 214.9 512 184 512C153.1 512 128 486.9 128 456zM184 480C197.3 480 208 469.3 208 456C208 442.7 197.3 432 184 432C170.7 432 160 442.7 160 456C160 469.3 170.7 480 184 480zM512 456C512 486.9 486.9 512 456 512C425.1 512 400 486.9 400 456C400 425.1 425.1 400 456 400C486.9 400 512 425.1 512 456zM456 432C442.7 432 432 442.7 432 456C432 469.3 442.7 480 456 480C469.3 480 480 469.3 480 456C480 442.7 469.3 432 456 432z"/>
</>],
['regular',<>
	<path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L161.6 240H477.6L520.7 80H472C458.7 80 448 69.25 448 56C448 42.75 458.7 32 472 32H552C559.5 32 566.5 35.47 571 41.4C575.6 47.33 577.1 55.03 575.2 62.24L519.2 270.2C516.4 280.7 506.9 288 496 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464zM232 128C232 114.7 242.7 104 256 104H296V64C296 50.75 306.7 40 320 40C333.3 40 344 50.75 344 64V104H384C397.3 104 408 114.7 408 128C408 141.3 397.3 152 384 152H344V192C344 205.3 333.3 216 320 216C306.7 216 296 205.3 296 192V152H256C242.7 152 232 141.3 232 128z"/>
</>],
['solid',<>
	<path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM272 180H316V224C316 235 324.1 244 336 244C347 244 356 235 356 224V180H400C411 180 420 171 420 160C420 148.1 411 140 400 140H356V96C356 84.95 347 76 336 76C324.1 76 316 84.95 316 96V140H272C260.1 140 252 148.1 252 160C252 171 260.1 180 272 180zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z"/>
</>],
['thin',<>
	<path d="M248 160C248 155.6 251.6 152 256 152H312V96C312 91.58 315.6 88 320 88C324.4 88 328 91.58 328 96V152H384C388.4 152 392 155.6 392 160C392 164.4 388.4 168 384 168H328V224C328 228.4 324.4 232 320 232C315.6 232 312 228.4 312 224V168H256C251.6 168 248 164.4 248 160zM64 0C67.64 0 70.82 2.458 71.74 5.98L78.53 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H145.3L166.2 368H496C500.4 368 504 371.6 504 376C504 380.4 500.4 384 496 384H159.1C156.4 384 153.2 381.5 152.3 378L57.82 16H8C3.582 16 0 12.42 0 8C0 3.582 3.582 0 8 0H64zM82.7 48L141.1 272H487.8C494.9 272 501.2 267.2 503.2 260.3L557.2 68.33C560 58.13 552.4 48 541.8 48H82.7zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM176 496C193.7 496 208 481.7 208 464C208 446.3 193.7 432 176 432C158.3 432 144 446.3 144 464C144 481.7 158.3 496 176 496zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464zM464 432C446.3 432 432 446.3 432 464C432 481.7 446.3 496 464 496C481.7 496 496 481.7 496 464C496 446.3 481.7 432 464 432z"/>
</>],

]);

const CartPlus: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CartPlus.displayName = "CartPlus";

export default CartPlus;
