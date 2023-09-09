
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M496 448H480V32c0-17.62-14.38-32-32-32H64C46.38 0 32 14.38 32 32v416H16C7.125 448 0 455.1 0 464v32C0 504.9 7.125 512 16 512h480c8.875 0 16-7.125 16-16v-32C512 455.1 504.9 448 496 448zM240 448H96V288h144V448zM240 224H96V64h144V224zM416 448h-144V288H416V448zM416 224h-144V64H416V224z"/><path className="fa-secondary" d="M272 64v160H416V64H272zM96 224h144V64H96V224zM96 448h144V288H96V448zM272 448H416V288h-144V448z"/>
</>],
['light',<>
	<path d="M496 480H480V64c0-35.35-28.65-64-64-64H96C60.65 0 32 28.65 32 64v416H16C7.164 480 0 487.2 0 496C0 504.8 7.164 512 16 512h480c8.836 0 16-7.164 16-16C512 487.2 504.8 480 496 480zM240 480H64V288h176V480zM240 256H64V64c0-17.67 14.33-32 32-32h144V256zM448 480h-176V288H448V480zM448 256h-176V32H416c17.67 0 32 14.33 32 32V256z"/>
</>],
['regular',<>
	<path d="M488 464H480V32c0-17.6-14.4-32-32-32H64C46.4 0 32 14.4 32 32v432H23.1C10.75 464 0 474.7 0 487.1S10.75 512 23.1 512H488c13.25 0 24-10.75 24-23.1S501.3 464 488 464zM232 464H80v-192h152V464zM232 224H80V48h152V224zM432 464h-152v-192h152V464zM432 224h-152V48h152V224z"/>
</>],
['solid',<>
	<path d="M496 448H480V32c0-17.62-14.38-32-32-32H64C46.38 0 32 14.38 32 32v416H16C7.125 448 0 455.1 0 464v32C0 504.9 7.125 512 16 512h480c8.875 0 16-7.125 16-16v-32C512 455.1 504.9 448 496 448zM416 224h-144V64H416V224zM96 64h144v160H96V64zM96 288h144v160H96V288zM272 448V288H416v160H272z"/>
</>],
['thin',<>
	<path d="M504 496H480V40C480 17.94 462.1 0 440 0H72C49.94 0 32 17.94 32 40V496H8C3.594 496 0 499.6 0 504S3.594 512 8 512h496c4.406 0 8-3.594 8-8S508.4 496 504 496zM440 16c13.22 0 24 10.78 24 24v208h-200V16H440zM48 40c0-13.22 10.78-24 24-24h176v232H48V40zM48 496V264h200v232H48zM264 496V264h200v232H264z"/>
</>],

]);

const WindowFrame: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

WindowFrame.displayName = "WindowFrame";

export default WindowFrame;