
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M448 95.1c0 6.812-2.891 13.28-7.938 17.85l-80 72C355.6 189.9 349.8 192 343.1 192c-3.312 0-6.618-.6875-9.759-2.062C325.6 186.1 320 177.5 320 168L319.1 128H160C107.1 128 64 171.1 64 224c0 17.69-14.33 32-32 32S0 241.7 0 224c0-88.22 71.78-160 160-160h160l-.0049-40c0-9.469 5.583-18.06 14.24-21.94c8.641-3.781 18.78-2.219 25.83 4.094l80 72C445.1 82.72 448 89.19 448 95.1z"/><path className="fa-secondary" d="M512 288c0 88.22-71.78 160-160 160H192l.0073 40c0 9.469-5.585 18.06-14.24 21.94C174.6 511.3 171.3 512 168 512c-5.812 0-11.57-2.125-16.07-6.156l-80-72C66.89 429.3 64 422.8 64 416s2.891-13.28 7.938-17.84l80-72C159 319.8 169.1 318.3 177.8 322.1C186.4 325.9 192 334.5 192 344L192 384H352c52.94 0 96-43.06 96-96c0-17.69 14.33-32 32-32S512 270.3 512 288z"/>
</>],
['light',<>
	<path d="M496 240C487.2 240 480 247.2 480 256c0 79.41-64.59 144-144 144H192L192 336c0-6.219-3.594-11.84-9.219-14.5C180.6 320.5 178.3 320 176 320c-3.672 0-7.312 1.25-10.25 3.719l-96 80C66.11 406.8 64 411.3 64 416s2.109 9.254 5.75 12.29l96 80c4.781 4 11.45 4.812 17.03 2.219C188.4 507.9 192 502.2 192 496L192 432H336c97.05 0 176-78.97 176-176C512 247.2 504.8 240 496 240zM160 461.8L105 416L160 370.2V461.8zM176 112l143.1-.002L320 176c0 6.219 3.594 11.84 9.219 14.5C331.4 191.5 333.7 192 336 192c3.672 0 7.312-1.25 10.25-3.719l96-80C445.9 105.2 448 100.7 448 95.1s-2.109-9.253-5.75-12.28l-96-80c-4.781-4-11.45-4.812-17.03-2.219C323.6 4.148 320 9.773 320 15.99L319.1 80H176C78.95 80 0 158.1 0 256c0 8.844 7.156 16 16 16S32 264.8 32 256C32 176.6 96.59 112 176 112zM352 50.15l55 45.85L352 141.8V50.15z"/>
</>],
['regular',<>
	<path d="M176 128h143.1l-.0065 56c0 9.703 5.846 18.45 14.82 22.17s19.28 1.656 26.16-5.203l80.01-80c9.373-9.371 9.373-24.57 0-33.94l-80.01-80c-6.877-6.859-17.19-8.922-26.16-5.203S319.1 14.3 319.1 24V80H176C78.95 80 0 158.1 0 256c0 13.25 10.75 24 24 24S48 269.3 48 256C48 185.4 105.4 128 176 128zM488 232c-13.25 0-24 10.75-24 24c0 70.59-57.42 128-128 128H192l.0114-56c0-9.703-5.846-18.45-14.82-22.17S157.9 304.2 151 311l-80.01 80c-9.373 9.371-9.373 24.57 0 33.94l80.01 80c6.877 6.859 17.19 8.922 26.16 5.203S192 497.7 192 488L192 432H336c97.05 0 176-78.97 176-176C512 242.8 501.3 232 488 232z"/>
</>],
['solid',<>
	<path d="M480 256c-17.67 0-32 14.31-32 32c0 52.94-43.06 96-96 96H192L192 344c0-9.469-5.578-18.06-14.23-21.94C169.1 318.3 159 319.8 151.9 326.2l-80 72C66.89 402.7 64 409.2 64 416s2.891 13.28 7.938 17.84l80 72C156.4 509.9 162.2 512 168 512c3.312 0 6.615-.6875 9.756-2.062C186.4 506.1 192 497.5 192 488L192 448h160c88.22 0 160-71.78 160-160C512 270.3 497.7 256 480 256zM160 128h159.1L320 168c0 9.469 5.578 18.06 14.23 21.94C337.4 191.3 340.7 192 343.1 192c5.812 0 11.57-2.125 16.07-6.156l80-72C445.1 109.3 448 102.8 448 95.1s-2.891-13.28-7.938-17.84l-80-72c-7.047-6.312-17.19-7.875-25.83-4.094C325.6 5.938 319.1 14.53 319.1 24L320 64H160C71.78 64 0 135.8 0 224c0 17.69 14.33 32 32 32s32-14.31 32-32C64 171.1 107.1 128 160 128z"/>
</>],
['thin',<>
	<path d="M504 239.1c-4.422 0-8 3.594-8 8C496 331.8 427.8 400 344 400H192l.0049-72c0-9.703-5.846-18.45-14.82-22.17C174.2 304.6 171.1 304 168 304c-6.246 0-12.39 2.441-16.99 7.031l-80.01 80c-9.375 9.371-9.375 24.57 0 33.94l80.01 80C155.6 509.6 161.8 512 168 512c3.09 0 6.22-.5977 9.188-1.828C186.2 506.5 192 497.7 192 488L192 416H344C436.6 416 512 340.6 512 247.1C512 243.6 508.4 239.1 504 239.1zM176 488c0 3.246-1.939 6.146-4.943 7.391C170.1 495.8 169.1 496 168 496c-2.141 0-4.162-.8379-5.672-2.346l-80.02-80C80.3 411.6 80 409.2 80 408s.3047-3.615 2.344-5.654l79.1-79.99C163.9 320.8 165.9 320 168 320c1.049 0 2.072 .2051 3.047 .6094c3.004 1.244 4.943 4.145 4.943 7.391V488zM319.1 111.1L319.1 184c0 9.703 5.846 18.45 14.82 22.17C337.8 207.4 340.9 208 343.1 208c6.246 0 12.38-2.441 16.99-7.031l80.01-80c9.373-9.371 9.373-24.57 0-33.94l-80.01-80C356.4 2.441 350.2 0 343.1 0c-3.09 0-6.203 .5977-9.174 1.828C325.8 5.547 319.1 14.3 319.1 24l-.0049 71.1H168c-92.64 0-168 75.38-168 168c0 4.406 3.578 8 8 8s8-3.594 8-8c0-83.81 68.19-152 152-152L319.1 111.1zM335.1 24c0-3.246 1.941-6.146 4.943-7.391C341.9 16.21 342.9 16 343.1 16c2.143 0 4.162 .8379 5.674 2.346l80.01 80C431.7 100.4 432 102.8 432 104s-.3047 3.615-2.344 5.654l-80 79.99C348.1 191.2 346.1 192 343.1 192c-1.047 0-2.085-.2051-3.06-.6094c-3.002-1.244-4.943-4.145-4.943-7.391V24z"/>
</>],

]);

const Repeat: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Repeat.displayName = "Repeat";

export default Repeat;
