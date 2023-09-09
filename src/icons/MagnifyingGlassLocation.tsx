
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M207.1 96C160.4 96 121.9 134.5 121.9 182.2c0 38.35 56.29 108.5 77.87 134C201.8 318.5 204.7 320 207.1 320c3.207 0 6.26-1.459 8.303-3.791c21.58-25.52 77.88-95.67 77.88-134C294.1 134.5 255.6 96 207.1 96zM208 204c-15.46 0-28-12.54-28-28S192.5 148 208 148S236 160.5 236 176S223.5 204 208 204zM500.3 443.7l-119.7-119.7c-15.03 22.3-34.26 41.54-56.57 56.57l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7z"/><path className="fa-secondary" d="M208 0C93.13 0 0 93.13 0 208S93.13 416 208 416S416 322.9 416 208S322.9 0 208 0zM216.3 316.2C214.2 318.5 211.2 320 207.1 320c-3.209 0-6.164-1.459-8.207-3.791c-21.58-25.52-77.87-95.67-77.87-134C121.9 134.5 160.4 96 207.1 96c47.69 0 86.18 38.5 86.18 86.19C294.1 220.5 237.8 290.7 216.3 316.2z"/>
</>],
['light',<>
	<path d="M207.1 96C158.5 96 118.3 136.3 118.3 185.9c0 34.63 38.25 87.13 70.5 125.1C193.5 316.8 200.5 320 207.1 320S222.5 316.8 227.3 311c32.25-38 70.5-90.5 70.5-125.1C297.8 136.3 257.5 96 207.1 96zM208 284.3C172.8 241.5 150.3 203.4 150.3 185.9C150.3 153.9 176.1 128 208 128s57.75 25.88 57.75 57.88C265.8 203.4 243.3 241.5 208 284.3zM208 160C194.8 160 184 170.8 184 184S194.8 208 208 208s24-10.75 24-24S221.3 160 208 160zM507.3 484.7l-141.5-141.5C397 306.8 416 259.7 416 208C416 93.13 322.9 0 208 0S0 93.13 0 208S93.13 416 208 416c51.68 0 98.85-18.96 135.2-50.15l141.5 141.5C487.8 510.4 491.9 512 496 512s8.188-1.562 11.31-4.688C513.6 501.1 513.6 490.9 507.3 484.7zM208 384C110.1 384 32 305 32 208S110.1 32 208 32S384 110.1 384 208S305 384 208 384z"/>
</>],
['regular',<>
	<path d="M207.1 96C160.4 96 121.9 134.5 121.9 182.2c0 38.35 56.29 108.5 77.87 134C201.8 318.5 204.7 320 207.1 320s6.262-1.459 8.303-3.791c21.58-25.52 77.88-95.67 77.88-134C294.1 134.5 255.5 96 207.1 96zM208 208c-17.67 0-32-14.34-32-32c0-17.67 14.33-32 32-32s32 14.33 32 32C240 193.7 225.7 208 208 208zM504.1 471l-134-134C399.1 301.5 416 256.8 416 208C416 93.13 322.9 0 208 0S0 93.13 0 208S93.13 416 208 416c48.79 0 93.55-16.91 129-45.04l134 134C475.7 509.7 481.9 512 488 512s12.28-2.344 16.97-7.031C514.3 495.6 514.3 480.4 504.1 471zM208 368c-88.22 0-160-71.78-160-160s71.78-160 160-160s160 71.78 160 160S296.2 368 208 368z"/>
</>],
['solid',<>
	<path d="M236 176c0 15.46-12.54 28-28 28S180 191.5 180 176S192.5 148 208 148S236 160.5 236 176zM500.3 500.3c-15.62 15.62-40.95 15.62-56.57 0l-119.7-119.7c-40.41 27.22-90.9 40.65-144.7 33.46c-91.55-12.23-166-87.28-177.6-178.9c-17.24-136.2 97.29-250.7 233.4-233.4c91.64 11.6 166.7 86.07 178.9 177.6c7.19 53.8-6.236 104.3-33.46 144.7l119.7 119.7C515.9 459.3 515.9 484.7 500.3 500.3zM294.1 182.2C294.1 134.5 255.6 96 207.1 96C160.4 96 121.9 134.5 121.9 182.2c0 38.35 56.29 108.5 77.87 134C201.8 318.5 204.7 320 207.1 320c3.207 0 6.26-1.459 8.303-3.791C237.8 290.7 294.1 220.5 294.1 182.2z"/>
</>],
['thin',<>
	<path d="M509.7 498.3l-149.2-149.2C394.8 312.1 416 262.6 416 208C416 93.13 322.9 0 208 0S0 93.13 0 208S93.13 416 208 416c54.55 0 104.1-21.17 141.2-55.54l149.2 149.2C499.9 511.2 501.9 512 504 512s4.094-.7813 5.656-2.344C512.8 506.5 512.8 501.5 509.7 498.3zM208 400c-105.9 0-192-86.13-192-192s86.13-192 192-192s192 86.13 192 192S313.9 400 208 400zM207.1 96C160.4 96 121.9 134.5 121.9 182.2c0 38.35 56.29 108.5 77.87 134C201.8 318.5 204.7 320 207.1 320c3.207 0 6.26-1.459 8.303-3.791c21.58-25.52 77.88-95.67 77.88-134C294.1 134.5 255.6 96 207.1 96zM208 301.1C164.6 249.1 137.9 203.8 137.9 182.2C137.9 143.5 169.3 112 207.9 112c38.7 0 70.19 31.49 70.19 70.19C278.1 203.8 251.3 249.2 208 301.1zM208 160C199.2 160 192 167.2 192 176S199.2 192 208 192S224 184.8 224 176S216.8 160 208 160z"/>
</>],

]);

const MagnifyingGlassLocation: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

MagnifyingGlassLocation.displayName = "MagnifyingGlassLocation";

export default MagnifyingGlassLocation;
