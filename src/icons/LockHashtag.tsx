
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M192 288H256V256C256 247.2 263.2 240 272 240C280.8 240 288 247.2 288 256V288H320C328.8 288 336 295.2 336 304C336 312.8 328.8 320 320 320H288V384H320C328.8 384 336 391.2 336 400C336 408.8 328.8 416 320 416H288V448C288 456.8 280.8 464 272 464C263.2 464 256 456.8 256 448V416H192V448C192 456.8 184.8 464 176 464C167.2 464 160 456.8 160 448V416H128C119.2 416 112 408.8 112 400C112 391.2 119.2 384 128 384H160V320H128C119.2 320 112 312.8 112 304C112 295.2 119.2 288 128 288H160V256C160 247.2 167.2 240 176 240C184.8 240 192 247.2 192 256V288zM256 384V320H192V384H256z"/><path className="fa-secondary" d="M192 320H256V384H192V320zM80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192zM160 256V288H128C119.2 288 112 295.2 112 304C112 312.8 119.2 320 128 320H160V384H128C119.2 384 112 391.2 112 400C112 408.8 119.2 416 128 416H160V448C160 456.8 167.2 464 176 464C184.8 464 192 456.8 192 448V416H256V448C256 456.8 263.2 464 272 464C280.8 464 288 456.8 288 448V416H320C328.8 416 336 408.8 336 400C336 391.2 328.8 384 320 384H288V320H320C328.8 320 336 312.8 336 304C336 295.2 328.8 288 320 288H288V256C288 247.2 280.8 240 272 240C263.2 240 256 247.2 256 256V288H192V256C192 247.2 184.8 240 176 240C167.2 240 160 247.2 160 256z"/>
</>],
['light',<>
	<path d="M176 240C184.8 240 192 247.2 192 256V288H256V256C256 247.2 263.2 240 272 240C280.8 240 288 247.2 288 256V288H320C328.8 288 336 295.2 336 304C336 312.8 328.8 320 320 320H288V384H320C328.8 384 336 391.2 336 400C336 408.8 328.8 416 320 416H288V448C288 456.8 280.8 464 272 464C263.2 464 256 456.8 256 448V416H192V448C192 456.8 184.8 464 176 464C167.2 464 160 456.8 160 448V416H128C119.2 416 112 408.8 112 400C112 391.2 119.2 384 128 384H160V320H128C119.2 320 112 312.8 112 304C112 295.2 119.2 288 128 288H160V256C160 247.2 167.2 240 176 240zM192 384H256V320H192V384zM96 192V128C96 57.31 153.3 0 224 0C294.7 0 352 57.31 352 128V192H368C412.2 192 448 227.8 448 272V432C448 476.2 412.2 512 368 512H80C35.82 512 0 476.2 0 432V272C0 227.8 35.82 192 80 192H96zM128 192H320V128C320 74.98 277 32 224 32C170.1 32 128 74.98 128 128V192zM32 432C32 458.5 53.49 480 80 480H368C394.5 480 416 458.5 416 432V272C416 245.5 394.5 224 368 224H80C53.49 224 32 245.5 32 272V432z"/>
</>],
['regular',<>
	<path d="M184 224C197.3 224 208 234.7 208 248V272H240V248C240 234.7 250.7 224 264 224C277.3 224 288 234.7 288 248V272H312C325.3 272 336 282.7 336 296C336 309.3 325.3 320 312 320H288V352H312C325.3 352 336 362.7 336 376C336 389.3 325.3 400 312 400H288V424C288 437.3 277.3 448 264 448C250.7 448 240 437.3 240 424V400H208V424C208 437.3 197.3 448 184 448C170.7 448 160 437.3 160 424V400H136C122.7 400 112 389.3 112 376C112 362.7 122.7 352 136 352H160V320H136C122.7 320 112 309.3 112 296C112 282.7 122.7 272 136 272H160V248C160 234.7 170.7 224 184 224zM208 352H240V320H208V352zM96 160V128C96 57.31 153.3 0 224 0C294.7 0 352 57.31 352 128V160H384C419.3 160 448 188.7 448 224V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V224C0 188.7 28.65 160 64 160H96zM144 160H304V128C304 83.82 268.2 48 224 48C179.8 48 144 83.82 144 128V160zM64 208C55.16 208 48 215.2 48 224V448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V224C400 215.2 392.8 208 384 208H64z"/>
</>],
['solid',<>
	<path d="M192 320H256V384H192V320zM80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192zM160 256V288H128C119.2 288 112 295.2 112 304C112 312.8 119.2 320 128 320H160V384H128C119.2 384 112 391.2 112 400C112 408.8 119.2 416 128 416H160V448C160 456.8 167.2 464 176 464C184.8 464 192 456.8 192 448V416H256V448C256 456.8 263.2 464 272 464C280.8 464 288 456.8 288 448V416H320C328.8 416 336 408.8 336 400C336 391.2 328.8 384 320 384H288V320H320C328.8 320 336 312.8 336 304C336 295.2 328.8 288 320 288H288V256C288 247.2 280.8 240 272 240C263.2 240 256 247.2 256 256V288H192V256C192 247.2 184.8 240 176 240C167.2 240 160 247.2 160 256z"/>
</>],
['thin',<>
	<path d="M176 248C180.4 248 184 251.6 184 256V296H264V256C264 251.6 267.6 248 272 248C276.4 248 280 251.6 280 256V296H320C324.4 296 328 299.6 328 304C328 308.4 324.4 312 320 312H280V392H320C324.4 392 328 395.6 328 400C328 404.4 324.4 408 320 408H280V448C280 452.4 276.4 456 272 456C267.6 456 264 452.4 264 448V408H184V448C184 452.4 180.4 456 176 456C171.6 456 168 452.4 168 448V408H128C123.6 408 120 404.4 120 400C120 395.6 123.6 392 128 392H168V312H128C123.6 312 120 308.4 120 304C120 299.6 123.6 296 128 296H168V256C168 251.6 171.6 248 176 248zM184 392H264V312H184V392zM96 192V128C96 57.31 153.3 0 224 0C294.7 0 352 57.31 352 128V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H96zM112 192H336V128C336 66.14 285.9 16 224 16C162.1 16 112 66.14 112 128V192zM64 208C37.49 208 16 229.5 16 256V448C16 474.5 37.49 496 64 496H384C410.5 496 432 474.5 432 448V256C432 229.5 410.5 208 384 208H64z"/>
</>],

]);

const LockHashtag: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

LockHashtag.displayName = "LockHashtag";

export default LockHashtag;
