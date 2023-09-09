
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M401.9 247.1c7.73 4.865 9.747 15.15 4.522 22.65l-117.7 168.8C259.1 484.5 208.8 512 154.1 512H128c-70.69 0-128-57.31-128-128V256c0-17.67 14.33-32 32-32h192c17.67 0 32 14.33 32 32v64l69.8-102.6c4.847-7.122 14.45-9.137 21.74-4.545L401.9 247.1z"/><path className="fa-secondary" d="M640 32c0 17.69-14.31 32-32 32h-26.12c-32.81 0-63 16.47-80.72 44.09L407 252.7c-1.246-2.158-2.855-4.125-5.127-5.554l-54.34-34.21c-2.322-1.463-4.869-2.03-7.432-2.199L448 64c30.06-40.09 77.9-64 127.1-64H608C625.7 0 640 14.31 640 32z"/>
</>],
['light',<>
	<path d="M624 0h-19.62c-58.72 0-112.9 25.97-144.9 69.5l-122.5 166.6l-4.777-3.008C326.1 229.7 321.1 228.1 315.2 228.1c-9.787 0-19.41 4.48-25.66 12.85L240 307.3V248c0-22.06-17.94-40-40-40h-160C17.94 208 0 225.9 0 248v140.9C0 456.8 55.22 512 123.1 512h23.47c51.92 0 99.67-26.07 127.7-69.73l99.89-143.2c5.004-7.174 6.852-16.09 5.115-24.66c-1.738-8.572-6.908-16.06-14.31-20.72l-.8555-.5391l121.1-164.7C511.3 53.09 555.8 32 604.4 32H624C632.8 32 640 24.84 640 16S632.8 0 624 0zM247.4 424.1C225.2 459.4 187.5 480 146.6 480H123.1C72.88 480 32 439.1 32 388.9V248C32 243.6 35.59 240 40 240h160c4.406 0 8 3.594 8 8v83.38c0 10.34 6.625 19.5 16.44 22.78c2.471 .8086 5.014 1.201 7.533 1.201c7.416 0 14.63-3.402 19.25-9.607l63.97-85.63l32.75 20.62L247.4 424.1z"/>
</>],
['regular',<>
	<path d="M616 0h-40.04c-41.69 0-79.71 14.56-101.3 38.75l-135.8 156c-15.43-4.338-32.17 .7559-41.14 14.03L272 243.2V232c0-30.88-25.12-56-56-56h-160C25.12 176 0 201.1 0 232v140.9C0 449.6 62.41 512 139.1 512h23.47c57.38 0 110.2-28.81 140.7-76.34l105.8-151.7c6.031-8.594 8.281-19.41 6.219-29.66c-.7344-3.588-2.566-6.738-4.258-9.934l102.2-159.1C526 61.94 550 48 575.8 48H616C629.3 48 640 37.25 640 24S629.3 0 616 0zM263.4 408.1C241.2 443.4 203.5 464 162.6 464H139.1C88.88 464 48 423.1 48 372.9V232C48 227.6 51.59 224 56 224h160C220.4 224 224 227.6 224 232v83.38c0 10.34 6.625 19.5 16.44 22.78c9.75 3.188 20.59-.0938 26.78-8.406l63.97-85.63l32.75 20.62L263.4 408.1z"/>
</>],
['solid',<>
	<path d="M608 0h-32.04C525.9 0 478.1 23.91 448 64l-89.37 119.2c1.988 .9043 4.1 1.508 5.963 2.686l54.34 34.22c2.457 1.533 4.695 3.355 6.814 5.301l75.4-117.3C518.9 80.47 549.1 64 581.9 64H608c17.69 0 32-14.31 32-32S625.7 0 608 0zM401.9 247.1l-54.34-34.21c-7.289-4.592-16.89-2.576-21.74 4.545L256 320V256c0-17.69-14.31-32-32-32H32C14.31 224 0 238.3 0 256v128c0 70.69 57.31 128 128 128h26.12c54.72 0 105-27.47 134.6-73.47l117.7-168.8C411.6 262.3 409.6 251.1 401.9 247.1z"/>
</>],
['thin',<>
	<path d="M608 0h-32.04C525.9 0 478.1 23.91 448 64l-192 256V256c0-17.69-14.31-32-32-32H32C14.31 224 0 238.3 0 256v128c0 70.59 57.41 128 128 128h26.12c54.72 0 105-27.47 134.6-73.47l212.5-330.4C518.9 80.47 549.1 64 581.9 64H608c17.69 0 32-14.31 32-32S625.7 0 608 0zM275.2 429.9C248.6 471.3 203.3 496 154.1 496H128c-61.76 0-112-50.24-112-112V256c0-8.822 7.178-16 16-16h192c8.822 0 16 7.178 16 16v64c0 6.887 4.406 13 10.94 15.18c1.662 .5547 3.369 .8223 5.057 .8223c4.939 0 9.723-2.295 12.8-6.402l90.39-120.5l40.6 27.07L275.2 429.9zM608 48h-26.12c-38.31 0-73.52 19.24-94.18 51.44l-79.25 123.2l-39.64-26.43l91.99-122.7C487.8 37.53 530.9 16 576 16h32c8.822 0 16 7.178 16 16S616.8 48 608 48z"/>
</>],

]);

const PipeSmoking: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

PipeSmoking.displayName = "PipeSmoking";

export default PipeSmoking;
