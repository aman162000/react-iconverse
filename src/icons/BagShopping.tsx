
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M224 48C188.7 48 160 76.65 160 112V232C160 245.3 149.3 256 136 256C122.7 256 112 245.3 112 232V112C112 50.14 162.1 0 224 0C285.9 0 336 50.14 336 112V232C336 245.3 325.3 256 312 256C298.7 256 288 245.3 288 232V112C288 76.65 259.3 48 224 48z"/><path className="fa-secondary" d="M288 232C288 245.3 298.7 256 312 256C325.3 256 336 245.3 336 232V160H400C426.5 160 448 181.5 448 208V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V208C0 181.5 21.49 160 48 160H112V232C112 245.3 122.7 256 136 256C149.3 256 160 245.3 160 232V160H288V232z"/>
</>],
['light',<>
	<path d="M128 128V96C128 42.98 170.1 0 224 0C277 0 320 42.98 320 96V128H400C426.5 128 448 149.5 448 176V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V176C0 149.5 21.49 128 48 128H128zM160 128H288V96C288 60.65 259.3 32 224 32C188.7 32 160 60.65 160 96V128zM48 160C39.16 160 32 167.2 32 176V416C32 451.3 60.65 480 96 480H352C387.3 480 416 451.3 416 416V176C416 167.2 408.8 160 400 160H320V240C320 248.8 312.8 256 304 256C295.2 256 288 248.8 288 240V160H160V240C160 248.8 152.8 256 144 256C135.2 256 128 248.8 128 240V160H48z"/>
</>],
['regular',<>
	<path d="M112 160V112C112 50.14 162.1 0 224 0C285.9 0 336 50.14 336 112V160H400C426.5 160 448 181.5 448 208V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V208C0 181.5 21.49 160 48 160H112zM160 160H288V112C288 76.65 259.3 48 224 48C188.7 48 160 76.65 160 112V160zM48 208V416C48 442.5 69.49 464 96 464H352C378.5 464 400 442.5 400 416V208H336V264C336 277.3 325.3 288 312 288C298.7 288 288 277.3 288 264V208H160V264C160 277.3 149.3 288 136 288C122.7 288 112 277.3 112 264V208H48z"/>
</>],
['solid',<>
	<path d="M112 112C112 50.14 162.1 0 224 0C285.9 0 336 50.14 336 112V160H400C426.5 160 448 181.5 448 208V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V208C0 181.5 21.49 160 48 160H112V112zM160 160H288V112C288 76.65 259.3 48 224 48C188.7 48 160 76.65 160 112V160zM136 256C149.3 256 160 245.3 160 232C160 218.7 149.3 208 136 208C122.7 208 112 218.7 112 232C112 245.3 122.7 256 136 256zM312 208C298.7 208 288 218.7 288 232C288 245.3 298.7 256 312 256C325.3 256 336 245.3 336 232C336 218.7 325.3 208 312 208z"/>
</>],
['thin',<>
	<path d="M128 128V96C128 42.98 170.1 0 224 0C277 0 320 42.98 320 96V128H400C426.5 128 448 149.5 448 176V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V176C0 149.5 21.49 128 48 128H128zM144 128H304V96C304 51.82 268.2 16 224 16C179.8 16 144 51.82 144 96V128zM48 144C30.33 144 16 158.3 16 176V416C16 460.2 51.82 496 96 496H352C396.2 496 432 460.2 432 416V176C432 158.3 417.7 144 400 144H320V232C320 236.4 316.4 240 312 240C307.6 240 304 236.4 304 232V144H144V232C144 236.4 140.4 240 136 240C131.6 240 128 236.4 128 232V144H48z"/>
</>],

]);

const BagShopping: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

BagShopping.displayName = "BagShopping";

export default BagShopping;
