
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M381.6 236.3C376.6 248.2 364.9 256 352 256h-320c-12.94 0-24.61-7.797-29.56-19.75C-2.516 224.3 .2188 210.5 9.375 201.4l159.1-160C175.6 35.13 183.8 32 192 32s16.38 3.125 22.62 9.375l160 160C383.8 210.5 386.5 224.3 381.6 236.3z"/><path className="fa-secondary" d="M256 256v192c0 17.67-14.33 32-32 32h-64c-17.67 0-32-14.33-32-32V256H256z"/>
</>],
['light',<>
	<path d="M272 448V272H352c17.69 0 32-14.36 32-31.1c0-8.326-3.252-16.51-9.375-22.63l-160-176C208.4 35.13 200.2 32 192 32S175.6 35.13 169.4 41.38l-160 176C3.252 223.5 0 231.7 0 240C0 257.6 14.3 272 32 272h80V448c0 17.67 14.33 32 32 32h96C257.7 480 272 465.7 272 448zM144 448V240l-110.9-1.1L192 64.06L351.1 240h-111.1V448H144z"/>
</>],
['regular',<>
	<path d="M2.438 252.3C7.391 264.2 19.06 272 32 272h80v160c0 26.51 21.49 48 48 48h64C250.5 480 272 458.5 272 432v-160H352c12.94 0 24.61-7.797 29.56-19.75c4.953-11.97 2.219-25.72-6.938-34.88l-160-176C208.4 35.13 200.2 32 192 32S175.6 35.13 169.4 41.38l-160 176C.2188 226.5-2.516 240.3 2.438 252.3zM192 86.63L313.4 224H224v208H160V224H70.63L192 86.63z"/>
</>],
['solid',<>
	<path d="M381.6 236.3C376.6 248.2 364.9 256 352 256h-96v192c0 17.67-14.33 32-32 32h-64c-17.67 0-32-14.33-32-32V256H32c-12.94 0-24.61-7.797-29.56-19.75C-2.516 224.3 .2188 210.5 9.375 201.4l159.1-160C175.6 35.13 183.8 32 192 32s16.38 3.125 22.62 9.375l160 160C383.8 210.5 386.5 224.3 381.6 236.3z"/>
</>],
['thin',<>
	<path d="M256 448V256h96c12.94 0 24.61-7.797 29.56-19.75c1.641-3.963 2.438-8.123 2.438-12.25c0-8.326-3.25-16.51-9.375-22.63l-160-160C208.4 35.13 200.2 32 192 32S175.6 35.13 169.4 41.38l-159.1 160C3.252 207.5 .0001 215.7 .0001 224c0 4.123 .7968 8.281 2.437 12.25C7.391 248.2 19.06 256 32 256H128v192c0 17.67 14.33 32 32 32h64C241.7 480 256 465.7 256 448zM160 464c-8.822 0-16-7.178-16-16V240h-111.1c-6.492 0-12.29-3.877-14.78-9.867c-.8105-1.959-1.223-4.021-1.223-6.129c0-4.273 1.666-8.291 4.689-11.31l160-160C183.7 49.67 187.7 48 192 48c4.271 0 8.289 1.666 11.31 4.689l160 160C366.3 215.7 368 219.7 368 224c0 2.107-.4102 4.17-1.219 6.121C364.3 236.1 358.5 240 351.1 240h-111.1V448c0 8.822-7.178 16-15.1 16H160z"/>
</>],

]);

const Up: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Up.displayName = "Up";

export default Up;