
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M320 32C320 49.67 305.7 64 288 64C270.3 64 256 49.67 256 32C256 14.33 270.3 0 288 0C305.7 0 320 14.33 320 32zM160 56C160 38.33 174.3 24 192 24C209.7 24 224 38.33 224 56C224 73.67 209.7 88 192 88C174.3 88 160 73.67 160 56zM416 224C451.3 224 480 252.7 480 288V448C480 483.3 451.3 512 416 512H96C60.65 512 32 483.3 32 448V288C32 252.7 60.65 224 96 224H416zM96 288C87.16 288 80 295.2 80 304V368C80 376.8 87.16 384 96 384H160C168.8 384 176 376.8 176 368V304C176 295.2 168.8 288 160 288H96zM208 368C208 376.8 215.2 384 224 384H288C296.8 384 304 376.8 304 368V304C304 295.2 296.8 288 288 288H224C215.2 288 208 295.2 208 304V368zM352 288C343.2 288 336 295.2 336 304V368C336 376.8 343.2 384 352 384H416C424.8 384 432 376.8 432 368V304C432 295.2 424.8 288 416 288H352z"/><path className="fa-secondary" d="M280 147.5V224H232V157.5L28.86 199.5C15.88 202.2 3.183 193.8 .4976 180.9C-2.188 167.9 6.157 155.2 19.14 152.5L483.1 56.5C496.1 53.81 508.8 62.16 511.5 75.14C514.2 88.12 505.8 100.8 492.9 103.5L280 147.5zM160 288C168.8 288 176 295.2 176 304V368C176 376.8 168.8 384 160 384H96C87.16 384 80 376.8 80 368V304C80 295.2 87.16 288 96 288H160zM208 304C208 295.2 215.2 288 224 288H288C296.8 288 304 295.2 304 304V368C304 376.8 296.8 384 288 384H224C215.2 384 208 376.8 208 368V304zM416 288C424.8 288 432 295.2 432 304V368C432 376.8 424.8 384 416 384H352C343.2 384 336 376.8 336 368V304C336 295.2 343.2 288 352 288H416z"/>
</>],
['light',<>
	<path d="M264 24C264 10.75 274.7 0 288 0C301.3 0 312 10.75 312 24C312 37.25 301.3 48 288 48C274.7 48 264 37.25 264 24zM216 56C216 69.25 205.3 80 192 80C178.7 80 168 69.25 168 56C168 42.75 178.7 32 192 32C205.3 32 216 42.75 216 56zM480 288V448C480 483.3 451.3 512 416 512H96C60.65 512 32 483.3 32 448V288C32 252.7 60.65 224 96 224H240V147.5L19.14 191.7C10.47 193.4 2.044 187.8 .311 179.1C-1.422 170.5 4.197 162 12.86 160.3L492.9 64.31C501.5 62.58 509.1 68.2 511.7 76.86C513.4 85.53 507.8 93.96 499.1 95.69L272 141.1V224H416C451.3 224 480 252.7 480 288V288zM320 256H192V352H320V256zM352 256V352H448V288C448 270.3 433.7 256 416 256H352zM448 384H64V448C64 465.7 78.33 480 96 480H416C433.7 480 448 465.7 448 448V384zM64 352H160V256H96C78.33 256 64 270.3 64 288V352z"/>
</>],
['regular',<>
	<path d="M256 32C256 14.33 270.3 0 288 0C305.7 0 320 14.33 320 32C320 49.67 305.7 64 288 64C270.3 64 256 49.67 256 32zM224 56C224 73.67 209.7 88 192 88C174.3 88 160 73.67 160 56C160 38.33 174.3 24 192 24C209.7 24 224 38.33 224 56zM232 224V157.5L28.86 199.5C15.88 202.2 3.183 193.8 .4976 180.9C-2.188 167.9 6.157 155.2 19.14 152.5L483.1 56.5C496.1 53.81 508.8 62.16 511.5 75.14C514.2 88.12 505.8 100.8 492.9 103.5L280 147.5V224H416C451.3 224 480 252.7 480 288V448C480 483.3 451.3 512 416 512H96C60.65 512 32 483.3 32 448V288C32 252.7 60.65 224 96 224L232 224zM432 288C432 279.2 424.8 272 416 272H352V352H432V288zM432 400H80V448C80 456.8 87.16 464 96 464H416C424.8 464 432 456.8 432 448V400zM80 352H160V272H96C87.16 272 80 279.2 80 288V352zM208 272V352H304V272H208z"/>
</>],
['solid',<>
	<path d="M256 32C256 14.33 270.3 0 288 0C305.7 0 320 14.33 320 32C320 49.67 305.7 64 288 64C270.3 64 256 49.67 256 32zM224 56C224 73.67 209.7 88 192 88C174.3 88 160 73.67 160 56C160 38.33 174.3 24 192 24C209.7 24 224 38.33 224 56zM32 288C32 252.7 60.65 224 96 224H232V157.5L28.86 199.5C15.88 202.2 3.183 193.8 .4976 180.9C-2.188 167.9 6.157 155.2 19.14 152.5L483.1 56.5C496.1 53.81 508.8 62.16 511.5 75.14C514.2 88.12 505.8 100.8 492.9 103.5L280 147.5V224H416C451.3 224 480 252.7 480 288V448C480 483.3 451.3 512 416 512H96C60.65 512 32 483.3 32 448V288zM96 288C87.16 288 80 295.2 80 304V368C80 376.8 87.16 384 96 384H160C168.8 384 176 376.8 176 368V304C176 295.2 168.8 288 160 288H96zM208 368C208 376.8 215.2 384 224 384H288C296.8 384 304 376.8 304 368V304C304 295.2 296.8 288 288 288H224C215.2 288 208 295.2 208 304V368zM352 288C343.2 288 336 295.2 336 304V368C336 376.8 343.2 384 352 384H416C424.8 384 432 376.8 432 368V304C432 295.2 424.8 288 416 288H352z"/>
</>],
['thin',<>
	<path d="M320 32C320 49.67 305.7 64 288 64C270.3 64 256 49.67 256 32C256 14.33 270.3 0 288 0C305.7 0 320 14.33 320 32zM288 16C279.2 16 272 23.16 272 32C272 40.84 279.2 48 288 48C296.8 48 304 40.84 304 32C304 23.16 296.8 16 288 16zM160 64C160 46.33 174.3 32 192 32C209.7 32 224 46.33 224 64C224 81.67 209.7 96 192 96C174.3 96 160 81.67 160 64zM192 80C200.8 80 208 72.84 208 64C208 55.16 200.8 48 192 48C183.2 48 176 55.16 176 64C176 72.84 183.2 80 192 80zM80 304C80 286.3 94.33 272 112 272H400C417.7 272 432 286.3 432 304V368C432 385.7 417.7 400 400 400H112C94.33 400 80 385.7 80 368V304zM96 368C96 376.8 103.2 384 112 384H192V288H112C103.2 288 96 295.2 96 304V368zM304 384V288H208V384H304zM320 384H400C408.8 384 416 376.8 416 368V304C416 295.2 408.8 288 400 288H320V384zM480 288V448C480 483.3 451.3 512 416 512H96C60.65 512 32 483.3 32 448V288C32 252.7 60.65 224 96 224H247.1V130L9.762 183.8C5.452 184.8 1.17 182.1 .1962 177.8C-.777 173.5 1.928 169.2 6.238 168.2L502.2 56.2C506.5 55.22 510.8 57.93 511.8 62.24C512.8 66.55 510.1 70.83 505.8 71.8L264 126.4V223.1H416C451.3 223.1 480 252.7 480 287.1L480 288zM416 240H96C69.49 240 48 261.5 48 288V448C48 474.5 69.49 496 96 496H416C442.5 496 464 474.5 464 448V288C464 261.5 442.5 240 416 240z"/>
</>],

]);

const CableCar: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CableCar.displayName = "CableCar";

export default CableCar;