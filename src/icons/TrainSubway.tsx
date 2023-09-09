
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M0 96C0 42.98 42.98 0 96 0H352C405 0 448 42.98 448 96V352C448 405 405 448 352 448H96C42.98 448 0 405 0 352V96zM64 224C64 241.7 78.33 256 96 256H176C193.7 256 208 241.7 208 224V128C208 110.3 193.7 96 176 96H96C78.33 96 64 110.3 64 128V224zM272 96C254.3 96 240 110.3 240 128V224C240 241.7 254.3 256 272 256H352C369.7 256 384 241.7 384 224V128C384 110.3 369.7 96 352 96H272zM96 320C78.33 320 64 334.3 64 352C64 369.7 78.33 384 96 384C113.7 384 128 369.7 128 352C128 334.3 113.7 320 96 320zM352 384C369.7 384 384 369.7 384 352C384 334.3 369.7 320 352 320C334.3 320 320 334.3 320 352C320 369.7 334.3 384 352 384z"/><path className="fa-secondary" d="M64 128C64 110.3 78.33 96 96 96H176C193.7 96 208 110.3 208 128V224C208 241.7 193.7 256 176 256H96C78.33 256 64 241.7 64 224V128zM96 447.1H160L105.4 502.6C99.37 508.6 91.23 511.1 82.75 511.1H43.04C33.06 511.1 28.06 499.9 35.12 492.9L81.14 446.9C85.98 447.6 90.95 447.1 96 447.1H96zM352 447.1C357.1 447.1 362 447.6 366.9 446.9L412.9 492.9C419.9 499.9 414.9 511.1 404.1 511.1H365.3C356.8 511.1 348.6 508.6 342.6 502.6L288 447.1H352zM352 96C369.7 96 384 110.3 384 128V224C384 241.7 369.7 256 352 256H272C254.3 256 240 241.7 240 224V128C240 110.3 254.3 96 272 96H352z"/>
</>],
['light',<>
	<path d="M96 328C96 314.7 106.7 304 120 304C133.3 304 144 314.7 144 328C144 341.3 133.3 352 120 352C106.7 352 96 341.3 96 328zM352 328C352 341.3 341.3 352 328 352C314.7 352 304 341.3 304 328C304 314.7 314.7 304 328 304C341.3 304 352 314.7 352 328zM352 0C405 0 448 42.98 448 96V352C448 398 415.6 436.4 372.4 445.8L411.3 484.7C417.6 490.9 417.6 501.1 411.3 507.3C405.1 513.6 394.9 513.6 388.7 507.3L329.4 448H118.6L59.31 507.3C53.07 513.6 42.94 513.6 36.69 507.3C30.44 501.1 30.44 490.9 36.69 484.7L75.55 445.8C32.36 436.4 0 398 0 352V96C0 42.98 42.98 0 96 0H352zM208 32H96C60.65 32 32 60.65 32 96V224H208V32zM240 32V224H416V96C416 60.65 387.3 32 352 32H240zM96 416H352C387.3 416 416 387.3 416 352V256H32V352C32 387.3 60.65 416 96 416z"/>
</>],
['regular',<>
	<path d="M96 320C96 302.3 110.3 288 128 288C145.7 288 160 302.3 160 320C160 337.7 145.7 352 128 352C110.3 352 96 337.7 96 320zM352 320C352 337.7 337.7 352 320 352C302.3 352 288 337.7 288 320C288 302.3 302.3 288 320 288C337.7 288 352 302.3 352 320zM352 0C405 0 448 42.98 448 96V352C448 394.8 420 431 381.4 443.4L408.1 471C418.3 480.4 418.3 495.6 408.1 504.1C399.6 514.3 384.4 514.3 375 504.1L318.1 448H129.9L72.97 504.1C63.6 514.3 48.4 514.3 39.03 504.1C29.66 495.6 29.66 480.4 39.03 471L66.63 443.4C27.98 431 0 394.8 0 352V96C0 42.98 42.98 0 96 0H352zM200 48H96C69.49 48 48 69.49 48 96V208H200V48zM248 48V208H400V96C400 69.49 378.5 48 352 48H248zM96 400H352C378.5 400 400 378.5 400 352V256H48V352C48 378.5 69.49 400 96 400z"/>
</>],
['solid',<>
	<path d="M352 0C405 0 448 42.98 448 96V352C448 399.1 412.8 439.7 366.9 446.9L412.9 492.9C419.9 499.9 414.9 512 404.1 512H365.3C356.8 512 348.6 508.6 342.6 502.6L288 448H160L105.4 502.6C99.37 508.6 91.23 512 82.75 512H43.04C33.06 512 28.06 499.9 35.12 492.9L81.14 446.9C35.18 439.7 0 399.1 0 352V96C0 42.98 42.98 0 96 0H352zM64 224C64 241.7 78.33 256 96 256H176C193.7 256 208 241.7 208 224V128C208 110.3 193.7 96 176 96H96C78.33 96 64 110.3 64 128V224zM272 96C254.3 96 240 110.3 240 128V224C240 241.7 254.3 256 272 256H352C369.7 256 384 241.7 384 224V128C384 110.3 369.7 96 352 96H272zM96 320C78.33 320 64 334.3 64 352C64 369.7 78.33 384 96 384C113.7 384 128 369.7 128 352C128 334.3 113.7 320 96 320zM352 384C369.7 384 384 369.7 384 352C384 334.3 369.7 320 352 320C334.3 320 320 334.3 320 352C320 369.7 334.3 384 352 384z"/>
</>],
['thin',<>
	<path d="M352 64C369.7 64 384 78.33 384 96V224C384 241.7 369.7 256 352 256H96C78.33 256 64 241.7 64 224V96C64 78.33 78.33 64 96 64H352zM216 80H96C87.16 80 80 87.16 80 96V224C80 232.8 87.16 240 96 240H216V80zM232 80V240H352C360.8 240 368 232.8 368 224V96C368 87.16 360.8 80 352 80H232zM144 336C144 353.7 129.7 368 112 368C94.33 368 80 353.7 80 336C80 318.3 94.33 304 112 304C129.7 304 144 318.3 144 336zM112 320C103.2 320 96 327.2 96 336C96 344.8 103.2 352 112 352C120.8 352 128 344.8 128 336C128 327.2 120.8 320 112 320zM304 336C304 318.3 318.3 304 336 304C353.7 304 368 318.3 368 336C368 353.7 353.7 368 336 368C318.3 368 304 353.7 304 336zM336 352C344.8 352 352 344.8 352 336C352 327.2 344.8 320 336 320C327.2 320 320 327.2 320 336C320 344.8 327.2 352 336 352zM352 0C405 0 448 42.98 448 96V352C448 401.4 410.7 442.1 362.7 447.4L413.7 498.3C416.8 501.5 416.8 506.5 413.7 509.7C410.5 512.8 405.5 512.8 402.3 509.7L340.7 448H107.3L45.66 509.7C42.53 512.8 37.47 512.8 34.34 509.7C31.22 506.5 31.22 501.5 34.34 498.3L85.28 447.4C37.31 442.1 0 401.4 0 352V96C0 42.98 42.98 0 96 0H352zM352 16H96C51.82 16 16 51.82 16 96V352C16 396.2 51.82 432 96 432H352C396.2 432 432 396.2 432 352V96C432 51.82 396.2 16 352 16z"/>
</>],

]);

const TrainSubway: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

TrainSubway.displayName = "TrainSubway";

export default TrainSubway;