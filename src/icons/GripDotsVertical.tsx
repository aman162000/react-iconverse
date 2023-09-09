
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M96 96C96 122.5 74.51 144 48 144C21.49 144 0 122.5 0 96C0 69.49 21.49 48 48 48C74.51 48 96 69.49 96 96zM96 256C96 282.5 74.51 304 48 304C21.49 304 0 282.5 0 256C0 229.5 21.49 208 48 208C74.51 208 96 229.5 96 256zM0 416C0 389.5 21.49 368 48 368C74.51 368 96 389.5 96 416C96 442.5 74.51 464 48 464C21.49 464 0 442.5 0 416z"/><path className="fa-secondary" d="M256 96C256 122.5 234.5 144 208 144C181.5 144 160 122.5 160 96C160 69.49 181.5 48 208 48C234.5 48 256 69.49 256 96zM256 256C256 282.5 234.5 304 208 304C181.5 304 160 282.5 160 256C160 229.5 181.5 208 208 208C234.5 208 256 229.5 256 256zM160 416C160 389.5 181.5 368 208 368C234.5 368 256 389.5 256 416C256 442.5 234.5 464 208 464C181.5 464 160 442.5 160 416z"/>
</>],
['light',<>
	<path d="M96 96C96 122.5 74.51 144 48 144C21.49 144 0 122.5 0 96C0 69.49 21.49 48 48 48C74.51 48 96 69.49 96 96zM48 80C39.16 80 32 87.16 32 96C32 104.8 39.16 112 48 112C56.84 112 64 104.8 64 96C64 87.16 56.84 80 48 80zM96 256C96 282.5 74.51 304 48 304C21.49 304 0 282.5 0 256C0 229.5 21.49 208 48 208C74.51 208 96 229.5 96 256zM48 240C39.16 240 32 247.2 32 256C32 264.8 39.16 272 48 272C56.84 272 64 264.8 64 256C64 247.2 56.84 240 48 240zM0 416C0 389.5 21.49 368 48 368C74.51 368 96 389.5 96 416C96 442.5 74.51 464 48 464C21.49 464 0 442.5 0 416zM48 432C56.84 432 64 424.8 64 416C64 407.2 56.84 400 48 400C39.16 400 32 407.2 32 416C32 424.8 39.16 432 48 432zM256 96C256 122.5 234.5 144 208 144C181.5 144 160 122.5 160 96C160 69.49 181.5 48 208 48C234.5 48 256 69.49 256 96zM208 80C199.2 80 192 87.16 192 96C192 104.8 199.2 112 208 112C216.8 112 224 104.8 224 96C224 87.16 216.8 80 208 80zM160 256C160 229.5 181.5 208 208 208C234.5 208 256 229.5 256 256C256 282.5 234.5 304 208 304C181.5 304 160 282.5 160 256zM208 272C216.8 272 224 264.8 224 256C224 247.2 216.8 240 208 240C199.2 240 192 247.2 192 256C192 264.8 199.2 272 208 272zM256 416C256 442.5 234.5 464 208 464C181.5 464 160 442.5 160 416C160 389.5 181.5 368 208 368C234.5 368 256 389.5 256 416zM208 400C199.2 400 192 407.2 192 416C192 424.8 199.2 432 208 432C216.8 432 224 424.8 224 416C224 407.2 216.8 400 208 400z"/>
</>],
['regular',<>
	<path d="M32 96C32 78.33 46.33 64 64 64C81.67 64 96 78.33 96 96C96 113.7 81.67 128 64 128C46.33 128 32 113.7 32 96zM32 256C32 238.3 46.33 224 64 224C81.67 224 96 238.3 96 256C96 273.7 81.67 288 64 288C46.33 288 32 273.7 32 256zM96 416C96 433.7 81.67 448 64 448C46.33 448 32 433.7 32 416C32 398.3 46.33 384 64 384C81.67 384 96 398.3 96 416zM160 96C160 78.33 174.3 64 192 64C209.7 64 224 78.33 224 96C224 113.7 209.7 128 192 128C174.3 128 160 113.7 160 96zM224 256C224 273.7 209.7 288 192 288C174.3 288 160 273.7 160 256C160 238.3 174.3 224 192 224C209.7 224 224 238.3 224 256zM160 416C160 398.3 174.3 384 192 384C209.7 384 224 398.3 224 416C224 433.7 209.7 448 192 448C174.3 448 160 433.7 160 416z"/>
</>],
['solid',<>
	<path d="M0 96C0 69.49 21.49 48 48 48C74.51 48 96 69.49 96 96C96 122.5 74.51 144 48 144C21.49 144 0 122.5 0 96zM0 256C0 229.5 21.49 208 48 208C74.51 208 96 229.5 96 256C96 282.5 74.51 304 48 304C21.49 304 0 282.5 0 256zM96 416C96 442.5 74.51 464 48 464C21.49 464 0 442.5 0 416C0 389.5 21.49 368 48 368C74.51 368 96 389.5 96 416zM160 96C160 69.49 181.5 48 208 48C234.5 48 256 69.49 256 96C256 122.5 234.5 144 208 144C181.5 144 160 122.5 160 96zM256 256C256 282.5 234.5 304 208 304C181.5 304 160 282.5 160 256C160 229.5 181.5 208 208 208C234.5 208 256 229.5 256 256zM160 416C160 389.5 181.5 368 208 368C234.5 368 256 389.5 256 416C256 442.5 234.5 464 208 464C181.5 464 160 442.5 160 416z"/>
</>],
['thin',<>
	<path d="M96 96C96 122.5 74.51 144 48 144C21.49 144 0 122.5 0 96C0 69.49 21.49 48 48 48C74.51 48 96 69.49 96 96zM48 64C30.33 64 16 78.33 16 96C16 113.7 30.33 128 48 128C65.67 128 80 113.7 80 96C80 78.33 65.67 64 48 64zM96 256C96 282.5 74.51 304 48 304C21.49 304 0 282.5 0 256C0 229.5 21.49 208 48 208C74.51 208 96 229.5 96 256zM48 224C30.33 224 16 238.3 16 256C16 273.7 30.33 288 48 288C65.67 288 80 273.7 80 256C80 238.3 65.67 224 48 224zM0 416C0 389.5 21.49 368 48 368C74.51 368 96 389.5 96 416C96 442.5 74.51 464 48 464C21.49 464 0 442.5 0 416zM48 448C65.67 448 80 433.7 80 416C80 398.3 65.67 384 48 384C30.33 384 16 398.3 16 416C16 433.7 30.33 448 48 448zM256 96C256 122.5 234.5 144 208 144C181.5 144 160 122.5 160 96C160 69.49 181.5 48 208 48C234.5 48 256 69.49 256 96zM208 64C190.3 64 176 78.33 176 96C176 113.7 190.3 128 208 128C225.7 128 240 113.7 240 96C240 78.33 225.7 64 208 64zM160 256C160 229.5 181.5 208 208 208C234.5 208 256 229.5 256 256C256 282.5 234.5 304 208 304C181.5 304 160 282.5 160 256zM208 288C225.7 288 240 273.7 240 256C240 238.3 225.7 224 208 224C190.3 224 176 238.3 176 256C176 273.7 190.3 288 208 288zM256 416C256 442.5 234.5 464 208 464C181.5 464 160 442.5 160 416C160 389.5 181.5 368 208 368C234.5 368 256 389.5 256 416zM208 384C190.3 384 176 398.3 176 416C176 433.7 190.3 448 208 448C225.7 448 240 433.7 240 416C240 398.3 225.7 384 208 384z"/>
</>],

]);

const GripDotsVertical: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={256} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

GripDotsVertical.displayName = "GripDotsVertical";

export default GripDotsVertical;
