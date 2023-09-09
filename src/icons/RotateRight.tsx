
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M468.9 32.11c13.87 0 27.18 10.77 27.18 27.04v145.9c0 10.59-8.584 19.17-19.17 19.17h-145.7c-16.28 0-27.06-13.32-27.06-27.2c0-6.634 2.461-13.4 7.96-18.9l137.1-138C455.5 34.57 462.3 32.11 468.9 32.11z"/><path className="fa-secondary" d="M371 377.6c18.48 0 31.97 15.04 31.97 31.96c0 35.04-81.59 70.41-147 70.41c-123.4 0-223.9-100.5-223.9-223.9s100.5-223.1 223.9-223.1c54.6 0 106.3 20.75 146.5 55.63l-45.24 45.27c-28.22-23.14-63.85-36.64-101.3-36.64c-88.09 0-159.8 71.69-159.8 159.8S167.8 415.9 255.9 415.9C329 415.9 345.3 377.6 371 377.6z"/>
</>],
['light',<>
	<path d="M32.05 256.1c0 123.5 100.4 223.9 223.9 223.9c104.4 0 180-76.8 180-95.94c0-9.377-7.705-16.03-15.98-16.03C399.5 367.1 369.3 448 256 448c-105.9 0-192-86.13-192-192s86.13-192 192-192c75.11 0 123.1 44.4 124.2 45.15l-55.54 55.54c-3.055 3.055-4.681 7.16-4.681 11.33C320 184.9 327.2 192 336 192h128C472.8 192 480 184.8 480 176v-128c0-8.606-6.901-15.97-15.97-15.97c-4.171 0-8.291 1.598-11.35 4.653L402.1 87.32c-8.646-13.15-70.2-55.25-146.1-55.25C132.4 32.07 32.05 132.6 32.05 256.1zM374.6 160L448 86.63V160H374.6z"/>
</>],
['regular',<>
	<path d="M496 72v128C496 213.3 485.3 224 472 224h-128c-13.19 0-24-10.66-24-23.98c0-6.247 2.432-12.39 7.033-16.99L379.2 130.9C346.9 99.29 303.1 80 256 80C158.1 80 80 158.1 80 256s78.97 176 176 176c81.21 0 107.1-46.34 127.1-46.34c10.18 0 24.02 8.003 24.02 24.01c0 25.11-75.1 70.27-152.1 70.27c-123.5 0-223.9-100.4-223.9-223.9s100.4-223.1 223.9-223.1c60.03 0 116 24.58 157.1 64.95l41.1-41.1c4.601-4.601 10.74-7.019 16.99-7.019C485.4 48.01 496 58.83 496 72z"/>
</>],
['solid',<>
	<path d="M468.9 32.11c13.87 0 27.18 10.77 27.18 27.04v145.9c0 10.59-8.584 19.17-19.17 19.17h-145.7c-16.28 0-27.06-13.32-27.06-27.2c0-6.634 2.461-13.4 7.96-18.9l45.12-45.14c-28.22-23.14-63.85-36.64-101.3-36.64c-88.09 0-159.8 71.69-159.8 159.8S167.8 415.9 255.9 415.9c73.14 0 89.44-38.31 115.1-38.31c18.48 0 31.97 15.04 31.97 31.96c0 35.04-81.59 70.41-147 70.41c-123.4 0-223.9-100.5-223.9-223.9S132.6 32.44 256 32.44c54.6 0 106.2 20.39 146.4 55.26l47.6-47.63C455.5 34.57 462.3 32.11 468.9 32.11z"/>
</>],
['thin',<>
	<path d="M487.2 31.99c-6.347 0-12.48 2.5-17.26 7.264L408.8 100.4l-2.367-2.836C362.7 53.94 305.4 32.1 248 32.1c-118.9 0-223.9 95.16-223.9 223.9c0 129.5 105.7 223.9 223.9 223.9c102.1 0 160.8-66.41 160.8-71.16c0-6.328-5.892-8-8.007-8c-9.172 0-53.33 63.13-152.8 63.13c-113.4 0-207.9-91.17-207.9-207.9c0-117.5 95.36-207.1 208.1-207.1c53.1 0 106.1 20.12 146.4 60.33l2.834 3.416l-70.18 70.18c-4.778 4.768-7.278 10.91-7.278 17.25C319.1 212.3 330.2 224 344.7 224h142.7C500.1 224 512 212.1 512 199.4V56.66C512 42.4 500.5 31.99 487.2 31.99zM496 199.4C496 204.1 492.1 208 487.4 208h-142.7c-7.34 0-8.642-6.923-8.642-8.775c0-1.781 .5494-3.946 2.548-5.944l142.7-142.7c2-2 4.156-2.547 5.938-2.547C489.1 48.02 496 49.28 496 56.66V199.4z"/>
</>],

]);

const RotateRight: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

RotateRight.displayName = "RotateRight";

export default RotateRight;