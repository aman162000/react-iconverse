
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M219.4 64.69C226.1 62.64 233.4 65.26 237.3 71.13L272 123.2V80C272 71.16 279.2 64 288 64C296.8 64 304 71.16 304 80V176C304 183.1 299.4 189.3 292.6 191.3C285.9 193.4 278.6 190.7 274.7 184.9L240 132.8V176C240 184.8 232.8 192 224 192C215.2 192 208 184.8 208 176V80C208 72.95 212.6 66.73 219.4 64.69V64.69zM96 64C104.8 64 112 71.16 112 80V144C112 152.8 119.2 160 128 160C136.8 160 144 152.8 144 144V80C144 71.16 151.2 64 160 64C168.8 64 176 71.16 176 80V144C176 170.5 154.5 192 128 192C101.5 192 80 170.5 80 144V80C80 71.16 87.16 64 96 64V64z"/><path className="fa-secondary" d="M336 0C362.5 0 384 21.49 384 48V464C384 490.5 362.5 512 336 512H240V432C240 405.5 218.5 384 192 384C165.5 384 144 405.5 144 432V512H48C21.49 512 0 490.5 0 464V48C0 21.49 21.49 0 48 0H336zM64 272C64 280.8 71.16 288 80 288H112C120.8 288 128 280.8 128 272V240C128 231.2 120.8 224 112 224H80C71.16 224 64 231.2 64 240V272zM176 224C167.2 224 160 231.2 160 240V272C160 280.8 167.2 288 176 288H208C216.8 288 224 280.8 224 272V240C224 231.2 216.8 224 208 224H176zM256 272C256 280.8 263.2 288 272 288H304C312.8 288 320 280.8 320 272V240C320 231.2 312.8 224 304 224H272C263.2 224 256 231.2 256 240V272zM237.3 71.12C233.4 65.26 226.1 62.64 219.4 64.69C212.6 66.73 208 72.95 208 80V176C208 184.8 215.2 192 224 192C232.8 192 240 184.8 240 176V132.8L274.7 184.9C278.6 190.7 285.9 193.4 292.6 191.3C299.4 189.3 304 183.1 304 176V80C304 71.16 296.8 64 288 64C279.2 64 272 71.16 272 80V123.2L237.3 71.12zM112 80C112 71.16 104.8 64 96 64C87.16 64 80 71.16 80 80V144C80 170.5 101.5 192 128 192C154.5 192 176 170.5 176 144V80C176 71.16 168.8 64 160 64C151.2 64 144 71.16 144 80V144C144 152.8 136.8 160 128 160C119.2 160 112 152.8 112 144V80z"/>
</>],
['light',<>
	<path d="M296 224C309.3 224 320 234.7 320 248V296C320 309.3 309.3 320 296 320H248C234.7 320 224 309.3 224 296V248C224 234.7 234.7 224 248 224H296zM288 288V256H256V288H288zM64 248C64 234.7 74.75 224 88 224H136C149.3 224 160 234.7 160 248V296C160 309.3 149.3 320 136 320H88C74.75 320 64 309.3 64 296V248zM96 256V288H128V256H96zM272 123.2V80C272 71.16 279.2 64 288 64C296.8 64 304 71.16 304 80V176C304 183.1 299.4 189.3 292.6 191.3C285.9 193.4 278.6 190.7 274.7 184.9L240 132.8V176C240 184.8 232.8 192 224 192C215.2 192 208 184.8 208 176V80C208 72.95 212.6 66.73 219.4 64.69C226.1 62.64 233.4 65.26 237.3 71.12L272 123.2zM112 144C112 152.8 119.2 160 128 160C136.8 160 144 152.8 144 144V80C144 71.16 151.2 64 160 64C168.8 64 176 71.16 176 80V144C176 170.5 154.5 192 128 192C101.5 192 80 170.5 80 144V80C80 71.16 87.16 64 96 64C104.8 64 112 71.16 112 80V144zM64 512C28.65 512 0 483.3 0 448V64C0 28.65 28.65 0 64 0H320C355.3 0 384 28.65 384 64V448C384 483.3 355.3 512 320 512H64zM32 64V448C32 465.7 46.33 480 64 480H128V416C128 380.7 156.7 352 192 352C227.3 352 256 380.7 256 416V480H320C337.7 480 352 465.7 352 448V64C352 46.33 337.7 32 320 32H64C46.33 32 32 46.33 32 64zM224 416C224 398.3 209.7 384 192 384C174.3 384 160 398.3 160 416V480H224V416z"/>
</>],
['regular',<>
	<path d="M152 248C160.8 248 168 255.2 168 264V312C168 320.8 160.8 328 152 328H104C95.16 328 88 320.8 88 312V264C88 255.2 95.16 248 104 248H152zM216 264C216 255.2 223.2 248 232 248H280C288.8 248 296 255.2 296 264V312C296 320.8 288.8 328 280 328H232C223.2 328 216 320.8 216 312V264zM272 139.2V96C272 87.16 279.2 80 288 80C296.8 80 304 87.16 304 96V192C304 199.1 299.4 205.3 292.6 207.3C285.9 209.4 278.6 206.7 274.7 200.9L240 148.8V192C240 200.8 232.8 208 224 208C215.2 208 208 200.8 208 192V96C208 88.95 212.6 82.73 219.4 80.69C226.1 78.64 233.4 81.26 237.3 87.12L272 139.2zM112 160C112 168.8 119.2 176 128 176C136.8 176 144 168.8 144 160V96C144 87.16 151.2 80 160 80C168.8 80 176 87.16 176 96V160C176 186.5 154.5 208 128 208C101.5 208 80 186.5 80 160V96C80 87.16 87.16 80 96 80C104.8 80 112 87.16 112 96V160zM0 64C0 28.65 28.65 0 64 0H320C355.3 0 384 28.65 384 64V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64zM48 64V448C48 456.8 55.16 464 64 464H144V400C144 373.5 165.5 352 192 352C218.5 352 240 373.5 240 400V464H320C328.8 464 336 456.8 336 448V64C336 55.16 328.8 48 320 48H64C55.16 48 48 55.16 48 64z"/>
</>],
['solid',<>
	<path d="M336 0C362.5 0 384 21.49 384 48V464C384 490.5 362.5 512 336 512H240V432C240 405.5 218.5 384 192 384C165.5 384 144 405.5 144 432V512H48C21.49 512 0 490.5 0 464V48C0 21.49 21.49 0 48 0H336zM64 272C64 280.8 71.16 288 80 288H112C120.8 288 128 280.8 128 272V240C128 231.2 120.8 224 112 224H80C71.16 224 64 231.2 64 240V272zM176 224C167.2 224 160 231.2 160 240V272C160 280.8 167.2 288 176 288H208C216.8 288 224 280.8 224 272V240C224 231.2 216.8 224 208 224H176zM256 272C256 280.8 263.2 288 272 288H304C312.8 288 320 280.8 320 272V240C320 231.2 312.8 224 304 224H272C263.2 224 256 231.2 256 240V272zM237.3 71.12C233.4 65.26 226.1 62.64 219.4 64.69C212.6 66.73 208 72.95 208 80V176C208 184.8 215.2 192 224 192C232.8 192 240 184.8 240 176V132.8L274.7 184.9C278.6 190.7 285.9 193.4 292.6 191.3C299.4 189.3 304 183.1 304 176V80C304 71.16 296.8 64 288 64C279.2 64 272 71.16 272 80V123.2L237.3 71.12zM112 80C112 71.16 104.8 64 96 64C87.16 64 80 71.16 80 80V144C80 170.5 101.5 192 128 192C154.5 192 176 170.5 176 144V80C176 71.16 168.8 64 160 64C151.2 64 144 71.16 144 80V144C144 152.8 136.8 160 128 160C119.2 160 112 152.8 112 144V80z"/>
</>],
['thin',<>
	<path d="M136 232C149.3 232 160 242.7 160 256V288C160 301.3 149.3 312 136 312H104C90.75 312 80 301.3 80 288V256C80 242.7 90.75 232 104 232H136zM96 288C96 292.4 99.58 296 104 296H136C140.4 296 144 292.4 144 288V256C144 251.6 140.4 248 136 248H104C99.58 248 96 251.6 96 256V288zM224 256C224 242.7 234.7 232 248 232H280C293.3 232 304 242.7 304 256V288C304 301.3 293.3 312 280 312H248C234.7 312 224 301.3 224 288V256zM248 248C243.6 248 240 251.6 240 256V288C240 292.4 243.6 296 248 296H280C284.4 296 288 292.4 288 288V256C288 251.6 284.4 248 280 248H248zM280 133.6V64C280 59.58 283.6 56 288 56C292.4 56 296 59.58 296 64V160C296 163.5 293.7 166.6 290.3 167.7C286.9 168.7 283.3 167.4 281.3 164.4L232 90.42V160C232 164.4 228.4 168 224 168C219.6 168 216 164.4 216 160V64C216 60.47 218.3 57.36 221.7 56.34C225.1 55.32 228.7 56.63 230.7 59.56L280 133.6zM104 128C104 141.3 114.7 152 128 152C141.3 152 152 141.3 152 128V64C152 59.58 155.6 56 160 56C164.4 56 168 59.58 168 64V128C168 150.1 150.1 168 128 168C105.9 168 88 150.1 88 128V64C88 59.58 91.58 56 96 56C100.4 56 104 59.58 104 64V128zM48 512C21.49 512 0 490.5 0 464V48C0 21.49 21.49 0 48 0H336C362.5 0 384 21.49 384 48V464C384 490.5 362.5 512 336 512H48zM16 48V464C16 481.7 30.33 496 48 496H144V416C144 389.5 165.5 368 192 368C218.5 368 240 389.5 240 416V496H336C353.7 496 368 481.7 368 464V48C368 30.33 353.7 16 336 16H48C30.33 16 16 30.33 16 48zM224 496V416C224 398.3 209.7 384 192 384C174.3 384 160 398.3 160 416V496H224z"/>
</>],

]);

const BuildingUn: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

BuildingUn.displayName = "BuildingUn";

export default BuildingUn;