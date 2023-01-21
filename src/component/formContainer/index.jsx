import Loading from "../loading";
import appload from "../../assest/image/appload.png"
const FormContainer = ({header, children, classes, classContent, txtBtn, actionBtn, disabledBtn,icon}) => {
    return (

        <div className={`rounded-lg border border-black-250 ${classes}`}>
            <div className={'border-b border-black-250 py-2 px-4 flex justify-between items-center h-[48px]'}>
                <p>{header}</p>
                {
                    txtBtn && actionBtn &&
                    <button type={'button'} className={'flex items-center justify-center btn-cyan-around h-[32px]'}
                            onClick={actionBtn} disabled={disabledBtn}>
                        {txtBtn}
                        {disabledBtn && <Loading/>}
                        {icon && <img src={appload} alt={"appload"} className="mr-2"/>}
                    </button>
                }

            </div>
            <div className={`py-2 px-4 ${classContent}`}>
                {children}
            </div>
        </div>

    );
};

export default FormContainer;