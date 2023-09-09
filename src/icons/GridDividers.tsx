
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M488 0C501.3 0 512 10.75 512 24C512 37.25 501.3 48 488 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H488zM488 288C501.3 288 512 298.7 512 312C512 325.3 501.3 336 488 336H24C10.75 336 0 325.3 0 312C0 298.7 10.75 288 24 288H488z"/><path className="fa-secondary" d="M128 96C145.7 96 160 110.3 160 128V192C160 209.7 145.7 224 128 224H64C46.33 224 32 209.7 32 192V128C32 110.3 46.33 96 64 96H128zM128 384C145.7 384 160 398.3 160 416V480C160 497.7 145.7 512 128 512H64C46.33 512 32 497.7 32 480V416C32 398.3 46.33 384 64 384H128zM192 128C192 110.3 206.3 96 224 96H288C305.7 96 320 110.3 320 128V192C320 209.7 305.7 224 288 224H224C206.3 224 192 209.7 192 192V128zM288 384C305.7 384 320 398.3 320 416V480C320 497.7 305.7 512 288 512H224C206.3 512 192 497.7 192 480V416C192 398.3 206.3 384 224 384H288zM352 128C352 110.3 366.3 96 384 96H448C465.7 96 480 110.3 480 128V192C480 209.7 465.7 224 448 224H384C366.3 224 352 209.7 352 192V128zM448 384C465.7 384 480 398.3 480 416V480C480 497.7 465.7 512 448 512H384C366.3 512 352 497.7 352 480V416C352 398.3 366.3 384 384 384H448z"/>
</>],
['light',<>
	<path d="M0 16C0 7.164 7.164 0 16 0H496C504.8 0 512 7.164 512 16C512 24.84 504.8 32 496 32H16C7.164 32 0 24.84 0 16zM32 128C32 110.3 46.33 96 64 96H128C145.7 96 160 110.3 160 128V192C160 209.7 145.7 224 128 224H64C46.33 224 32 209.7 32 192V128zM64 192H128V128H64V192zM32 416C32 398.3 46.33 384 64 384H128C145.7 384 160 398.3 160 416V480C160 497.7 145.7 512 128 512H64C46.33 512 32 497.7 32 480V416zM64 480H128V416H64V480zM288 96C305.7 96 320 110.3 320 128V192C320 209.7 305.7 224 288 224H224C206.3 224 192 209.7 192 192V128C192 110.3 206.3 96 224 96H288zM288 128H224V192H288V128zM192 416C192 398.3 206.3 384 224 384H288C305.7 384 320 398.3 320 416V480C320 497.7 305.7 512 288 512H224C206.3 512 192 497.7 192 480V416zM224 480H288V416H224V480zM448 96C465.7 96 480 110.3 480 128V192C480 209.7 465.7 224 448 224H384C366.3 224 352 209.7 352 192V128C352 110.3 366.3 96 384 96H448zM448 128H384V192H448V128zM352 416C352 398.3 366.3 384 384 384H448C465.7 384 480 398.3 480 416V480C480 497.7 465.7 512 448 512H384C366.3 512 352 497.7 352 480V416zM384 480H448V416H384V480zM496 288C504.8 288 512 295.2 512 304C512 312.8 504.8 320 496 320H16C7.164 320 0 312.8 0 304C0 295.2 7.164 288 16 288H496z"/>
</>],
['regular',<>
	<path d="M0 24C0 10.75 10.75 0 24 0H488C501.3 0 512 10.75 512 24C512 37.25 501.3 48 488 48H24C10.75 48 0 37.25 0 24zM32 128C32 110.3 46.33 96 64 96H128C145.7 96 160 110.3 160 128V192C160 209.7 145.7 224 128 224H64C46.33 224 32 209.7 32 192V128zM112 176V144H80V176H112zM32 416C32 398.3 46.33 384 64 384H128C145.7 384 160 398.3 160 416V480C160 497.7 145.7 512 128 512H64C46.33 512 32 497.7 32 480V416zM112 464V432H80V464H112zM288 96C305.7 96 320 110.3 320 128V192C320 209.7 305.7 224 288 224H224C206.3 224 192 209.7 192 192V128C192 110.3 206.3 96 224 96H288zM240 144V176H272V144H240zM192 416C192 398.3 206.3 384 224 384H288C305.7 384 320 398.3 320 416V480C320 497.7 305.7 512 288 512H224C206.3 512 192 497.7 192 480V416zM272 464V432H240V464H272zM448 96C465.7 96 480 110.3 480 128V192C480 209.7 465.7 224 448 224H384C366.3 224 352 209.7 352 192V128C352 110.3 366.3 96 384 96H448zM400 144V176H432V144H400zM352 416C352 398.3 366.3 384 384 384H448C465.7 384 480 398.3 480 416V480C480 497.7 465.7 512 448 512H384C366.3 512 352 497.7 352 480V416zM432 464V432H400V464H432zM488 288C501.3 288 512 298.7 512 312C512 325.3 501.3 336 488 336H24C10.75 336 0 325.3 0 312C0 298.7 10.75 288 24 288H488z"/>
</>],
['solid',<>
	<path d="M0 24C0 10.75 10.75 0 24 0H488C501.3 0 512 10.75 512 24C512 37.25 501.3 48 488 48H24C10.75 48 0 37.25 0 24zM128 96C145.7 96 160 110.3 160 128V192C160 209.7 145.7 224 128 224H64C46.33 224 32 209.7 32 192V128C32 110.3 46.33 96 64 96H128zM128 384C145.7 384 160 398.3 160 416V480C160 497.7 145.7 512 128 512H64C46.33 512 32 497.7 32 480V416C32 398.3 46.33 384 64 384H128zM192 128C192 110.3 206.3 96 224 96H288C305.7 96 320 110.3 320 128V192C320 209.7 305.7 224 288 224H224C206.3 224 192 209.7 192 192V128zM288 384C305.7 384 320 398.3 320 416V480C320 497.7 305.7 512 288 512H224C206.3 512 192 497.7 192 480V416C192 398.3 206.3 384 224 384H288zM352 128C352 110.3 366.3 96 384 96H448C465.7 96 480 110.3 480 128V192C480 209.7 465.7 224 448 224H384C366.3 224 352 209.7 352 192V128zM448 384C465.7 384 480 398.3 480 416V480C480 497.7 465.7 512 448 512H384C366.3 512 352 497.7 352 480V416C352 398.3 366.3 384 384 384H448zM488 288C501.3 288 512 298.7 512 312C512 325.3 501.3 336 488 336H24C10.75 336 0 325.3 0 312C0 298.7 10.75 288 24 288H488z"/>
</>],
['thin',<>
	<path d="M0 8C0 3.582 3.582 0 8 0H504C508.4 0 512 3.582 512 8C512 12.42 508.4 16 504 16H8C3.582 16 0 12.42 0 8zM32 128C32 110.3 46.33 96 64 96H128C145.7 96 160 110.3 160 128V192C160 209.7 145.7 224 128 224H64C46.33 224 32 209.7 32 192V128zM48 128V192C48 200.8 55.16 208 64 208H128C136.8 208 144 200.8 144 192V128C144 119.2 136.8 112 128 112H64C55.16 112 48 119.2 48 128zM32 416C32 398.3 46.33 384 64 384H128C145.7 384 160 398.3 160 416V480C160 497.7 145.7 512 128 512H64C46.33 512 32 497.7 32 480V416zM48 416V480C48 488.8 55.16 496 64 496H128C136.8 496 144 488.8 144 480V416C144 407.2 136.8 400 128 400H64C55.16 400 48 407.2 48 416zM288 96C305.7 96 320 110.3 320 128V192C320 209.7 305.7 224 288 224H224C206.3 224 192 209.7 192 192V128C192 110.3 206.3 96 224 96H288zM288 112H224C215.2 112 208 119.2 208 128V192C208 200.8 215.2 208 224 208H288C296.8 208 304 200.8 304 192V128C304 119.2 296.8 112 288 112zM192 416C192 398.3 206.3 384 224 384H288C305.7 384 320 398.3 320 416V480C320 497.7 305.7 512 288 512H224C206.3 512 192 497.7 192 480V416zM208 416V480C208 488.8 215.2 496 224 496H288C296.8 496 304 488.8 304 480V416C304 407.2 296.8 400 288 400H224C215.2 400 208 407.2 208 416zM448 96C465.7 96 480 110.3 480 128V192C480 209.7 465.7 224 448 224H384C366.3 224 352 209.7 352 192V128C352 110.3 366.3 96 384 96H448zM448 112H384C375.2 112 368 119.2 368 128V192C368 200.8 375.2 208 384 208H448C456.8 208 464 200.8 464 192V128C464 119.2 456.8 112 448 112zM352 416C352 398.3 366.3 384 384 384H448C465.7 384 480 398.3 480 416V480C480 497.7 465.7 512 448 512H384C366.3 512 352 497.7 352 480V416zM368 416V480C368 488.8 375.2 496 384 496H448C456.8 496 464 488.8 464 480V416C464 407.2 456.8 400 448 400H384C375.2 400 368 407.2 368 416zM504 288C508.4 288 512 291.6 512 296C512 300.4 508.4 304 504 304H8C3.582 304 0 300.4 0 296C0 291.6 3.582 288 8 288H504z"/>
</>],

]);

const GridDividers: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

GridDividers.displayName = "GridDividers";

export default GridDividers;