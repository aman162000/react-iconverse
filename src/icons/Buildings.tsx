
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M256 80C256 71.16 263.2 64 272 64H304C312.8 64 320 71.16 320 80V112C320 120.8 312.8 128 304 128H272C263.2 128 256 120.8 256 112V80zM112 192C120.8 192 128 199.2 128 208V240C128 248.8 120.8 256 112 256H80C71.16 256 64 248.8 64 240V208C64 199.2 71.16 192 80 192H112zM272 320C263.2 320 256 312.8 256 304V272C256 263.2 263.2 256 272 256H304C312.8 256 320 263.2 320 272V304C320 312.8 312.8 320 304 320H272zM112 288C120.8 288 128 295.2 128 304V336C128 344.8 120.8 352 112 352H80C71.16 352 64 344.8 64 336V304C64 295.2 71.16 288 80 288H112zM384 272C384 263.2 391.2 256 400 256H432C440.8 256 448 263.2 448 272V304C448 312.8 440.8 320 432 320H400C391.2 320 384 312.8 384 304V272zM432 64C440.8 64 448 71.16 448 80V112C448 120.8 440.8 128 432 128H400C391.2 128 384 120.8 384 112V80C384 71.16 391.2 64 400 64H432zM256 176C256 167.2 263.2 160 272 160H304C312.8 160 320 167.2 320 176V208C320 216.8 312.8 224 304 224H272C263.2 224 256 216.8 256 208V176zM400 224C391.2 224 384 216.8 384 208V176C384 167.2 391.2 160 400 160H432C440.8 160 448 167.2 448 176V208C448 216.8 440.8 224 432 224H400z"/><path className="fa-secondary" d="M448 0C483.3 0 512 28.65 512 64V448C512 483.3 483.3 512 448 512H64C28.65 512 0 483.3 0 448V192C0 156.7 28.65 128 64 128H192V64C192 28.65 220.7 0 256 0H448zM64 336C64 344.8 71.16 352 80 352H112C120.8 352 128 344.8 128 336V304C128 295.2 120.8 288 112 288H80C71.16 288 64 295.2 64 304V336zM304 320C312.8 320 320 312.8 320 304V272C320 263.2 312.8 256 304 256H272C263.2 256 256 263.2 256 272V304C256 312.8 263.2 320 272 320H304zM384 304C384 312.8 391.2 320 400 320H432C440.8 320 448 312.8 448 304V272C448 263.2 440.8 256 432 256H400C391.2 256 384 263.2 384 272V304zM80 192C71.16 192 64 199.2 64 208V240C64 248.8 71.16 256 80 256H112C120.8 256 128 248.8 128 240V208C128 199.2 120.8 192 112 192H80zM256 112C256 120.8 263.2 128 272 128H304C312.8 128 320 120.8 320 112V80C320 71.16 312.8 64 304 64H272C263.2 64 256 71.16 256 80V112zM400 64C391.2 64 384 71.16 384 80V112C384 120.8 391.2 128 400 128H432C440.8 128 448 120.8 448 112V80C448 71.16 440.8 64 432 64H400zM256 208C256 216.8 263.2 224 272 224H304C312.8 224 320 216.8 320 208V176C320 167.2 312.8 160 304 160H272C263.2 160 256 167.2 256 176V208zM432 224C440.8 224 448 216.8 448 208V176C448 167.2 440.8 160 432 160H400C391.2 160 384 167.2 384 176V208C384 216.8 391.2 224 400 224H432z"/>
</>],
['light',<>
	<path d="M320 344C320 330.7 330.7 320 344 320H392C405.3 320 416 330.7 416 344V392C416 405.3 405.3 416 392 416H344C330.7 416 320 405.3 320 392V344zM384 384V352H352V384H384zM320 88C320 74.75 330.7 64 344 64H392C405.3 64 416 74.75 416 88V136C416 149.3 405.3 160 392 160H344C330.7 160 320 149.3 320 136V88zM352 96V128H384V96H352zM344 288C330.7 288 320 277.3 320 264V216C320 202.7 330.7 192 344 192H392C405.3 192 416 202.7 416 216V264C416 277.3 405.3 288 392 288H344zM352 224V256H384V224H352zM448 0C483.3 0 512 28.65 512 64V448C512 483.3 483.3 512 448 512H288C252.7 512 224 483.3 224 448V64C224 28.65 252.7 0 288 0H448zM448 32H288C270.3 32 256 46.33 256 64V448C256 465.7 270.3 480 288 480H448C465.7 480 480 465.7 480 448V64C480 46.33 465.7 32 448 32zM176 160H64C46.33 160 32 174.3 32 192V448C32 465.7 46.33 480 64 480H192C200.8 480 208 487.2 208 496C208 504.8 200.8 512 192 512H64C28.65 512 0 483.3 0 448V192C0 156.7 28.65 128 64 128H176C184.8 128 192 135.2 192 144C192 152.8 184.8 160 176 160zM136 320C149.3 320 160 330.7 160 344V392C160 405.3 149.3 416 136 416H88C74.75 416 64 405.3 64 392V344C64 330.7 74.75 320 88 320H136zM128 384V352H96V384H128zM136 192C149.3 192 160 202.7 160 216V264C160 277.3 149.3 288 136 288H88C74.75 288 64 277.3 64 264V216C64 202.7 74.75 192 88 192H136zM128 256V224H96V256H128z"/>
</>],
['regular',<>
	<path d="M336 304C336 295.2 343.2 288 352 288H384C392.8 288 400 295.2 400 304V336C400 344.8 392.8 352 384 352H352C343.2 352 336 344.8 336 336V304zM336 112C336 103.2 343.2 96 352 96H384C392.8 96 400 103.2 400 112V144C400 152.8 392.8 160 384 160H352C343.2 160 336 152.8 336 144V112zM352 256C343.2 256 336 248.8 336 240V208C336 199.2 343.2 192 352 192H384C392.8 192 400 199.2 400 208V240C400 248.8 392.8 256 384 256H352zM448 0C483.3 0 512 28.65 512 64V448C512 483.3 483.3 512 448 512H288C252.7 512 224 483.3 224 448V64C224 28.65 252.7 0 288 0H448zM448 48H288C279.2 48 272 55.16 272 64V448C272 456.8 279.2 464 288 464H448C456.8 464 464 456.8 464 448V64C464 55.16 456.8 48 448 48zM192 176H72C58.75 176 48 186.7 48 200V440C48 453.3 58.75 464 72 464H193.3C196.4 482.3 204.6 498.8 216.4 512H72C32.24 512 0 479.8 0 440V200C0 160.2 32.24 128 72 128H192V176zM144 320C152.8 320 160 327.2 160 336V368C160 376.8 152.8 384 144 384H112C103.2 384 96 376.8 96 368V336C96 327.2 103.2 320 112 320H144zM144 224C152.8 224 160 231.2 160 240V272C160 280.8 152.8 288 144 288H112C103.2 288 96 280.8 96 272V240C96 231.2 103.2 224 112 224H144z"/>
</>],
['solid',<>
	<path d="M448 0C483.3 0 512 28.65 512 64V448C512 483.3 483.3 512 448 512H64C28.65 512 0 483.3 0 448V192C0 156.7 28.65 128 64 128H192V64C192 28.65 220.7 0 256 0H448zM64 336C64 344.8 71.16 352 80 352H112C120.8 352 128 344.8 128 336V304C128 295.2 120.8 288 112 288H80C71.16 288 64 295.2 64 304V336zM304 320C312.8 320 320 312.8 320 304V272C320 263.2 312.8 256 304 256H272C263.2 256 256 263.2 256 272V304C256 312.8 263.2 320 272 320H304zM384 304C384 312.8 391.2 320 400 320H432C440.8 320 448 312.8 448 304V272C448 263.2 440.8 256 432 256H400C391.2 256 384 263.2 384 272V304zM80 192C71.16 192 64 199.2 64 208V240C64 248.8 71.16 256 80 256H112C120.8 256 128 248.8 128 240V208C128 199.2 120.8 192 112 192H80zM256 112C256 120.8 263.2 128 272 128H304C312.8 128 320 120.8 320 112V80C320 71.16 312.8 64 304 64H272C263.2 64 256 71.16 256 80V112zM400 64C391.2 64 384 71.16 384 80V112C384 120.8 391.2 128 400 128H432C440.8 128 448 120.8 448 112V80C448 71.16 440.8 64 432 64H400zM256 208C256 216.8 263.2 224 272 224H304C312.8 224 320 216.8 320 208V176C320 167.2 312.8 160 304 160H272C263.2 160 256 167.2 256 176V208zM432 224C440.8 224 448 216.8 448 208V176C448 167.2 440.8 160 432 160H400C391.2 160 384 167.2 384 176V208C384 216.8 391.2 224 400 224H432z"/>
</>],
['thin',<>
	<path d="M368 344C368 330.7 378.7 320 392 320H424C437.3 320 448 330.7 448 344V376C448 389.3 437.3 400 424 400H392C378.7 400 368 389.3 368 376V344zM424 384C428.4 384 432 380.4 432 376V344C432 339.6 428.4 336 424 336H392C387.6 336 384 339.6 384 344V376C384 380.4 387.6 384 392 384H424zM392 272C378.7 272 368 261.3 368 248V216C368 202.7 378.7 192 392 192H424C437.3 192 448 202.7 448 216V248C448 261.3 437.3 272 424 272H392zM384 248C384 252.4 387.6 256 392 256H424C428.4 256 432 252.4 432 248V216C432 211.6 428.4 208 424 208H392C387.6 208 384 211.6 384 216V248zM256 344C256 330.7 266.7 320 280 320H312C325.3 320 336 330.7 336 344V376C336 389.3 325.3 400 312 400H280C266.7 400 256 389.3 256 376V344zM312 384C316.4 384 320 380.4 320 376V344C320 339.6 316.4 336 312 336H280C275.6 336 272 339.6 272 344V376C272 380.4 275.6 384 280 384H312zM312 72C325.3 72 336 82.75 336 96V128C336 141.3 325.3 152 312 152H280C266.7 152 256 141.3 256 128V96C256 82.75 266.7 72 280 72H312zM272 128C272 132.4 275.6 136 280 136H312C316.4 136 320 132.4 320 128V96C320 91.58 316.4 88 312 88H280C275.6 88 272 91.58 272 96V128zM256 216C256 202.7 266.7 192 280 192H312C325.3 192 336 202.7 336 216V248C336 261.3 325.3 272 312 272H280C266.7 272 256 261.3 256 248V216zM312 256C316.4 256 320 252.4 320 248V216C320 211.6 316.4 208 312 208H280C275.6 208 272 211.6 272 216V248C272 252.4 275.6 256 280 256H312zM424 72C437.3 72 448 82.75 448 96V128C448 141.3 437.3 152 424 152H392C378.7 152 368 141.3 368 128V96C368 82.75 378.7 72 392 72H424zM384 128C384 132.4 387.6 136 392 136H424C428.4 136 432 132.4 432 128V96C432 91.58 428.4 88 424 88H392C387.6 88 384 91.58 384 96V128zM192 64C192 28.65 220.7 0 256 0H448C483.3 0 512 28.65 512 64V448C512 483.3 483.3 512 448 512H256C220.7 512 192 483.3 192 448V64zM208 64V448C208 474.5 229.5 496 256 496H448C474.5 496 496 474.5 496 448V64C496 37.49 474.5 16 448 16H256C229.5 16 208 37.49 208 64zM160 128C164.4 128 168 131.6 168 136C168 140.4 164.4 144 160 144H56C33.91 144 16 161.9 16 184V456C16 478.1 33.91 496 56 496H176C180.4 496 184 499.6 184 504C184 508.4 180.4 512 176 512H56C25.07 512 0 486.9 0 456V184C0 153.1 25.07 128 56 128H160zM64 344C64 330.7 74.75 320 88 320H120C133.3 320 144 330.7 144 344V376C144 389.3 133.3 400 120 400H88C74.75 400 64 389.3 64 376V344zM88 336C83.58 336 80 339.6 80 344V376C80 380.4 83.58 384 88 384H120C124.4 384 128 380.4 128 376V344C128 339.6 124.4 336 120 336H88zM120 192C133.3 192 144 202.7 144 216V248C144 261.3 133.3 272 120 272H88C74.75 272 64 261.3 64 248V216C64 202.7 74.75 192 88 192H120zM80 248C80 252.4 83.58 256 88 256H120C124.4 256 128 252.4 128 248V216C128 211.6 124.4 208 120 208H88C83.58 208 80 211.6 80 216V248z"/>
</>],

]);

const Buildings: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Buildings.displayName = "Buildings";

export default Buildings;