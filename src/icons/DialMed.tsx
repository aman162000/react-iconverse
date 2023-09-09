
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M264 287.2C264 300.5 274.7 311.2 288 311.2C301.3 311.2 312 300.5 312 287.2V129C388.1 140.6 448 207 448 287.2C448 375.6 376.4 447.2 288 447.2C199.6 447.2 128 375.6 128 287.2C128 207 187 140.6 264 129V287.2z"/><path className="fa-secondary" d="M320 32C320 49.67 305.7 64 288 64C270.3 64 256 49.67 256 32C256 14.33 270.3 0 288 0C305.7 0 320 14.33 320 32zM576 288C576 305.7 561.7 320 544 320C526.3 320 512 305.7 512 288C512 270.3 526.3 256 544 256C561.7 256 576 270.3 576 288zM0 288C0 270.3 14.33 256 32 256C49.67 256 64 270.3 64 288C64 305.7 49.67 320 32 320C14.33 320 0 305.7 0 288zM128 96C128 113.7 113.7 128 96 128C78.33 128 64 113.7 64 96C64 78.33 78.33 64 96 64C113.7 64 128 78.33 128 96zM448 96C448 78.33 462.3 64 480 64C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128C462.3 128 448 113.7 448 96zM128 480C128 497.7 113.7 512 96 512C78.33 512 64 497.7 64 480C64 462.3 78.33 448 96 448C113.7 448 128 462.3 128 480zM448 480C448 462.3 462.3 448 480 448C497.7 448 512 462.3 512 480C512 497.7 497.7 512 480 512C462.3 512 448 497.7 448 480z"/>
</>],
['light',<>
	<path d="M264 32C264 18.75 274.7 8 288 8C301.3 8 312 18.75 312 32C312 45.25 301.3 56 288 56C274.7 56 264 45.25 264 32zM448 288C448 376.4 376.4 448 288 448C199.6 448 128 376.4 128 288C128 199.6 199.6 128 288 128C376.4 128 448 199.6 448 288zM288 304C279.2 304 272 296.8 272 288V160.1C208.9 168.9 160 222.7 160 288C160 358.7 217.3 416 288 416C358.7 416 416 358.7 416 288C416 222.7 367.1 168.9 304 160.1V288C304 296.8 296.8 304 288 304zM568 288C568 301.3 557.3 312 544 312C530.7 312 520 301.3 520 288C520 274.7 530.7 264 544 264C557.3 264 568 274.7 568 288zM8 288C8 274.7 18.75 264 32 264C45.25 264 56 274.7 56 288C56 301.3 45.25 312 32 312C18.75 312 8 301.3 8 288zM120 96C120 109.3 109.3 120 96 120C82.75 120 72 109.3 72 96C72 82.75 82.75 72 96 72C109.3 72 120 82.75 120 96zM456 96C456 82.75 466.7 72 480 72C493.3 72 504 82.75 504 96C504 109.3 493.3 120 480 120C466.7 120 456 109.3 456 96zM120 480C120 493.3 109.3 504 96 504C82.75 504 72 493.3 72 480C72 466.7 82.75 456 96 456C109.3 456 120 466.7 120 480zM456 480C456 466.7 466.7 456 480 456C493.3 456 504 466.7 504 480C504 493.3 493.3 504 480 504C466.7 504 456 493.3 456 480z"/>
</>],
['regular',<>
	<path d="M256 32C256 14.33 270.3 0 288 0C305.7 0 320 14.33 320 32C320 49.67 305.7 64 288 64C270.3 64 256 49.67 256 32zM448 288C448 376.4 376.4 448 288 448C199.6 448 128 376.4 128 288C128 199.6 199.6 128 288 128C376.4 128 448 199.6 448 288zM288 400C349.9 400 400 349.9 400 288C400 234.4 362.3 189.6 312 178.6V288C312 301.3 301.3 312 288 312C274.7 312 264 301.3 264 288V178.6C213.7 189.6 176 234.4 176 287.1C176 349.9 226.1 400 288 400V400zM576 288C576 305.7 561.7 320 544 320C526.3 320 512 305.7 512 288C512 270.3 526.3 256 544 256C561.7 256 576 270.3 576 288zM0 288C0 270.3 14.33 256 32 256C49.67 256 64 270.3 64 288C64 305.7 49.67 320 32 320C14.33 320 0 305.7 0 288zM128 96C128 113.7 113.7 128 96 128C78.33 128 64 113.7 64 96C64 78.33 78.33 64 96 64C113.7 64 128 78.33 128 96zM448 96C448 78.33 462.3 64 480 64C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128C462.3 128 448 113.7 448 96zM128 480C128 497.7 113.7 512 96 512C78.33 512 64 497.7 64 480C64 462.3 78.33 448 96 448C113.7 448 128 462.3 128 480zM448 480C448 462.3 462.3 448 480 448C497.7 448 512 462.3 512 480C512 497.7 497.7 512 480 512C462.3 512 448 497.7 448 480z"/>
</>],
['solid',<>
	<path d="M256 32C256 14.33 270.3 0 288 0C305.7 0 320 14.33 320 32C320 49.67 305.7 64 288 64C270.3 64 256 49.67 256 32zM128 287.2C128 207 187 140.6 264 128.1V287.2C264 300.5 274.7 311.2 288 311.2C301.3 311.2 312 300.5 312 287.2V128.1C388.1 140.6 448 207 448 287.2C448 375.6 376.4 447.2 288 447.2C199.6 447.2 128 375.6 128 287.2zM576 288C576 305.7 561.7 320 544 320C526.3 320 512 305.7 512 288C512 270.3 526.3 256 544 256C561.7 256 576 270.3 576 288zM0 288C0 270.3 14.33 256 32 256C49.67 256 64 270.3 64 288C64 305.7 49.67 320 32 320C14.33 320 0 305.7 0 288zM128 96C128 113.7 113.7 128 96 128C78.33 128 64 113.7 64 96C64 78.33 78.33 64 96 64C113.7 64 128 78.33 128 96zM448 96C448 78.33 462.3 64 480 64C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128C462.3 128 448 113.7 448 96zM128 480C128 497.7 113.7 512 96 512C78.33 512 64 497.7 64 480C64 462.3 78.33 448 96 448C113.7 448 128 462.3 128 480zM448 480C448 462.3 462.3 448 480 448C497.7 448 512 462.3 512 480C512 497.7 497.7 512 480 512C462.3 512 448 497.7 448 480z"/>
</>],
['thin',<>
	<path d="M320 32C320 49.67 305.7 64 288 64C270.3 64 256 49.67 256 32C256 14.33 270.3 0 288 0C305.7 0 320 14.33 320 32zM288 16C279.2 16 272 23.16 272 32C272 40.84 279.2 48 288 48C296.8 48 304 40.84 304 32C304 23.16 296.8 16 288 16zM448 288C448 376.4 376.4 448 288 448C199.6 448 128 376.4 128 288C128 199.6 199.6 128 288 128C376.4 128 448 199.6 448 288zM288 296C283.6 296 280 292.4 280 288V144.2C204.2 148.4 144 211.2 144 288C144 367.5 208.5 432 288 432C367.5 432 432 367.5 432 288C432 211.2 371.8 148.4 296 144.2V288C296 292.4 292.4 296 288 296zM512 288C512 270.3 526.3 256 544 256C561.7 256 576 270.3 576 288C576 305.7 561.7 320 544 320C526.3 320 512 305.7 512 288zM544 304C552.8 304 560 296.8 560 288C560 279.2 552.8 272 544 272C535.2 272 528 279.2 528 288C528 296.8 535.2 304 544 304zM64 288C64 305.7 49.67 320 32 320C14.33 320 0 305.7 0 288C0 270.3 14.33 256 32 256C49.67 256 64 270.3 64 288zM32 272C23.16 272 16 279.2 16 288C16 296.8 23.16 304 32 304C40.84 304 48 296.8 48 288C48 279.2 40.84 272 32 272zM64 96C64 78.33 78.33 64 96 64C113.7 64 128 78.33 128 96C128 113.7 113.7 128 96 128C78.33 128 64 113.7 64 96zM96 112C104.8 112 112 104.8 112 96C112 87.16 104.8 80 96 80C87.16 80 80 87.16 80 96C80 104.8 87.16 112 96 112zM512 96C512 113.7 497.7 128 480 128C462.3 128 448 113.7 448 96C448 78.33 462.3 64 480 64C497.7 64 512 78.33 512 96zM480 80C471.2 80 464 87.16 464 96C464 104.8 471.2 112 480 112C488.8 112 496 104.8 496 96C496 87.16 488.8 80 480 80zM64 480C64 462.3 78.33 448 96 448C113.7 448 128 462.3 128 480C128 497.7 113.7 512 96 512C78.33 512 64 497.7 64 480zM96 496C104.8 496 112 488.8 112 480C112 471.2 104.8 464 96 464C87.16 464 80 471.2 80 480C80 488.8 87.16 496 96 496zM512 480C512 497.7 497.7 512 480 512C462.3 512 448 497.7 448 480C448 462.3 462.3 448 480 448C497.7 448 512 462.3 512 480zM480 464C471.2 464 464 471.2 464 480C464 488.8 471.2 496 480 496C488.8 496 496 488.8 496 480C496 471.2 488.8 464 480 464z"/>
</>],

]);

const DialMed: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

DialMed.displayName = "DialMed";

export default DialMed;