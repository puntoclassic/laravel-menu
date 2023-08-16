import { yupResolver } from "@hookform/resolvers/yup";
import AccountManage from "@react-src/components/AccountManage";
import CartButton from "@react-src/components/CartButton";
import Header from "@react-src/components/Header";
import HomeButton from "@react-src/components/HomeButton";
import Topbar from "@react-src/components/Topbar";
import TopbarLeft from "@react-src/components/TopbarLeft";
import TopbarRight from "@react-src/components/TopbarRight";
import BaseLayout from "@react-src/layouts/BaseLayout";
import { useForm } from "react-hook-form";
import HeaderMenu from "@react-src/components/HeaderMenu";
import BreadcrumbLink from "@react-src/components/BreadcrumbLink";
import { router, usePage } from "@inertiajs/react";
import { CartState, DeliveryTypeFields, Settings, } from "@react-src/types";
import route from "ziggy-js";
import { tipologiaConsegnaValidator } from "@react-src/validators";


export default function TipologiaConsegnaPage() {

    const page = usePage<{ settings: Settings, cart: CartState }>();
    const { cart } = page.props;

    const { register, handleSubmit, formState: { errors } } = useForm<DeliveryTypeFields>({
        resolver: yupResolver(tipologiaConsegnaValidator),
        defaultValues: {
            delivery_type: cart.delivery_type
        }
    });

    const onSubmit = (data: DeliveryTypeFields) => {
        router.post(route("checkout.step1"), data);
    }

    return <>
        <BaseLayout title="Tipologia di consegna">

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
                    <BreadcrumbLink href={route("cart.show")}>
                        Carrello
                    </BreadcrumbLink>
                    <li>::</li>
                    <li>1. Tipologia consegna</li>
                </ol>
            </HeaderMenu>
            <div className="p-8">
                <div className="flex flex-col flex-grow space-y-4">
                    <div className="w-full md:w-1/2">
                        <form className="w-full m-0 flex flex-col space-y-2" onSubmit={handleSubmit(onSubmit)}>
                            <h5 className="font-semibold text-lg  border-b-slate-300 border-b-2 pb-2">1. Consegna ordine</h5>
                            <p>Scegli il modo in cui vuoi ricevere il tuo ordine</p>
                            <select {...register("delivery_type")}
                                className={errors.delivery_type ? "text-input-invalid" : "text-input"}>
                                <option value="ASPORTO">Asporto</option>
                                <option value="DOMICILIO">A domicilio</option>
                            </select>
                            <div className="invalid-feedback">
                                {errors.delivery_type?.message}
                            </div>
                            <div className="w-full">
                                <button type="submit" className="btn-secondary-outlined w-20 h-10">Vai</button>
                            </div>
                        </form>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h5 className="font-semibold text-lg border-b-slate-300 border-b-2 pb-2">2. Indirizzo e orario</h5>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h5 className="font-semibold text-lg border-b-slate-300 border-b-2 pb-2">3. Riepilogo</h5>
                    </div>
                </div>
            </div>
        </BaseLayout>
    </>
}