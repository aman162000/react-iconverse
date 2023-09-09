
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M480 32c0-17.62-14.38-32-32-32H64C46.38 0 32 14.38 32 32v256h448V32zM240 224H96v-160h144V224zM416 224h-144v-160H416V224zM496 448H480v-128h-64v128H96v-128H32v128H16C7.125 448 0 455.1 0 464v32C0 504.9 7.125 512 16 512h480c8.875 0 16-7.125 16-16v-32C512 455.1 504.9 448 496 448z"/><path className="fa-secondary" d="M240 224H96v-160h144V224zM416 224h-144v-160H416V224z"/>
</>],
['light',<>
	<path d="M496 480H480v-160h-32v160H64v-160H32v160H16C7.164 480 0 487.2 0 496C0 504.8 7.164 512 16 512h480c8.836 0 16-7.164 16-16C512 487.2 504.8 480 496 480zM480 64c0-35.35-28.65-64-64-64H96C60.65 0 32 28.65 32 64v224h448V64zM240 256H64V64c0-17.67 14.33-32 32-32h144V256zM448 256h-176V32H416c17.67 0 32 14.33 32 32V256z"/>
</>],
['regular',<>
	<path d="M488 464H480V320h-48v144h-352V320H32v144H23.1C10.75 464 0 474.7 0 487.1S10.75 512 23.1 512H488c13.25 0 24-10.75 24-23.1S501.3 464 488 464zM480 32c0-17.62-14.38-32-32-32H64C46.38 0 32 14.38 32 32v240h448V32zM232 224H80V48h152V224zM432 224h-152V48h152V224z"/>
</>],
['solid',<>
	<path d="M480 32c0-17.62-14.38-32-32-32H64C46.38 0 32 14.38 32 32v256h448V32zM240 224H96v-160h144V224zM416 224h-144v-160H416V224zM496 448H480v-128h-64v128H96v-128H32v128H16C7.125 448 0 455.1 0 464v32C0 504.9 7.125 512 16 512h480c8.875 0 16-7.125 16-16v-32C512 455.1 504.9 448 496 448z"/>
</>],
['thin',<>
	<path d="M504 496H480v-168c0-4.406-3.594-8-8-8s-8 3.594-8 8v168h-416v-168C48 323.6 44.41 320 40 320S32 323.6 32 328v168H8C3.594 496 0 499.6 0 504S3.594 512 8 512h496c4.406 0 8-3.594 8-8S508.4 496 504 496zM40 288h432C476.4 288 480 284.4 480 280v-240C480 17.94 462.1 0 440 0H72C49.94 0 32 17.94 32 40v240C32 284.4 35.59 288 40 288zM264 16h176c13.22 0 24 10.78 24 24V272h-200V16zM48 40c0-13.22 10.78-24 24-24h176v256H48V40z"/>
</>],

]);

const WindowFrameOpen: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

WindowFrameOpen.displayName = "WindowFrameOpen";

export default WindowFrameOpen;