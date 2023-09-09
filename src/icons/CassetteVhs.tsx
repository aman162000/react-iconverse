
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M80 304c0 30.88 11.99 58.74 31.13 80L160 384v-34.97c-24.89-8.691-38.01-35.88-29.32-60.77C135.5 274.5 146.3 263.8 160 258.1V224L111.1 224C91.99 245.3 80 273.1 80 304zM416 224V258.1c24.89 8.693 38.01 35.88 29.32 60.77C440.5 333.5 429.7 344.2 416 349v34.97l48.87 0C484 362.7 496 334.9 496 304c0-30.87-11.99-58.74-31.13-79.1L416 224zM528 32h-480C21.49 32 0 53.49 0 80v48h576V80C576 53.49 554.5 32 528 32z"/><path className="fa-secondary" d="M0 432c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48v-304H0V432zM416 224l48.87 0C483.1 245.3 496 273.1 496 304s-12 58.75-31.13 80L416 384V224zM224 224h128v159.1H224V224zM111.1 224L160 224v159.1l-48.87 0C92 362.8 80 334.9 80 304S92 245.3 111.1 224z"/>
</>],
['light',<>
	<path d="M512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM544 416c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V160h512V416zM544 128H32V96c0-17.64 14.36-32 32-32h448c17.64 0 32 14.36 32 32V128zM124.8 400h326.4c4.828 0 9.406-2.188 12.45-5.938C484.8 367.8 496 336.7 496 304s-11.19-63.84-32.36-90.06C460.6 210.2 456 208 451.2 208H124.8c-4.828 0-9.406 2.188-12.45 5.938C91.19 240.2 80 271.3 80 304s11.19 63.84 32.36 90.06C115.4 397.8 119.1 400 124.8 400zM384 336c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32v-32h59.25C456.8 259.1 464 281.1 464 304s-7.156 44.88-20.75 64H384V336zM224 240h128v128H224V240zM132.8 240H192v32c-17.67 0-32 14.33-32 32c0 17.67 14.33 32 32 32v32H132.8C119.2 348.9 112 326.9 112 304S119.2 259.1 132.8 240z"/>
</>],
['regular',<>
	<path d="M184 384h208C440.6 384 480 344.6 480 296S440.6 208 392 208h-208C135.4 208 96 247.4 96 296S135.4 384 184 384zM400 264c17.62 0 32 14.38 32 32s-14.38 32-32 32V264zM224 256h128v80H224V256zM176 264v64c-17.62 0-32-14.38-32-32S158.4 264 176 264zM512 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h448c35.35 0 64-28.65 64-64V96C576 60.65 547.3 32 512 32zM528 416c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V160h480V416z"/>
</>],
['solid',<>
	<path d="M0 432c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V160H0V432zM416 349c19.12-6.625 32-24.78 32-45.03s-12.88-38.41-32-45.03V224l48.87 0C483.1 245.3 496 273.1 496 304s-12 58.75-31.13 80L416 384V349zM224 224h128v159.1H224V224zM111.1 224L160 224V258.1C140.9 265.6 128 283.8 128 304s12.88 38.4 32 45.03v34.97l-48.87 0C92 362.8 80 334.9 80 304S92 245.3 111.1 224zM528 32h-480C21.49 32 0 53.49 0 80v48h576V80C576 53.49 554.5 32 528 32z"/>
</>],
['thin',<>
	<path d="M111.1 400h353.8c4.535 0 8.857-1.926 11.89-5.297C499.5 369.5 512 337.2 512 304s-12.51-65.46-35.23-90.7C473.7 209.9 469.4 208 464.9 208H111.1c-4.535 0-8.857 1.926-11.89 5.297C76.51 238.5 64 270.8 64 304s12.51 65.46 35.23 90.7C102.3 398.1 106.6 400 111.1 400zM368 224l96.87 .0002C483.1 245.3 496 273.1 496 304s-12 58.75-31.13 80L368 384V224zM224 224h128v159.1H224V224zM111.1 224L208 224v160l-96.87 .0002C92 362.8 80 334.9 80 304S92 245.3 111.1 224zM400 248c-4.406 0-8 3.594-8 8s3.594 8 8 8c22.06 0 40 17.94 40 40s-17.94 40-40 40c-4.406 0-8 3.594-8 8s3.594 8 8 8c30.88 0 56-25.12 56-56S430.9 248 400 248zM528 32h-480C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V80C576 53.49 554.5 32 528 32zM560 432c0 17.64-14.36 32-32 32h-480c-17.64 0-32-14.36-32-32V160h544V432zM560 144h-544v-64c0-17.64 14.36-32 32-32h480c17.64 0 32 14.36 32 32V144zM176 360c4.406 0 8-3.594 8-8s-3.594-8-8-8c-22.06 0-40-17.94-40-40S153.9 264 176 264c4.406 0 8-3.594 8-8S180.4 248 176 248c-30.88 0-56 25.12-56 56S145.1 360 176 360z"/>
</>],

]);

const CassetteVhs: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CassetteVhs.displayName = "CassetteVhs";

export default CassetteVhs;