
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M192 352h16V304H160V320C160 337.8 174.3 352 192 352zM208 144H192c-17.75 0-32 14.25-32 32V192h48V144zM304 144h-64V192h64V144zM240 304V352h64V304H240zM336 352H352c17.75 0 32-14.25 32-32V304h-48V352zM352 144h-16V192H384V176C384 158.3 369.8 144 352 144zM160 272h224V224H160V272zM328 512h-208C53.83 512 0 458.2 0 392v-272C0 106.8 10.75 96 24 96S48 106.8 48 120v272c0 39.7 32.3 72 72 72h208c13.25 0 24 10.75 24 24S341.3 512 328 512z"/><path className="fa-secondary" d="M336 0H160C124.8 0 96 28.75 96 64v288c0 35.25 28.75 64 64 64h224c35.25 0 64-28.75 64-64V112L336 0zM384 320c0 17.75-14.25 32-32 32H192c-17.75 0-32-14.25-32-32V176c0-17.75 14.25-32 32-32h160c17.75 0 32 14.25 32 32V320z"/>
</>],
['light',<>
	<path d="M336 144H192C165.5 144 144 165.5 144 192v128c0 26.5 21.5 48 48 48h144c26.5 0 48-21.5 48-48V192C384 165.5 362.5 144 336 144zM248 176h32v32h-32V176zM176 192c0-8.75 7.25-16 16-16h24v32H176V192zM216 336H192c-8.75 0-16-7.25-16-16V304h40V336zM280 336h-32v-32h32V336zM352 320c0 8.75-7.25 16-16 16h-24v-32H352V320zM352 272H176v-32H352V272zM352 208h-40v-32h24C344.8 176 352 183.3 352 192V208zM429.3 109.3l-90.51-90.51C326.7 6.742 310.5 0 293.5 0H144c-35.2 0-64 28.8-64 64v304c0 35.2 28.8 64 64 64H384c35.2 0 64-28.8 64-64V154.5C448 137.5 441.3 121.3 429.3 109.3zM416 368c0 17.6-14.4 32-32 32H144c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h149.5c8.486 0 16.62 3.371 22.63 9.373l90.5 90.5C412.6 137.9 416 146 416 154.5V368zM336 480H96c-35.35 0-64-28.65-64-64V112C32 103.2 24.84 96 16 96S0 103.2 0 112V416c0 53.02 42.98 96 96 96h240c8.836 0 16-7.164 16-16S344.8 480 336 480z"/>
</>],
['regular',<>
	<path d="M272 176H206.5C189.7 176 176 189.7 176 206.5V240h96V176zM176 305.5C176 322.3 189.7 336 206.5 336H240v-64h-64V305.5zM272 336h65.49C354.3 336 368 322.3 368 305.5V272h-96V336zM438.6 102.6l-93.25-93.25C339.4 3.371 331.2 0 322.7 0H160C124.8 0 96 28.8 96 64v288c0 35.2 28.8 64 64 64h224c35.2 0 64-28.8 64-64V125.3C448 116.8 444.6 108.6 438.6 102.6zM400 352c0 8.672-7.326 16-16 16H160c-8.672 0-16-7.328-16-16V64c0-8.674 7.328-16 16-16h156.1L400 131.9V352zM304 240h64V206.5C368 189.7 354.3 176 337.5 176H304V240zM328 512h-208C53.83 512 0 458.2 0 392v-272C0 106.8 10.75 96 24 96S48 106.8 48 120v272c0 39.7 32.3 72 72 72h208c13.25 0 24 10.75 24 24S341.3 512 328 512z"/>
</>],
['solid',<>
	<path d="M336 0H160C124.8 0 96 28.75 96 64v288c0 35.25 28.75 64 64 64h224c35.25 0 64-28.75 64-64V112L336 0zM240 144h64V192h-64V144zM160 176c0-17.75 14.25-32 32-32h16V192H160V176zM208 352H192c-17.75 0-32-14.25-32-32V304h48V352zM304 352h-64V304h64V352zM384 320c0 17.75-14.25 32-32 32h-16V304H384V320zM384 272H160V224h224V272zM384 192h-48V144H352c17.75 0 32 14.25 32 32V192zM328 512h-208C53.83 512 0 458.2 0 392v-272C0 106.8 10.75 96 24 96S48 106.8 48 120v272c0 39.7 32.3 72 72 72h208c13.25 0 24 10.75 24 24S341.3 512 328 512z"/>
</>],
['thin',<>
	<path d="M160 176V320c0 17.75 14.25 32 32 32h160c17.75 0 32-14.25 32-32V176c0-17.75-14.25-32-32-32H192C174.3 144 160 158.3 160 176zM224 336H192c-8.973 0-16-7.029-16-16V288H224V336zM304 336h-64V288h64V336zM368 320c0 8.971-7.027 16-16 16h-32V288h48V320zM368 272h-192V224h192V272zM320 160h32c8.973 0 16 7.027 16 16v32H320V160zM240 160h64v48h-64V160zM224 208H176v-32C176 167 183 160 192 160h32V208zM320 0H160C124.8 0 96 28.75 96 64v288c0 35.25 28.75 64 64 64h224c35.25 0 64-28.75 64-64V128L320 0zM432 352c0 26.47-21.53 48-48 48H160c-26.47 0-48-21.53-48-48V64c0-26.47 21.53-48 48-48h153.4L432 134.6V352zM344 448c-4.422 0-8 3.594-8 8c0 22.06-17.94 40-40 40h-224c-30.88 0-56-25.12-56-56v-288c0-22.06 17.94-40 40-40C60.42 112 64 108.4 64 104S60.42 96 56 96C25.13 96 0 121.1 0 152v288C0 479.7 32.3 512 72 512h224c30.88 0 56-25.12 56-56C352 451.6 348.4 448 344 448z"/>
</>],

]);

const SimCards: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

SimCards.displayName = "SimCards";

export default SimCards;