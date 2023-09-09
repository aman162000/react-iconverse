
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M31.11 304.6c0-4.377 3.501-8.483 8.109-8.483c.9283 0 1.902 .1666 2.9 .5312l197.5 71.66v135.3C239.6 508.7 235.5 512 231.3 512c-2.038 0-4.116-.7791-5.795-2.52L33.52 310.4C31.84 308.6 31.11 306.6 31.11 304.6zM472.8 296.1c4.608 0 8.109 4.105 8.109 8.483c0 1.998-.7294 4.052-2.416 5.799l-192 199.1C284.8 511.2 282.7 512 280.7 512c-4.219 0-8.268-3.338-8.268-8.395V368.3l197.5-71.66C470.9 296.3 471.9 296.1 472.8 296.1z"/><path className="fa-secondary" d="M231.3 0c4.217 0 8.263 3.331 8.263 8.365v324.3L5.461 247.6C1.968 246.3 0 243 0 239.7c0-2.075 .7542-4.175 2.367-5.836L225.5 2.521C227.2 .779 229.3 0 231.3 0zM512 239.7c0 3.355-1.968 6.651-5.461 7.944l-234.1 85.03V8.396c0-5.057 4.049-8.395 8.268-8.395c2.038 0 4.116 .7791 5.795 2.52l223.2 231.3C511.2 235.5 512 237.6 512 239.7z"/>
</>],
['light',<>
	<path d="M512 256c0-8.643-3.305-17.32-9.868-23.88l-222.2-222.3C273.3 3.26 264.6 0 256 0S238.7 3.26 232.1 9.887L9.868 232.1C3.305 238.7 0 247.4 0 256s3.305 17.27 9.868 23.84l222.2 222.3C238.7 508.7 247.2 512 256 512s17.26-3.26 23.89-9.887l222.2-222.3C508.7 273.4 512 264.7 512 256zM239.1 464.9L61.23 285.9l178.8 76.64V464.9zM239.1 327.8L43.72 243.7L239.1 47.26V327.8zM272 464.9v-102.3l178.8-76.64L272 464.9zM272 327.8v-280.6L468.3 243.7L272 327.8z"/>
</>],
['regular',<>
	<path d="M512 256c0-8.625-3.305-17.25-9.868-23.88l-222.2-222.3C273.3 3.262 264.6 0 256 0S238.7 3.262 232.1 9.887L9.868 232.1C3.305 238.8 0 247.4 0 256S3.305 273.3 9.868 279.9l222.2 222.3C238.7 508.7 247.4 512 256 512s17.26-3.262 23.89-9.887l222.2-222.3C508.7 273.2 512 264.7 512 256zM280 77.88l166.4 166.4l-166.4 71.38V77.88zM231.1 315.6L65.6 244.2L231.1 77.88V315.6zM231.1 367.9v66.25l-116-116L231.1 367.9zM280 367.9l116-49.75l-116 116V367.9z"/>
</>],
['solid',<>
	<path d="M231.3 0c4.217 0 8.263 3.331 8.263 8.365v324.3L5.461 247.6C1.968 246.3 0 243 0 239.7c0-2.075 .7542-4.175 2.367-5.836L225.5 2.521C227.2 .779 229.3 0 231.3 0zM31.11 304.6c0-4.377 3.501-8.483 8.109-8.483c.9283 0 1.902 .1666 2.9 .5312l197.5 71.66v135.3C239.6 508.7 235.5 512 231.3 512c-2.038 0-4.116-.7791-5.795-2.52L33.52 310.4C31.84 308.6 31.11 306.6 31.11 304.6zM512 239.7c0 3.355-1.968 6.651-5.461 7.944l-234.1 85.03V8.396c0-5.057 4.049-8.395 8.268-8.395c2.038 0 4.116 .7791 5.795 2.52l223.2 231.3C511.2 235.5 512 237.6 512 239.7zM472.8 296.1c4.608 0 8.109 4.105 8.109 8.483c0 1.998-.7294 4.052-2.416 5.799l-192 199.1C284.8 511.2 282.7 512 280.7 512c-4.219 0-8.268-3.338-8.268-8.395V368.3l197.5-71.66C470.9 296.3 471.9 296.1 472.8 296.1z"/>
</>],
['thin',<>
	<path d="M512 256c0-8.638-3.259-17.27-9.868-23.88l-222.2-222.3C273.3 3.292 264.6 0 256 0C247.4 0 238.7 3.292 232.1 9.887L9.868 232.1C3.259 238.8 0 247.4 0 256C0 264.6 3.259 273.2 9.868 279.9l222.2 222.3C238.7 508.7 247.3 512 256 512s17.29-3.292 23.89-9.887l222.2-222.3C508.7 273.3 512 264.7 512 256zM248 493.9c-1.641-.838-3.258-1.742-4.601-3.085l-220.2-220.3l224.8 87.06V493.9zM248 340.4L17.02 250.1C17.83 248.2 19.07 245.6 21.23 243.5l222.2-222.2C244.7 19.9 246.4 18.1 248 18.16V340.4zM268.6 490.8c-1.336 1.336-2.953 2.235-4.586 3.073v-136.3l224.8-87.05L268.6 490.8zM264 340.4V18.17c1.641 .84 3.269 1.743 4.586 3.057l222.2 222.2C492.9 245.6 494.2 248.2 494.1 250.1L264 340.4z"/>
</>],

]);

const DiceD8: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

DiceD8.displayName = "DiceD8";

export default DiceD8;