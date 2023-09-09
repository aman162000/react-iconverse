
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M0 320v144C0 490.5 21.49 512 48 512h480c26.51 0 48-21.49 48-48V320H0zM448 24C448 10.74 437.3 0 424 0h-272C138.7 0 128 10.74 128 24V256h320V24z"/><path className="fa-secondary" d="M576 192v127.1L575.1 320H.875L0 319.1V192c0-17.67 14.33-32 32-32h96v64H79.1C71.16 224 64 231.2 64 239.1S71.16 256 79.1 256h416C504.8 256 512 248.8 512 240S504.8 224 496 224H448V160h96C561.7 160 576 174.3 576 192z"/>
</>],
['light',<>
	<path d="M528 160h-32C487.2 160 480 167.2 480 176S487.2 192 496 192h32C536.8 192 544 199.2 544 208V320H32V208C32 199.2 39.19 192 48 192h32C88.84 192 96 184.8 96 176S88.84 160 80 160h-32C21.53 160 0 181.5 0 208v256C0 490.5 21.53 512 48 512h480c26.47 0 48-21.53 48-48v-256C576 181.5 554.5 160 528 160zM544 464c0 8.828-7.188 16-16 16h-480C39.19 480 32 472.8 32 464V352h512V464zM144 256h288C440.8 256 448 248.8 448 240v-192C448 21.53 426.5 0 400 0h-224C149.5 0 128 21.53 128 48v192C128 248.8 135.2 256 144 256zM160 48C160 39.17 167.2 32 176 32h224C408.8 32 416 39.17 416 48V224H160V48z"/>
</>],
['regular',<>
	<path d="M520 160H480v48h40c4.406 0 8 3.594 8 8V320h-480V216c0-4.406 3.594-8 8-8H96V160H56C25.13 160 0 185.1 0 216v240C0 486.9 25.13 512 56 512h464c30.88 0 56-25.12 56-56v-240C576 185.1 550.9 160 520 160zM528 456c0 4.406-3.594 8-8 8H56c-4.406 0-8-3.594-8-8V368h480V456zM160 256h256c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H160C142.3 0 128 14.33 128 32v192C128 241.7 142.3 256 160 256zM176 48h224v160h-224V48z"/>
</>],
['solid',<>
	<path d="M0 464C0 490.5 21.49 512 48 512h480c26.51 0 48-21.49 48-48V352H0V464zM448 24C448 10.74 437.3 0 424 0h-272C138.7 0 128 10.74 128 24V224h320V24zM544 160h-64v64c0 17.67-14.33 32-32 32H128C110.3 256 96 241.7 96 224V160H32C14.33 160 0 174.3 0 192v127.1L.875 320h574.3L576 319.1V192C576 174.3 561.7 160 544 160z"/>
</>],
['thin',<>
	<path d="M128 256h320c8.836 0 16-7.164 16-16V32c0-17.67-14.33-32-32-32h-288c-17.67 0-32 14.33-32 32v208C112 248.8 119.2 256 128 256zM128 32c0-8.822 7.178-16 16-16h288C440.8 16 448 23.18 448 32v208H128V32zM528 160h-24c-4.418 0-8 3.582-8 8s3.582 8 8 8h24c17.67 0 32 14.33 32 32V320h-544V208c0-17.67 14.33-32 32-32h24c4.418 0 8-3.582 8-8S76.42 160 72 160H48C21.49 160 0 181.5 0 208V480c0 17.67 14.33 32 32 32h512c17.67 0 32-14.33 32-32V208C576 181.5 554.5 160 528 160zM560 480c0 8.822-7.178 16-16 16H32c-8.822 0-16-7.178-16-16v-144h544V480z"/>
</>],

]);

const BoxBallot: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

BoxBallot.displayName = "BoxBallot";

export default BoxBallot;
