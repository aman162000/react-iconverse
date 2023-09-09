
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M400 256h32C440.8 256 448 248.8 448 240v-96C448 135.2 440.8 128 432 128h-32C391.2 128 384 135.2 384 144v96C384 248.8 391.2 256 400 256zM272 256h32C312.8 256 320 248.8 320 240v-96C320 135.2 312.8 128 304 128h-32C263.2 128 256 135.2 256 144v96C256 248.8 263.2 256 272 256zM144 256h32C184.8 256 192 248.8 192 240v-96C192 135.2 184.8 128 176 128h-32C135.2 128 128 135.2 128 144v96C128 248.8 135.2 256 144 256zM0 320v128h80v-32c0-8.836 7.164-16 16-16c8.838 0 16 7.164 16 16v32h96v-32c0-8.836 7.164-16 16-16c8.838 0 16 7.164 16 16v32h96v-32c0-8.836 7.164-16 16-16c8.838 0 16 7.164 16 16v32h96v-32c0-8.836 7.164-16 16-16c8.838 0 16 7.164 16 16v32H576v-128H0z"/><path className="fa-secondary" d="M576 146.9V112C576 85.49 554.5 64 528 64h-480C21.49 64 0 85.49 0 112v34.94C18.6 153.5 32 171.1 32 192S18.6 230.5 0 237.1V320h576V237.1C557.4 230.5 544 212.9 544 192S557.4 153.5 576 146.9zM192 240C192 248.8 184.8 256 176 256h-32C135.2 256 128 248.8 128 240v-96C128 135.2 135.2 128 144 128h32C184.8 128 192 135.2 192 144V240zM320 240C320 248.8 312.8 256 304 256h-32C263.2 256 256 248.8 256 240v-96C256 135.2 263.2 128 272 128h32C312.8 128 320 135.2 320 144V240zM448 240C448 248.8 440.8 256 432 256h-32C391.2 256 384 248.8 384 240v-96C384 135.2 391.2 128 400 128h32C440.8 128 448 135.2 448 144V240z"/>
</>],
['light',<>
	<path d="M576 146.9V128c0-35.35-28.65-64-64-64H64C28.65 64 0 92.65 0 128v18.94C18.6 153.5 32 171.1 32 192S18.6 230.5 0 237.1V416c0 17.67 14.33 32 32 32h512c17.67 0 32-14.33 32-32V237.1C557.4 230.5 544 212.9 544 192S557.4 153.5 576 146.9zM544 416h-48v-16c0-8.836-7.162-16-16-16c-8.836 0-16 7.164-16 16V416h-96v-16c0-8.836-7.162-16-16-16c-8.836 0-16 7.164-16 16V416h-96v-16C240 391.2 232.8 384 224 384c-8.836 0-16 7.164-16 16V416h-96v-16C112 391.2 104.8 384 96 384c-8.836 0-16 7.164-16 16V416H32v-96h512V416zM544 128c-19.75 14.84-32 38.54-32 64s12.25 48.95 32 63.79V288H32V255.8C51.75 240.9 64 217.5 64 192S51.75 143.1 32 128.2C32 110.6 46.36 96 64 96h448C529.6 96 544 110.4 544 128zM160 128C151.2 128 144 135.2 144 144v96C144 248.8 151.2 256 160 256s16-7.156 16-16v-96C176 135.2 168.8 128 160 128zM288 128C279.2 128 272 135.2 272 144v96C272 248.8 279.2 256 288 256s16-7.156 16-16v-96C304 135.2 296.8 128 288 128zM416 128c-8.844 0-16 7.156-16 16v96C400 248.8 407.2 256 416 256s16-7.156 16-16v-96C432 135.2 424.8 128 416 128z"/>
</>],
['regular',<>
	<path d="M576 162.9V112C576 85.49 554.5 64 528 64h-480C21.49 64 0 85.49 0 112v50.94C18.6 169.5 32 187.1 32 208S18.6 246.5 0 253.1V416c0 17.67 14.33 32 32 32h512c17.67 0 32-14.33 32-32V253.1C557.4 246.5 544 228.9 544 208S557.4 169.5 576 162.9zM528 400h-56c0-13.25-10.75-24-24-24s-24 10.75-24 24h-32c0-13.25-10.75-24-24-24s-24 10.75-24 24h-32c0-13.25-10.75-24-24-24s-24 10.75-24 24h-32c0-13.25-10.75-24-24-24s-24 10.75-24 24h-32c0-13.25-10.75-24-24-24s-24 10.75-24 24H48V352h480V400zM528 136.7c-19.92 17.84-32 43.61-32 71.33c0 27.71 12.08 53.48 32 71.33V304h-480V279.3C67.92 261.5 80 235.7 80 208c0-27.71-12.08-53.48-32-71.33V112h480V136.7zM160 272c13.25 0 24-10.75 24-24v-80C184 154.8 173.3 144 160 144S136 154.8 136 168v80C136 261.3 146.8 272 160 272zM288 272c13.25 0 24-10.75 24-24v-80c0-13.25-10.75-24-24-24S264 154.8 264 168v80C264 261.3 274.8 272 288 272zM416 272c13.25 0 24-10.75 24-24v-80c0-13.25-10.75-24-24-24s-24 10.75-24 24v80C392 261.3 402.8 272 416 272z"/>
</>],
['solid',<>
	<path d="M0 448h80v-32c0-8.838 7.164-16 16-16c8.838 0 16 7.162 16 16v32h96v-32c0-8.838 7.164-16 16-16c8.838 0 16 7.162 16 16v32h96v-32c0-8.838 7.164-16 16-16c8.838 0 16 7.162 16 16v32h96v-32c0-8.838 7.164-16 16-16c8.838 0 16 7.162 16 16v32H576v-96H0V448zM576 146.9V112C576 85.49 554.5 64 528 64h-480C21.49 64 0 85.49 0 112v34.94C18.6 153.5 32 171.1 32 192S18.6 230.5 0 237.1V320h576V237.1C557.4 230.5 544 212.9 544 192S557.4 153.5 576 146.9zM192 240C192 248.8 184.8 256 176 256h-32C135.2 256 128 248.8 128 240v-96C128 135.2 135.2 128 144 128h32C184.8 128 192 135.2 192 144V240zM320 240C320 248.8 312.8 256 304 256h-32C263.2 256 256 248.8 256 240v-96C256 135.2 263.2 128 272 128h32C312.8 128 320 135.2 320 144V240zM448 240C448 248.8 440.8 256 432 256h-32C391.2 256 384 248.8 384 240v-96C384 135.2 391.2 128 400 128h32C440.8 128 448 135.2 448 144V240z"/>
</>],
['thin',<>
	<path d="M576 146.9V112C576 85.49 554.5 64 528 64h-480C21.49 64 0 85.49 0 112v34.94C18.6 153.5 32 171.1 32 192S18.6 230.5 0 237.1V416c0 17.67 14.33 32 32 32h512c17.67 0 32-14.33 32-32V237.1C557.4 230.5 544 212.9 544 192S557.4 153.5 576 146.9zM560 416c0 8.824-7.178 16-16 16h-56v-32c0-4.422-3.594-8-8-8s-8 3.578-8 8v32h-112v-32c0-4.422-3.594-8-8-8s-8 3.578-8 8v32h-112v-32c0-4.422-3.594-8-8-8s-8 3.578-8 8v32h-112v-32c0-4.422-3.594-8-8-8s-8 3.578-8 8v32H32c-8.822 0-16-7.176-16-16v-80h544V416zM560 136.8C540.5 148.1 528 169 528 192s12.48 43.94 32 55.22V320h-544V247.2C35.52 235.9 48 214.1 48 192s-12.48-43.94-32-55.22V112c0-17.64 14.36-32 32-32h480c17.64 0 32 14.36 32 32V136.8zM432 128h-32C391.2 128 384 135.2 384 144v96C384 248.8 391.2 256 400 256h32C440.8 256 448 248.8 448 240v-96C448 135.2 440.8 128 432 128zM432 240h-32v-96h32V240zM304 128h-32C263.2 128 256 135.2 256 144v96C256 248.8 263.2 256 272 256h32C312.8 256 320 248.8 320 240v-96C320 135.2 312.8 128 304 128zM304 240h-32v-96h32V240zM176 128h-32C135.2 128 128 135.2 128 144v96C128 248.8 135.2 256 144 256h32C184.8 256 192 248.8 192 240v-96C192 135.2 184.8 128 176 128zM176 240h-32v-96h32V240z"/>
</>],

]);

const Memory: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Memory.displayName = "Memory";

export default Memory;