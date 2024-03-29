
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M576 128H448v128c0 52.87-43.13 95.99-96 95.99l-96 .0013v31.98c0 35.25 28.75 63.1 63.1 63.1l125.8-.0073l82.75 62.12C534.9 514.8 544 510.2 544 502.2v-54.24h32c35.25 0 64-28.75 64-63.1V191.1C640 156.7 611.3 128 576 128zM213.5 140.8L207.1 139.2C184.3 132.2 184.8 128.1 185.6 124.5c1.375-7.812 16.59-9.719 30.27-7.625c5.594 .8438 11.73 2.812 17.59 4.844c10.39 3.594 21.83-1.938 25.45-12.34c3.625-10.44-1.891-21.84-12.33-25.47C239.3 81.42 233.5 79.83 228 78.63V68c0-11.03-8.953-20-20-20s-20 8.969-20 20v9.992C165.6 82.76 149.8 96.75 146.2 117.7C138.8 160.5 179.4 172.4 196.7 177.5L202.5 179.2C231.8 187.6 231.3 190.4 230.4 195.5C229 203.3 213.8 205.3 200.1 203.1C193.2 202.1 184.3 198.9 176.5 196.1L171.1 194.5C161.6 190.9 150.2 196.3 146.5 206.7C142.8 217.1 148.3 228.5 158.7 232.2l4.266 1.5C170.7 236.5 179.3 239.3 188 241.2V252c0 11.03 8.953 20 20 20s20-8.969 20-20V241.7c22.36-4.793 38.21-18.53 41.83-39.43C277.3 159 235.8 147.1 213.5 140.8z"/><path className="fa-secondary" d="M352 0H64C28.75 0 0 28.75 0 63.1v192C0 291.2 28.75 320 64 320l32 .0106v54.25c0 7.998 9.125 12.62 15.5 7.875l82.75-62.12L352 319.9c35.25 .125 64-28.68 64-63.92V63.1C416 28.75 387.3 0 352 0zM269.8 202.3C266.2 223.2 250.4 236.1 228 241.7V252c0 11.03-8.953 20-20 20s-20-8.969-20-20V241.2c-8.682-1.922-17.3-4.723-25.06-7.512l-4.266-1.5C148.3 228.5 142.8 217.1 146.5 206.7c3.688-10.41 15.11-15.81 25.52-12.22l4.469 1.625c7.844 2.812 16.72 6 23.66 7.031C213.8 205.3 229 203.3 230.4 195.5C231.3 190.4 231.8 187.6 202.5 179.2L196.7 177.5c-17.33-5.094-57.92-17-50.52-59.84C149.8 96.75 165.6 82.76 188 77.99V68c0-11.03 8.953-20 20-20s20 8.969 20 20v10.63c5.453 1.195 11.34 2.789 18.56 5.273C257 87.53 262.5 98.94 258.9 109.4C255.3 119.8 243.8 125.3 233.4 121.7c-5.859-2.031-12-4-17.59-4.844C202.2 114.8 186.1 116.7 185.6 124.5C184.8 128.1 184.3 132.2 207.1 139.2L213.5 140.8C235.8 147.1 277.3 159 269.8 202.3z"/>
</>],
['light',<>
	<path d="M212.4 144.6L206.8 143C179.7 135 180.5 130.3 181.6 123.8c1.891-10.91 19.22-13.34 34.81-10.91c5.812 .9062 12.22 2.906 18.3 5.031c8.344 2.875 17.47-1.531 20.36-9.875c2.906-8.344-1.516-17.47-9.859-20.38c-8.471-2.934-15.2-4.709-21.25-5.832V72c0-8.838-7.138-16-15.98-16c-8.836 0-16.02 7.162-16.02 16v9.27c-22.56 3.756-38.4 16.92-41.89 37.11C143.3 157.7 181.5 168.9 197.8 173.7l5.781 1.688c28.67 8.188 32.33 11.81 30.77 20.81c-1.891 10.91-19.27 13.41-34.84 10.91C192.2 205.1 183.1 202.7 175.1 199.8L170.6 198.3c-8.391-2.938-17.47 1.406-20.42 9.781C147.3 216.3 151.7 225.5 159.1 228.4l4.279 1.531c8.588 3.086 18.22 6.355 27.72 8.119V248c0 8.836 7.188 16 16.02 16c8.838 0 15.98-7.164 15.98-16V238.3c22.4-3.824 38.41-16.58 41.89-36.66C272.7 161.9 234.1 151.1 212.4 144.6zM416 256V63.1C416 28.75 387.3 0 352 0H64C28.75 0 0 28.75 0 63.1v192C0 291.3 28.75 320 64 320l32 .0106V372C96 379.1 101.8 384 108 384c2.375 0 4.875-.75 7.125-2.375L224 320l128-.075C387.3 319.9 416 291.3 416 256zM215.6 288L128 337.6V288H64C46.36 288 32 273.6 32 256V64c0-17.64 14.36-32 32-32h288c17.64 0 32 14.36 32 32v192c0 17.64-14.36 32-32 32H215.6zM576 128H448v32h128c17.64 0 32 14.36 32 32v192c0 17.64-14.36 32-32 32h-64v49.57L424.4 416H320c-17.64 0-32-14.36-32-32v-32l-32-.0039v31.98c0 35.25 28.75 63.1 63.1 63.1L416 448l108.9 61.63C527.1 511.3 529.6 512 532 512C538.3 512 544 507.1 544 500v-52.03h32c35.25 0 64-28.75 64-63.1V191.1C640 156.7 611.3 128 576 128z"/>
</>],
['regular',<>
	<path d="M207.1 142.1L212.7 143.5C231.8 148.1 267.4 159.2 260.1 196.3C257.9 214.2 244.3 225.1 225.1 230.1V238.9C225.1 248.3 217.5 256 208 256C198.5 256 190.9 248.3 190.9 238.9V229.6C183.4 227.1 176 225.6 169.4 223.2L165.7 221.9C156.8 218.7 152.1 208.9 155.3 200C158.4 191.1 168.2 186.5 177.1 189.5L180.1 190.9L181 190.1C187.7 193.4 195.3 196.1 201.2 196.1C212.1 198.8 226 197.1 227.2 190.4C227.1 186.1 228.4 183.7 203.3 176.5L198.3 175C183.4 170.7 148.7 160.4 155 123.7C158.1 105.8 171.6 93.79 190.9 89.71V81.14C190.9 71.69 198.5 63.1 208 63.1C217.5 63.1 225.1 71.69 225.1 81.14V90.26C229.8 91.28 234.9 92.65 241.1 94.78C250 97.88 254.7 107.7 251.6 116.6C248.5 125.5 238.7 130.3 229.8 127.2C224.8 125.4 219.5 123.8 214.7 123C203 121.2 189.1 122.9 188.8 129.6C188.1 133.4 187.7 136.2 207.1 142.1V142.1zM352 319.9L224 320L115.1 381.6C112.9 383.3 110.4 384 108 384C101.8 384 96 379.1 96 372V320L64 320C28.75 320 0 291.3 0 256V63.1C0 28.75 28.75 0 64 0H352C387.3 0 416 28.75 416 63.1V256C416 291.3 387.3 319.9 352 319.9V319.9zM352 272C360.7 272 368 264.8 368 256V64C368 55.25 360.7 48 352 48H64C55.25 48 48 55.25 48 64V256C48 264.8 55.25 272 64 272H144V310.1L211.4 272H352zM304 352V384C304 392.7 311.2 400 320 400H428.6L496 438.1V400H576C584.7 400 592 392.7 592 384V192C592 183.2 584.7 176 576 176H448V128H576C611.3 128 640 156.7 640 191.1V384C640 419.3 611.3 448 576 448L544 448V500C544 507.1 538.2 512 532 512C529.6 512 527.1 511.3 524.9 509.6L416 448L320 447.9C284.8 447.9 256 419.3 256 384V352L304 352z"/>
</>],
['solid',<>
	<path d="M576 128H448v128c0 52.87-43.13 95.99-96 95.99l-96 .0013v31.98c0 35.25 28.75 63.1 63.1 63.1l125.8-.0073l82.75 62.12C534.9 514.8 544 510.2 544 502.2v-54.24h32c35.25 0 64-28.75 64-63.1V191.1C640 156.7 611.3 128 576 128zM416 256V63.1C416 28.75 387.3 0 352 0H64C28.75 0 0 28.75 0 63.1v192C0 291.2 28.75 320 64 320l32 .0106v54.25c0 7.998 9.125 12.62 15.5 7.875l82.75-62.12L352 319.9C387.3 320 416 291.2 416 256zM269.8 202.3C266.2 223.2 250.4 236.1 228 241.7V252c0 11.03-8.953 20-20 20s-20-8.969-20-20V241.2c-8.682-1.922-17.3-4.723-25.06-7.512l-4.266-1.5C148.3 228.5 142.8 217.1 146.5 206.7c3.688-10.41 15.11-15.81 25.52-12.22l4.469 1.625c7.844 2.812 16.72 6 23.66 7.031C213.8 205.3 229 203.3 230.4 195.5C231.3 190.4 231.8 187.6 202.5 179.2L196.7 177.5c-17.33-5.094-57.92-17-50.52-59.84C149.8 96.75 165.6 82.76 188 77.99V68c0-11.03 8.953-20 20-20s20 8.969 20 20v10.63c5.453 1.195 11.34 2.789 18.56 5.273C257 87.53 262.5 98.94 258.9 109.4C255.3 119.8 243.8 125.3 233.4 121.7c-5.859-2.031-12-4-17.59-4.844C202.2 114.8 186.1 116.7 185.6 124.5C184.8 128.1 184.3 132.2 207.1 139.2L213.5 140.8C235.8 147.1 277.3 159 269.8 202.3z"/>
</>],
['thin',<>
	<path d="M210.2 152.3l-6.277-1.812C177.4 142.7 165.4 135.8 168.5 117.6c3.545-20.41 29.41-23.83 50.47-20.48C224.1 98.06 232.1 100 241.3 103.2c4.217 1.469 8.729-.7656 10.18-4.938c1.436-4.188-.7656-8.734-4.936-10.19C236.4 84.56 228.4 82.41 221.5 81.31C219.6 81.02 217.9 80.99 216 80.8V64c0-4.422-3.601-8-8.019-8c-4.42 0-7.972 3.578-7.972 8v16.37c-25.56 1.568-43.75 14.08-47.3 34.5C146.6 150.3 179.6 160 199.4 165.8l6.402 1.859C236.7 176.5 250.9 182.8 247.5 202.4C243.9 222.8 218 226.2 196.1 222.9C187.7 221.5 176.1 217.6 167.5 214.2L162.7 212.5C158.6 211 153.1 213.2 152.5 217.3C151 221.5 153.2 226.1 157.3 227.5l4.717 1.688c10.17 3.672 21.69 7.828 32.47 9.453c1.916 .2988 3.648 .248 5.512 .4414V256c0 4.422 3.552 8 7.972 8c4.418 0 8.019-3.578 8.019-8V239.3C241.4 237.7 259.7 225.5 263.2 205.1C269.4 169.2 236.6 159.8 210.2 152.3zM576 128H472c-4.418 0-8 3.582-8 8s3.582 8 8 8H576c26.51 0 48 21.49 48 48v191.1c0 26.51-21.49 47.1-47.99 47.1H528v57.74l-76.91-57.74H320c-26.51 0-48-21.49-48-48v-7.971c0-4.418-3.582-8-8-8s-8 3.582-8 8v7.983c0 35.2 28.8 63.1 63.1 63.1l125.8-.0073l82.75 62.12C530.3 511.4 532.3 512 534.2 512C539.2 512 544 507.1 544 502.2v-54.24h32c35.2 0 64-28.8 64-63.1V191.1C640 156.8 611.2 128 576 128zM352 319.9c35.15 0 64-28.75 64-63.92V63.1C416 28.75 387.3 0 352 0H64C28.75 0 0 28.75 0 63.1v192C0 291.2 28.75 320 64 320l32 .0106v54.25C96 380 100.8 384.1 105.8 384.1c1.941 0 3.926-.5977 5.699-1.918l82.75-62.12L352 319.9zM194.2 304L188.9 304L112 361.8V304L64 304c-26.47 0-48-21.53-48-47.1V63.99C16 37.53 37.53 16 64 16h288c26.47 0 48 21.53 48 47.99v192c0 26.4-21.43 47.87-48.01 47.87L194.2 304z"/>
</>],

]);

const MessagesDollar: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

MessagesDollar.displayName = "MessagesDollar";

export default MessagesDollar;
