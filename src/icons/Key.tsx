
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M160 176C160 78.8 238.8 0 336 0C433.2 0 512 78.8 512 176C512 273.2 433.2 352 336 352C317.3 352 299.2 349.1 282.3 343.7L168.3 229.7C162.9 212.8 160 194.7 160 176V176zM376 96C353.9 96 336 113.9 336 136C336 158.1 353.9 176 376 176C398.1 176 416 158.1 416 136C416 113.9 398.1 96 376 96z"/><path className="fa-secondary" d="M168.3 229.7L282.3 343.7C282.3 343.7 282.3 343.7 282.3 343.7L248.1 376.1C244.5 381.5 238.4 384 232 384H192V424C192 437.3 181.3 448 168 448H128V488C128 501.3 117.3 512 104 512H24C10.75 512 0 501.3 0 488V408C0 401.6 2.529 395.5 7.029 391L168.3 229.7C168.3 229.7 168.3 229.7 168.3 229.7V229.7z"/>
</>],
['light',<>
	<path d="M344 144C344 130.7 354.7 120 368 120C381.3 120 392 130.7 392 144C392 157.3 381.3 168 368 168C354.7 168 344 157.3 344 144zM336 352C326.5 352 317.2 351.3 308.1 349.8L280.1 376.1C276.5 381.5 270.4 384 264 384H224V424C224 437.3 213.3 448 200 448H160V488C160 501.3 149.3 512 136 512H24C10.75 512 0 501.3 0 488V392C0 385.6 2.529 379.5 7.029 375L164.9 217.2C161.7 203.1 160 190.2 160 176C160 78.8 238.8 0 336 0C433.2 0 512 78.8 512 176C512 273.2 433.2 352 336 352zM336 320C415.5 320 480 255.5 480 176C480 96.47 415.5 32 336 32C256.5 32 192 96.47 192 176C192 187.7 193.4 198.1 195.1 209.7L200.1 227.2L32 395.3V480H128V416H192V352H260.7L297 315.6L313.2 318.2C320.6 319.4 328.2 320 336 320V320z"/>
</>],
['regular',<>
	<path d="M336 144C336 126.3 350.3 112 368 112C385.7 112 400 126.3 400 144C400 161.7 385.7 176 368 176C350.3 176 336 161.7 336 144zM336 352C326.5 352 317.2 351.3 308.1 349.8L280.1 376.1C276.5 381.5 270.4 384 264 384H224V424C224 437.3 213.3 448 200 448H160V488C160 501.3 149.3 512 136 512H24C10.75 512 0 501.3 0 488V376C0 369.6 2.529 363.5 7.029 359L162.2 203.9C160.8 194.8 160 185.5 160 176C160 78.8 238.8 0 336 0C433.2 0 512 78.8 512 176C512 273.2 433.2 352 336 352zM336 304C406.7 304 464 246.7 464 176C464 105.3 406.7 48 336 48C265.3 48 208 105.3 208 176C208 182.9 208.5 189.7 209.6 196.3L213.4 220.5L47.1 385.9V464H111.1V400H175.1V336H254.1L291.5 298.6L315.7 302.4C322.3 303.5 329.1 304 336 304z"/>
</>],
['solid',<>
	<path d="M282.3 343.7L248.1 376.1C244.5 381.5 238.4 384 232 384H192V424C192 437.3 181.3 448 168 448H128V488C128 501.3 117.3 512 104 512H24C10.75 512 0 501.3 0 488V408C0 401.6 2.529 395.5 7.029 391L168.3 229.7C162.9 212.8 160 194.7 160 176C160 78.8 238.8 0 336 0C433.2 0 512 78.8 512 176C512 273.2 433.2 352 336 352C317.3 352 299.2 349.1 282.3 343.7zM376 176C398.1 176 416 158.1 416 136C416 113.9 398.1 96 376 96C353.9 96 336 113.9 336 136C336 158.1 353.9 176 376 176z"/>
</>],
['thin',<>
	<path d="M328 144C328 121.9 345.9 104 368 104C390.1 104 408 121.9 408 144C408 166.1 390.1 184 368 184C345.9 184 328 166.1 328 144zM368 120C354.7 120 344 130.7 344 144C344 157.3 354.7 168 368 168C381.3 168 392 157.3 392 144C392 130.7 381.3 120 368 120zM336 352C317.3 352 299.2 349.1 282.3 343.7L248.1 376.1C244.5 381.5 238.4 384 232 384H192V424C192 437.3 181.3 448 168 448H128V488C128 501.3 117.3 512 104 512H24C10.75 512 0 501.3 0 488V408C0 401.6 2.529 395.5 7.029 391L168.3 229.7C162.9 212.8 160 194.7 160 176C160 78.8 238.8 0 336 0C433.2 0 512 78.8 512 176C512 273.2 433.2 352 336 352zM336 336C424.4 336 496 264.4 496 176C496 87.63 424.4 16 336 16C247.6 16 176 87.63 176 176C176 193.1 178.7 209.5 183.6 224.8C185.4 230.5 183.9 236.8 179.7 241L18.34 402.3C16.84 403.8 16 405.9 16 408V488C16 492.4 19.58 496 24 496H104C108.4 496 112 492.4 112 488V448C112 439.2 119.2 432 128 432H168C172.4 432 176 428.4 176 424V384C176 375.2 183.2 368 192 368H232C234.1 368 236.2 367.2 237.7 365.7L270.1 332.3C275.2 328.1 281.5 326.6 287.2 328.4C302.5 333.3 318.9 336 336 336L336 336z"/>
</>],

]);

const Key: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Key.displayName = "Key";

export default Key;
