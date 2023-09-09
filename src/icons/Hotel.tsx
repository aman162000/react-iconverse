
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M480 0C497.7 0 512 14.33 512 32C512 49.67 497.7 64 480 64H32C14.33 64 0 49.67 0 32C0 14.33 14.33 0 32 0H480zM144 96C152.8 96 160 103.2 160 112V144C160 152.8 152.8 160 144 160H112C103.2 160 96 152.8 96 144V112C96 103.2 103.2 96 112 96H144zM272 96C280.8 96 288 103.2 288 112V144C288 152.8 280.8 160 272 160H240C231.2 160 224 152.8 224 144V112C224 103.2 231.2 96 240 96H272zM352 112C352 103.2 359.2 96 368 96H400C408.8 96 416 103.2 416 112V144C416 152.8 408.8 160 400 160H368C359.2 160 352 152.8 352 144V112zM144 192C152.8 192 160 199.2 160 208V240C160 248.8 152.8 256 144 256H112C103.2 256 96 248.8 96 240V208C96 199.2 103.2 192 112 192H144zM224 208C224 199.2 231.2 192 240 192H272C280.8 192 288 199.2 288 208V240C288 248.8 280.8 256 272 256H240C231.2 256 224 248.8 224 240V208zM400 192C408.8 192 416 199.2 416 208V240C416 248.8 408.8 256 400 256H368C359.2 256 352 248.8 352 240V208C352 199.2 359.2 192 368 192H400zM184 384C170.7 384 159.7 373.1 162.1 360.2C173.5 318.7 211.2 288 256 288C300.8 288 338.5 318.7 349 360.2C352.3 373.1 341.3 384 328 384H184z"/><path className="fa-secondary" d="M32 64H480V448C497.7 448 512 462.3 512 480C512 497.7 497.7 512 480 512H304V448H208V512H32C14.33 512 0 497.7 0 480C0 462.3 14.33 448 32 448V64zM112 96C103.2 96 96 103.2 96 112V144C96 152.8 103.2 160 112 160H144C152.8 160 160 152.8 160 144V112C160 103.2 152.8 96 144 96H112zM224 144C224 152.8 231.2 160 240 160H272C280.8 160 288 152.8 288 144V112C288 103.2 280.8 96 272 96H240C231.2 96 224 103.2 224 112V144zM368 96C359.2 96 352 103.2 352 112V144C352 152.8 359.2 160 368 160H400C408.8 160 416 152.8 416 144V112C416 103.2 408.8 96 400 96H368zM96 240C96 248.8 103.2 256 112 256H144C152.8 256 160 248.8 160 240V208C160 199.2 152.8 192 144 192H112C103.2 192 96 199.2 96 208V240zM240 192C231.2 192 224 199.2 224 208V240C224 248.8 231.2 256 240 256H272C280.8 256 288 248.8 288 240V208C288 199.2 280.8 192 272 192H240zM352 240C352 248.8 359.2 256 368 256H400C408.8 256 416 248.8 416 240V208C416 199.2 408.8 192 400 192H368C359.2 192 352 199.2 352 208V240zM256 288C211.2 288 173.5 318.7 162.1 360.2C159.7 373.1 170.7 384 184 384H328C341.3 384 352.3 373.1 349 360.2C338.5 318.7 300.8 288 256 288z"/>
</>],
['light',<>
	<path d="M320 96C320 78.33 334.3 64 352 64H384C401.7 64 416 78.33 416 96V128C416 145.7 401.7 160 384 160H352C334.3 160 320 145.7 320 128V96zM384 96H352V128H384V96zM272 64C289.7 64 304 78.33 304 96V128C304 145.7 289.7 160 272 160H240C222.3 160 208 145.7 208 128V96C208 78.33 222.3 64 240 64H272zM240 128H272V96H240V128zM208 224C208 206.3 222.3 192 240 192H272C289.7 192 304 206.3 304 224V256C304 273.7 289.7 288 272 288H240C222.3 288 208 273.7 208 256V224zM272 224H240V256H272V224zM384 192C401.7 192 416 206.3 416 224V256C416 273.7 401.7 288 384 288H352C334.3 288 320 273.7 320 256V224C320 206.3 334.3 192 352 192H384zM352 256H384V224H352V256zM96 96C96 78.33 110.3 64 128 64H160C177.7 64 192 78.33 192 96V128C192 145.7 177.7 160 160 160H128C110.3 160 96 145.7 96 128V96zM160 96H128V128H160V96zM160 192C177.7 192 192 206.3 192 224V256C192 273.7 177.7 288 160 288H128C110.3 288 96 273.7 96 256V224C96 206.3 110.3 192 128 192H160zM128 256H160V224H128V256zM173.8 379.9C167.2 374 166.6 363.9 172.5 357.3C193 334.4 222.8 320 256 320C289.2 320 318.1 334.4 339.5 357.3C345.4 363.9 344.8 374 338.2 379.9C331.6 385.8 321.5 385.3 315.6 378.7C300.1 362.3 279.7 352 256 352C232.3 352 211 362.3 196.4 378.7C190.5 385.3 180.4 385.8 173.8 379.9V379.9zM496 0C504.8 0 512 7.164 512 16C512 24.84 504.8 32 496 32H480V480H496C504.8 480 512 487.2 512 496C512 504.8 504.8 512 496 512H16C7.164 512 0 504.8 0 496C0 487.2 7.164 480 16 480H32V32H16C7.164 32 0 24.84 0 16C0 7.164 7.164 0 16 0H496zM256 416C247.2 416 240 423.2 240 432V480H272V432C272 423.2 264.8 416 256 416zM304 432V480H448V32H64V480H208V432C208 405.5 229.5 384 256 384C282.5 384 304 405.5 304 432z"/>
</>],
['regular',<>
	<path d="M176 96C184.8 96 192 103.2 192 112V144C192 152.8 184.8 160 176 160H144C135.2 160 128 152.8 128 144V112C128 103.2 135.2 96 144 96H176zM224 112C224 103.2 231.2 96 240 96H272C280.8 96 288 103.2 288 112V144C288 152.8 280.8 160 272 160H240C231.2 160 224 152.8 224 144V112zM368 96C376.8 96 384 103.2 384 112V144C384 152.8 376.8 160 368 160H336C327.2 160 320 152.8 320 144V112C320 103.2 327.2 96 336 96H368zM128 208C128 199.2 135.2 192 144 192H176C184.8 192 192 199.2 192 208V240C192 248.8 184.8 256 176 256H144C135.2 256 128 248.8 128 240V208zM272 192C280.8 192 288 199.2 288 208V240C288 248.8 280.8 256 272 256H240C231.2 256 224 248.8 224 240V208C224 199.2 231.2 192 240 192H272zM320 208C320 199.2 327.2 192 336 192H368C376.8 192 384 199.2 384 208V240C384 248.8 376.8 256 368 256H336C327.2 256 320 248.8 320 240V208zM488 0C501.3 0 512 10.75 512 24C512 37.25 501.3 48 488 48H480V464H488C501.3 464 512 474.7 512 488C512 501.3 501.3 512 488 512H24C10.75 512 0 501.3 0 488C0 474.7 10.75 464 24 464H32V48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H488zM80 48V464H208V384H176C167.2 384 159.9 376.8 161.3 368.1C168.9 322.6 208.4 288 256 288C303.6 288 343.1 322.6 350.7 368.1C352.1 376.8 344.8 384 336 384H304V464H432V48H80z"/>
</>],
['solid',<>
	<path d="M480 0C497.7 0 512 14.33 512 32C512 49.67 497.7 64 480 64V448C497.7 448 512 462.3 512 480C512 497.7 497.7 512 480 512H304V448H208V512H32C14.33 512 0 497.7 0 480C0 462.3 14.33 448 32 448V64C14.33 64 0 49.67 0 32C0 14.33 14.33 0 32 0H480zM112 96C103.2 96 96 103.2 96 112V144C96 152.8 103.2 160 112 160H144C152.8 160 160 152.8 160 144V112C160 103.2 152.8 96 144 96H112zM224 144C224 152.8 231.2 160 240 160H272C280.8 160 288 152.8 288 144V112C288 103.2 280.8 96 272 96H240C231.2 96 224 103.2 224 112V144zM368 96C359.2 96 352 103.2 352 112V144C352 152.8 359.2 160 368 160H400C408.8 160 416 152.8 416 144V112C416 103.2 408.8 96 400 96H368zM96 240C96 248.8 103.2 256 112 256H144C152.8 256 160 248.8 160 240V208C160 199.2 152.8 192 144 192H112C103.2 192 96 199.2 96 208V240zM240 192C231.2 192 224 199.2 224 208V240C224 248.8 231.2 256 240 256H272C280.8 256 288 248.8 288 240V208C288 199.2 280.8 192 272 192H240zM352 240C352 248.8 359.2 256 368 256H400C408.8 256 416 248.8 416 240V208C416 199.2 408.8 192 400 192H368C359.2 192 352 199.2 352 208V240zM256 288C211.2 288 173.5 318.7 162.1 360.2C159.7 373.1 170.7 384 184 384H328C341.3 384 352.3 373.1 349 360.2C338.5 318.7 300.8 288 256 288z"/>
</>],
['thin',<>
	<path d="M328 96C328 82.75 338.7 72 352 72H384C397.3 72 408 82.75 408 96V128C408 141.3 397.3 152 384 152H352C338.7 152 328 141.3 328 128V96zM352 88C347.6 88 344 91.58 344 96V128C344 132.4 347.6 136 352 136H384C388.4 136 392 132.4 392 128V96C392 91.58 388.4 88 384 88H352zM272 72C285.3 72 296 82.75 296 96V128C296 141.3 285.3 152 272 152H240C226.7 152 216 141.3 216 128V96C216 82.75 226.7 72 240 72H272zM232 128C232 132.4 235.6 136 240 136H272C276.4 136 280 132.4 280 128V96C280 91.58 276.4 88 272 88H240C235.6 88 232 91.58 232 96V128zM216 224C216 210.7 226.7 200 240 200H272C285.3 200 296 210.7 296 224V256C296 269.3 285.3 280 272 280H240C226.7 280 216 269.3 216 256V224zM240 216C235.6 216 232 219.6 232 224V256C232 260.4 235.6 264 240 264H272C276.4 264 280 260.4 280 256V224C280 219.6 276.4 216 272 216H240zM384 200C397.3 200 408 210.7 408 224V256C408 269.3 397.3 280 384 280H352C338.7 280 328 269.3 328 256V224C328 210.7 338.7 200 352 200H384zM344 256C344 260.4 347.6 264 352 264H384C388.4 264 392 260.4 392 256V224C392 219.6 388.4 216 384 216H352C347.6 216 344 219.6 344 224V256zM104 96C104 82.75 114.7 72 128 72H160C173.3 72 184 82.75 184 96V128C184 141.3 173.3 152 160 152H128C114.7 152 104 141.3 104 128V96zM128 88C123.6 88 120 91.58 120 96V128C120 132.4 123.6 136 128 136H160C164.4 136 168 132.4 168 128V96C168 91.58 164.4 88 160 88H128zM160 200C173.3 200 184 210.7 184 224V256C184 269.3 173.3 280 160 280H128C114.7 280 104 269.3 104 256V224C104 210.7 114.7 200 128 200H160zM120 256C120 260.4 123.6 264 128 264H160C164.4 264 168 260.4 168 256V224C168 219.6 164.4 216 160 216H128C123.6 216 120 219.6 120 224V256zM179.1 365.1C175.8 363 175.5 357.1 178.5 354.7C197.5 333.4 225.2 320 256 320C286.8 320 314.5 333.4 333.5 354.7C336.5 357.1 336.2 363 332.9 365.1C329.6 368.9 324.5 368.6 321.6 365.3C305.5 347.3 282.1 336 256 336C229.9 336 206.5 347.3 190.4 365.3C187.5 368.6 182.4 368.9 179.1 365.1V365.1zM504 0C508.4 0 512 3.582 512 8C512 12.42 508.4 16 504 16H480V496H504C508.4 496 512 499.6 512 504C512 508.4 508.4 512 504 512H8C3.582 512 0 508.4 0 504C0 499.6 3.582 496 8 496H32V16H8C3.582 16 0 12.42 0 8C0 3.582 3.582 0 8 0H504zM256 400C238.3 400 224 414.3 224 432V496H288V432C288 414.3 273.7 400 256 400zM304 432V496H464V16H48V496H208V432C208 405.5 229.5 384 256 384C282.5 384 304 405.5 304 432z"/>
</>],

]);

const Hotel: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Hotel.displayName = "Hotel";

export default Hotel;
