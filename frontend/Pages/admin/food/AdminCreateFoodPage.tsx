import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import AccountManage from "@src/components/AccountManage";
import CartButton from "@src/components/CartButton";
import Header from "@src/components/Header";
import HomeButton from "@src/components/HomeButton";
import Topbar from "@src/components/Topbar";
import TopbarLeft from "@src/components/TopbarLeft";
import TopbarRight from "@src/components/TopbarRight";
import BaseLayout from "@src/layouts/BaseLayout";
import { useForm } from "react-hook-form";
import FoodFields from "@src/types/admin/FoodFields";
import foodValidator from "@src/validators/foodValidator";

import HeaderMenu from "@src/components/HeaderMenu";
import BreadcrumbLink from "@src/components/BreadcrumbLink";
import Messages from "@src/components/Messages";
import ButtonCircularProgress from "@src/components/ButtonCircularProgress";
import { usePage } from "@inertiajs/react";
import { Page } from "@inertiajs/inertia";


export default function AdminCategoryFoodPage() {


    const [isPending, setIsPending] = useState(false);

    const page = usePage<Page<{ categories: any[] }>>();

    const { categories } = page.props;

    const { register, handleSubmit, formState: { errors }, setValue } = useForm<FoodFields>({
        resolver: yupResolver(foodValidator)
    });

    const onSubmit = async (data: FoodFields) => {
        setIsPending(true);
        //TODO
        setIsPending(false);
    }

    return <>
        <BaseLayout title="Crea cibo">
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
                <ol className="flex h-16 flex-row space-x-2 items-center pl-8 text-white">
                    <li>
                        <BreadcrumbLink href="/amministrazione/cibi">
                            Cibi
                        </BreadcrumbLink>
                    </li>
                    <li>::</li>
                    <li>Crea cibo</li>
                </ol>
            </HeaderMenu>

            <div className="flex flex-col p-8 flex-grow">
                <Messages></Messages>
                <form className="flex-col space-y-2" onSubmit={handleSubmit(onSubmit)}>

                    <div className="w-1/3 flex flex-col space-y-2">
                        <label className="form-label">Nome</label>
                        <input type="text"
                            {...register("name")}
                            className={errors.name ? "text-input-invalid" : "text-input"} />
                        <div className="invalid-feedback">
                            {errors.name?.message}
                        </div>
                    </div>
                    <div className="w-1/3 flex flex-col space-y-2">
                        <label className="form-label">Ingredienti</label>
                        <textarea className="text-input" {...register("ingredients")}></textarea>
                    </div>
                    <div className="w-1/3 flex flex-col space-y-2">
                        <label className="form-label">Prezzo</label>
                        <input type="text"
                            {...register("price")}
                            className={errors.price ? "text-input-invalid" : "text-input"} />
                        <div className="invalid-feedback">
                            {errors.price?.message}
                        </div>
                    </div>
                    <div className="w-1/3 flex flex-col space-y-2">
                        <label className="form-label">Categoria</label>
                        <select {...register("category_id")}
                            className={errors.category_id ? "text-input-invalid" : "text-input"}>
                            {categories.map((cat: any) => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
                        </select>
                        <div className="invalid-feedback">
                            {errors.category_id?.message}
                        </div>
                    </div>

                    <div className="w-1/3 flex flex-col space-y-2 items-start">
                        <button type="submit" className="btn-success">
                            <ButtonCircularProgress isPending={isPending}></ButtonCircularProgress>
                            Crea
                        </button>
                    </div>
                </form>
            </div>
        </BaseLayout>
    </>
}
