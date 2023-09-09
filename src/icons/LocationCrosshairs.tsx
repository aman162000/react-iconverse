
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M256 0C273.7 0 288 14.33 288 32V66.65C368.4 80.14 431.9 143.6 445.3 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H445.3C431.9 368.4 368.4 431.9 288 445.3V480C288 497.7 273.7 512 256 512C238.3 512 224 497.7 224 480V445.3C143.6 431.9 80.14 368.4 66.65 288H32C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224H66.65C80.14 143.6 143.6 80.14 224 66.65V32C224 14.33 238.3 0 256 0zM128 256C128 326.7 185.3 384 256 384C326.7 384 384 326.7 384 256C384 185.3 326.7 128 256 128C185.3 128 128 185.3 128 256z"/><path className="fa-secondary" d="M336 256C336 300.2 300.2 336 256 336C211.8 336 176 300.2 176 256C176 211.8 211.8 176 256 176C300.2 176 336 211.8 336 256z"/>
</>],
['light',<>
	<path d="M352 256C352 309 309 352 256 352C202.1 352 160 309 160 256C160 202.1 202.1 160 256 160C309 160 352 202.1 352 256zM256 192C220.7 192 192 220.7 192 256C192 291.3 220.7 320 256 320C291.3 320 320 291.3 320 256C320 220.7 291.3 192 256 192zM256 0C264.8 0 272 7.164 272 16V64.66C365.3 72.35 439.6 146.7 447.3 240H496C504.8 240 512 247.2 512 256C512 264.8 504.8 272 496 272H447.3C439.6 365.3 365.3 439.6 272 447.3V496C272 504.8 264.8 512 256 512C247.2 512 240 504.8 240 496V447.3C146.7 439.6 72.35 365.3 64.66 272H16C7.164 272 0 264.8 0 256C0 247.2 7.164 240 16 240H64.66C72.35 146.7 146.7 72.35 240 64.66V16C240 7.164 247.2 0 256 0V0zM96 256C96 344.4 167.6 416 256 416C344.4 416 416 344.4 416 256C416 167.6 344.4 96 256 96C167.6 96 96 167.6 96 256z"/>
</>],
['regular',<>
	<path d="M352 256C352 309 309 352 256 352C202.1 352 160 309 160 256C160 202.1 202.1 160 256 160C309 160 352 202.1 352 256zM256 208C229.5 208 208 229.5 208 256C208 282.5 229.5 304 256 304C282.5 304 304 282.5 304 256C304 229.5 282.5 208 256 208zM256 0C269.3 0 280 10.75 280 24V65.49C366.8 76.32 435.7 145.2 446.5 232H488C501.3 232 512 242.7 512 256C512 269.3 501.3 280 488 280H446.5C435.7 366.8 366.8 435.7 280 446.5V488C280 501.3 269.3 512 256 512C242.7 512 232 501.3 232 488V446.5C145.2 435.7 76.32 366.8 65.49 280H24C10.75 280 0 269.3 0 256C0 242.7 10.75 232 24 232H65.49C76.32 145.2 145.2 76.32 232 65.49V24C232 10.75 242.7 0 256 0V0zM112 256C112 335.5 176.5 400 256 400C335.5 400 400 335.5 400 256C400 176.5 335.5 112 256 112C176.5 112 112 176.5 112 256z"/>
</>],
['solid',<>
	<path d="M176 256C176 211.8 211.8 176 256 176C300.2 176 336 211.8 336 256C336 300.2 300.2 336 256 336C211.8 336 176 300.2 176 256zM256 0C273.7 0 288 14.33 288 32V66.65C368.4 80.14 431.9 143.6 445.3 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H445.3C431.9 368.4 368.4 431.9 288 445.3V480C288 497.7 273.7 512 256 512C238.3 512 224 497.7 224 480V445.3C143.6 431.9 80.14 368.4 66.65 288H32C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224H66.65C80.14 143.6 143.6 80.14 224 66.65V32C224 14.33 238.3 0 256 0zM128 256C128 326.7 185.3 384 256 384C326.7 384 384 326.7 384 256C384 185.3 326.7 128 256 128C185.3 128 128 185.3 128 256z"/>
</>],
['thin',<>
	<path d="M352 256C352 309 309 352 256 352C202.1 352 160 309 160 256C160 202.1 202.1 160 256 160C309 160 352 202.1 352 256zM256 176C211.8 176 176 211.8 176 256C176 300.2 211.8 336 256 336C300.2 336 336 300.2 336 256C336 211.8 300.2 176 256 176zM256 0C260.4 0 264 3.582 264 8V64.16C363.7 68.25 443.8 148.3 447.8 248H504C508.4 248 512 251.6 512 256C512 260.4 508.4 264 504 264H447.8C443.8 363.7 363.7 443.8 264 447.8V504C264 508.4 260.4 512 256 512C251.6 512 248 508.4 248 504V447.8C148.3 443.8 68.25 363.7 64.16 264H8C3.582 264 0 260.4 0 256C0 251.6 3.582 248 8 248H64.16C68.25 148.3 148.3 68.25 248 64.16V8C248 3.582 251.6 0 256 0V0zM80 256C80 353.2 158.8 432 256 432C353.2 432 432 353.2 432 256C432 158.8 353.2 80 256 80C158.8 80 80 158.8 80 256z"/>
</>],

]);

const LocationCrosshairs: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

LocationCrosshairs.displayName = "LocationCrosshairs";

export default LocationCrosshairs;