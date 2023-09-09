
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-secondary" d="M207.1 512c-12.02 0-23.15-6.776-28.61-17.68L76.22 288H32c-17.67 0-32-14.31-32-32s14.33-31.1 32-31.1l64-.0049c12.12 0 23.2 6.849 28.62 17.69l73.31 146.6l91.02-364.1C292.5 10.01 305.3 .0098 320 .0098l224 .0049c17.67 0 32 14.31 32 31.1s-14.33 32-32 32h-199L239 487.8c-3.25 13-14.25 22.59-27.56 24.06C210.3 511.1 209.2 512 207.1 512z"/>
</>],
['light',<>
	<path d="M192.1 477.3c-9.5-3.625-16.88-11.38-21.12-20.63L89.1 281.3C87.5 275.6 81.75 272 75.5 272H16C7.2 272 0 264.8 0 256c0-8.8 7.2-16 16-16H75.5c18.62 0 35.75 11 43.63 27.88l81.25 176.3c2.375 5.125 11.12 4.375 12.75-1.125l101.1-375.5C319.8 46.63 338.9 32 360.5 32h199.5C568.8 32 576 39.2 576 48c0 8.8-7.2 16-16 16H360.5c-7.25 0-13.5 4.875-15.38 11.88L244 451.3C238.1 472.8 215 486 192.1 477.3z"/>
</>],
['regular',<>
	<path d="M576 24c0 13.25-10.75 24-24 24h-213.1L231.3 493.6c-2.406 9.906-10.81 17.25-20.94 18.25c-.8125 .0938-1.635 .1348-2.417 .1348c-9.25 0-17.77-5.354-21.74-13.85L80.72 272H24C10.75 272 0 261.3 0 248S10.75 224 24 224L96 224c9.312 0 17.81 5.396 21.75 13.83l83 177.9l95.91-397.3C299.3 7.594 308.9 .0098 320 .0098L552 0C565.3 0 576 10.75 576 24z"/>
</>],
['solid',<>
	<path d="M207.1 512c-12.02 0-23.15-6.776-28.61-17.68L76.22 288H32c-17.67 0-32-14.31-32-32s14.33-31.1 32-31.1l64-.0049c12.12 0 23.2 6.849 28.62 17.69l73.31 146.6l91.02-364.1C292.5 10.01 305.3 .0098 320 .0098l224 .0049c17.67 0 32 14.31 32 31.1s-14.33 32-32 32h-199L239 487.8c-3.25 13-14.25 22.59-27.56 24.06C210.3 511.1 209.2 512 207.1 512z"/>
</>],
['thin',<>
	<path d="M576 40c0 4.406-3.594 8-8 8h-169.9c-24.13 0-45.5 15.38-53.13 38.28L215.6 474.5C214.6 477.6 211.7 479.8 208.5 480H208c-3.094 0-5.938-1.781-7.25-4.625L105.1 272.3C96.81 252.7 76.91 240 55.25 240H8C3.594 240 0 236.4 0 232S3.594 224 8 224h47.25C83.09 224 108.7 240.3 120.5 265.6l86.25 184.9l123.1-369.2C339.7 51.78 367.1 32 398.1 32H568C572.4 32 576 35.59 576 40z"/>
</>],

]);

const SquareRoot: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

SquareRoot.displayName = "SquareRoot";

export default SquareRoot;
