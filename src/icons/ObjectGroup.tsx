
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M288 128C305.7 128 320 142.3 320 160V256C320 273.7 305.7 288 288 288H160C142.3 288 128 273.7 128 256V160C128 142.3 142.3 128 160 128H288zM256 352V320H288C323.3 320 352 291.3 352 256V224H416C433.7 224 448 238.3 448 256V352C448 369.7 433.7 384 416 384H288C270.3 384 256 369.7 256 352z"/><path className="fa-secondary" d="M64 0C87.69 0 108.4 12.87 119.4 32H456.6C467.6 12.87 488.3 0 512 0C547.3 0 576 28.65 576 64C576 87.69 563.1 108.4 544 119.4V392.6C563.1 403.6 576 424.3 576 448C576 483.3 547.3 512 512 512C488.3 512 467.6 499.1 456.6 480H119.4C108.4 499.1 87.69 512 64 512C28.65 512 0 483.3 0 448C0 424.3 12.87 403.6 32 392.6V119.4C12.87 108.4 0 87.69 0 64C0 28.65 28.65 0 64 0V0zM480 392.6V119.4C470.3 113.8 462.2 105.7 456.6 95.1H119.4C113.8 105.7 105.7 113.8 95.1 119.4V392.6C105.7 398.2 113.8 406.3 119.4 416H456.6C462.2 406.3 470.3 398.2 480 392.6z"/>
</>],
['light',<>
	<path d="M272 128C298.5 128 320 149.5 320 176V240C320 266.5 298.5 288 272 288H176C149.5 288 128 266.5 128 240V176C128 149.5 149.5 128 176 128H272zM160 240C160 248.8 167.2 256 176 256H272C280.8 256 288 248.8 288 240V176C288 167.2 280.8 160 272 160H176C167.2 160 160 167.2 160 176V240zM352 240C352 231.2 359.2 224 368 224H400C426.5 224 448 245.5 448 272V336C448 362.5 426.5 384 400 384H304C277.5 384 256 362.5 256 336C256 327.2 263.2 320 272 320C280.8 320 288 327.2 288 336C288 344.8 295.2 352 304 352H400C408.8 352 416 344.8 416 336V272C416 263.2 408.8 256 400 256H368C359.2 256 352 248.8 352 240zM64 125.3C45.36 118.7 32 100.9 32 80C32 53.49 53.49 32 80 32C100.9 32 118.7 45.36 125.3 64H450.7C457.3 45.36 475.1 32 496 32C522.5 32 544 53.49 544 80C544 100.9 530.6 118.7 512 125.3V386.7C530.6 393.3 544 411.1 544 432C544 458.5 522.5 480 496 480C475.1 480 457.3 466.6 450.7 448H125.3C118.7 466.6 100.9 480 80 480C53.49 480 32 458.5 32 432C32 411.1 45.36 393.3 64 386.7V125.3zM96 125.3V386.7C109.6 391.6 120.4 402.4 125.3 416H450.7C455.6 402.4 466.4 391.6 480 386.7V125.3C466.4 120.4 455.6 109.6 450.7 96H125.3C120.4 109.6 109.6 120.4 96 125.3zM480 432C480 440.8 487.2 448 496 448C504.8 448 512 440.8 512 432C512 423.2 504.8 416 496 416C487.2 416 480 423.2 480 432zM96 432C96 423.2 88.84 416 80 416C71.16 416 64 423.2 64 432C64 440.8 71.16 448 80 448C88.84 448 96 440.8 96 432zM480 80C480 88.84 487.2 96 496 96C504.8 96 512 88.84 512 80C512 71.16 504.8 64 496 64C487.2 64 480 71.16 480 80zM96 80C96 71.16 88.84 64 80 64C71.16 64 64 71.16 64 80C64 88.84 71.16 96 80 96C88.84 96 96 88.84 96 80z"/>
</>],
['regular',<>
	<path d="M128 160C128 142.3 142.3 128 160 128H288C305.7 128 320 142.3 320 160V256C320 273.7 305.7 288 288 288H160C142.3 288 128 273.7 128 256V160zM288 320C323.3 320 352 291.3 352 256V224H416C433.7 224 448 238.3 448 256V352C448 369.7 433.7 384 416 384H288C270.3 384 256 369.7 256 352V320H288zM48 115.8C38.18 106.1 32 94.22 32 80C32 53.49 53.49 32 80 32C94.22 32 106.1 38.18 115.8 48H460.2C469 38.18 481.8 32 496 32C522.5 32 544 53.49 544 80C544 94.22 537.8 106.1 528 115.8V396.2C537.8 405 544 417.8 544 432C544 458.5 522.5 480 496 480C481.8 480 469 473.8 460.2 464H115.8C106.1 473.8 94.22 480 80 480C53.49 480 32 458.5 32 432C32 417.8 38.18 405 48 396.2V115.8zM96 125.3V386.7C109.6 391.6 120.4 402.4 125.3 416H450.7C455.6 402.4 466.4 391.6 480 386.7V125.3C466.4 120.4 455.6 109.6 450.7 96H125.3C120.4 109.6 109.6 120.4 96 125.3z"/>
</>],
['solid',<>
	<path d="M128 160C128 142.3 142.3 128 160 128H288C305.7 128 320 142.3 320 160V256C320 273.7 305.7 288 288 288H160C142.3 288 128 273.7 128 256V160zM288 320C323.3 320 352 291.3 352 256V224H416C433.7 224 448 238.3 448 256V352C448 369.7 433.7 384 416 384H288C270.3 384 256 369.7 256 352V320H288zM32 119.4C12.87 108.4 0 87.69 0 64C0 28.65 28.65 0 64 0C87.69 0 108.4 12.87 119.4 32H456.6C467.6 12.87 488.3 0 512 0C547.3 0 576 28.65 576 64C576 87.69 563.1 108.4 544 119.4V392.6C563.1 403.6 576 424.3 576 448C576 483.3 547.3 512 512 512C488.3 512 467.6 499.1 456.6 480H119.4C108.4 499.1 87.69 512 64 512C28.65 512 0 483.3 0 448C0 424.3 12.87 403.6 32 392.6V119.4zM119.4 96C113.8 105.7 105.7 113.8 96 119.4V392.6C105.7 398.2 113.8 406.3 119.4 416H456.6C462.2 406.3 470.3 398.2 480 392.6V119.4C470.3 113.8 462.2 105.7 456.6 96H119.4z"/>
</>],
['thin',<>
	<path d="M136 176C136 153.9 153.9 136 176 136H272C294.1 136 312 153.9 312 176V240C312 262.1 294.1 280 272 280H176C153.9 280 136 262.1 136 240V176zM176 152C162.7 152 152 162.7 152 176V240C152 253.3 162.7 264 176 264H272C285.3 264 296 253.3 296 240V176C296 162.7 285.3 152 272 152H176zM400 232C422.1 232 440 249.9 440 272V336C440 358.1 422.1 376 400 376H304C281.9 376 264 358.1 264 336V328C264 323.6 267.6 320 272 320C276.4 320 280 323.6 280 328V336C280 349.3 290.7 360 304 360H400C413.3 360 424 349.3 424 336V272C424 258.7 413.3 248 400 248H360C355.6 248 352 244.4 352 240C352 235.6 355.6 232 360 232H400zM72 127.3C49.3 123.5 32 103.8 32 80C32 53.49 53.49 32 80 32C103.8 32 123.5 49.3 127.3 72H448.7C452.5 49.3 472.2 32 496 32C522.5 32 544 53.49 544 80C544 103.8 526.7 123.5 504 127.3V384.7C526.7 388.5 544 408.2 544 432C544 458.5 522.5 480 496 480C472.2 480 452.5 462.7 448.7 440H127.3C123.5 462.7 103.8 480 80 480C53.49 480 32 458.5 32 432C32 408.2 49.3 388.5 72 384.7V127.3zM80 48C62.33 48 48 62.33 48 80C48 97.67 62.33 112 80 112C97.67 112 112 97.67 112 80C112 62.33 97.67 48 80 48zM127.3 424H448.7C452 403.9 467.9 388 488 384.7V127.3C467.9 123.1 452 108.1 448.7 88H127.3C123.1 108.1 108.1 123.1 88 127.3V384.7C108.1 388 123.1 403.9 127.3 424zM80 400C62.33 400 48 414.3 48 432C48 449.7 62.33 464 80 464C97.67 464 112 449.7 112 432C112 414.3 97.67 400 80 400zM496 464C513.7 464 528 449.7 528 432C528 414.3 513.7 400 496 400C478.3 400 464 414.3 464 432C464 449.7 478.3 464 496 464zM496 48C478.3 48 464 62.33 464 80C464 97.67 478.3 112 496 112C513.7 112 528 97.67 528 80C528 62.33 513.7 48 496 48z"/>
</>],

]);

const ObjectGroup: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ObjectGroup.displayName = "ObjectGroup";

export default ObjectGroup;