
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M64 32H96V112H352V32H384V112H448V144H240V240H448V272H384V368H448V400H240V480H208V400H0V368H64V272H0V240H208V144H0V112H64V32zM352 368V272H96V368H352z"/><path className="fa-secondary" d="M96 32H352V112H96V32zM0 112V96C0 60.65 28.65 32 64 32V112H0zM208 144V240H0V144H208zM0 368V272H64V368H0zM208 400V480H64C28.65 480 0 451.3 0 416V400H208zM448 400V416C448 451.3 419.3 480 384 480H240V400H448zM384 368V272H448V368H384zM96 368V272H352V368H96zM448 144V240H240V144H448zM384 112V32C419.3 32 448 60.65 448 96V112H384z"/>
</>],
['light',<>
	<path d="M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM136 128H312V64H136V128zM104 64H64C46.33 64 32 78.33 32 96V128H104V64zM32 160V240H208V160H32zM104 352V272H32V352H104zM32 384V416C32 433.7 46.33 448 64 448H208V384H32zM136 352H312V272H136V352zM416 352V272H344V352H416zM416 384H240V448H384C401.7 448 416 433.7 416 416V384zM240 160V240H416V160H240zM416 128V96C416 78.33 401.7 64 384 64H344V128H416z"/>
</>],
['regular',<>
	<path d="M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM144 128H304V80H144V128zM96 128V80H64C55.16 80 48 87.16 48 96V128H96zM48 176V232H200V176H48zM96 336V280H48V336H96zM48 384V416C48 424.8 55.16 432 64 432H200V384H48zM144 336H304V280H144V336zM400 336V280H352V336H400zM400 384H248V432H384C392.8 432 400 424.8 400 416V384zM248 176V232H400V176H248zM400 128V96C400 87.16 392.8 80 384 80H352V128H400z"/>
</>],
['solid',<>
	<path d="M96 32H352V112H96V32zM0 112V96C0 60.65 28.65 32 64 32V112H0zM208 144V240H0V144H208zM0 368V272H64V368H0zM208 400V480H64C28.65 480 0 451.3 0 416V400H208zM448 400V416C448 451.3 419.3 480 384 480H240V400H448zM384 368V272H448V368H384zM96 368V272H352V368H96zM448 144V240H240V144H448zM384 112V32C419.3 32 448 60.65 448 96V112H384z"/>
</>],
['thin',<>
	<path d="M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM128 128H320V48H128V128zM112 128V48H64C37.49 48 16 69.49 16 96V128H112zM16 144V248H216V144H16zM112 368V264H16V368H112zM16 384V416C16 442.5 37.49 464 64 464H216V384H16zM128 368H320V264H128V368zM432 368V264H336V368H432zM432 384H232V464H384C410.5 464 432 442.5 432 416V384zM232 144V248H432V144H232zM432 128V96C432 69.49 410.5 48 384 48H336V128H432z"/>
</>],

]);

const BlockBrick: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

BlockBrick.displayName = "BlockBrick";

export default BlockBrick;