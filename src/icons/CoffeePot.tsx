
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M130.1 320C128.3 330.9 128 339.8 128 344.6C128 373.2 135.6 391.6 157.9 416h260.1C440.4 391.7 448 373.3 448 344.6C448 339.9 447.7 330.1 445.9 320H130.1zM432 176L480 32H88C39.38 32 0 71.38 0 120V208C0 216.9 7.125 224 16 224h32C56.88 224 64 216.9 64 208V136C64 113.9 81.88 96 104 96h13.38l26.67 80H432z"/><path className="fa-secondary" d="M432 176h-288C94.67 215.8 64 277.8 64 344.6c0 51.5 18.62 84.74 49.62 117.7C124.5 473.6 139.5 480 155.1 480l265.8 0c15.62 0 30.57-6.192 41.32-17.57C493.2 429.6 512 396.1 512 344.6C512 278.4 481.9 216.3 432 176zM417.1 416H157.9C135.6 391.6 128 373.2 128 344.6C128 328.7 128.8 273.2 189.8 224h197.1C447.1 272.5 448 328.1 448 344.6C448 373.3 440.4 391.7 417.1 416z"/>
</>],
['light',<>
	<path d="M431.5 177.6l41.49-124.6C476.4 42.7 468.7 32 457.8 32H80C35.82 32 0 67.82 0 112v96C0 216.8 7.199 224 16 224S32 216.8 32 208v-96C32 85.49 53.49 64 80 64h26.62l38.13 114.1C95.38 217.9 64 277.8 64 344.6c0 51.48 18.64 84.76 49.62 117.7C124.3 473.8 139.5 480 155.1 480l265.8 0c15.53 0 30.66-6.274 41.32-17.57C493.3 429.5 512 396.2 512 344.6C512 278.4 481.4 217.9 431.5 177.6zM140.4 64h295.3l-32 96H172.4L140.4 64zM178.5 192h219.8c21 16.88 54.63 42.13 72.5 96H105.4C123.5 234 158.3 208.4 178.5 192zM439 440.5C434.3 445.4 427.6 448.1 420.9 448H155.1c-6.875 .125-13.38-2.625-18.12-7.625C107.1 408.8 96 382.8 96 344.6C96.13 336.4 96.75 328.1 97.88 320h380.3C479.4 328.1 480 336.4 480 344.6C480 382.8 468.9 408.8 439 440.5z"/>
</>],
['regular',<>
	<path d="M428 175L480 32H88C39.4 32 0 71.4 0 120v80C0 213.3 10.75 224 23.1 224S48 213.3 48 200V120c0-22.09 17.91-40 40-40h25.5l34.75 95.5C96.88 215.2 64 276.1 64 344.6c0 51.5 18.62 84.74 49.62 117.7C124.5 473.6 139.5 480 155.1 480l265.8 0c15.53 0 30.66-6.274 41.32-17.57C493.3 429.5 512 396.2 512 344.6C512 276.9 480 215.1 428 175zM411.5 80L382.4 160H193.6L164.5 80H411.5zM114.1 320C121.2 273.8 148.2 234.1 186.2 208h205.9c37.25 26.12 63 66.25 69.75 112H114.1z"/>
</>],
['solid',<>
	<path d="M431.5 177.6L480 32H88C39.38 32 0 71.38 0 120V208C0 216.9 7.125 224 16 224h32C56.88 224 64 216.9 64 208V136C64 113.9 81.88 96 104 96h13.38l27.38 82.13C95.38 217.9 64 277.8 64 344.6c0 51.5 18.62 84.74 49.62 117.7C124.5 473.6 139.5 480 155.1 480l265.8 0c15.62 0 30.57-6.192 41.32-17.57C493.2 429.6 512 396.1 512 344.6C512 278.4 481.4 217.9 431.5 177.6zM445.9 320H130.6c6.75-39 28.88-72.88 60.5-96h195.8C417.1 247.2 439.5 281.2 445.9 320z"/>
</>],
['thin',<>
	<path d="M431.5 177.6L480 32H72C32.31 32 0 64.3 0 104v112C0 220.4 3.594 224 8 224S16 220.4 16 216v-112c0-30.88 25.12-56 56-56h29.34l43.41 130.1C95.38 217.9 64 277.8 64 344.6c0 51.5 18.62 84.74 49.62 117.7C124.5 473.6 139.5 480 155.1 480l265.8 0c15.62 0 30.57-6.192 41.32-17.57C493.2 429.6 512 396.1 512 344.6C512 278.4 481.4 217.9 431.5 177.6zM118.2 48h339.6l-42.63 128H160.9L118.2 48zM153.2 192h270.4c35.23 29.26 58.87 68.62 68.02 112H84.45C93.71 260.7 117.6 221.3 153.2 192zM450.6 451.4C443 459.4 432.2 464 420.9 464H155.1c-11.23 0-22.17-4.645-29.84-12.58C98.1 422.5 80 393.2 80 344.6C80 336.3 80.65 328.1 81.69 320h412.7C495.4 328.1 496 336.3 496 344.6C496 393.3 477.9 422.5 450.6 451.4z"/>
</>],

]);

const CoffeePot: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CoffeePot.displayName = "CoffeePot";

export default CoffeePot;