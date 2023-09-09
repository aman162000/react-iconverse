
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M288 188C299 188 308 196.1 308 208V276H312C323 276 332 284.1 332 296C332 307 323 316 312 316H264C252.1 316 244 307 244 296C244 284.1 252.1 276 264 276H268V227.6C258.9 225.7 252 217.7 252 208C252 196.1 260.1 188 272 188H288zM0 128C0 92.65 28.65 64 64 64H512C547.3 64 576 92.65 576 128V384C576 419.3 547.3 448 512 448H64C28.65 448 0 419.3 0 384V128zM64 192V320C99.35 320 128 348.7 128 384H448C448 348.7 476.7 320 512 320V192C476.7 192 448 163.3 448 128H128C128 163.3 99.35 192 64 192z"/><path className="fa-secondary" d="M512 192V320C476.7 320 448 348.7 448 384H128C128 348.7 99.35 320 64 320V192C99.35 192 128 163.3 128 128H448C448 163.3 476.7 192 512 192zM288 352C341 352 384 309 384 256C384 202.1 341 160 288 160C234.1 160 192 202.1 192 256C192 309 234.1 352 288 352z"/>
</>],
['light',<>
	<path d="M256 208C256 199.2 263.2 192 272 192H288C296.8 192 304 199.2 304 208V288H312C320.8 288 328 295.2 328 304C328 312.8 320.8 320 312 320H264C255.2 320 248 312.8 248 304C248 295.2 255.2 288 264 288H272V224C263.2 224 256 216.8 256 208zM416 256C416 326.7 358.7 384 288 384C217.3 384 160 326.7 160 256C160 185.3 217.3 128 288 128C358.7 128 416 185.3 416 256zM288 160C234.1 160 192 202.1 192 256C192 309 234.1 352 288 352C341 352 384 309 384 256C384 202.1 341 160 288 160zM512 64C547.3 64 576 92.65 576 128V384C576 419.3 547.3 448 512 448H64C28.65 448 0 419.3 0 384V128C0 92.65 28.65 64 64 64H512zM512 96H480C480 131.3 508.7 160 544 160V128C544 110.3 529.7 96 512 96zM32 192V320C85.02 320 128 362.1 128 416H448C448 362.1 490.1 320 544 320V192C490.1 192 448 149 448 96H128C128 149 85.02 192 32 192zM32 352V384C32 401.7 46.33 416 64 416H96C96 380.7 67.35 352 32 352zM512 416C529.7 416 544 401.7 544 384V352C508.7 352 480 380.7 480 416H512zM96 96H64C46.33 96 32 110.3 32 128V160C67.35 160 96 131.3 96 96z"/>
</>],
['regular',<>
	<path d="M400 256C400 317.9 349.9 368 288 368C226.1 368 176 317.9 176 256C176 194.1 226.1 144 288 144C349.9 144 400 194.1 400 256zM272 224V288H264C255.2 288 248 295.2 248 304C248 312.8 255.2 320 264 320H312C320.8 320 328 312.8 328 304C328 295.2 320.8 288 312 288H304V208C304 199.2 296.8 192 288 192H272C263.2 192 256 199.2 256 208C256 216.8 263.2 224 272 224zM0 128C0 92.65 28.65 64 64 64H512C547.3 64 576 92.65 576 128V384C576 419.3 547.3 448 512 448H64C28.65 448 0 419.3 0 384V128zM48 176V336C83.35 336 112 364.7 112 400H464C464 364.7 492.7 336 528 336V176C492.7 176 464 147.3 464 112H112C112 147.3 83.35 176 48 176z"/>
</>],
['solid',<>
	<path d="M252 208C252 196.1 260.1 188 272 188H288C299 188 308 196.1 308 208V276H312C323 276 332 284.1 332 296C332 307 323 316 312 316H264C252.1 316 244 307 244 296C244 284.1 252.1 276 264 276H268V227.6C258.9 225.7 252 217.7 252 208zM512 64C547.3 64 576 92.65 576 128V384C576 419.3 547.3 448 512 448H64C28.65 448 0 419.3 0 384V128C0 92.65 28.65 64 64 64H512zM128 384C128 348.7 99.35 320 64 320V384H128zM64 192C99.35 192 128 163.3 128 128H64V192zM512 384V320C476.7 320 448 348.7 448 384H512zM512 128H448C448 163.3 476.7 192 512 192V128zM288 144C226.1 144 176 194.1 176 256C176 317.9 226.1 368 288 368C349.9 368 400 317.9 400 256C400 194.1 349.9 144 288 144z"/>
</>],
['thin',<>
	<path d="M544 176C544 180.4 540.4 184 536 184H528C488.2 184 456 151.8 456 112V104C456 99.58 459.6 96 464 96C468.4 96 472 99.58 472 104V112C472 142.9 497.1 168 528 168H536C540.4 168 544 171.6 544 176zM40 184C35.58 184 32 180.4 32 176C32 171.6 35.58 168 40 168H48C78.93 168 104 142.9 104 112V104C104 99.58 107.6 96 112 96C116.4 96 120 99.58 120 104V112C120 151.8 87.76 184 48 184H40zM536 344H528C497.1 344 472 369.1 472 400V408C472 412.4 468.4 416 464 416C459.6 416 456 412.4 456 408V400C456 360.2 488.2 328 528 328H536C540.4 328 544 331.6 544 336C544 340.4 540.4 344 536 344zM48 328C87.76 328 120 360.2 120 400V408C120 412.4 116.4 416 112 416C107.6 416 104 412.4 104 408V400C104 369.1 78.93 344 48 344H40C35.58 344 32 340.4 32 336C32 331.6 35.58 328 40 328H48zM288 200C292.4 200 296 203.6 296 208V296H312C316.4 296 320 299.6 320 304C320 308.4 316.4 312 312 312H264C259.6 312 256 308.4 256 304C256 299.6 259.6 296 264 296H280V216H272C267.6 216 264 212.4 264 208C264 203.6 267.6 200 272 200H288zM160 256C160 185.3 217.3 128 288 128C358.7 128 416 185.3 416 256C416 326.7 358.7 384 288 384C217.3 384 160 326.7 160 256zM288 368C349.9 368 400 317.9 400 256C400 194.1 349.9 144 288 144C226.1 144 176 194.1 176 256C176 317.9 226.1 368 288 368zM512 64C547.3 64 576 92.65 576 128V384C576 419.3 547.3 448 512 448H64C28.65 448 0 419.3 0 384V128C0 92.65 28.65 64 64 64H512zM512 80H64C37.49 80 16 101.5 16 128V384C16 410.5 37.49 432 64 432H512C538.5 432 560 410.5 560 384V128C560 101.5 538.5 80 512 80z"/>
</>],

]);

const MoneyBill1: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

MoneyBill1.displayName = "MoneyBill1";

export default MoneyBill1;