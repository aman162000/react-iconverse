
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M320 256C320 309 277 352 224 352C170.1 352 128 309 128 256C128 202.1 170.1 160 224 160C277 160 320 202.1 320 256z"/><path className="fa-secondary" d="M192 80C192 62.33 206.3 48 224 48C241.7 48 256 62.33 256 80C256 97.67 241.7 112 224 112C206.3 112 192 97.67 192 80zM192 432C192 414.3 206.3 400 224 400C241.7 400 256 414.3 256 432C256 449.7 241.7 464 224 464C206.3 464 192 449.7 192 432zM400 288C382.3 288 368 273.7 368 256C368 238.3 382.3 224 400 224C417.7 224 432 238.3 432 256C432 273.7 417.7 288 400 288zM48 224C65.67 224 80 238.3 80 256C80 273.7 65.67 288 48 288C30.33 288 16 273.7 16 256C16 238.3 30.33 224 48 224zM128 128C128 145.7 113.7 160 96 160C78.33 160 64 145.7 64 128C64 110.3 78.33 96 96 96C113.7 96 128 110.3 128 128zM352 416C334.3 416 320 401.7 320 384C320 366.3 334.3 352 352 352C369.7 352 384 366.3 384 384C384 401.7 369.7 416 352 416zM384 128C384 145.7 369.7 160 352 160C334.3 160 320 145.7 320 128C320 110.3 334.3 96 352 96C369.7 96 384 110.3 384 128zM96 352C113.7 352 128 366.3 128 384C128 401.7 113.7 416 96 416C78.33 416 64 401.7 64 384C64 366.3 78.33 352 96 352z"/>
</>],
['light',<>
	<path d="M248 80C248 93.25 237.3 104 224 104C210.7 104 200 93.25 200 80C200 66.75 210.7 56 224 56C237.3 56 248 66.75 248 80zM128 256C128 202.1 170.1 160 224 160C277 160 320 202.1 320 256C320 309 277 352 224 352C170.1 352 128 309 128 256zM224 320C259.3 320 288 291.3 288 256C288 220.7 259.3 192 224 192C188.7 192 160 220.7 160 256C160 291.3 188.7 320 224 320zM200 432C200 418.7 210.7 408 224 408C237.3 408 248 418.7 248 432C248 445.3 237.3 456 224 456C210.7 456 200 445.3 200 432zM400 280C386.7 280 376 269.3 376 256C376 242.7 386.7 232 400 232C413.3 232 424 242.7 424 256C424 269.3 413.3 280 400 280zM48 232C61.25 232 72 242.7 72 256C72 269.3 61.25 280 48 280C34.75 280 24 269.3 24 256C24 242.7 34.75 232 48 232zM120 128C120 141.3 109.3 152 96 152C82.75 152 72 141.3 72 128C72 114.7 82.75 104 96 104C109.3 104 120 114.7 120 128zM352 408C338.7 408 328 397.3 328 384C328 370.7 338.7 360 352 360C365.3 360 376 370.7 376 384C376 397.3 365.3 408 352 408zM376 128C376 141.3 365.3 152 352 152C338.7 152 328 141.3 328 128C328 114.7 338.7 104 352 104C365.3 104 376 114.7 376 128zM96 360C109.3 360 120 370.7 120 384C120 397.3 109.3 408 96 408C82.75 408 72 397.3 72 384C72 370.7 82.75 360 96 360z"/>
</>],
['regular',<>
	<path d="M256 80C256 97.67 241.7 112 224 112C206.3 112 192 97.67 192 80C192 62.33 206.3 48 224 48C241.7 48 256 62.33 256 80zM128 256C128 202.1 170.1 160 224 160C277 160 320 202.1 320 256C320 309 277 352 224 352C170.1 352 128 309 128 256zM224 304C250.5 304 272 282.5 272 256C272 229.5 250.5 208 224 208C197.5 208 176 229.5 176 256C176 282.5 197.5 304 224 304zM192 432C192 414.3 206.3 400 224 400C241.7 400 256 414.3 256 432C256 449.7 241.7 464 224 464C206.3 464 192 449.7 192 432zM400 288C382.3 288 368 273.7 368 256C368 238.3 382.3 224 400 224C417.7 224 432 238.3 432 256C432 273.7 417.7 288 400 288zM48 224C65.67 224 80 238.3 80 256C80 273.7 65.67 288 48 288C30.33 288 16 273.7 16 256C16 238.3 30.33 224 48 224zM128 128C128 145.7 113.7 160 96 160C78.33 160 64 145.7 64 128C64 110.3 78.33 96 96 96C113.7 96 128 110.3 128 128zM352 416C334.3 416 320 401.7 320 384C320 366.3 334.3 352 352 352C369.7 352 384 366.3 384 384C384 401.7 369.7 416 352 416zM384 128C384 145.7 369.7 160 352 160C334.3 160 320 145.7 320 128C320 110.3 334.3 96 352 96C369.7 96 384 110.3 384 128zM96 352C113.7 352 128 366.3 128 384C128 401.7 113.7 416 96 416C78.33 416 64 401.7 64 384C64 366.3 78.33 352 96 352z"/>
</>],
['solid',<>
	<path d="M256 80C256 97.67 241.7 112 224 112C206.3 112 192 97.67 192 80C192 62.33 206.3 48 224 48C241.7 48 256 62.33 256 80zM320 256C320 309 277 352 224 352C170.1 352 128 309 128 256C128 202.1 170.1 160 224 160C277 160 320 202.1 320 256zM192 432C192 414.3 206.3 400 224 400C241.7 400 256 414.3 256 432C256 449.7 241.7 464 224 464C206.3 464 192 449.7 192 432zM400 288C382.3 288 368 273.7 368 256C368 238.3 382.3 224 400 224C417.7 224 432 238.3 432 256C432 273.7 417.7 288 400 288zM48 224C65.67 224 80 238.3 80 256C80 273.7 65.67 288 48 288C30.33 288 16 273.7 16 256C16 238.3 30.33 224 48 224zM128 128C128 145.7 113.7 160 96 160C78.33 160 64 145.7 64 128C64 110.3 78.33 96 96 96C113.7 96 128 110.3 128 128zM352 416C334.3 416 320 401.7 320 384C320 366.3 334.3 352 352 352C369.7 352 384 366.3 384 384C384 401.7 369.7 416 352 416zM384 128C384 145.7 369.7 160 352 160C334.3 160 320 145.7 320 128C320 110.3 334.3 96 352 96C369.7 96 384 110.3 384 128zM96 352C113.7 352 128 366.3 128 384C128 401.7 113.7 416 96 416C78.33 416 64 401.7 64 384C64 366.3 78.33 352 96 352z"/>
</>],
['thin',<>
	<path d="M240 80C240 88.84 232.8 96 224 96C215.2 96 208 88.84 208 80C208 71.16 215.2 64 224 64C232.8 64 240 71.16 240 80zM128 256C128 202.1 170.1 160 224 160C277 160 320 202.1 320 256C320 309 277 352 224 352C170.1 352 128 309 128 256zM224 336C268.2 336 304 300.2 304 256C304 211.8 268.2 176 224 176C179.8 176 144 211.8 144 256C144 300.2 179.8 336 224 336zM208 432C208 423.2 215.2 416 224 416C232.8 416 240 423.2 240 432C240 440.8 232.8 448 224 448C215.2 448 208 440.8 208 432zM400 272C391.2 272 384 264.8 384 256C384 247.2 391.2 240 400 240C408.8 240 416 247.2 416 256C416 264.8 408.8 272 400 272zM48 240C56.84 240 64 247.2 64 256C64 264.8 56.84 272 48 272C39.16 272 32 264.8 32 256C32 247.2 39.16 240 48 240zM112 128C112 136.8 104.8 144 96 144C87.16 144 80 136.8 80 128C80 119.2 87.16 112 96 112C104.8 112 112 119.2 112 128zM352 400C343.2 400 336 392.8 336 384C336 375.2 343.2 368 352 368C360.8 368 368 375.2 368 384C368 392.8 360.8 400 352 400zM368 128C368 136.8 360.8 144 352 144C343.2 144 336 136.8 336 128C336 119.2 343.2 112 352 112C360.8 112 368 119.2 368 128zM96 368C104.8 368 112 375.2 112 384C112 392.8 104.8 400 96 400C87.16 400 80 392.8 80 384C80 375.2 87.16 368 96 368z"/>
</>],

]);

const BrightnessLow: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

BrightnessLow.displayName = "BrightnessLow";

export default BrightnessLow;
