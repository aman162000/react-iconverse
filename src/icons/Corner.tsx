
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-secondary" d="M416 384c-17.69 0-32-14.31-32-32V224H32C14.31 224 0 209.7 0 192s14.31-32 32-32h384c17.69 0 32 14.31 32 32v160C448 369.7 433.7 384 416 384z"/>
</>],
['light',<>
	<path d="M432 384c-8.844 0-16-7.156-16-16V192H16C7.156 192 0 184.8 0 176S7.156 160 16 160h416C440.8 160 448 167.2 448 176v192C448 376.8 440.8 384 432 384z"/>
</>],
['regular',<>
	<path d="M424 384c-13.25 0-24-10.75-24-24V208H24C10.75 208 0 197.3 0 184S10.75 160 24 160h400C437.3 160 448 170.8 448 184v176C448 373.3 437.3 384 424 384z"/>
</>],
['solid',<>
	<path d="M416 384c-17.69 0-32-14.31-32-32V224H32C14.31 224 0 209.7 0 192s14.31-32 32-32h384c17.69 0 32 14.31 32 32v160C448 369.7 433.7 384 416 384z"/>
</>],
['thin',<>
	<path d="M440 384c-4.406 0-8-3.594-8-8V208H8C3.594 208 0 204.4 0 200S3.594 192 8 192h432C444.4 192 448 195.6 448 200v176C448 380.4 444.4 384 440 384z"/>
</>],

]);

const Corner: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Corner.displayName = "Corner";

export default Corner;
