import AccountManage from "@src/components/AccountManage";
import CartButton from "@src/components/CartButton";
import Header from "@src/components/Header";
import Messages from "@src/components/Messages";
import Topbar from "@src/components/Topbar";
import TopbarLeft from "@src/components/TopbarLeft";
import TopbarRight from "@src/components/TopbarRight";
import BaseLayout from "@src/layouts/BaseLayout";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import ResetPasswordFields from "@src/types/ResetPasswordFields";
import HomeButton from "@src/components/HomeButton";
import resetPasswordValidator from "@src/validators/resetPasswordValidator";
import HeaderMenu from "@src/components/HeaderMenu";
import BreadcrumbLink from "@src/components/BreadcrumbLink";
import { useState } from "react";
import ButtonCircularProgress from "@src/components/ButtonCircularProgress";

export default function ResetPasswordPage() {

    const { register, handleSubmit, formState: { errors, isValid } } = useForm<ResetPasswordFields>({
        resolver: yupResolver(resetPasswordValidator),
        defaultValues: {
            source: "web"
        }
    });

    const [isPending, setIsPending] = useState(false);


    const onSubmit = async (data: ResetPasswordFields) => {

        setIsPending(true)

        //TODO


    }
    return <>
        <BaseLayout title='Recupera password'>
            <Topbar>
                <TopbarLeft>
                    <HomeButton></HomeButton>
                </TopbarLeft>
                <TopbarRight>
                    <CartButton></CartButton>
                    <AccountManage></AccountManage>
                </TopbarRight>
            </Topbar>
            <Header></Header>
            <HeaderMenu>
                <ol className="flex flex-row space-x-2 items-center pl-8 text-white h-16">
                    <li>
                        <BreadcrumbLink href="/account/login">
                            Profilo
                        </BreadcrumbLink>
                    </li>
                    <li>::</li>
                    <li>Reset password</li>
                </ol>
            </HeaderMenu>

            <div className='p-8'>
                <Messages></Messages>
                <form className="w-full md:p-0 md:w-1/2 lg:w-1/3 flex flex-col space-y-2" onSubmit={handleSubmit(onSubmit)}>

                    <div className="flex flex-col space-y-2">
                        <label className="form-label">Email</label>
                        <input type="text"
                            {...register("email")}
                            className={errors.email ? "text-input-invalid" : "text-input"} />
                        <div className="invalid-feedback">
                            {errors.email?.message}
                        </div>
                    </div>
                    <div className="flex flex-row space-x-2">
                        <button disabled={!isValid} type="submit" className="btn-primary">
                            <ButtonCircularProgress isPending={isPending}></ButtonCircularProgress>
                            <span>Reset password</span>
                        </button>
                    </div>
                </form>
            </div>
        </BaseLayout>
    </>
}

