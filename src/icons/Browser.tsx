
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M0 96C0 60.65 28.65 32 64 32H448C483.3 32 512 60.65 512 96V224H0V96zM96 160C113.7 160 128 145.7 128 128C128 110.3 113.7 96 96 96C78.33 96 64 110.3 64 128C64 145.7 78.33 160 96 160zM184 104C170.7 104 160 114.7 160 128C160 141.3 170.7 152 184 152H424C437.3 152 448 141.3 448 128C448 114.7 437.3 104 424 104H184z"/><path className="fa-secondary" d="M128 128C128 145.7 113.7 160 96 160C78.33 160 64 145.7 64 128C64 110.3 78.33 96 96 96C113.7 96 128 110.3 128 128zM64 480C28.65 480 0 451.3 0 416V224H512V416C512 451.3 483.3 480 448 480H64z"/>
</>],
['light',<>
	<path d="M0 96C0 60.65 28.65 32 64 32H448C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96zM160 128H480V96C480 78.33 465.7 64 448 64H160V128zM128 64H64C46.33 64 32 78.33 32 96V128H128V64zM32 160V416C32 433.7 46.33 448 64 448H448C465.7 448 480 433.7 480 416V160H32z"/>
</>],
['regular',<>
	<path d="M7.724 65.49C13.36 55.11 21.79 46.47 32 40.56C39.63 36.15 48.25 33.26 57.46 32.33C59.61 32.11 61.79 32 64 32H448C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96C0 93.79 .112 91.61 .3306 89.46C1.204 80.85 3.784 72.75 7.724 65.49V65.49zM48 416C48 424.8 55.16 432 64 432H448C456.8 432 464 424.8 464 416V160H48V416z"/>
</>],
['solid',<>
	<path d="M0 96C0 60.65 28.65 32 64 32H448C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96zM96 160C113.7 160 128 145.7 128 128C128 110.3 113.7 96 96 96C78.33 96 64 110.3 64 128C64 145.7 78.33 160 96 160zM448 128C448 114.7 437.3 104 424 104H184C170.7 104 160 114.7 160 128C160 141.3 170.7 152 184 152H424C437.3 152 448 141.3 448 128z"/>
</>],
['thin',<>
	<path d="M0 96C0 60.65 28.65 32 64 32H448C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96zM128 144H496V96C496 69.49 474.5 48 448 48H128V144zM112 48H64C37.49 48 16 69.49 16 96V144H112V48zM16 160V416C16 442.5 37.49 464 64 464H448C474.5 464 496 442.5 496 416V160H16z"/>
</>],

]);

const Browser: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Browser.displayName = "Browser";

export default Browser;
