
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M32 32C49.67 32 64 46.33 64 64V448C64 465.7 49.67 480 32 480C14.33 480 0 465.7 0 448V64C0 46.33 14.33 32 32 32z"/>
</>],
['light',<>
	<path d="M31.1 32C40.84 32 47.1 39.16 47.1 48V464C47.1 472.8 40.84 480 31.1 480C23.16 480 15.1 472.8 15.1 464V48C15.1 39.16 23.16 32 31.1 32V32z"/>
</>],
['regular',<>
	<path d="M32 40C45.25 40 56 50.75 56 64V448C56 461.3 45.25 472 32 472C18.75 472 8 461.3 8 448V64C8 50.75 18.75 40 32 40z"/>
</>],
['solid',<>
	<path d="M32 32C49.67 32 64 46.33 64 64V448C64 465.7 49.67 480 32 480C14.33 480 0 465.7 0 448V64C0 46.33 14.33 32 32 32z"/>
</>],
['thin',<>
	<path d="M31.1 32C36.42 32 39.1 35.58 39.1 40V472C39.1 476.4 36.42 480 31.1 480C27.58 480 23.1 476.4 23.1 472V40C23.1 35.58 27.58 32 31.1 32V32z"/>
</>],

]);

const Tally1: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Tally1.displayName = "Tally1";

export default Tally1;
