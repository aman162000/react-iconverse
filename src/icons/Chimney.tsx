
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M416 32H32C14.25 32 0 46.25 0 64v64c0 17.75 14.25 32 32 32h384c17.75 0 32-14.25 32-32V64C448 46.25 433.8 32 416 32z"/><path className="fa-secondary" d="M128 192H32v128h96V192zM32 480h256v-128H32V480zM160 192v128h256V192H160zM320 480h96v-128h-96V480z"/>
</>],
['light',<>
	<path d="M416 32H32C14.33 32 0 46.33 0 64v64c0 17.67 14.33 32 32 32l0 303.1c0 7.971 5.448 15.36 13.32 16.64C55.34 481.4 64 473.7 64 464V416h224v48C288 472.8 295.2 480 303.1 480S320 472.8 320 464V416h64v47.15c0 7.971 5.448 15.36 13.32 16.64C407.3 481.4 416 473.7 416 464V160c17.67 0 32-14.33 32-32V64C448 46.33 433.7 32 416 32zM128 256H64V160h64V256zM64 384V288h128v96H64zM384 384h-160V288h160V384zM384 256H160V160h224V256zM416 128H32V64h384V128z"/>
</>],
['regular',<>
	<path d="M416 32H32C14.33 32 0 46.33 0 64v128c0 17.75 14.25 32 32 32v232C32 469.3 42.75 480 55.1 480S80 469.3 80 456V384H256v72C256 469.3 266.7 480 279.1 480S304 469.3 304 456V384h64v72C368 469.3 378.7 480 391.1 480S416 469.3 416 456V224c17.75 0 32-14.25 32-32V64C448 46.33 433.7 32 416 32zM160 336H80V224H160V336zM368 336h-160V224h160V336zM400 176h-352v-96h352V176z"/>
</>],
['solid',<>
	<path d="M32 192v128h96V192H32zM32 480h256v-128H32V480zM416 32H32C14.25 32 0 46.25 0 64v64c0 17.75 14.25 32 32 32h384c17.75 0 32-14.25 32-32V64C448 46.25 433.8 32 416 32zM320 480h96v-128h-96V480zM160 320h256V192H160V320z"/>
</>],
['thin',<>
	<path d="M416 32H32C14.33 32 0 46.33 0 64v64c0 17.67 14.33 32 32 32v312C32 476.4 35.58 480 40 480s8-3.578 8-8V384h256v88c0 4.422 3.578 8 8 8S320 476.4 320 472V384h80v88c0 4.422 3.578 8 8 8S416 476.4 416 472V160c17.67 0 32-14.33 32-32V64C448 46.33 433.7 32 416 32zM128 256H48V160H128V256zM48 368v-96h160v96H48zM224 368v-96h176v96H224zM400 256h-256V160h256V256zM432 128c0 8.822-7.178 16-16 16H32C23.18 144 16 136.8 16 128V64c0-8.822 7.178-16 16-16h384c8.822 0 16 7.178 16 16V128z"/>
</>],

]);

const Chimney: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Chimney.displayName = "Chimney";

export default Chimney;
