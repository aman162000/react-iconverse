
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M64 160v64h64V160H64zM256 416h64v-64h-64V416zM192 96H128v64h64V96zM384 352V288h-64v64H384zM128 416h64v-64H128V416zM64 288v64h64V288H64zM320 96h-64v64h64V96zM192 288v64h64V288H192zM256 224v64h64V224H256zM256 224V160H192v64H256zM384 224V160h-64v64H384zM192 224H128v64h64V224z"/><path className="fa-secondary" d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM384 416H64V96h320V416z"/>
</>],
['light',<>
	<path d="M352 112H96C87.16 112 80 119.2 80 128v256c0 8.836 7.164 16 16 16h256c8.836 0 16-7.164 16-16V128C368 119.2 360.8 112 352 112zM144 368h-32v-32h32V368zM144 304h-32v-32h32V304zM144 240h-32v-32h32V240zM144 176h-32v-32h32V176zM208 368h-32v-32h32V368zM208 304h-32v-32h32V304zM208 240h-32v-32h32V240zM208 176h-32v-32h32V176zM272 368h-32v-32h32V368zM272 304h-32v-32h32V304zM272 240h-32v-32h32V240zM272 176h-32v-32h32V176zM336 368h-32v-32h32V368zM336 304h-32v-32h32V304zM336 240h-32v-32h32V240zM336 176h-32v-32h32V176zM384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM416 416c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-17.64 14.36-32 32-32h320c17.64 0 32 14.36 32 32V416z"/>
</>],
['regular',<>
	<path d="M64 96v64h64V96H64zM256 96H192v64h64V96zM192 416h64v-64H192V416zM64 416h64v-64H64V416zM64 224v64h64V224H64zM384 288V224h-64v64H384zM384 416v-64h-64v64H384zM320 160h64V96h-64V160zM256 224h64V160h-64V224zM384 32H64C28.8 32 0 60.8 0 96v320c0 35.2 28.8 64 64 64h320c35.2 0 64-28.8 64-64V96C448 60.8 419.2 32 384 32zM400 416c0 8.674-7.326 16-16 16H64c-8.672 0-16-7.326-16-16V96c0-8.674 7.328-16 16-16h320c8.674 0 16 7.326 16 16V416zM192 160H128v64h64V160zM192 288h64V224H192V288zM128 288v64h64V288H128zM256 352h64V288h-64V352z"/>
</>],
['solid',<>
	<path d="M192 224H128v64h64V224zM384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 60.65 419.3 32 384 32zM384 160h-64v64h64v64h-64v64h64v64h-64v-64h-64v64H192v-64H128v64H64v-64h64V288H64V224h64V160H64V96h64v64h64V96h64v64h64V96h64V160zM192 288v64h64V288H192zM256 224V160H192v64H256zM256 288h64V224h-64V288z"/>
</>],
['thin',<>
	<path d="M400 32h-352C21.49 32 0 53.49 0 80v352C0 458.5 21.49 480 48 480h352c26.51 0 48-21.49 48-48v-352C448 53.49 426.5 32 400 32zM432 432c0 17.64-14.36 32-32 32h-352c-17.64 0-32-14.36-32-32v-352c0-17.64 14.36-32 32-32h352c17.64 0 32 14.36 32 32V432zM376 88h-304c-8.812 0-16 7.172-16 16v304c0 8.828 7.188 16 16 16h304c8.812 0 16-7.172 16-16v-304C392 95.17 384.8 88 376 88zM120 408h-48v-48h48V408zM120 344h-48v-48h48V344zM120 280h-48v-48h48V280zM120 216h-48v-48h48V216zM120 152h-48v-48h48V152zM184 408h-48v-48h48V408zM184 344h-48v-48h48V344zM184 280h-48v-48h48V280zM184 216h-48v-48h48V216zM184 152h-48v-48h48V152zM248 408h-48v-48h48V408zM248 344h-48v-48h48V344zM248 280h-48v-48h48V280zM248 216h-48v-48h48V216zM248 152h-48v-48h48V152zM312 408h-48v-48h48V408zM312 344h-48v-48h48V344zM312 280h-48v-48h48V280zM312 216h-48v-48h48V216zM312 152h-48v-48h48V152zM376 407.1C376 408 376 407.1 376 407.1L328 408v-48h48V407.1zM376 344h-48v-48h48V344zM376 280h-48v-48h48V280zM376 216h-48v-48h48V216zM376 152h-48v-48h48V152z"/>
</>],

]);

const ChessBoard: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ChessBoard.displayName = "ChessBoard";

export default ChessBoard;
