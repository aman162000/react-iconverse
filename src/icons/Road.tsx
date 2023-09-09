
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M256 96C256 113.7 270.3 128 288 128C305.7 128 320 113.7 320 96V32H394.8C421.9 32 446 49.08 455.1 74.63L572.9 407.2C574.9 413 576 419.2 576 425.4C576 455.5 551.5 480 521.4 480H320V416C320 398.3 305.7 384 288 384C270.3 384 256 398.3 256 416V480H54.61C24.45 480 0 455.5 0 425.4C0 419.2 1.06 413 3.133 407.2L120.9 74.63C129.1 49.08 154.1 32 181.2 32H255.1L256 96zM320 224C320 206.3 305.7 192 288 192C270.3 192 256 206.3 256 224V288C256 305.7 270.3 320 288 320C305.7 320 320 305.7 320 288V224z"/><path className="fa-secondary" d="M320 32V96C320 113.7 305.7 128 288 128C270.3 128 256 113.7 256 96V32H320zM288 192C305.7 192 320 206.3 320 224V288C320 305.7 305.7 320 288 320C270.3 320 256 305.7 256 288V224C256 206.3 270.3 192 288 192zM288 384C305.7 384 320 398.3 320 416V480H256V416C256 398.3 270.3 384 288 384z"/>
</>],
['light',<>
	<path d="M304 304C304 312.8 296.8 320 288 320C279.2 320 272 312.8 272 304V208C272 199.2 279.2 192 288 192C296.8 192 304 199.2 304 208V304zM390.4 32C417.3 32 441.3 48.79 450.5 74.04L567.5 394C582.7 435.8 551.8 480 507.4 480H68.64C24.19 480-6.728 435.8 8.529 394L125.5 74.04C134.7 48.79 158.7 32 185.6 32H390.4zM38.59 405C30.96 425.9 46.41 448 68.64 448H271.1V400C271.1 391.2 279.2 384 287.1 384C296.8 384 304 391.2 304 400V448H507.4C529.6 448 545 425.9 537.4 405L420.5 85.02C415.9 72.4 403.9 64 390.4 64H304V112C304 120.8 296.8 128 287.1 128C279.2 128 271.1 120.8 271.1 112V64H185.6C172.1 64 160.1 72.4 155.5 85.02L38.59 405z"/>
</>],
['regular',<>
	<path d="M312 296C312 309.3 301.3 320 287.1 320C274.7 320 263.1 309.3 263.1 296V216C263.1 202.7 274.7 192 287.1 192C301.3 192 312 202.7 312 216V296zM390.3 32C420.6 32 447.7 51.05 458 79.61L567.4 383.6C584.3 430.5 549.6 480 499.7 480H76.3C26.43 480-8.339 430.5 8.552 383.6L117.1 79.61C128.3 51.05 155.4 32 185.7 32H390.3zM53.71 399.9C48.08 415.5 59.67 432 76.3 432H263.1V408C263.1 394.7 274.7 384 287.1 384C301.3 384 312 394.7 312 408V432H499.7C516.3 432 527.9 415.5 522.3 399.9L412.8 95.87C409.4 86.35 400.4 80 390.3 80H312V104C312 117.3 301.3 128 287.1 128C274.7 128 263.1 117.3 263.1 104V80H185.7C175.6 80 166.6 86.35 163.2 95.87L53.71 399.9z"/>
</>],
['solid',<>
	<path d="M256 96C256 113.7 270.3 128 288 128C305.7 128 320 113.7 320 96V32H394.8C421.9 32 446 49.08 455.1 74.63L572.9 407.2C574.9 413 576 419.2 576 425.4C576 455.5 551.5 480 521.4 480H320V416C320 398.3 305.7 384 288 384C270.3 384 256 398.3 256 416V480H54.61C24.45 480 0 455.5 0 425.4C0 419.2 1.06 413 3.133 407.2L120.9 74.63C129.1 49.08 154.1 32 181.2 32H255.1L256 96zM320 224C320 206.3 305.7 192 288 192C270.3 192 256 206.3 256 224V288C256 305.7 270.3 320 288 320C305.7 320 320 305.7 320 288V224z"/>
</>],
['thin',<>
	<path d="M296 312C296 316.4 292.4 320 288 320C283.6 320 280 316.4 280 312V200C280 195.6 283.6 192 288 192C292.4 192 296 195.6 296 200V312zM390.6 32C414 32 434.1 46.58 443.1 68.55L567.5 404.6C581.1 441.1 554 480 515 480H60.96C21.96 480-5.096 441.1 8.45 404.6L132.9 68.55C141 46.58 161.1 32 185.4 32H390.6zM23.45 410.1C13.78 436.2 33.1 464 60.96 464H280V408C280 403.6 283.6 400 288 400C292.4 400 296 403.6 296 408V464H515C542.9 464 562.2 436.2 552.5 410.1L428.1 74.11C422.3 58.42 407.3 48 390.6 48H296V104C296 108.4 292.4 112 288 112C283.6 112 280 108.4 280 104V48H185.4C168.7 48 153.7 58.42 147.9 74.11L23.45 410.1z"/>
</>],

]);

const Road: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Road.displayName = "Road";

export default Road;