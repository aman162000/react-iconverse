
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M64 416c0 17.75 14.25 32 32 32h32v-64H64V416zM128 192H96C78.25 192 64 206.3 64 224v32h64V192zM224 192H160v64h64V192zM160 448h64v-64H160V448zM288 192h-32v64h64V224C320 206.3 305.8 192 288 192zM64 352h256V288H64V352zM256 448h32c17.75 0 32-14.25 32-32v-32h-64V448z"/><path className="fa-secondary" d="M256 0H64C28.75 0 0 28.75 0 64v384c0 35.25 28.75 64 64 64h256c35.25 0 64-28.75 64-64V128L256 0zM320 416c0 17.67-14.33 32-32 32H96c-17.67 0-32-14.33-32-32V224c0-17.67 14.33-32 32-32h192c17.67 0 32 14.33 32 32V416z"/>
</>],
['light',<>
	<path d="M365.3 109.3l-90.51-90.51C262.7 6.742 246.5 0 229.5 0H64C28.8 0 0 28.8 0 64v384c0 35.2 28.8 64 64 64h256c35.2 0 64-28.8 64-64V154.5C384 137.5 377.3 121.3 365.3 109.3zM352 448c0 17.6-14.4 32-32 32H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h165.5c8.486 0 16.62 3.371 22.63 9.373l90.5 90.5C348.6 137.9 352 146 352 154.5V448zM272 192h-160C85.5 192 64 213.5 64 240v160C64 426.5 85.5 448 112 448h160c26.5 0 48-21.5 48-48v-160C320 213.5 298.5 192 272 192zM168 224h48v40h-48V224zM96 240C96 231.3 103.3 224 112 224h24v40H96V240zM136 416H112C103.3 416 96 408.8 96 400v-24h40V416zM216 416h-48v-40h48V416zM288 400c0 8.75-7.25 16-16 16h-24v-40H288V400zM288 344H96v-48h192V344zM288 264h-40V224h24C280.8 224 288 231.3 288 240V264z"/>
</>],
['regular',<>
	<path d="M144 240H121.1C98.81 240 80 258.8 80 282V320h64V240zM80 390C80 413.2 98.81 432 121.1 432H208V352h-128V390zM176 320h128V282C304 258.8 285.2 240 261.1 240H176V320zM374.6 118.6l-109.3-109.3C259.4 3.371 251.2 0 242.7 0H64C28.8 0 0 28.8 0 64v384c0 35.2 28.8 64 64 64h256c35.2 0 64-28.8 64-64V141.3C384 132.8 380.6 124.6 374.6 118.6zM336 448c0 8.75-7.25 16-16 16H64c-8.75 0-16-7.25-16-16V64c0-8.75 7.25-16 16-16h172.1L336 147.9V448zM240 432h21.1C285.2 432 304 413.2 304 390V352h-64V432z"/>
</>],
['solid',<>
	<path d="M0 64v384c0 35.25 28.75 64 64 64h256c35.25 0 64-28.75 64-64V128l-128-128H64C28.75 0 0 28.75 0 64zM224 256H160V192h64V256zM320 256h-64V192h32c17.75 0 32 14.25 32 32V256zM256 384h64v32c0 17.75-14.25 32-32 32h-32V384zM160 384h64v64H160V384zM64 384h64v64H96c-17.75 0-32-14.25-32-32V384zM64 288h256v64H64V288zM64 224c0-17.75 14.25-32 32-32h32v64H64V224z"/>
</>],
['thin',<>
	<path d="M256 0H64C28.75 0 0 28.75 0 64v384c0 35.25 28.75 64 64 64h256c35.25 0 64-28.75 64-64V128L256 0zM368 448c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V64c0-26.47 21.53-48 48-48h185.4L368 134.6V448zM64 224v192c0 17.75 14.25 32 32 32h192c17.75 0 32-14.25 32-32V224c0-17.75-14.25-32-32-32H96C78.25 192 64 206.3 64 224zM144 432H96c-8.973 0-16-7.029-16-16v-48h64V432zM224 432H160v-64h64V432zM304 416c0 8.971-7.027 16-16 16h-48v-64h64V416zM304 352h-224V288h224V352zM240 208H288c8.973 0 16 7.027 16 16v48h-64V208zM160 208h64v64H160V208zM144 272h-64V224c0-8.973 7.027-16 16-16h48V272z"/>
</>],

]);

const SimCard: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

SimCard.displayName = "SimCard";

export default SimCard;
