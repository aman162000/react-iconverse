
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M0 96C0 42.98 42.98 0 96 0C149 0 192 42.98 192 96V110.3C187.7 115.3 184.3 121.1 181.7 127.3L181.4 127.1H0V96zM132.8 245.1C129.6 253.7 128 261.1 128 270.3V480C128 491.7 131.1 502.6 136.6 512H48C21.49 512 0 490.5 0 464V160H168.2L132.8 245.1zM392 224C405.3 224 416 234.7 416 248V296C416 309.3 405.3 320 392 320H344C330.7 320 320 309.3 320 296V248C320 234.7 330.7 224 344 224H392z"/><path className="fa-secondary" d="M162.4 258.1L211.3 139.4C214.3 132.1 219.1 126.1 227.2 122.7L354.3 62.49C362.1 58.38 373 58.38 381.7 62.49L508.8 122.7C516 126.1 521.7 132.1 524.7 139.4L573.6 258.1C575.2 262 576 266.2 576 270.3V480C576 497.7 561.7 512 544 512H432V448C432 421.5 410.5 400 384 400H352C325.5 400 304 421.5 304 448V512H192C174.3 512 160 497.7 160 480V270.3C160 266.2 160.8 262 162.4 258.1H162.4zM344 224C330.7 224 320 234.7 320 248V296C320 309.3 330.7 320 344 320H392C405.3 320 416 309.3 416 296V248C416 234.7 405.3 224 392 224H344z"/>
</>],
['light',<>
	<path d="M48 480H129.6C132 491.8 137 502.7 143.1 512H48C21.49 512 0 490.5 0 464V112C0 50.14 50.14 0 112 0C166.9 0 212.5 39.47 222.1 91.56C210.6 97.51 201.2 106.8 195 118.3L192 124V112C192 67.82 156.2 32 112 32C67.82 32 32 67.82 32 112V160H172.8L155.7 192H32V464C32 472.8 39.16 480 48 480zM400 192C417.7 192 432 206.3 432 224V288C432 305.7 417.7 320 400 320H336C318.3 320 304 305.7 304 288V224C304 206.3 318.3 192 336 192H400zM336 224V288H400V224H336zM497.3 119.1C503.9 121.1 509.3 127 512.7 133.4L572.2 244.9C574.7 249.6 576 254.7 576 260V464C576 490.5 554.5 512 528 512H208C181.5 512 160 490.5 160 464V260C160 254.7 161.3 249.6 163.8 244.9L223.3 133.4C226.7 127 232.1 121.1 238.7 119.1L355.2 68.15C363.4 64.57 372.6 64.57 380.8 68.15L497.3 119.1zM251.5 148.4L192 260V464C192 472.8 199.2 480 208 480H288V416C288 389.5 309.5 368 336 368H400C426.5 368 448 389.5 448 416V480H528C536.8 480 544 472.8 544 464V260L484.5 148.4L368 97.46L251.5 148.4zM416 480V416C416 407.2 408.8 400 400 400H336C327.2 400 320 407.2 320 416V480H416z"/>
</>],
['regular',<>
	<path d="M48 464H128.4C129.1 482.2 137.1 498.7 148.1 512H48C21.49 512 0 490.5 0 464V112C0 50.14 50.14 0 112 0C166.6 0 212.1 39.06 221.1 90.77C206.5 97.87 193.9 110.3 186.7 125.8L163.3 176H48V464zM176 128V112C176 76.65 147.3 48 112 48C76.65 48 48 76.65 48 112V128H176zM320 248C320 234.7 330.7 224 344 224H392C405.3 224 416 234.7 416 248V296C416 309.3 405.3 320 392 320H344C330.7 320 320 309.3 320 296V248zM500.1 119.6C509 123.5 516.2 130.5 520.3 139.3L572.2 250.6C574.7 255.9 576 261.7 576 267.5V456C576 486.9 550.9 512 520 512H216C185.1 512 160 486.9 160 456V267.5C160 261.7 161.3 255.9 163.8 250.6L215.7 139.3C219.8 130.5 226.1 123.5 235.9 119.6L351.1 68.82C362.2 64.35 373.8 64.35 384 68.82L500.1 119.6zM208 269.3V456C208 460.4 211.6 464 216 464H304V408C304 385.9 321.9 368 344 368H392C414.1 368 432 385.9 432 408V464H520C524.4 464 528 460.4 528 456V269.3L478.1 162.4L368 114.2L257.9 162.4L208 269.3z"/>
</>],
['solid',<>
	<path d="M0 96C0 42.98 42.98 0 96 0C149 0 192 42.98 192 96V110.3C187.7 115.3 184.3 121.1 181.7 127.3L181.4 127.1H0V96zM132.8 245.1C129.6 253.7 128 261.1 128 270.3V480C128 491.7 131.1 502.6 136.6 512H48C21.49 512 0 490.5 0 464V160H168.2L132.8 245.1zM160 480V270.3C160 266.2 160.8 262 162.4 258.1L211.3 139.4C214.3 132.1 219.1 126.1 227.2 122.7L354.3 62.49C362.1 58.38 373 58.38 381.7 62.49L508.8 122.7C516 126.1 521.7 132.1 524.7 139.4L573.6 258.1C575.2 262 576 266.2 576 270.3V480C576 497.7 561.7 512 544 512H432V448C432 421.5 410.5 400 384 400H352C325.5 400 304 421.5 304 448V512H191.1C174.3 512 159.1 497.7 159.1 480H160zM320 296C320 309.3 330.7 320 344 320H392C405.3 320 416 309.3 416 296V248C416 234.7 405.3 224 392 224H344C330.7 224 320 234.7 320 248V296z"/>
</>],
['thin',<>
	<path d="M0 104C0 46.56 46.56 0 104 0C161.4 0 208 46.56 208 104V112C208 116.4 204.4 120 200 120C195.6 120 192 116.4 192 112V104C192 55.4 152.6 16 104 16C55.4 16 16 55.4 16 104V176H144C148.4 176 152 179.6 152 184C152 188.4 148.4 192 144 192H16V456C16 478.1 33.91 496 56 496H128C132.4 496 136 499.6 136 504C136 508.4 132.4 512 128 512H56C25.07 512 0 486.9 0 456V104zM400 192C417.7 192 432 206.3 432 224V288C432 305.7 417.7 320 400 320H336C318.3 320 304 305.7 304 288V224C304 206.3 318.3 192 336 192H400zM400 208H336C327.2 208 320 215.2 320 224V288C320 296.8 327.2 304 336 304H400C408.8 304 416 296.8 416 288V224C416 215.2 408.8 208 400 208V208zM508.7 118.1C514.7 120.4 519.4 125 521.1 130.9L573.1 249.7C575.3 252.8 576 256 576 259.3V472C576 494.1 558.1 512 536 512H199.1C177.9 512 159.1 494.1 159.1 472V259.3C159.1 256 160.7 252.8 162 249.7L214 130.9C216.6 125 221.3 120.4 227.3 118.1L359.3 66.8C364.9 64.62 371.1 64.62 376.7 66.8L508.7 118.1zM233.1 133C231.1 133.8 229.5 135.3 228.7 137.3L176.7 256.1C176.2 257.2 176 258.2 176 259.3V472C176 485.3 186.7 496 200 496H288V424C288 401.9 305.9 384 328 384H408C430.1 384 448 401.9 448 424V496H536C549.3 496 560 485.3 560 472V259.3C560 258.2 559.8 257.2 559.3 256.1L507.3 137.3C506.5 135.3 504.9 133.8 502.9 133L370.9 81.71C369 80.99 366.1 80.99 365.1 81.71L233.1 133zM304 496H432V424C432 410.7 421.3 400 408 400H328C314.7 400 304 410.7 304 424V496z"/>
</>],

]);

const Farm: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Farm.displayName = "Farm";

export default Farm;
