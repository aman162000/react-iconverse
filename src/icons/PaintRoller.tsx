
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M0 64C0 28.65 28.65 0 64 0H352C387.3 0 416 28.65 416 64V128C416 163.3 387.3 192 352 192H64C28.65 192 0 163.3 0 128V64z"/><path className="fa-secondary" d="M512 192C512 245 469 288 416 288H272C263.2 288 256 295.2 256 304V320C273.7 320 288 334.3 288 352V480C288 497.7 273.7 512 256 512H192C174.3 512 160 497.7 160 480V352C160 334.3 174.3 320 192 320V304C192 259.8 227.8 224 272 224H416C433.7 224 448 209.7 448 192V160C448 142.3 433.7 128 416 128V64C469 64 512 106.1 512 160V192z"/>
</>],
['light',<>
	<path d="M416 64V96C416 131.3 387.3 160 352 160H64C28.65 160 0 131.3 0 96V64C0 28.65 28.65 0 64 0H352C387.3 0 416 28.65 416 64zM352 32H64C46.33 32 32 46.33 32 64V96C32 113.7 46.33 128 64 128H352C369.7 128 384 113.7 384 96V64C384 46.33 369.7 32 352 32zM208 288C208 252.7 236.7 224 272 224H448C465.7 224 480 209.7 480 192V128C480 110.3 465.7 96 448 96V64C483.3 64 512 92.65 512 128V192C512 227.3 483.3 256 448 256H272C254.3 256 240 270.3 240 288V320C266.5 320 288 341.5 288 368V464C288 490.5 266.5 512 240 512H208C181.5 512 160 490.5 160 464V368C160 341.5 181.5 320 208 320V288zM240 352H208C199.2 352 192 359.2 192 368V464C192 472.8 199.2 480 208 480H240C248.8 480 256 472.8 256 464V368C256 359.2 248.8 352 240 352z"/>
</>],
['regular',<>
	<path d="M352 0C387.3 0 416 28.65 416 64V128C416 163.3 387.3 192 352 192H64C28.65 192 0 163.3 0 128V64C0 28.65 28.65 0 64 0H352zM352 48H64C55.16 48 48 55.16 48 64V128C48 136.8 55.16 144 64 144H352C360.8 144 368 136.8 368 128V64C368 55.16 360.8 48 352 48zM160 352C160 334.3 174.3 320 192 320H200V304C200 264.2 232.2 232 272 232H424C446.1 232 464 214.1 464 192V144C464 133.6 457.3 124.7 448 121.4V72.44C484 76.42 512 106.9 512 144V192C512 240.6 472.6 280 424 280H272C258.7 280 248 290.7 248 304V320H256C273.7 320 288 334.3 288 352V480C288 497.7 273.7 512 256 512H192C174.3 512 160 497.7 160 480V352z"/>
</>],
['solid',<>
	<path d="M0 64C0 28.65 28.65 0 64 0H352C387.3 0 416 28.65 416 64V128C416 163.3 387.3 192 352 192H64C28.65 192 0 163.3 0 128V64zM160 352C160 334.3 174.3 320 192 320V304C192 259.8 227.8 224 272 224H416C433.7 224 448 209.7 448 192V69.46C485.3 82.64 512 118.2 512 160V192C512 245 469 288 416 288H272C263.2 288 256 295.2 256 304V320C273.7 320 288 334.3 288 352V480C288 497.7 273.7 512 256 512H192C174.3 512 160 497.7 160 480V352z"/>
</>],
['thin',<>
	<path d="M352 0C387.3 0 416 28.65 416 64V96C416 131.3 387.3 160 352 160H64C28.65 160 0 131.3 0 96V64C0 28.65 28.65 0 64 0H352zM352 16H64C37.49 16 16 37.49 16 64V96C16 122.5 37.49 144 64 144H352C378.5 144 400 122.5 400 96V64C400 37.49 378.5 16 352 16zM216 320V288C216 257.1 241.1 232 272 232H448C470.1 232 488 214.1 488 192V128C488 105.9 470.1 88 448 88V72C478.9 72 504 97.07 504 128V192C504 222.9 478.9 248 448 248H272C249.9 248 232 265.9 232 288V320H240C266.5 320 288 341.5 288 368V464C288 490.5 266.5 512 240 512H208C181.5 512 160 490.5 160 464V368C160 341.5 181.5 320 208 320H216zM240 336H208C190.3 336 176 350.3 176 368V464C176 481.7 190.3 496 208 496H240C257.7 496 272 481.7 272 464V368C272 350.3 257.7 336 240 336z"/>
</>],

]);

const PaintRoller: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

PaintRoller.displayName = "PaintRoller";

export default PaintRoller;