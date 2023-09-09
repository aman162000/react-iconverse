
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M288 128v128h224v32c0 17.67-14.33 32-32 32h-192v192H224v-192H32c-17.67 0-32-14.33-32-32V256h224V128H32C14.33 128 0 113.7 0 96V64h224V16C224 7.162 231.2 0 240 0h32C280.8 0 288 7.162 288 16V64h224v32c0 17.67-14.33 32-32 32H288z"/><path className="fa-secondary" d="M24 32C10.75 32 0 42.74 0 55.1V64h48V55.1C48 42.74 37.25 32 24 32zM128 55.1C128 42.74 117.3 32 104 32S80 42.74 80 55.1V64H128V55.1zM83.16 128L224 221.9V183.4L140.8 128H83.16zM488 32c-13.25 0-24 10.74-24 23.1V64H512V55.1C512 42.74 501.3 32 488 32zM408 32C394.7 32 384 42.74 384 55.1V64h48V55.1C432 42.74 421.3 32 408 32zM371.2 128L288 183.4v38.46L428.8 128H371.2zM24 224C10.75 224 0 234.7 0 247.1V256h48V247.1C48 234.7 37.25 224 24 224zM83.16 320L224 413.9v-38.46L140.8 320H83.16zM488 224c-13.25 0-24 10.74-24 23.1V256H512V247.1C512 234.7 501.3 224 488 224zM408 224C394.7 224 384 234.7 384 247.1V256h48V247.1C432 234.7 421.3 224 408 224zM288 375.4v38.46L428.8 320h-57.69L288 375.4zM128 247.1C128 234.7 117.3 224 104 224S80 234.7 80 247.1V256H128V247.1z"/>
</>],
['light',<>
	<path d="M452.8 128H480c17.67 0 32-14.33 32-32V48C512 39.16 504.8 32 496 32S480 39.16 480 48V96h-64V48C416 39.16 408.8 32 400 32S384 39.16 384 48V96h-80V32c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v64H128V48C128 39.16 120.8 32 112 32S96 39.16 96 48V96H32V48C32 39.16 24.84 32 16 32S0 39.16 0 48V96c0 17.67 14.33 32 32 32h27.16L208 227.2V288H128V240C128 231.2 120.8 224 112 224S96 231.2 96 240V288H32V240C32 231.2 24.84 224 16 224S0 231.2 0 240V288c0 17.67 14.33 32 32 32h27.16L208 419.2V496C208 504.8 215.2 512 224 512s16-7.164 16-16V320h32v176c0 8.836 7.164 16 16 16s16-7.164 16-16v-76.77L452.8 320H480c17.67 0 32-14.33 32-32V240C512 231.2 504.8 224 496 224S480 231.2 480 240V288h-64V240C416 231.2 408.8 224 400 224S384 231.2 384 240V288h-80V227.2L452.8 128zM304 128h91.16L304 188.8V128zM240 32h32v64h-32V32zM116.8 128H208v60.78L116.8 128zM208 380.8L116.8 320H208V380.8zM395.2 320L304 380.8V320H395.2zM240 288V128h32v160H240z"/>
</>],
['regular',<>
	<path d="M443.3 128H480c17.67 0 32-14.33 32-32V48C512 39.16 504.8 32 496 32H480c-8.836 0-16 7.162-16 16v32h-32v-32C432 39.16 424.8 32 416 32h-16C391.2 32 384 39.16 384 48v32h-104v-64c0-8.838-7.164-16-16-16h-16c-8.836 0-16 7.162-16 16v64H128v-32C128 39.16 120.8 32 112 32H96C87.16 32 80 39.16 80 48v32h-32v-32C48 39.16 40.84 32 32 32H16C7.164 32 0 39.16 0 48V96c0 17.67 14.33 32 32 32h36.73L232 236.8V272H128v-32C128 231.2 120.8 224 112 224H96C87.16 224 80 231.2 80 240v32h-32v-32C48 231.2 40.84 224 32 224H16C7.164 224 0 231.2 0 240V288c0 17.67 14.33 32 32 32h200v192h48v-192H480c17.67 0 32-14.33 32-32V240C512 231.2 504.8 224 496 224H480c-8.836 0-16 7.162-16 16v32h-32v-32C432 231.2 424.8 224 416 224h-16C391.2 224 384 231.2 384 240v32h-104V236.8L443.3 128zM280 128h76.73L280 179.2V128zM155.3 128H232v51.16L155.3 128z"/>
</>],
['solid',<>
	<path d="M488 32c-13.25 0-24 10.75-24 23.1V64h-32V55.1C432 42.75 421.3 32 408 32S384 42.75 384 55.1V64h-96V16C288 7.163 280.8 0 272 0h-32C231.2 0 224 7.163 224 16V64H128V55.1C128 42.75 117.3 32 104 32S80 42.75 80 55.1V64h-32V55.1C48 42.75 37.25 32 24 32S0 42.75 0 55.1V96c0 17.67 14.33 32 32 32h51.16L224 221.9V256H128V247.1C128 234.7 117.3 224 104 224S80 234.7 80 247.1V256h-32V247.1C48 234.7 37.25 224 24 224S0 234.7 0 247.1V288c0 17.67 14.33 32 32 32h51.16L224 413.9V512h64v-98.1L428.8 320H480c17.67 0 32-14.33 32-32V247.1C512 234.7 501.3 224 488 224S464 234.7 464 247.1V256h-32V247.1C432 234.7 421.3 224 408 224S384 234.7 384 247.1V256h-96V221.9L428.8 128H480c17.67 0 32-14.33 32-32V55.1C512 42.75 501.3 32 488 32zM140.8 320H224v55.44L140.8 320zM371.2 320L288 375.4V320H371.2zM140.8 128H224v55.44L140.8 128zM288 128h83.16L288 183.4V128z"/>
</>],
['thin',<>
	<path d="M414.4 144H480c17.67 0 32-14.33 32-32V40C512 35.58 508.4 32 504 32S496 35.58 496 40V80H448V40C448 35.58 444.4 32 440 32S432 35.58 432 40V80H288V24C288 10.77 277.2 0 264 0h-16C234.8 0 224 10.77 224 24V80H80V40C80 35.58 76.41 32 72 32S64 35.58 64 40V80H16V40C16 35.58 12.41 32 8 32S0 35.58 0 40V112c0 17.67 14.33 32 32 32h65.58L224 228.3V272H80V232C80 227.6 76.41 224 72 224S64 227.6 64 232V272H16V232C16 227.6 12.41 224 8 224S0 227.6 0 232V304c0 17.67 14.33 32 32 32h65.58L224 420.3V504C224 508.4 227.6 512 232 512s8-3.578 8-8V336h32v168c0 4.422 3.594 8 8 8S288 508.4 288 504v-83.72L414.4 336H480c17.67 0 32-14.33 32-32V232C512 227.6 508.4 224 504 224S496 227.6 496 232V272H448V232C448 227.6 444.4 224 440 224S432 227.6 432 232V272H288V228.3L414.4 144zM288 209.1V144h97.58L288 209.1zM240 24c0-4.406 3.594-8 8-8h16c4.406 0 8 3.594 8 8V80h-32V24zM126.4 144H224v65.05L126.4 144zM224 401.1L126.4 336H224V401.1zM288 401.1V336h97.58L288 401.1zM496 288v16c0 8.822-7.178 16-16 16H32c-8.822 0-16-7.178-16-16V288H496zM240 272v-128h32v128H240zM32 128C23.18 128 16 120.8 16 112V96h480v16C496 120.8 488.8 128 480 128H32z"/>
</>],

]);

const UtilityPoleDouble: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

UtilityPoleDouble.displayName = "UtilityPoleDouble";

export default UtilityPoleDouble;